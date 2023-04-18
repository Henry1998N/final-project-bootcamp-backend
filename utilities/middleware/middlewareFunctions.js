const checkServerConnection = (req, res) => {
    res.status(200).send("Connected to server")
}

module.exports = {checkServerConnection}