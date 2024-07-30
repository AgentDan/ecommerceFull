import {useState, useEffect, useCallback} from 'react'
import {store} from "../state/state"

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [logoName, setLogoName] = useState(null)
    const [isReady, setIsReady] = useState(false)
    const [arrNew, setArrNew] = useState([])
    const [allProjects, setAllProjects] = useState([])
    const [allElem, setAllElem] = useState([])
    const [idProject, setIdProject] = useState(false)

    const login = useCallback((jwtToken, id, login) => {
        setToken(jwtToken)
        setUserId(id)
        setLogoName(login)
        localStorage.setItem('userData', JSON.stringify({
            userId: id,
            token: jwtToken,
            logoName: login
        }))
    }, [])
    const logout = () => {
        setToken(null)
        setUserId(null)
        setLogoName(null)
        localStorage.removeItem('userData')
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.token) {
            login(data.token, data.userId, data.logoName)
        }
        setIsReady(true)
        if (b[0]) {
            bb = b[0].projects
            setAllProjects(bb)
            setArrNew(b[0])
        }
    }, [login])

    const b = store.filter((t) => (t.name === logoName))
    let bb
    useEffect(() => {
        if (b[0]) {
            bb = b[0].projects
            setAllProjects(bb)
            setArrNew(b[0])
        }
    }, [logoName]);

    return {
        // login,
        // logout,
        token,
        userId,
        isReady,
        logoName,
        arrNew,
        setArrNew,
        allProjects,
        setAllProjects,
        allElem,
        setAllElem,
        idProject,
        setIdProject
    }
}