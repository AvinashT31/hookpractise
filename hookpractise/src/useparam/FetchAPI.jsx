// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const FetchAPI = () => {

//     const [api, setapi] = useState();
//     console.log(api, "api");

//     const route = useNavigate();

//     useEffect(() => {
//         fetch("https://api.punkapi.com/v2/beers")
//             .then(res => res.json())
//             .then(json => setapi(json))
//     }, [])
//     console.log(api, "sneha");

//     function opennewpage(e){
//         route(`/${e.id}`)
//     }
//     return (
//         <div>
//             {api && api.map((e) => (
//                 <div onClick={() => opennewpage(e)}>
//                     <p>{e.id}</p>
//                     <img src={e.image_url} alt="" />
//                     <p>{e.description}</p>
//                 </div>

//             ))}
//         </div>
//     )
// }

// export default FetchAPI


import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const fetchData = require('../json/practise.json')

const FetchAPI = () => {

    const[api, setapi]  = useState();
    console.log(api, "api");

    const route = useNavigate()

    useEffect(() => {
        setapi(fetchData);
    }, [])

    function opennewpage(e){
        route(`/${e.id}`)
    }

  return (
    <div>
      {api && api.map((e) => (
        <div onClick={() => opennewpage(e)}>
            <img src={e.image} alt="" />
        </div>
      ))}
    </div>
  )
}

export default FetchAPI
