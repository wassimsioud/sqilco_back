const HTML = require('../models/BlogContentModel')


module.exports = {
    getHTML : async(req, res)=>{
        try{
            const id = req.params['id']
            const html = await HTML.findById(id);
            res.json(html);
        }
        catch(error){
            res.status(500).json({message:'Error getting HTML data'})
        }
    },
}