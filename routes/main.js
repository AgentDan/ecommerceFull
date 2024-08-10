const {Router} = require("express")
const router = Router()
const Blog = require('./../models/Blog')
const multer = require("multer")
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storage})

router.get('/', async (request, response) => {
    let blog = await Blog.find()
    response.json(blog)
})

router.post("/addblog", async (req, res) => {
    try {
        const newCard = new Blog({card: req.body.card, group: req.body.group})
        await newCard.save()
        res.status(201).json({message: "Data success!!!"})

    }catch (error){
        console.log(error)
    }

})

router.delete('/deleteblog/:id', async (request, response) => {
    try {
        const blog = await Blog.findOneAndDelete({_id: request.params.id})
        response.json(blog)
        fs.unlinkSync(`./client/public/uploads/${blog.img}`)

    } catch (error) {
        console.log(error)

    }
})

module.exports = router