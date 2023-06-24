const {constants} = require("../constants")
const errHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({title:"Not found", message: err.message, stackTrace: err.stack})
            break;
        case constants.VALIDATION_ERROR:
            res.json({title:"validation failed", message: err.message, stackTrace: err.stack})
            break;
        case constants.FORBIDDEN:
            res.json({title:"forbidden", message: err.message, stackTrace: err.stack})
            break;
        case constants.SERVER_ERROR:
            res.json({title:"server-error", message: err.message, stackTrace: err.stack})
        case constants.UNAUTHORIZED:
            res.json({title:"unauthorized", message: err.message, stackTrace:err.stack})
        default:
            console.log(err)
            ;
    }


   
  
}

module.exports = errHandler;


