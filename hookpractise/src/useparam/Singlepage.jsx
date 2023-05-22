// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// const Singlepage = () => {

//     const[showdata, setshowdata] = useState();
//     console.log(showdata, "showdata");

//     const data = useParams();
//     console.log(data.id, "data");

//     useEffect(() => {
//         fetch("https://api.punkapi.com/v2/beers")
//         .then(res => res.json())
//         // .then(json => console.log(json, "hello"));
//         .then(json => json.filter(obj => obj.id === +data.id))
//         .then(data => setshowdata(data))
//     }, [])
//   return (
//     <div>
//        <div>
//         {showdata && showdata.map((e) => (
//             <div>
//                  <p>{e.id}</p>
//                     <img src={e.image_url} alt="" />
//                     <p>{e.description}</p>
//             </div>
//         ))}
//        </div>
//     </div>
//   )
// }

// export default Singlepage


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Data1 = require('../json/practise.json')

const Singlepage = () => {

    const[showData, setshowData] = useState()
    console.log(showData, "showData")

    const Data = useParams();
    console.log(Data.id, "data")

    useEffect(() => {
        const filter = Data1.filter(Data1 => Data1.id === +Data.id)
        setshowData(filter);
    }, [])

  return (
    <div>
      {showData && showData.map((e) => (
        <div>
            <img src={e.image} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Singlepage;
