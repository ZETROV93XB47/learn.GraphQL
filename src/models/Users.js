import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema({
    id: Number,
    email: String,
    age: Number,
    password: String,
    firstName: String,
    lastName: String, 
    gender: String,
    phone: String,
    address: String
}, {collection: 'Users'})

export const Users = mongoose.model('Users',UsersSchema)