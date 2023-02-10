import { Router } from "express";
import { createProduct, getProduct } from "../controllers/products.controller"

const router = Router()

router.get('/producto', getProduct)

router.get('/producto', )   // id

router.post('/producto', createProduct)   // id

router.put('/producto', )   // id

router.delete('/producto', )   // id


export default router