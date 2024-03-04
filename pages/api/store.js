import { store } from '@vercel/storage';

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const questions = await store.get("questions", { provider: 'userscore' });
            res.status(200).json(questions || []);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error reading questions" });
        }
    } else if (req.method === "POST") {
        try {
            const questions = req.body;
            await store.set("questions", questions, { provider: 'userscore' });
            res.status(200).json({ message: "Questions updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error storing questions" });
        }
    }
}
