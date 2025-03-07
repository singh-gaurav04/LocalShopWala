import React from 'react'

const UserForm = () => {
  return (
    <div className='main-container  flex justify-center  items-center '>
        
    {/* Left side of the signup form here is your logo and some information  */}
    


    {/* Right side of the sign form page here is your form */}

<div className='signup-container max-w-[350px]  rounded-[40px] px-[25px] py-[35px]  border-[5px] border-solid shadow-[#85BDD7E0] '>

{/* This is the heading of the signup form/comtainer */}
<div className='heading w-full text-center font-[900] text-[30px] text-[#1089D3] '> Sign In </div>
<form className='mt-[20px]'>

{/* This is the email */}
<input className='w-[100%] bg-white border-none py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-lg
 shadow-[#cff0ff]  placeholder:text-[rgb(170,170,170)] focus:outline-none focus:border-[#12b1d1]  focus:border-x-2 focus:border-solid'
  placeholder="E-mail"
  id="email"
  name="email"
  type="email"
  required
/>
{/* This is the password */}
<input  className='w-[100%] bg-white border-none py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-lg
 shadow-[#cff0ff]  placeholder:text-[rgb(170,170,170)] focus:outline-none focus:border-[#12b1d1]  focus:border-x-2 focus:border-solid'
  placeholder="Password"
  id="password"
  name="password"
  type="password"
  required
/>

{/* This is the forget password */}

<span className='mt-[10px] ml-[10px] block'><a href="#" className='text-[13px] decoration-0 text-[#0099ff]' >Forgot Password ?</a></span>

{/* submit button */}

<input value="Sign In" type="submit" className='block w-[100%] bg-yellow-400 font-bold bg-gradient-to-l from-cyan-500 to-blue-500
text-white rounded-full pt-[15px] pb-[15px] mt-4 border-none transition-all duration-[0.2s] ease-in-out 
hover:scale-[1.03] hover:shadow-[rgba(133,189,215,0.8784313725)]
active:scale-[0.95] active:shadow-[rgba(133,189,215,0.8784313725)]' />

    </form>

    {/* Social account container */}

    <div className="social-account-container mt-[25px]">

        {/* heading  */}

<span className="title block text-center text-[12px] text-[rgb(170,170,170)]">Or Sign in with</span>

{/* container of social media buttons */}

<div className="social-accounts w-full flex justify-center gap-[15px] mt-[5px]  ">
    {/* Google */}

  <button className="social-button-google bg-gradient-to-l from-[rgb(0,0,0)] to-[rgb(112,112,112)] border-s-white border-[5px] p-[5px] rounded-[50%] w-[40px] aspect-[1] grid place-content-center 
  transition-all duration-[0.2s] ease-in-out hover:scale-[1.2] active:scale-[0.9] ">
    <svg className='fill-white m-auto'
      viewBox="0 0 488 512"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      ></path>
    </svg>
  </button>

  {/* Apple */}

  <button className="social-button-apple bg-gradient-to-l from-[rgb(0,0,0)] to-[rgb(112,112,112)] border-s-white border-[5px] p-[5px] rounded-[50%] w-[40px] aspect-[1] shadow-[0px 12px 10px -8px rgba(133,189,215,0.8784313725)] grid place-content-center
  transition-all duration-[0.2s] ease-in-out hover:scale-[1.2] active:scale-[0.9]">
    <svg  className="fill-white m-auto"
      viewBox="0 0 384 512"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      ></path>
    </svg>
  </button>

  {/* Twitter */}

  <button className="social-button-twitter bg-gradient-to-l from-[rgb(0,0,0)] to-[rgb(112,112,112)] border-s-white border-[5px] p-[5px] rounded-[50%] w-[40px] aspect-[1] grid place-content-center 
  transition-all duration-[0.2s] ease-in-out hover:scale-[1.2] active:scale-[0.9]">
    <svg className='fill-white m-auto'
      viewBox="0 0 512 512"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      ></path>
    </svg>
  </button>
</div>
</div>

{/* aggrements line */}

<span className="agreement block text-center mt-[15px] decoration-0 text-[#0099ff] text-[11px]"><a href="#">Learn user licence agreement</a></span>

</div>
</div>
  )
}

export default UserForm