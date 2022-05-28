import validUrl from 'valid-url'
import Url from '../models/url.js'

const getAnalytics = async (req,res) => {

    if(!req.body) {
        return res.status(404).json({"message": "No url found"})
    }  
    
    console.log(req.body)
    const {shortUrl} = req.body
    

    if(!validUrl.isUri(shortUrl)) {
        return res.status(400).json({"message": "Invalid url"})
    }

    try {

        const url = await Url.findOne({shortUrl})
        if(url) {
            return res.json({"analytics": url.analytics})
        }
        res.status(404).json({"message": "No url found"})
        
    }
    catch (err) {
        
        res.status(500).json({"message": err.message})
    }
}

export default getAnalytics