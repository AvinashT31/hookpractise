import React, { useState } from 'react'
import nodecontext from './Parent'

const Child = (props) => {

    const[data, setdata] = useState("avinash")
    return (
        <div>
            <nodecontext.Provider value = {data}>
                {props.children}
            </nodecontext.Provider>
        </div>
    )
}

export default Child
