import express from 'express';
import bodyParser from 'body-parser';
import quotesRoutes from './routes/quotes.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/quotes', quotesRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Homepage.')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost${PORT}`));