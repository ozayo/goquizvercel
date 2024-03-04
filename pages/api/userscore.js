import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const scoreData = await kv.get("scoreData");
            res.status(200).json(scoreData || []);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error reading score data" });
        }
    } else if (req.method === "POST") {
        try {
            const { username, score } = req.body;
            const existingScoreData = (await kv.get("scoreData")) || { scores: [] };
            existingScoreData.scores.push({ username, score });
            await kv.put("scoreData", existingScoreData);
            res.status(200).json({ message: "Score updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error updating score data" });
        }
    } else if (req.method === "DELETE") {
        try {
            await kv.delete("scoreData");
            res.status(200).json({ message: "User scores cleared successfully." });
        } catch (error) {
            console.error("Error clearing user scores:", error);
            res.status(500).json({ message: "Failed to clear user scores." });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
