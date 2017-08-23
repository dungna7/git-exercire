var books = {
    getAll: (req,res) => {
        let allbooks = data
        res.json(allbooks)
    },

    getOne: (req,res) => {
        let id = req.params.id
        let book = data[id]
        res.json(book)
    },

    create: (req,res) => {
        let newbook = req.body
        console.log(req.body)
        data.push(newbook)
        res.json(data)
    },

    update: (req,res) => {
        let updatebook = req.body
        let id = req.params.id
        console.log(req)
        data[id] = updatebook
        res.json(updatebook)
    },

    delete: (req,res) => {
        let id = req.params.id
        data.splice(id,1)
        res.json(true)
    }
};

module.exports = books;