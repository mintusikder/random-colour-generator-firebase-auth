import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handelForm =(e) =>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value 
    const password = form.password.value 
    console.log(email, password)

    if(error ){
      toast(error)
      return
    }
  }

  const handelPassword =(e) =>{
    const passwordInput = e.target.value
    setPassword(passwordInput)
    if(passwordInput.length < 6){
      setError("Need 6 Number")
    }else if(!/ ^(?=.*[A-Za-z])$/.test(passwordInput)){  
      setError("Minimum eight characters, at least one letter and one number:")
    }  
    else{
      setError('')
    }
  }

  return  <form onSubmit={handelForm}>
  <div className="relative z-0 w-full mb-5 group mt-48">
    <input
      type="email"
      name="email"
      id="email"
    
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Email address
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="password"
      name="password"
      id="password"
      value={password}
      onChange={handelPassword}
      className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer
      
      ${password ? error ? "border-red-500" : "border-green-500" :" focus:border-blue-600"}`}


      placeholder=" "
      required
    />
    <label
      htmlFor="password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Password
    </label>
    <p>{error && <span className="text-error">{error}</span>}</p>
  </div>
  <button type="submit">Login</button>
</form>
};

export default Login;
