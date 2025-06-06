import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooseaggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoScema = new Schema({
    videofile:{
        type: String,
        required: true,
    },
    thubbnail:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
        trim: true,
        index: true, // Indexing for faster search
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    category:{
        type: String,
        required: true,
        trim: true,
    },
    duration:{
        type: Number,
        required: true,
    },
    views:{
        type: Number,
        default: 0,
    },
    isPublished:{
        type: Boolean,
        default: true,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {timestamps: true});
videoScema.plugin(mongooseaggregatePaginate);
// Adding a compound index for faster search on title and category


export  const Video = mongoose.model("Video", videoScema);