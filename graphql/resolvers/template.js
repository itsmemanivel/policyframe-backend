import Template from "../../models/template"

export default {


    Query: {

        getTemplate: async (parent, {_id}, context, info ) => {
            return await Template.findOne({_id}).exec();
        },
        getTemplates: async(parent, args, context, info) => {
           
            const templates = await Template.find({})
            .populate()
            .exec();

            return templates;


        }
    },

    Mutation: {

        addTemplate: async (parent, { author, title, content,  image, description, category, tags, createdtime }, context, info) =>{

            const newTemplate = await new  Template ({ 

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
                 newTemplate.save((err, res) =>{
                     err ? reject(err) : resolve(res);
                 });
             });

        },

        deleteTemplate: async (parent, {_id}, context, info) =>{

            await Template.findByIdAndRemove(_id);
            return " Template deleted";

        }
    }
}