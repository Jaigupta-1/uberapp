import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const CaptainSignup = () => {
    const [formData, setFormData] = useState({firstname:"", lastname:"",email :"", password : "", vehicleno:"", vehiclecolor:"", vehicletype:"", vehiclecapacity:""});
  const  handleSubmit =async (e)=>{
    e.preventDefault();
    const result =await axios.post("/api/captain/signup",formData);
    if(result.data.success){
      alert(result.data.message);
    }
     else{
      alert(result.data.message);
     }
     console.log(result.data.message);
    setFormData({firstname:"", lastname:"",email :"", password : "", vehicleno:"", vehiclecolor:"", vehicletype:"", vehiclecapacity:""});
  }
  const handler =(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>{
      return {...prev,[name]:value}
    })
  }
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center my-10'>
        <div className=' '>
            <img src="/logo.png" loading="lazy" alt="" className='h-9 w-24 m-7' />
        </div>
        <div className='flex flex-col m-4 gap-4'>
        <form action="" onSubmit={handleSubmit}>
            <div className='flex gap-2'>
            <div className='flex flex-col gap-4 '>
            <p className='text-2xl font-medium '>First Name</p>
            <input type="text" placeholder="Enter your First Name" className='border bg-zinc-200 p-2 rounded' value={formData.firstname} onChange={handler} name='firstname'/>
            </div>
            <div className='flex flex-col gap-4 '>
            <p className='text-2xl font-medium '>Last Name</p>
            <input type="text" placeholder="Enter your Last Name" className='border bg-zinc-200 p-2 rounded' value={formData.lastname} onChange={handler} name='lastname'/>
            </div>
        </div>
        <p className='text-2xl font-medium '>Email</p>
        <input type="text" placeholder="Enter your Email" className='border bg-zinc-200 p-2 rounded' value={formData.email} onChange={handler} name='email'/>
        <p className='text-2xl font-medium '>Password</p>
        <input type="password" placeholder="Enter your Password" className='border bg-zinc-200 p-2 rounded' value={formData.password} onChange={handler} name='password'/>

        <h3 className='font-medium text-2xl my-4'>Vehicle Details</h3>

        <div className='flex gap-2'>
            <div className='flex flex-col gap-4 '>
            <p className='text-2xl font-medium '>Vehicle No.</p>
            <input type="text" placeholder="Enter your Vehicle No." className='border bg-zinc-200 p-2 rounded' value={formData.vehicleno} onChange={handler} name='vehicleno'/>
            </div>
            <div className='flex flex-col gap-4 '>
            <p className='text-2xl font-medium '>Vehicle Color</p>
            <input type="text" placeholder="Enter your Vehicle Color" className='border bg-zinc-200 p-2 rounded' value={formData.vehiclecolor} onChange={handler} name='vehiclecolor'/>
            </div>
        </div>

        <div className='flex gap-2'>
            <div className='flex flex-col gap-4 '>
            <p className='text-2xl font-medium '>Vehicle Type</p>
            <input type="text" placeholder="Enter your Vehicle Type" className='border bg-zinc-200 p-2 rounded' value={formData.vehicletype} onChange={handler} name='vehicletype'/>
            </div>
            <div className='flex flex-col gap-4 '>
            <p className='text-2xl font-medium '>Vehicle Capacity</p>
            <input type="text" placeholder="Enter your Vehicle Capacity" className='border bg-zinc-200 p-2 rounded' value={formData.vehiclecapacity} onChange={handler} name='vehiclecapacity'/>
            </div>
        </div>

        <div className='flex flex-col m-4 gap-4'><button className='bg-black text-white py-2 px-4 rounded mt-4 mx-[25%] font-medium w-1/2 text-xl'>SignUp</button></div>
        </form>
        <p className='mt-4 text-center'>Already Registered ? <Link to="/api/user/login" className='text-blue-500'> LogIn</Link></p>
     </div>
   </div>
  )
}

export default CaptainSignup