import {v1} from "uuid"
import axios from "axios"
import {useCallback, useContext, useEffect, useState} from "react";

const AdminUploads = ({localCard}) => {
    const [stateUploads, setStateUploads] = useState([])

    const getCloudFiles = useCallback(async () => {
        try {
            await axios.get('/api/upload', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => setStateUploads(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [stateUploads])

    const onClickDELETE = useCallback(async (id) => {
        try {
            await axios.delete(`/api/upload/deleteblog/${id}`, {id}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => setStateUploads(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [getCloudFiles])

    useEffect(()=>{
        getCloudFiles()
    }, [])

    return (
        <div>
            {
                stateUploads.map((t) => {
                   if (t.cards === localCard.name) {
                       return (
                           <div key={v1()}
                                className={`w-auto h-8 pr-6 m-1 rounded-2xl content-start border-2 border-black text-left relative `}
                           >
                               <div
                                   className={`flex flex-row h-auto w-auto text-white text-xl px-2 rounded-tl-2xl rounded-bl-2xl bg-gray-400 top-0 left-0`}
                               >
                                   <div className="w-4/6">
                                       {t.img}

                                   </div>
                                   <div
                                       className="w-1/6 bg-indigo-600 text-xs h-auto text-center content-center rounded-2xl m-1">
                                       {t.group}
                                   </div>
                                   <div
                                       className="w-1/6 bg-amber-600 text-xs h-auto text-center content-center rounded-2xl m-1">
                                       {t.cards}
                                   </div>
                               </div>

                               <span
                                   className="bg-red-300 h-7 w-6 text-xl text-white text-center content-center rounded-tr-2xl rounded-br-2xl absolute top-0 right-0 hover:bg-red-700 cursor-pointer"
                                   onClick={() => onClickDELETE(t._id)}
                               >
                                    X
                                </span>
                           </div>
                       )
                   }
                })
            }
        </div>
    );
};

export default AdminUploads;