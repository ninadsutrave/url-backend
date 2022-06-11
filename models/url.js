import mongoose from "mongoose"

const Schema = mongoose.Schema

const UrlSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    analytics: {
        type: Array,
        required: true,
        default: []
    }, 
    date: {
        type: String,
        required: true,
        default: Date.now
    }
})

const Url = mongoose.model("url", UrlSchema)

export default Url