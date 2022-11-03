const Users = require('./users.models')
const Posts = require('./posts.models')
const Categories = require('./categories.models')

const initModels = () => {
    //* 1 -> M
    //? una publicacion, pertenece a un Usuario
    Posts.belongsTo(Users)
    //? Un usuario tiene muchas Publicaciones
    Users.hasMany(Posts)

    //* 1 -> M
    //? Una publicacion, pertenece a una categoria
    Posts.belongsTo(Categories)
    //? Una categoria, tiene muchas Publicaciones
    Categories.hasMany(Posts)


}

module.exports = initModels