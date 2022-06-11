import validUrl from 'valid-url'
import Url from '../models/url.js'

const createLink = async (req,res) => {

    if(!req.body) {
        return res.status(404).json({"message": "No url found"})
    }  

    console.log(req.body)

    const {longUrl} = req.body
    const {code} = req.body

    if(!validUrl.isUri(longUrl)) {
        return res.status(400).json({"message": "Invalid url"})
    }

    try {

        console.log('yo')

        const url = await Url.findOne({longUrl})

        if(url) {
            return res.json({"shortUrl": url.shortUrl})
        } 
        
        const shortUrl = process.env.BASE_URL + '/' + code
        const clicks = 0

        const urlData = new Url({
            code,
            longUrl,
            shortUrl,
            clicks,
            date: (new Date()).toString()
        })

        await urlData.save()
        res.json({"shortUrl": shortUrl})
    }
    catch (err) {
        
        res.status(500).json({"message": err.message})
    }
}

export default createLink