import React, {useCallback, useEffect, useState} from 'react'
import AdminRender from "./AdminRender"
import AdminCards from "./AdminCards"
import axios from "axios"

const Admin = () => {
    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState(localStorage.getItem("currentProject"))
    const [currentCards, setCurrentCards] = useState([])
    const [localCard, setLocalCard] = useState([])
    const [currentImg, setCurrentImg] = useState([])
    const [currentFiles, setCurrentFiles] = useState([])
    const [stateGlobal, setStateGlobal] = useState([])

    const getCloud = useCallback(async () => {
        try {
            await axios.get('/api/', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => setStateGlobal(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [stateGlobal])

    useEffect(() => {
        getCloud()
    }, [])

    useEffect(() => {
        let a = []
        stateGlobal.map((t) => {
            a.push(t.project)
        })
        setProjects(Array.from(new Set(a)))
    }, [stateGlobal])

    useEffect(() => {
        let b = []
        stateGlobal.map((t) => t.project === currentProject ? b.push(t) : "")

        const check = localStorage.getItem("checkCards")
        if (b.length) {
            setCurrentCards(b)
            localStorage.setItem('currentCards', JSON.stringify(b))
        }

        const aaa = localStorage.getItem("currentCards")
        const bbb = JSON.parse(aaa)
        setCurrentCards(bbb)

    }, [currentProject]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3">

            <div className="m-4 w-auto h-3/4 flex flex-col ">
                <AdminRender projects={projects}
                             currentProject={currentProject}
                             setCurrentProject={setCurrentProject}
                />
                <AdminCards currentCards={currentCards}
                            setStateGlobal={setStateGlobal}
                            localCard={localCard}
                            setLocalCard={setLocalCard}
                />
            </div>

        </div>
    )
}

export default Admin