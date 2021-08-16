const userResolvers = require('./users');
const storyResolvers = require('./story');

module.exports = {
//   Post: {
//     likeCount: (parent) => parent.likes.length,
//     commentCount: (parent) => parent.comments.length
//   },
  Query: {
//     ...postsResolvers.Query
      ...storyResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...storyResolvers.Mutation
  },
//   Subscription: {
//     ...postsResolvers.Subscription
//   }
};