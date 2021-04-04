import Ppt from "../../models/ppt";

export default {


    Query: {

        getPpt: async (parent, {_id}, context, info ) => {
            return await Ppt.findOne({_id}).exec();
        },
        getPpts: async(parent, args, context, info) => {
           
            const ppts = await Ppt.find({})
            .populate()
            .exec();

            return ppts;


        }
    },

    Mutation: {

        addPpt: async (parent, { author, title, content,  image, description, category, tags, createdtime }, context, info) =>{

            const newPpt = await new  Ppt ({ 

                author,
                title,
                content,
                image,
                description,
                category,
                tags,
                createdtime

             });

             return new Promise((resolve, reject) =>{
                 newPpt.save((err, res) =>{
                     err ? reject(err) : resolve(res);
                 });
             });

        },

        deletePpt: async (parent, {_id}, context, info) =>{

            await Ppt.findByIdAndRemove(_id);
            return " Ppt deleted";

        }
    }
}