const {Router} = require("express")
const router = Router()
const multer = require("multer")
const fs = require('fs')
const Upload = require('./../models/upload')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storage})

router.get('/', async (request, response) => {
    let upload = await Upload.find()
    response.json(upload)
})

router.post("/addfile", upload.single("myfile"), async (req, res) => {

    try {
        const newBlog = new Upload({
            cards: req.body.cards,
            group: req.body.group,
            description: req.body.description,
            img: req.file.originalname
        })

        await newBlog
            .save()
            let upload = await Upload.find()
            .then(blog => res.json(upload))
            // .catch(err => res.status(400).json(`Error my: ${err}`))

        // let upload = await Upload.find()
        // response.send("HELLO")

    } catch (error) {
        console.log(error)
    }


})

router.delete('/deleteblog/:id', async (request, response) => {
    try {
        const blog = await Upload.findOneAndDelete({_id: request.params.id})
        let upload = await Upload.find()
        response.json(upload)
        fs.unlinkSync(`./client/public/uploads/${blog.img}`)

    } catch (error) {
        console.log(error)
    }
})

module.exports = router