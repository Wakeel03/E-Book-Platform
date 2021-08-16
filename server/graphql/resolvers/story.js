const Story = require('../../models/Story')

module.exports = {
	Query: {
		async getStory(_, { storyId }) {
			console.log(storyId)
			return await Story.findById(storyId);
		}
	},
	
	Mutation: {
		async createStory(_, {storyInput: {title, author, content}}) {
			const story = await Story.create({title, author, content});
			const res = await story.save();
			return res;
		}
	}
}