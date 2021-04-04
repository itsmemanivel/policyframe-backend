import User from "../../models/user"

export default {


    Query: {
        getUser: async (parent, {_id}, context, info ) => {
            return await User.findOne({_id}).exec();
        },
         getUserByEmail: async (parent, {email}, context, info ) => {
            return await User.findOne({email}).exec();
        },

        getUsers: async(parent, args, context, info) => {
            const users = await User.find({})
            .populate()
            .exec();
            return users;


        }
    },

    Mutation: {

        addUser: async (parent, { username, email, password, image, role, createdtime }, context, info) =>{

            const newUser = await new  User ({ 

                username,
                email,
                password,
                image,
                role,
                createdtime

             });

             return new Promise((resolve, reject) =>{
                 newUser.save((err, res) =>{
                     err ? reject(err) : resolve(res);
                 });
             });

        },

        deleteUser: async (parent, {_id}, context, info) =>{

            await User.findByIdAndRemove(_id);
            return " User deleted";

        }
    }
}