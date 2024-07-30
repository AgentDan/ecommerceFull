import React from 'react'
import {v1} from "uuid"

const AdminImg = ({setLocalCard, currentImg, setCurrentImg}) => {
    return (
        <>
            <div className="w-auto h-auto ">
                <div className="h-10 w-auto content-end text-xl bg-white ">
                    Images
                </div>
                {currentImg.map((t) => {
                    return (
                        <div key={v1()} className="h-8 flex flex-row text-xl border-black border-2 mb-2">
                            <div className="w-5/6 text-left content-center ">
                                {t}
                            </div>
                            <div className="mx-auto w-8 content-center text-center text-red-700 cursor-pointer hover:bg-red-800 hover:text-white">
                                X
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default AdminImg;