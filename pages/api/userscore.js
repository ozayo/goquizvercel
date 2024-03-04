import { store } from '@vercel/storage';

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const scoreData = await store.get("scoreData", { provider: 'userscore' });
            res.status(200).json(scoreData || []);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error reading score data" });
        }
    } else if (req.method === "POST") {
        try {
            const { username, score } = req.body;
            const existingScoreData = await store.get("scoreData", { provider: 'userscore' }) || { scores: [] };
            existingScoreData.scores.push({ username, score });
            await store.set("scoreData", existingScoreData, { provider: 'userscore' });
            res.status(200).json({ message: "Score updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error updating score data" });
        }
    } else if (req.method === "DELETE") {
        try {
            await store.remove("scoreData", { provider: 'userscore' });
            res.status(200).json({ message: "User scores cleared successfully." });
        } catch (error) {
            console.error("Error clearing user scores:", error);
            res.status(500).json({ message: "Failed to clear user scores." });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
