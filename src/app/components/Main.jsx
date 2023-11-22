import Image from 'next/image'
import React from 'react'
import pic from '../images/photo-1497633762265-9d179a990aa6.webp'

export default function Main() {
  return (
    <div>
        <h1 className='text-5xl'>Mashaun's Library</h1>
        <section className='grid grid-cols-2'>

        <Image src='/media/photo-1513001900722-370f803f498d.webp' alt='books' width={600} height={500}/>

        <Image src='/media/book.webp' alt='books' width={600} height={500}/>

        <Image src='https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='books' width={600} height={500}/>

        </section>

        <Image src={pic} alt='books' width={600} height={500}/>
        
    </div>
  )
}
