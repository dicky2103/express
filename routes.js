const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: '/uploads'});

router.get('/', (req,res) =>{
    const{page, total} = req.query;
    res.send({
        status:'Succesfully',
        message:'Welcome to Express JS tutorial',
        page,
        total
    });
});

router.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id
    });
});

router.post('/product/', upload.single('image'), (req, res) =>{
    const (nam, price, stock, statu ) = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, 'public', image.originalname);
        Fs.renameSync(image.path, target)
    }
    req.json({
        nam,
        price,
        stock,
        statu,
        image
    });
});

router.get('/:category/:tag', (req, res) =>{
    const{category, tag} = req.params;
    res.json({category,tag});
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })
s  
module.exports = router;