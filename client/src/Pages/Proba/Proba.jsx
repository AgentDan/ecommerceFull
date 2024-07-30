import React, {useState, useCallback, useEffect} from "react"
import axios from "axios"
import {StateGlobal} from "../../state/stateGlobal"
import ProbaRender from "./ProbaRender";

const Proba = () => {
    const currenLang = "en"
    const project = "light"
    const [role, setRole] = useState()
    const [state, setState] = useState(StateGlobal)

    const getRole = useCallback(async () => {
        try {
            await axios.get('/api/', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => setRole(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        console.log("GET: ", role)
        console.log("Global: ", StateGlobal)
    }, [role])

    useEffect(() => {
        getRole()
    }, [])

    return (
        <>
            { role &&
                <ProbaRender
                    currentLang={currenLang}
                    project={project}
                    role={role}
                />
            }

        </>
    )
}

export default Proba