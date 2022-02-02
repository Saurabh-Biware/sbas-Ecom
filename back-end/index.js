import cors from 'cors';
import express from 'express';

import bodyParser from "body-parser"
import usersRoutes from './routes/users.js';

const app = express();

app.use(cors());
const PORT = 5000;
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
