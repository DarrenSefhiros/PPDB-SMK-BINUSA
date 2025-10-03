import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-sky-500 min-h-screen">
        <div className="bg-amber-50 p-8 rounded-lg shadow-md w-full max-w-sm">
            <h1 className='text-center font-bold'>Login</h1>
        <form>
            <div className="mb-4">
                <label className="font-semibold mx-2" htmlFor="Email">
                    Email
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Email"
                    type="text"
                    name="Email"
                    placeholder="masukan email anda"
                    required
                    />
            </div>
            <div className="mb-4">
                <label className="font-semibold mx-2" htmlFor="Nama">
                    Nama
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Nama"
                    type="text"
                    name="Nama"
                    placeholder="masukan Nama anda"
                    required
                    />
            </div>
            <div className="mb-4">
                <label className="font-semibold mx-2" htmlFor="Password">
                    Password
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Password"
                    type="text"
                    name="Password"
                    placeholder="masukan Password anda"
                    required
                    />
            </div>
            <div>
                <button type="onClick" className="bg-sky-600 hover:bg-sky-800 rounded focus:outline-none py-2 px-3">
                    <a href="/Dashboard" className="no-underline text-white font-bold">Login</a>
                </button>
                <a href="/register">Register </a>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login