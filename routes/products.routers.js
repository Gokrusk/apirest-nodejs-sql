import { Router } from 'express'
import { countProducts, createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/products.controller.js'

const routers = Router()

routers.get('/producto', getAllProducts)

routers.get('/producto/count', countProducts)

routers.get('/producto/:id', getProductById)   // id

routers.post('/producto', createProduct)

routers.put('/producto/:id', updateProduct)   // id

routers.delete('/producto/:id', deleteProduct)   // id

export default routers