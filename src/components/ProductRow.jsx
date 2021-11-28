
function ProductRow({ product }){
    const product_name = product.stocked ? product.name : 
        <span style={{ color: "red"}}>
            {product.name}
        </span>
    
    return (
        <tr>
            <td>{product_name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow