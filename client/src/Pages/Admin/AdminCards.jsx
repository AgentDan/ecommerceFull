import React from 'react'
import {v1} from "uuid"

const AdminCards = ({currentCards, setLocalCard, localCard}) => {

    return (
        <>
            <div key={v1()} className="h-10 w-auto content-end text-xl bg-white ">
                Cards
            </div>
            {currentCards.map((t) => {
                return (
                    <div key={v1()} className="mb-1 h-8 w-auto flex flex-row text-xl border-black border-2">
                        <div
                            className={`w-5/6 text-left content-center cursor-pointer ${localCard && localCard.id === t.id ? "bg-green-600" : ""}`}
                            onClick={()=>setLocalCard(t)}
                        >
                            {t.name}
                        </div>
                        <div className="mx-auto w-8 content-center text-center text-red-700 hover:bg-red-800 hover:text-white cursor-pointer">
                            X
                        </div>
                    </div>
                )
            })
            }
        </>
    );
};

export default AdminCards;