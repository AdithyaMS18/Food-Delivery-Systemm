import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/appContext'
import { Link, useNavigate } from 'react-router-dom'

const UserLogin = () => {
const {login, signUp, user} = useAppContext()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(isSignUp){
      let currentUser={
        name,
        email,
        password
      }
     signUp(currentUser)
    }else{
      let currentUser={
        email,
        password
      }
      login(currentUser)
    }

  }

  useEffect(() => {
    if (user) {
        setTimeout(() => {
            navigate("/")
        }, 1000);
    }

}, [user, navigate])

  return (
    <div className='flex w-full h-screen items-center justify-center'>
    <div className="bg-gray-100 p-4 rounded-lg w-80 mx-auto " style={{"height":"75%"}}>
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-start gap-2 " style={{"height":"100%"}}>
      <h3 className="text-2xl font-bold text-center my-9">{isSignUp ? "Sign Up" : "Login"}</h3>
      
      {isSignUp && (
        <label htmlFor="name" className="block">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </label>
      )}
  
      <label htmlFor="email" className="block">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </label>
  
      <label htmlFor="password" className="block">
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </label>
  
      <div className="text-center">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </div>
  
      <div className="text-center">
        <p>
          {isSignUp ? "Already have an account? " : "Need an account? "}
          <span onClick={() => setIsSignUp(!isSignUp)} className='cursor-pointer text-blue-500 hover:text-blue-600'>{isSignUp?"login":"signup"}</span>
          </p>
  </div>
  </form>

  </div>
  <Link to="/auth-owner" className='mr-5 bg-blue-400 p-4'>login as owner</Link>
  </div>
  )
}

export default UserLogin