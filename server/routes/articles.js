const { getById, getAll, authenticate, getAllStores, updateArticle } = require("../repositories/repository");

const getRoutes = app => {
    app.get("/articles", async (req, res) => {
        res.send(await getAll())
    });

    app.get("/articles/:id", async (req, res) => {
        const id = req.params.id;
        res.send(await getById(id))
    });

    // post request to authenticate user
    app.post('/user', async (req, res) => {
        // getting the username & password from req body
        const { username, password } = req.body
        // authenticating the user. Check the inner function
        res.send(authenticate(username, password))
    })

    // route for stores
    app.get('/stores', async (req, res) => {
        res.send(await getAllStores());
    })

    // reduce quantity
    app.put('/articles/:id', async (req, res) => {
        const id = req.params.id;
        const { quantity } = req.body
        res.send(await updateArticle(id, quantity))
    })
}
module.exports = getRoutes;