import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin'
import { adminDb } from '@/firebaseAdmin';

type Data = {
    answer: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { prompt, chatId, model, session } = req.body;
    if (!prompt) {
        res.status(400).json({ answer: "Please provide a prompt!" });
        return;
    }
    if (!chatId) {
        res.status(400).json({ answer: "Please provide a valid chat ID." });
        return;
    }

    // chat gpt query
    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || "Dialogix Engine was unable to find the answer fot that!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "Dialogix Engine",
            name: "Dialogix Engine",
            avatar: "https://res.cloudinary.com/dcgi7rwsp/image/upload/v1694536265/dialogixengine/p41iz5vyidfpfewywwr4.jpg"
        }
    }

    await adminDb.collection("users").doc(session?.user?.email).collection('chats').doc(chatId).collection('messages').add(message);

    res.status(200).json({ answer: message.text });
}