const { gql } = require('apollo-server');

module.exports = gql`
  type Story {
   id: ID!
   title: String!
   author: String!
   content: String!
   thumbnail: String! 
  }
  type User {
    id: ID!
    username: String!
    firstname: String!
    lastname: String!
    token: String!
  }
  input UserInput {
    username: String!
    firstname: String!
    lastname: String!
    password: String!
    confirmPassword: String!
  }
  input StoryInput {
    title: String!
    author: String!
    content: String!
    thumbnail: String!
  }
  type Query {
    getAllStories: [Story]
    getStory(storyId: ID!): Story
  }
  type Mutation {
    register(user: UserInput!): User!
    login(username: String!, password: String!): User!
    createStory(storyInput: StoryInput!): Story!
  }
  # type Subscription {
  #   newPost: Post!
  # }
`;