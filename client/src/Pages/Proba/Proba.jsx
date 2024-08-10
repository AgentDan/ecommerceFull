import React, {useState} from 'react'
import {v1} from "uuid"

const Proba = () => {
    const [num, setNum] = useState(0)

    const onClickRandom = () => {
        let a = v1()[2]+v1()[3]+v1()[4]+v1()[5]+"_"
        setNum(a)
    }

    return (
        <>
         <div
             className="h-auto bg-green-600 hover:bg-red-800 rounded-2xl w-1/6 content-center text-center cursor-pointer"
             onClick={() => onClickRandom()}
         > CLICK ME </div>
         <div className="h-auto bg-gray-400 rounded-2xl w-1/4 content-center text-center">{num}</div>
        </>
    )
}

export default Proba;