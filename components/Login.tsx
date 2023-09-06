'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import chatImage from '../public/chatgpt.png'

const Login = () => {
    return (
        <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'>
            <Image src={chatImage}
                width={300}
                height={300}
                alt='logo'
            />
            <button onClick={() => signIn('google')} className='text-white font-bold text-3xl animate-pulse'>Sign In to use Dialogix Engine</button>
        </div>
    )
}

export default Login;