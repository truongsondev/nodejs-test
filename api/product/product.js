class api {
    home(req,res) {
        res.json({
            msg:"success fully"
        })
    }
}

module.exports = new api();

