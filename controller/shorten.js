import shortid from 'shortid'
import validUrl from 'valid-url'
import Url from '../models/url.js'

const shorten = async (req,res) => {

    if(!req.body) {
        return res.status(404).json({"message": "No url found"})
    }  

    const {longUrl} = req.body
    console.log(longUrl)

    if(!validUrl.isUri(longUrl)) {
        return res.status(400).json({"message": "Invalid url"})
    }

    try {

        console.log('yo')

        const url = await Url.findOne({longUrl})

        if(url) {
            return res.json({"shortUrl": url.shortUrl})
        }

        const code = shortid.generate()
        const baseUrl = process.env.BASE_URL
        const shortUrl = baseUrl + '/' + code
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

export default shorten