import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, Providers } from '../config/firebase'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
            <div className="flex items-center flex-shrink-0 text-yellow-500 mr-6">
                <Link to='/' className="font-semibold text-xl tracking-tight">Kitsune No Sake</Link>
            </div>
            <div className="block">
                <button 
                    onClick={dropDown}
                    className="flex items-center px-2 py-4 text-yellow-500 border rounded
                    border-white hover:text-yellow-700 hover:border-slate-500">
                        <i className="fa-xl fa-solid fa-wine-bottle"></i>
                    </button>
            </div>
            { isVisible ? (
                <div className="w-full block flex-grow items-center">
                    <div className="text-sm lg:flex-grow">
                        <Button className="p-3 m-5 bg-slate-700 justify-center">
                            <div>
                                <Link to='/' onClick={clicked} className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-white hover:text-yellow-500">
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-slate-700 justify-center">
                            <div>
                                <Link to='/about' onClick={clicked} className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-white hover:text-yellow-500">
                                    About
                                </Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-slate-700 justify-center">
                            <div>
                                <Link to='/dashboard' onClick={clicked} className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-white hover:text-yellow-500">
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-slate-700 justify-center">
                            <div>
                                <Link to='/dashboard' onClick={clicked} className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-white hover:text-yellow-500">
                                    Sake
                                </Link>
                            </div>
                        </Button>
                        {
                            !auth.currentUser ?

                            <Button className="p-3 m-5 bg-red-200 justify-center">
                                <div>
                                    <Link to='/' onClick={ () => { signInOnClick() }} className='flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-black hover:text-white'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className="p-3 m-5 bg-red-200 justify-center">
                                <div>
                                    <Link to='/' onClick={ () => { signOutOnClick() }} className='flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-black hover:text-white'>
                                        Log Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
  )
}

export default Navbar
