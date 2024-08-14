import React, {useEffect, useState} from 'react';
import ProbaImage from "./ProbaImage";
import ProbaComponents from "./ProbaComponents";
import ProbaCard from "./ProbaCard";
import axios from "axios";

const Proba = () => {
    const [card, setCard] = useState([])
    const [images, setImages] = useState([])
    const [components, setComponents] = useState([])
    const [cardProduct, setCardProduct] = useState([])
    const [proba, setProba] = useState({
        name: "7 NAME 7",
        project: "444444",
        images: [
            "im2", "im3", "im4"
        ],
        components: [
            {
                name: "nam1",
                check: true,
                elems: [{name: "elem1", num: "sdflkoif3"}],
                num: "p9aisdf0fio"
            }
        ]
    })

    console.log("Product: ", proba)

    useEffect(() => {
        setCardProduct({...cardProduct,
            images,
            components,
            name: card.name,
            project: card.project,
            price: card.price,
            nameEn: card.nameEN,
            nameRS: card.nameRS,
            nameRU: card.nameRU
        })
    }, [images, components, card])

    const onClickServer = async () => {
        console.log("PROBA : ", cardProduct)
        try {
            // await axios.post('/api/main/addblog', {...form}, {
            // await axios.post('/api/addmainfull', {...proba}, {
            await axios.post('/api/addmainfull', {...cardProduct}, {
                headers: {'Content-Type': 'application/json'}
            })
                // .then(() => window.location.reload())

        } catch (error) {
            console.log(error)
            // setError(error.response.status)
            // setTimeout(clearError, 2000)
        }
    }

    return (
        <div className="w-1/3">
            <button
                className="bg-green-600 hover:bg-red-700 hover:text-white h-auto rounded-2xl w-1/3 m-4"
                onClick={onClickServer}
            >PRESS
            </button>

            <div className="h-auto">
                <ProbaCard card={card} setCard={setCard}/>
            </div>
            <div className="h-auto mb-4">
                <ProbaImage setImages={setImages} images={images}/>
            </div>
            <div className="h-auto">
                <ProbaComponents components={components} setComponents={setComponents}/>
            </div>
        </div>
    );
};

export default Proba;