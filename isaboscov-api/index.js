import express from 'express';
import bodyParser from 'body-parser';
import quotesRoutes from './routes/quotes.js';
import quotes from "./quotes-list.js"

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/quotes', quotesRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Homepage.')
});

// returns random quote

app.get('/quotes/random', (req, res) => {
    res.send(getRandom())
})

function getRandom() {
    let index = Math.floor(Math.random() * (quotes.length - 1))
    return quotes[index]
}

// returns all quotes about specific subject

app.get('/quotes/:subject', (req, res) => {
    res.send(getQuoteBySubject(req.params.subject))
})

function getQuoteBySubject(subject) {
    let subjectFound = quotes.filter((obj) => {
        return obj.subject === subject;
    })
    if (!subjectFound.length) {
        console.log(subject)
        return ('Sorry, not found. :(')
    }
    return subjectFound;
}

app.listen(PORT, () => console.log(`Server running on port: http://localhost${PORT}`));