import React from "react"
import Background from "../assets/images/eveningSake.jpg"

function About() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}}
    className="flex flex-row justify-center mx-auto bg-cover bg-fixed"
    >
      <div className="flex place-items-center h-screen">
        <h1 className="p-5 bg-white bg-opacity-30 border-yellow-500 rounded-lg text-yellow-500">About us</h1>
      </div>
    </div>
  )
}

export default About