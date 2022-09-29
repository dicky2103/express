const log = (req,res,next) =>{
    console.log(new Date().toLocaleDateString(),'=>' , req.method, req.originalUr);
    next();
}

module.exports = log;