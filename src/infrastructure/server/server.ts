import express from 'express';
import  app  from '../../interfaces/http/app';

const server = express();
const port = process.env.PORT || 3000;

server.use(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});