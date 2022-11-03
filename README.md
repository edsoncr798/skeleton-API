# Blog API

- Front:
    - Obtener todas las publicaciones
    - Obtener una en especifico
    - Obtener todas las categorias
    - Obtener todos los Post de una categoria en especifico
    - Obtener todos los posts que he creado
    - Obtener los posts de un usuario en especifico
    - Podemos paginar los posts
    - Acciones de CRUD sobre Posts
    - Crear categorias

```json
    {
        "total": 68,
        "prev": "localhost:9000/api/v1/posts?start=51&limit=60",
        "next":"localhost:9000/api/v1/posts?start=61&limit=68",
        "data":[
            {
                "id": 1,
                "title": "ejemplo",
                "content":"lorem ipsum",
                "createdBy":{
                    "id": 18,
                    "name": "edson",
                    "email": "edson@academlo.com"
                },
                "category":{
                    "id": 4,
                    "name": "tecnologia"

                }
            }
        ]
    }
```


/api/v1

/users
    - /me
    - /me/posts
    - /me/posts/:id
    - /:id

/categories
    - /:id
    - /:id/posts

/posts
    - /:id

