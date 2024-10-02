import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { FormData, formSchema } from '../../../utils/validation/formSchema';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Index() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({resolver: zodResolver(formSchema)});

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  async function onSubmit(data:FormData) {
    const bodyRequest = {
      name: data.name,
      email: data.email,
      password: data.password
    };
    try {
       const response= await axios.post({
        name: bodyRequest.name,
        email: bodyRequest.email,
        password: bodyRequest.password,
      });
      if (response){
        Swal.fire({
          icon: "success",
          title: "success",
          text: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error: any){
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: `error: ${error.message}`,
        confirmButtonText: "OK",
      })
    }
    
  } 
  
  return (
    <div className='w-screen bg-white h-full flex flex-col justify-center items-center'>
      <nav className='fixed top-0 w-screen h-20 bg-white flex justify-end items-center'>
        <button 
        onClick={()=> navigate ("/")}
        className='h-10 bg-green-500 font-semibold text-white rounded-md flex justify-center'></button>
        User
      </nav>
      <div className='p-8 rounded-lg bg-blue-300 shadow-md w-96'>
        <h2 className='text-2xl text-black font-bold mb-6'>
          Page Register 
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Name</label>
              <input 
              type='text'
              className={`w-full p-2 border border-gray-300 bg-white text-black rounded ${
                errors.name ? "border-red-500" : ""
              } `}
              {... register("name")}
              />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>{errors.name.message}.</p>
              )}

              <label className='block text-gray-700 mb-2'>Email</label>
              <input 
              type='text'
              className={`w-full p-2 border border-gray-300 bg-white text-black rounded ${
                errors.email ? "border-red-500" : ""
              } `}
              {... register("email")}
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email.message}.</p>
              )}

              <label className='block text-gray-700 mb-2'>Password</label>
              <input 
              type='text'
              className={`w-full p-2 border border-gray-300 bg-white text-black rounded ${
                errors.password ? "border-red-500" : ""
              } `}
              {... register("password")}
              />
              <button 
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute insent-y-0 right-0 flex item-center pr-3 text-sm text-gray'
              >
                {showPassword? "hide" : "show"}
                </button>  
                    
                {errors.password &&(
                  <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>
                )}
                <button
                type='submit'
                className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-5'
                >
                  Submit
                </button>
              </div>
          </form>
      </div>
    </div>
  ) ;
}

export default Index