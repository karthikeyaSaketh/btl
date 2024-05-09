import React from 'react'
import { FaLink } from "react-icons/fa";
import { FaLocationDot ,FaPhone,FaFacebook,FaWhatsapp ,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='flex flex-col mt-6 justify-center content-center' style={{ "box-shadow": "0px 0px 20px rgba(0,0,0, 0.25)" }}>
            <div className='flex justify-around items-start content-center mt-10'>

                <div className='flex items-baseline gap-6 text-blue-900'>
                    <FaLink />
                    <div className='flex flex-col gap-8'>
                        <h1 className=' font-bold text-2xl'>
                            Quick Links
                        </h1>
                        <div className='flex justify-between align-center gap-8 text-base font-medium'>
                            <div className='flex flex-col gap-8'>
                                <p>Home</p>
                                <p>About Event</p>
                                <p>Competitions</p>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <p>Andhra Tech League</p>
                                <p>Himachal Tech league</p>
                                <p>Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-baseline gap-6 text-blue-900'>
                    <FaLocationDot />
                    <div className='flex flex-col gap-8'>
                        <h1 className=' font-bold text-2xl'>
                            Andhra University Incubation Hub
                        </h1>
                        <div className='flex justify-between align-center gap-8 text-base font-medium '>
                            <div className='flex flex-col gap-8'>
                                <p>Andhra University College of Engineering,</p>
                                <p>A-Hub, Andhra University North Campus</p>
                                <p>Maddilapalem,Visakhapatnam,</p>
                                <p>Andhra Pradesh 530003</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-start justify-start gap-6 text-base font-medium text-blue-900'>
                    <div className='flex items-baseline gap-6'>
                        <FiMail/>
                        <div className='font-bold text-2xl'>bharattechleague@gmail.com</div>
                    </div>
                    <div className='flex items-baseline gap-6'>
                        <FaPhone/>
                        <div className='font-bold text-2xl'>77999 11213 / 77999 11214</div>
                    </div>
                    <div className='flex items-baseline gap-6 text-2xl'>
                        <FaFacebook/>
                        <FaWhatsapp/>
                        <FaLinkedinIn/>
                        <FaInstagram />
                        <FaYoutube/>
                    </div>
                </div>
            </div >

            <div className='flex justify-center my-10'>
                <div className=' w-[1180px] h-1' style={{ "background": "-webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 119, 181, 1) 19%, rgba(241, 102, 0, 1) 52%, rgba(27, 133, 52, 1) 84%, rgba(255, 255, 255, 1) 100%)" }}>
                </div>
            </div>
        </div >
    )
}

export default Footer;