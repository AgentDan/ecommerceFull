const {Router, request, response} = require("express")
const router = Router()
const multer = require("multer")
const fs = require("fs")
const MainFull = require("../models/EcommerceFullCatalog");

const storageConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})
const upload = multer({storage: storageConfig})

router.get("/",  async (request, response) => {
    let main = await MainFull.find()
    response.json(main)
})

router.get('/post', async (req, res) => {
    try {
        const { userId } = req.query
        const main= await MainFull.find({ owner: userId})
        res.json(main)
    }catch (error) {
        console.log(error)
    }
})

router.post("/addmainfull", upload.single("myfile"), (req, res) => {
    const newMain = new MainFull({
        id: req.body._id,
        name: req.body.name,
        project: req.body.project,
        price: req.body.price,
        nameEN: req.body.nameEN,
        nameRS: req.body.nameRS,
        nameRU: req.body.nameRU,
        imagesCounter: req.body.imagesCounter,
        images: req.body.images,
        check: req.body.check,
        components: req.body.components,
    })
    newMain
        .save()
        .then(main => res.json("The Article ADD!!!"))
        .catch(err => res.status(400).json(`Error my: ${err}`))
})

module.exports = router