//import model
import Url from '../models/url.js'

const redirect = async (req,res) => {

    if(!req.params.code) {
        res.json({"message": "No code found"})
    }

    const code = req.params.code

    // [
    //     {
            
    //     },
    //     {

    //     }
    // ]
    // [
    //     {
    //         "date": "27th May",
    //         "clicks": 5
    //     },
    //     {
    //         "date": "28th May",
    //         "clicks": 5
    //     },
    //     {
    //         "date": "29th May",
    //         "clicks": 0
    //     }
    // ]

    

    try {
        const url = await Url.findOne({ code })

        if(!url) {
            return res.redirect('http://localhost:3000/error')
        }
        
        if(url.longUrl) {

            await Url.updateOne(
                {code: url.code}, 
                {
                    $inc: {clicks: 1}
                }
            )

            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            const currentDate = new Date();
            const key = currentDate.toLocaleDateString("en-US", options)

            const check = await Url.updateOne(
                {code: url.code, "analytics.date": key},
                {
                    $inc: {
                        "analytics.$.clicks": 1
                    }
                }
            )

            console.log(check.modifiedCount)
            
            if(!check.modifiedCount) {

                await Url.updateOne(
                    {code: url.code}, 
                    {
                        $push: {
                            analytics: {
                                "date": key,
                                "clicks": 1
                            }
                        }
                        
                    }
                )   
            }      

            return res.redirect(url.longUrl)
        }
        
    }
    catch (err) {
        res.status(500).json({"message": err.message})
    }
}

export default redirect