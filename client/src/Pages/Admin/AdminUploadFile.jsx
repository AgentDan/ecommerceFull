import React, {useCallback, useState} from 'react'
import axios from "axios";

const AdminUploadFile = () => {
    const [fileName, setFileName] = useState([])

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    }

    const interfile = useCallback(async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("cards", "betonOne")
        formData.append("group", "beton")
        formData.append("myfile", fileName)

        try {
            await axios
                .post(`http://localhost:5000/api/upload/addfile/`, formData)
                // .then((response) => console.log("sdfsdf"))
        } catch (error) {
            console.log(error)
        }
    }, [fileName])

    return (
        <>
            <div className="h-auto border-gray-500 p-2 mb-4">

                <form className=" bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8 mb-4"
                      onSubmit={e => e.preventDefault()}
                      encType="multipart/form-data">

                    <div>
                        <input
                            type="file"
                            name="img" required
                            onChange={onChangeFile}
                            id="formFile"
                        />
                    </div>

                    <div className="flex items-center justify-between"
                    >
                        <button
                            className="bg-gray-400 hover:bg-green-700 text-xl rounded-2xl text-white font-bold mt-4 py-2 px-4 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={interfile}
                        >
                            Add
                        </button>
                    </div>

                </form>
            </div>

        </>
    );
};

export default AdminUploadFile;