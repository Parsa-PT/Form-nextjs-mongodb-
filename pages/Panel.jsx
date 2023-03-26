import { useState , useEffect } from 'react'

const Panel = (props) => {

    const [info , setInfo] = useState([])

    useEffect(()=>{
       async function User(){
         const response = await fetch('http://localhost:3000/api/user')
         const responseData = await response.json();
         setInfo(responseData.user)
       }

       User()
    },[])


  return (
    <div className='mt-20'>
      <h1 className="w-full text-center  mb-7 font-serif text-[2rem] border p-2" >Panel</h1>
      <ul className='w-full flex justify-center'>
        {info.map((item , id)=>{
            return (
                <div key={id}>
                    <li className='mb-4'> Username : {item.username}</li>
                    <li> Eamil : {item.email}</li>
                </div>
            )
        })}
        
      </ul>
    </div>
  )
}

// export async function getStaticProps(){
//     const response = await fetch('http://localhost:3000/api/user')
//     const responseData =  response.json();

//     return {
//         props : responseData
//     }
// }

export default Panel
