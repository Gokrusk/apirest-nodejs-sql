import { Router } from 'express'
import { countProduct, createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/products.controller.js'

const routers = Router()

routers.get('/producto', getAllProducts)

routers.get('/producto/:id', getProductById)   // id

routers.get('/producto/count', countProduct)

routers.post('/producto', createProduct)

routers.put('/producto/:id', updateProduct)   // id

routers.delete('/producto/:id', deleteProduct)   // id


export default routers