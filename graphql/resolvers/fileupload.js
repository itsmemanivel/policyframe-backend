import File from "../../models/filemodel";
import shortid from "shortid";

import { createWriteStream, mkdir } from "fs";



const storeUpload = async ({ stream, filename, mimetype}) =>{

    const id = shortid.generate();
    const path = `images/${id}-${filename}`;

    return new Promise((resolve, reject) =>{
    
        stream 
         .pipe(createWriteStream(path))
         .on("finish",()=> resolve({ id, path, filename, mimetype }))
         .on("error", reject)
    });
};

const processUpload = async upload =>{

    const {createReadStream, filename, mimetype} = await upload;
    const  stream = createReadStream();
    const file = await storeUpload({stream, filename, mimetype});
    return file;

}

export default {

    Query: {
        uploads:  (parent, args) =>{},
    },

    Mutation:{
        singleUpload: async (parent, {file},args) => {
    
            mkdir("images", {recursive:true}, err =>{
                if(err) throw err;
            });
        //    return args.file.then(file => {
        //        return file;
            
        //     })

        const upload = await processUpload(file);
        await File.create(upload);
        return upload;
        }
    }
}