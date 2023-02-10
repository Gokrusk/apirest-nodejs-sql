import { getConnection, sql, queries } from '../database/index.js'

export const getAllProducts = async (req, res) => {

    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .query(queries.getAllProducts)
        console.log(result)

        res.json(result.recordset)

    } catch (error) {
        res.status(400)
        res.send(error.message)
    }
}

export const getProductById = async (req, res) => {

    const { id } = req.params

    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('Id', id)
            .query(queries.getProduct)

        res.json(result.recordset)

    } catch (error) {
        res.status(400)
        res.send(error.message)
    }
}

export const countProduct = async (req, res) => {

    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .query(parseInt(queries.countProduct))

        res.json(result.recordset[0][''])

    } catch (error) {
        res.status(400)
        res.send(error.message)
    }
}

export const createProduct = async (req, res) => {

    const { cat_nom, cat_os } = req.body

    if (cat_nom == null || cat_os == null) {
        return res.status(400).json({ msg: `Llena todos los campos` })
    }

    try {
        const pool = await getConnection()
        await pool.request()
            .input('nombre', sql.VarChar, cat_nom)
            .input('descripcion', sql.VarChar, cat_os)
            .query(queries.createProduct)

        res.json({ cat_nom, cat_os })

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const deleteProduct = async (req, res) => {

    const { id } = req.params

    try {
        const pool = await getConnection()
        await pool.request()
            .input('Id', id)
            .query(queries.deleteProduct)

        res.json(`PRODUCTO ELIMINADO`)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const updateProduct = async (req, res) => {

    const { id } = req.params
    const { cat_nom, cat_os } = req.body

    if (cat_nom == null || cat_os == null) {
        return res.status(400).json({ msg: `Llena todos los campos` })
    }

    try {
        const pool = await getConnection()
        await pool
            .request()
            .input('cat_nom', sql.VarChar, cat_nom)
            .input('cat_os', sql.VarChar, cat_os)
            .input('cat_id', sql.Int, id)
            .query(queries.updateProduct)

        res.json(`PRODUCTO ACTUALIZADO`)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
