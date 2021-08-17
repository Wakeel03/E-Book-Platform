const mongoose = require('mongoose')

const StorySchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author:  {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	thumbnail: {
		type: String,
		required: true
	}
}, {
	timestamps: true
})

module.exports = mongoose.model('Story', StorySchema);