import mongoose from 'mongoose'

const CommentsSchema = new mongoose.Schema({
    id: Number,
    author: Object,
    content: String,
    createdAt: Date,
    post: Object
}, {collection: 'Comments'})

export const Users = mongoose.model('Comments',CommentsSchema)