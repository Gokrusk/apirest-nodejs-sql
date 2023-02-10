import { getConnection, sql } from '../database/connection'

const tableName = 'PRODUCTO'

export const getProduct = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request().query(`SELECT * FROM ${tableName}`)
    console.log(result)

    res.json(result.recordset)
}

export const createProduct = async (req, res) => {

    const { cat_nom, cat_os } = req.body

    if (cat_nom == null || cat_os == null) {
        return res.status(400).json({ msg: `Llena todos los campos` })

    }

    const pool = await getConnection()
    try {
        await pool.request()
            .input('cat_nom', sql.VarChar, cat_nom)
            .input('cat_os', sql.VarChar, cat_os).query(`INSERT INTO ${tableName} VALUES (@cat_nom, @cat_os)`)
        res.json('NEW PRODUCT')

    } catch (error) {
        res.json(error.message)
    }


}


