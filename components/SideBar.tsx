'use client'
import { collection } from "firebase/firestore";
import NewChat from "./NewChat";
import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

const SideBar = () => {
    const { data: session } = useSession();
    // console.log(session)

    const [chats, loading, error] = useCollection(
        session && collection(db, "users", session.user?.email!, "chats")
    )

    // console.log(chats);

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    {/* New Chat */}
                    <NewChat />
                    <div className="hidden sm:inline">
                        {/* Model Selection */}
                        <ModelSelection />
                    </div>
                    <div className="flex flex-col space-y-2 my-2">
                        {
                            loading && (
                                <div className="animate-pulse text-center text-white">
                                    <p>Loading Chats...</p>
                                </div>
                            )
                        }
                        {/* Map through the chatRows */}
                        {chats?.docs.map(chat => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))}
                    </div>
                </div>
            </div>
            {
                session && (
                    <>
                        <img
                            src={session.user?.image!}
                            alt="userImage"
                            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
                        />
                        <button
                            onClick={() => signOut()}
                            className="text-xl font-bold text-white"
                        >LogOut</button>
                    </>
                )
            }
        </div>
    )
}

export default SideBar;