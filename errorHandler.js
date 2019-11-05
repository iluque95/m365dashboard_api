module.exports = (error, request, response, next) => {
    let status = error.status || 400
    response.status(status)
    response.json({success: false, message: error.message})
}