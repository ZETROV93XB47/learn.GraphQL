import {Users} from './models/Users'
import {Posts} from './models/Posts'
import {Comments} from './models/Comments'


const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
        },
    ];


export const resolvers = {
    

    Query:{

        hello: ()=> "Hello Guys",

        getAllComments: ()=>{

        },
        getAllUsers: ()=> {
            Users.find({}, function(err, docs){
                console.log(docs);
                return docs;
            });
        },

        getAllPosts: ()=>{

        }

    }

}
