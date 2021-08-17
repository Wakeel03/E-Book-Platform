const Story = require('../../models/Story')

module.exports = {
	Query: {
		async getAllStories(){
			return await Story.find({});
		},
		async getStory(_, { storyId }) {
			return await Story.findById(storyId);
		}
	},
	
	Mutation: {
		async createStory(_, {storyInput: {title, author, content, thumbnail}}) {
			const story = await Story.create({title, author, content, thumbnail});
			const res = await story.save();
			return res;
		}
	}
}