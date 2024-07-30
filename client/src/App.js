import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {AuthContext} from './context/AuthContext'
import {useAuth} from "./hooks/auth.hook"
import MainPage from "./Pages/Main/MainPage"
import Furniture from "./Pages/Furniture/Furniture"
import {useState} from "react";
import Lamp from "./Pages/Lamp/Lamp";
import Projects from "./Pages/Projects/Projects"
import Admin from "./Pages/Admin/Admin";
import Proba from "./Pages/Proba/Proba";

function App() {
    const {login, logout, token, userId, isReady, logoName, arrNew, setArrNew, allProjects, setAllProjects, allElem, setAllElem, idProject, setIdProject} = useAuth()
    const isLogin = !!token
    const [currentLang, setCurrentLang] = useState("en")

    return (
        <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin, logoName, arrNew, setArrNew, allProjects, setAllProjects, allElem, setAllElem, idProject, setIdProject}}>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/"
                               element={<MainPage currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
                        <Route path="/furniture" element={<Furniture project={"furniture"} currentLang={currentLang} />}/>
                        <Route path="/lamp" element={<Lamp project={"light"} currentLang={currentLang} />}/>
                        <Route path="/project/:id" element={<Projects/>}/>
                        <Route path="/admin197908" element={<Admin/>}/>
                        <Route path="/proba" element={<Proba/>}/>
                        <Route path="*" element={<MainPage currentLang={currentLang} setCurrentLang={setCurrentLang} />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    )
}

export default App
