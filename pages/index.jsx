import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Button from '../components/button'
import Image from 'next/image'

import { useSession, getSession, signOut } from 'next-auth/react'

export default function Home() {

  const session = useSession()

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Authentication App with Google & Github Login by Next.js & TailwindCss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='w-screen h-screen flex justify-center items-center'>
        {User({session})}
      </main>
    </>
  )
}

const User = ({session}) => {

  if(session.status === "authenticated"){
    return(
      <div>
        <h1 className='text-3xl font-bold underline'>Welcome Back !</h1>
        <div className='flex my-4'>
          {session.data.user.image && <Image src={session.data.user.image} width={50} height={50} />}
          <div className='ml-5'>
            <p className='text-xs'>name: <span className='text-lg font-bold'>{session.data.user.name}</span></p>
            <p className='text-xs'>mail: <span className='text-lg font-bold'>{session.data.user.email}</span></p>
          </div>
        </div>
        <Button text="Sign Out" style="ml-auto" callBack={()=>{signOut()}} />
      </div>
    )
  }
  
}

export async function getServerSideProps({req}){
  const session = await getSession({req})
  console.log(session)

  if(!session){
    return{
      redirect:{
        destination: "/login",
        permanent: false
      }
    }
  }

  return {
    props:{
      session
    }
  }
}
