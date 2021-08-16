const User = require('../../models/User');
const { AuthenticationError, UserInputError } = require('apollo-server');
const { validateRegisterInput, validateLoginInput } = require('../../utils/validators');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY || "some secret key here";

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
}

module.exports = {
  Mutation: {	
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const user = await User.findOne({ username });

      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong crendetials';
        throw new UserInputError('Wrong crendetials', { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token
      };
    },
    async register(_, { user: { username, firstname, lastname, password, confirmPassword } }) {
	// Validate user data
	const { valid, errors } = validateRegisterInput(
		username,
		firstname,
		lastname,
		password,
		confirmPassword
	);
	if (!valid) {
		throw new UserInputError('Errors', { errors });
	}

	const user = await User.findOne({ username });
	if (user) {
		throw new UserInputError('Username is taken', {
		errors: {
			username: 'This username is taken'
		}
		});
	}

	password = await bcrypt.hash(password, 12);

	const newUser = new User({
		username,
		firstname,
		lastname,
		password
	});

	try{
		const res = await newUser.save();
	}catch(err){
		throw new Error(err);
	}

	const token = generateToken(res);

	return {
		...res._doc,
		id: res._id,
		token
	};
	
    }
  }
};