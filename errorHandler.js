module.exports = (error, request, response, next) => {
    let status = error.status || 400
    response.status(status)
    response.json({success: false, error_code: status, message: error.message})
}