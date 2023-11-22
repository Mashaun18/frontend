import React from 'react'
import { BsLinkedin,BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { MdAddIcCall } from "react-icons/md";

import Link from 'next/link';



export default function Socialicons() {
  return (
    <aside className='flex gap-4'>

        <Link href="https://www.linkedin.com/" target='blank'>
        <BsLinkedin href=''/>
        </Link>


        <Link href="https://www.github.com/" target='blank'>
        <BsGithub />
        </Link>

        <Link href="https://www.instagram.com/?hl=en" target='blank'>
        <BsInstagram />
        </Link>

        <Link href="mailto:animashaunoreoluwa@gmail.com" target='blank'>
        <BiLogoGmail />
        </Link>

        <Link href='Tel:+2348165036870'><MdAddIcCall /></Link>


    </aside>
  )
}
