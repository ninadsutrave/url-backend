import Url from '../models/url.js'

const searchCode = async (req,res) => {

    if(!req.query) {
        return res.status(404).json({"message": "No search item found"})
    }  

    const searchItem = req.query.searchItem

    var isValidCode = /^[a-zA-Z0-9-_]+$/;
    if (searchItem.search(isValidCode) === -1) { 
        return res.json({"message": "Reserved"})
    }

    try {

        console.log('yo')
        const url = await Url.findOne({code: searchItem})

        if(url) {
            return res.json({"message": "Reserved"})
        }
        res.json({"message": "Available"})
    }
    catch (err) {
        
        res.status(500).json({"message": err.message})
    }
}

export default searchCode