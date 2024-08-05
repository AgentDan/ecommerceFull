const {Router} = require("express")
const router = Router()
const multer = require("multer")
const fs = require('fs')
const Upload = require('./../models/upload')
const Blog = require('./../models/Blog')


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

router.post("/addfile", upload.single("myfile"), (req, res) => {
    console.log(req.file)
    const newBlog = new Upload({
        cards: req.body.cards,
        group: req.body.group,
        description: req.body.description,
        img: req.file.originalname
    })

    newBlog
        .save()
        .then(blog => res.json("The Article ADD!!!"))
        .catch(err => res.status(400).json(`Error my: ${err}`))
})

router.delete('/deleteblog/:id',async (request, response)=>{
    console.log("HELLO")
    try {
        console.log("Params ID : ", request.params.id)
        const blog = await Upload.findOneAndDelete({_id: request.params.id})
        response.json(blog)
        fs.unlinkSync(`./client/public/uploads/${blog.img}`)

    } catch (error) {
        console.log(error)

    }
})

// router.delete('/deleteblog/', async (request, response) => {
//     try {
//         console.log("HIHIHIHIHIH")
//         const upload = await Upload.findOneAndDelete({_id: request.params.id})
//         response.json(upload)
//         fs.unlinkSync(`./client/public/uploads/${upload.img}`)
//     } catch (error) {
//         console.log(error)
//     }
// })

module.exports = router