module.exports = (app) => {

    app.get("/access_denied", (req, res) => {
        res.send("access denied")
    })

} 