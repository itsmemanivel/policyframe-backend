import EmbedVideo from "../../models/embed-video"

export default {


    Query: {

        getEmbedVideo: async (parent, {_id}, context, info ) => {
            return await EmbedVideo.findOne({_id}).exec();
        },
        getEmbedVideos: async(parent, args, context, info) => {
           
            const embedVideos = await EmbedVideo.find({})
            .populate()
            .exec();

            return embedVideos;


        }
    },

    Mutation: {

        addEmbedVideo: async (parent, { author, title, content,image, description, category, tags, createdtime }, context, info) =>{

            const newEmbedVideo = await new  EmbedVideo ({ 

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
                 newEmbedVideo.save((err, res) =>{
                     err ? reject(err) : resolve(res);
                 });
             });

        },

        deleteEmbedVideo: async (parent, {_id}, context, info) =>{

            await EmbedVideo.findByIdAndRemove(_id);
            return " EmbedVideo deleted";

        }
    }
}