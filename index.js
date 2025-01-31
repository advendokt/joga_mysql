const express = require('express');
const app = express();

const articlesRouter = require('./routes/articles');

app.use('/articles', articlesRouter);

app.listen(3012, () => {
    console.log('Web server is running on port 3012');
});
