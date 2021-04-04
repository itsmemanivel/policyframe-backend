import Blog from "../../models/blog"

export default {


    Query: {

        getBlog: async (parent, {_id}, context, info ) => {
            return await Blog.findOne({_id}).exec();
        },
        getBlogs: async(parent, args, context, info) => {
           
            const blogs = await Blog.find({})
            .populate()
            .exec();

            return blogs;


        }
    },

    Mutation: {

        addBlog: async (parent, { author, title, content,  image, description, category, tags, createdtime }, context, info) =>{

            const newBlog = await new  Blog ({ 

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
                 newBlog.save((err, res) =>{
                     err ? reject(err) : resolve(res);
                 });
             });

        },

        deleteBlog: async (parent, {_id}, context, info) =>{

            await Blog.findByIdAndRemove(_id);
            return " Blog deleted";

        }
    }
}