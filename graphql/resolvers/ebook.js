import Ebook from "../../models/ebook";

export default {


    Query: {

        getEbook: async (parent, {_id}, context, info ) => {
            return await Ebook.findOne({_id}).exec();
        },
        getEbooks: async(parent, args, context, info) => {
           
            const ebooks = await Ebook.find({})
            .populate()
            .exec();

            return ebooks;


        }
    },

    Mutation: {

        addEbook: async (parent, { author, title, content,  image, description, category, tags, createdtime }, context, info) =>{

            const newEbook = await new  Ebook ({ 

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
                 newEbook.save((err, res) =>{
                     err ? reject(err) : resolve(res);
                 });
             });

        },

        deleteEbook: async (parent, {_id}, context, info) =>{

            await Ebook.findByIdAndRemove(_id);
            return " Ebook deleted";

        }
    }
}