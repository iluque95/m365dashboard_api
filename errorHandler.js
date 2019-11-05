module.exports = (error, request, response) => {
    let status = error.status || 400
    response.status(status)
    response.json({success: false, message: error.message})
}