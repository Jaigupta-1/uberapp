import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const CaptainLogin = () => {
  const [formData, setFormData] = useState({username :"", password : ""});
  const  handleSubmit =async (e)=>{
    e.preventDefault();
    const result =await axios.post("/api/captain/login",formData);
    if(result.data.success){
      alert(result.data.message);
    }
     else{
      alert(result.data.message);
     }
     console.log(result.data.message);
    setFormData({username :"", password : ""});
  }
  const handler =(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>{
      return {...prev,[name]:value}
    })
  }
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
        <div className=' '>
            <img src="/logo.png" alt="" className='h-9 w-24 m-7' />
        </div>
        <div className='flex flex-col m-4 gap-4  w-[50%] max-w-[500px] min-w-[300px]'>
          <form action="" onSubmit={handleSubmit}>
            <p className='text-2xl font-medium '>UserName</p>
            <input type="text" placeholder="Enter your Username" className='border bg-zinc-200 p-2 rounded' value={formData.username} onChange={handler} name='username'/>
            <p className='text-2xl font-medium '>Password</p>
            <input type="password" placeholder="Enter your Password" className='border bg-zinc-200 p-2 rounded' value={formData.password} onChange={handler} name='password'/>
            <button className='bg-black text-white py-2 px-4 rounded mt-4 mx-[25%] font-medium w-1/2 text-xl'>Login</button>
          </form>
        <p className='mt-4 text-center'>Registered As Captain ? <Link to="/api/captain/signup" className='text-blue-500'> Register Here</Link></p>
     </div>
    </div>
     
  )
}

export default CaptainLogin