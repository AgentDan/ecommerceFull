import React from 'react'
import {v1} from "uuid"
import {Button} from "@material-tailwind/react";

const AdminRender = ({projects, currentProject, setCurrentProject}) => {

    return (
        <>
            <div className="w-auto h-auto flex flex-col ">
                <div className="h-10 w-auto content-end text-xl bg-white ">
                    Projects
                </div>
                <div className="h-auto flex flex-row">
                    <input className="h-10 w-auto content-end text-xl mb-1 border-2 border-black bg-yellow-200 m-1"/>
                    <Button className="bg-red-300 m-1 h-auto"/>
                </div>

                {projects.map((t) => {
                    return (
                        <span className="h-auto" key={v1()}>
                                <div
                                    className="h-12 w-auto flex flex-row text-xl border-black border-2 mb-1">
                                    <div
                                        className={`w-5/6 text-left content-center cursor-pointer ${t === currentProject ? "bg-green-600" : ""}`}
                                        onClick={() => {
                                            setCurrentProject(t)
                                        }}
                                    >
                                        {t}
                                    </div>
                                    <div
                                        className="mx-auto w-8 content-center text-center text-red-700 cursor-pointer hover:text-white hover:bg-red-800">
                                        X
                                    </div>
                                </div>
                        </span>
                    )
                })
                }
            </div>
        </>
    )
}

export default AdminRender