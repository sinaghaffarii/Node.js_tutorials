async function getProfile(req, res) {
    return res.send(req.user)
}


module.exports = {
    getProfile
}