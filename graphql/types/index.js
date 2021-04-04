import { mergeTypes } from "merge-graphql-schemas";

import User from './user';
import Testimonal from './testimonal';
import Ebook from './ebook';
import Blog from './blog';
import EmbedVideo from './embed-video';
import Ppt from './ppt';
import Template from './template';
import File from './fileupload';

const typeDefs = [User, Testimonal, Ebook, Blog, EmbedVideo, Ppt, Template ];


export default mergeTypes(typeDefs, {all: true});