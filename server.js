import express from 'express';

import path from 'path';

const app = express();

app.use(express.json());

app.use (express.static(path.join(__dirname, 'public')));

app.use('/api/notes', require('./middleware/api'));

app.use('/', require('./middleware/html'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}....`);
});



