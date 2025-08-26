import React, { useEffect, useState } from 'react'

const useNavbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const toogleNavbar =() => {
        if(window.scrollY > 150) {

            setShowNavbar(true)
        } else {
            setShowNavbar(false)
        }
    }
    console.log(showNavbar);
    

    useEffect(() => {
        window.addEventListener("scroll", toogleNavbar)
        return () => {
        window.removeEventListener("scroll", toogleNavbar)
        }
    },[])
  return {showNavbar}
}

export default useNavbar