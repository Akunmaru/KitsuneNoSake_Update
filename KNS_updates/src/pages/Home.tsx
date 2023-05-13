import React from "react"
import Background from "../assets/images/yuya-yoshioka-0IvwihAQy5s-unsplash.jpg"

function Home() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}}
    className="flex flex-row justify-center mx-auto bg-cover bg-fixed"
    >
      <div className="flex place-items-center h-screen">
        <h1 className="p-5 bg-white bg-opacity-30 border-yellow-500 rounded-lg text-yellow-500">Welcome to Your Sake Collection</h1>
      </div>
    </div>
  )
}

export default Home
