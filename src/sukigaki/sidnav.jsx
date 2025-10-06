import React, { useState } from 'react'

function Sidnav() {
    const [open, setOpen] = useState(true);
    return(
            <div className="flex">
            <div className={`fixed top-0 left-0 h-full w-60 bg-sky-500 text-white ${open ? "translate-x-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out
            md:translate-x-0`}>
                <div className="text-3xl font-bold text-center ">
                    Menu
                </div>
                <nav className="space-y-4">
                    <div className="my-10">
                        <button className="bg-sky-400 hover:bg-sky-800 rounded-md px-10">
                            <a href="/Dashboard" className="block mx-10 text-white no-underline font-semibold">Dashboard</a>
                        </button>
                    </div>
                </nav>
    </div>
 </div>   
  )
}

export default Sidnav