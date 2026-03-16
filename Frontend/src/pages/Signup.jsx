import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
  const [formData, setFormData] = useState({name:"",email :"", password : ""});
  const  handleSubmit =async (e)=>{
    e.preventDefault();
    const result =await axios.post("/api/user/signup",formData);
    if(result.data.success){
      alert(result.data.message);
    }
     else{
      alert(result.data.message);
     }
     console.log(result.data.message);
    setFormData({name:"",email :"", password : ""});
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
            <img src="/logo.png" loading="lazy" alt="" className='h-9 w-24 m-7' />
        </div>
        <div className='flex flex-col m-4 gap-4  w-[50%] max-w-[500px] min-w-[300px]'>
        <form action="">
            <p className='text-2xl font-medium '>Name</p>
            <input type="text" placeholder="Enter your Name" className='border bg-zinc-200 p-2 rounded' value={formData.name} onChange={handler} name='name'/>
            <p className='text-2xl font-medium '>Email</p>
            <input type="text" placeholder="Enter your Email" className='border bg-zinc-200 p-2 rounded' value={formData.email} onChange={handler} name='email'/>
            <p className='text-2xl font-medium '>Password</p>
            <input type="password" placeholder="Enter your Password" className='border bg-zinc-200 p-2 rounded' value={formData.password} onChange={handler} name='password'/>
            <div className='flex flex-col m-4 gap-4'><button className='bg-black text-white py-2 px-4 rounded mt-4 mx-[25%] font-medium w-1/2 text-xl' onClick={handleSubmit}>Create Account</button></div>
        </form>
        <p className='mt-4 text-center'>Already Registered ? <Link to="/api/user/login" className='text-blue-500'> LogIn</Link></p>
     </div>
    </div>
  )
}

export default Signup