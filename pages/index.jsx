import { useState } from "react"
import { useRouter } from "next/router"
import Link from 'next/link'

export default function Home() {
  const [username , setUserBook] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [panel , setPanel] = useState(false)
  const [err , setError] = useState('')




  const formHandle = async (e)=>{
    e.preventDefault()

    
    const data = {username , email , password}

    if(username ||  email || password === ''){
      
      setError(true)
  }

  if(username ||  email || password !== ''){
    setPanel(true)
  }
  

  if(username ||  email || password !== ''){
    const response =  await  fetch('http://localhost:3000/api/user' , {
      method : 'POST',
      body : JSON.stringify(data),
      headers : {
        'content-type': 'application/json'
      }
    })
    const responseData = await response.json()
  }
   
    
    

  }


  return (
    <div className="flex flex-col justify-center items-center">
      <form className="w-full mt-20 flex flex-col justify-center items-center" onSubmit={formHandle}>
        <h2 className="w-full text-center  mb-7 font-serif text-[2rem] border p-2">Register</h2>
        <input className=" bg-slate-800 mb-4 p-1 shadow-md text-white outline-none rounded-md" value={username} onChange={(e)=>  setUserBook(e.target.value)}  type="text" placeholder="Username" />
        {err && username.length<=0 ? <label>You need to enter your name</label> : null}

        <input className=" bg-slate-800 mb-4 p-1 shadow-md text-white outline-none rounded-md" value={email} onChange={(e)=>  setEmail(e.target.value)}  type="email" placeholder="Email" />
        {err && email.length<=0 ? <label>You need to enter your email</label> : null}

        <input className=" bg-slate-800 mb-4 p-1 shadow-md text-white outline-none rounded-md" value={password} onChange={(e)=>  setPassword(e.target.value)}  type="password" placeholder="Password" />
        {err && password.length<=0 ? <label>You need to enter your password</label> : null}

        <button className=" w-48 h-7 mb-4 bg-orange-600 rounded-md shadow-md ease-in duration-75 hover:text-white" type="submit">Send</button>
      </form>
      {panel ?  <Link href='/Panel'> <button className=" w-48 h-7 mb-4 bg-orange-600 rounded-md shadow-md ease-in duration-75 hover:text-white">Panel</button></Link> : null}
      
    </div>
  )
}
