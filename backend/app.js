const express = require('express');

const app = express();

// set up view engine
app.set('view engine', 'ejs');

//create home route

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3001, () => {
    console.log('app now listening for requests on port 3001');
});