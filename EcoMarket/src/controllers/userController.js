const controller = {
    create: (req, res) => {
        //res.send("Formulario de registro");
        res.render("users/create")
    },
    store: (req, res) =>{
        //guardo el usuario
        console.log(req.body)
        //redirijo al login
        res.redirect("/users/login")
    },
    login: (req, res) => {
        res.render("users/login")
    }
}

module.exports = controller;