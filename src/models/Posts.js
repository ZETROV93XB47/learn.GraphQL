import mongoose from 'mongoose'

const PostsSchema = new mongoose.Schema({
    id: Number,
    author: Object,
    content: String,
    createdAt: Date
}, {collection: 'Posts'})

export const Users = mongoose.model('Posts',PostsSchema)