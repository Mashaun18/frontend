import React from "react"
import Link from "next/link"
export default function Courses() {
    return (
        <nav className="flex justify-around h-10 bg-blue-800 text-white text-2xl">
            <Link href = '/course'><li>All</li></Link>

            <Link href = '/course/Fiction'><li>Fiction</li></Link>

            <Link href = '/course/Non-Fiction'><li>Non-Fiction</li></Link>

           <Link href = '/course/Self-Help'><li>Self-Help</li></Link> 

           <Link href = '/course/Thriller'><li>Thriller</li></Link> 

           <Link href = '/course/Memoir'><li>Memoir</li></Link> 

           <Link href = '/course/Fantasy'><li>Fantasy</li></Link> 
        </nav>
    )
    
  }