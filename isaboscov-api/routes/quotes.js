import express from "express";
import quotes from "../quotes-list.js"

const router = express.Router();

// all routes in here are starting with /quotes
router.get('/', (req, res) => {
    res.send(quotes)
})

export default router;