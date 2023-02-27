function errorHandling(err,req,res){
    if(err){
        const status = err.status || 500;
        res.status(status).json({
            status: status,
            err: "AN ERROR HAS OCCURRED!"
        });
    }
};

module.exports = {errorHandling}