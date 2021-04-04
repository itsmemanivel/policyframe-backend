import { mergeResolvers } from "merge-graphql-schemas";


import User from './user';
import Testimonal from './testimonal';
import Ebook from './ebook';
import EmbedVideo from './embed-video';
import Ppt from './ppt';
import Template from './template';
import Blog from './blog';
import File from './fileupload';

const resolvers = [User, Testimonal, Ebook, EmbedVideo, Ppt, Template, Blog];

export default mergeResolvers(resolvers)