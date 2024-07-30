import React, {useEffect, useState} from 'react'
import {StateGlobal} from "../../state/stateGlobal"
import AdminRender from "./AdminRender"
import AdminCards from "./AdminCards"
import AdminImg from "./AdminImg"
import Admin3dModel from "./Admin3dModel"
import Admin3DFiles from "./Admin3dFiles"

const Admin = () => {
    const [stateGlobal, setStateGlobal] = useState(StateGlobal)
    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState([])
    const [currentCards, setCurrentCards] = useState([])
    const [localCard, setLocalCard] = useState([])
    const [currentImg, setCurrentImg] = useState([])
    const [currentModels, setCurrentModels] = useState([])
    const [localModel, setLocalModel] = useState()
    const [currentFiles, setCurrentFiles] = useState([])

    useEffect(() => {
        let a = []
        stateGlobal.map((t) =>
            a.push(t.project)
        )
        let b = []
        stateGlobal.map((t) =>
            t.project === currentProject ? b.push(t) : ""
        )
        setProjects(Array.from(new Set(a)))
        setCurrentCards(b)
        setLocalCard([])
        setCurrentImg([])
        setCurrentFiles([])
    }, [currentProject])

    useEffect(() => {
        let c = []
        let d = []
        if (localCard.length !== 0) {
            localCard.images.map((t) => c.push(t))
            localCard.components.map((t) => d.push(t))
        }
        setCurrentImg(c)
        setCurrentModels(d)
        setCurrentFiles([])
        setLocalModel()
    }, [localCard])

    useEffect(() => {
        let e=[]
        if (localModel) {localModel.elems.map((t)=>{
            e.push(t)
        })
            }
        setCurrentFiles(e)
    },[localModel])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3">

                <div className="m-4 w-auto h-3/4 flex flex-col ">
                    <AdminRender projects={projects}
                                 currentProject={currentProject}
                                 setCurrentProject={setCurrentProject}
                    />
                    <AdminCards currentCards={currentCards}
                                setLocalCard={setLocalCard}
                                localCard={localCard}
                    />
                </div>

                <div className="m-4 w-auto h-auto flex flex-col ">
                    <AdminImg setLocalCard={setLocalCard}
                              currentImg={currentImg}
                              setCurrentImg={setCurrentImg}
                    />
                    <Admin3dModel localModel={localModel}
                                  currentModels={currentModels}
                                  setLocalModel={setLocalModel}
                    />
                    <Admin3DFiles currentFiles={currentFiles}
                                  setCurrentFiles={setCurrentFiles}
                    />
                </div>

            </div>
        </>
    )
}

export default Admin