import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
        <div className="bg-cover bg-center bg-opacity-50 h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-75 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          {/* Your login form components go here */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
        </form>
      </div>
    </div>
        </form>


    </div>
  )
}

export default Login