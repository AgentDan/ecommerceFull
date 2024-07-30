import React from 'react';
import {useContext} from "react"
import {MyContext} from "../../App";

const Proba = () => {

    const ddd = useContext(MyContext)
    console.log(ddd)
    return (
        <div>
            PROBA
        </div>
    );
};

export default Proba;