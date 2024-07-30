import {createContext, useContext, useEffect, useState} from "react"

const ConfiguratorContextRender = createContext()

export const ConfiguratorProviderRender = ({children}) => {

    const [allElem, setAllElem] = useState([])
    const [idProject, setIdProject] = useState(false)

    return (
        <ConfiguratorContextRender.Provider
            value={{
                allElem,
                setAllElem,
                idProject,
                setIdProject,
            }}
        >
            {children}
        </ConfiguratorContextRender.Provider>
    )
}

export const useConfiguratorRender = () => {
    return useContext(ConfiguratorContextRender);
}