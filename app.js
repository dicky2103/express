const exprees = require('express');
const path = require('path');
const app = exprees();
const router = require('./routes');
const log = require('./middleware/logger');

app.use(log);
app.use(exprees.urlencoded ({extended: true}));
app.use(exprees.json());
app.use(express.static(path.join(__dirname, 'uploads')))
app.use(router);
app.use((req, res ,next) =>{
    res.send({
        status:'failed',
        message:'Resource' + req.originalUr + 'not found'
    });
});
app.listen(3000, () => console.log ('Server: http://localhost:3000'))

