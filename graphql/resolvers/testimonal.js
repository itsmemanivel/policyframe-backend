import Testimonal from "../../models/testimonal"

export default {


    Query: {
        
        getTestimonals: async(parent, args, context, info) => {
           
            const testimonals = await Testimonal.find({})
            .populate()
            .exec();

            return testimonals;


        }
    },

    Mutation: {

        addTestimonal: async (parent, { author, content, description,  image, createdtime }, context, info) =>{

            const newTestimonal = await new  Testimonal ({ 

                author,
                content,
                description,
                image,
                createdtime

             });

             return new Promise((resolve, reject) =>{
                 newTestimonal.save((err, res) =>{
                     err ? reject(err) : resolve(res);
                 });
             });

        },

        deleteTestimonal: async (parent, {_id}, context, info) =>{

            await Testimonal.findByIdAndRemove(_id);
            return " Testimonal deleted";

        }
    }
}