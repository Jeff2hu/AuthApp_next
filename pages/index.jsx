import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Button from '../components/button'

import { useSession, getSession, signOut } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data:session } = useSession()

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
  return(
    <div>
      <h1 className='text-3xl font-bold underline text-center'>Welcome Back !</h1>
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
      <Button text="Sign Out" callBack={()=>{signOut()}} />
    </div>
  )
}

// const Guest = () => {
//   return(
//     <div>
//       <h1 className='text-3xl font-bold underline text-center'>Hello !</h1>
//       <div className='flex flex-col justify-center items-center gap-6'>Do you already have an account?
//         <div className='flex gap-10'>
//           <Link href="/login" className='py-2 px-4 bg-black text-white rounded-xl hover:bg-slate-600 hover:drop-shadow-lg hover:-translate-y-2 transition-all'>Click me!</Link>
//           <Link href="/register" className='py-2 px-4 bg-slate-200 text-black rounded-xl hover:bg-slate-700 hover:text-white hover:drop-shadow-lg hover:-translate-y-2 transition-all'>Sign up Click me!</Link>
//         </div>
//       </div>
//     </div>
//   )
// }

export async function getServerSideProps({req}){
  const session = await getSession({req})

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
