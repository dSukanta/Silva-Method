import React, { createContext, useEffect, useState } from 'react';
import useFirebase from '../hooks/useFirebase';
import { useMediaQuery } from 'react-responsive';
import { googleLogout } from '@react-oauth/google';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext();

const AllContext = ({children}) => {

    const [isUserLoggedIn,setIsUserLoggedIn] = useState(()=>{
        if(localStorage.getItem("token")){
            return true
        }else if(localStorage.getItem("google_login")){
            return true
        }else{
            return false
        }
    });
    const [userData,setUserData] = useState(null);


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    // Slick ArrowLeft
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <i className="fas fa-arrow-left"></i>
        </button>
    );
    // Slick Arrow Right
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <i className="fas fa-arrow-right"></i>
        </button>
    );

    const logout = ()=>{
        const googleLoggedIn = localStorage.getItem("google_login");
        if(googleLoggedIn){
            googleLogout()
            localStorage.removeItem("google_login");
        }
        const token = localStorage.getItem("token");
        if(token){
            localStorage.removeItem("token");
        }
        setUserData(null);
        setIsUserLoggedIn(false)
        toast.success("Logged Out successfully")
    }

    const [stickyMenu, setStickyMenu] = useState(false);
    // sticky
    useEffect(() => {
        const stickyMenuBar = () => {
            if (window.scrollY > 80) {
                setStickyMenu(true)
            }
            else {
                setStickyMenu(false)
            }
        }
       window.addEventListener('scroll', stickyMenuBar);
    },[])

    const [isOpen, setIsOpen] = useState(false);


    const value = {
        auth: useFirebase(),
        isOpen,
        setIsOpen,
        stickyMenu,
        SlickArrowLeft,
        SlickArrowRight,
        isDesktopOrLaptop,
        isBigScreen,
        isTabletOrMobile,
        isPortrait,
        isRetina,
        isUserLoggedIn,
        setIsUserLoggedIn,
        userData,
        setUserData,
        logout
    }
    return (
       <>
           <AuthContext.Provider value={value}>
                {children}
           </AuthContext.Provider>
       </>
    );
};

export default AllContext;