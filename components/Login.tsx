'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import chatImage from '../public/logo.jpeg'

const Login = () => {
    return (
        <div className='bg-[#20B2FF] h-screen flex flex-col items-center justify-center text-center'>
            <Image src={chatImage}
                width={300}
                height={300}
                alt='logo'
            />
            <button onClick={() => signIn('google')} className='text-white font-bold text-3xl bg-black px-4 py-2 rounded-md border-[1px] border-white '>Sign In</button>
        </div>
    )
}

export default Login;