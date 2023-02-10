
const tableName = 'PRODUCTO'

export const queries = {
    getAllProducts: `SELECT * FROM ${tableName}`,
    getProduct: `SELECT * FROM ${tableName} WHERE cat_id = @Id`,
    countProduct: `SELECT CAST(COUNT(*) AS INT) FROM ${tableName}`,
    createProduct: `INSERT INTO ${tableName} (cat_nom, cat_os) VALUES (@nombre, @descripcion)`,
    deleteProduct: `DELETE FROM ${tableName} WHERE cat_id = @Id`,
    updateProduct: `UPDATE ${tableName} SET cat_nom = @cat_nom, cat_os = @cat_os WHERE cat_id = @cat_id`
}