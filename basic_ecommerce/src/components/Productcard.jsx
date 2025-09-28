const Productcard = ({product,addToCart})=>{
    const {id,name,brand,color,ram,storage,display,mrp,price,image} = product
    return(
        <div className="bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-200 rounded">
            <img src={image} alt={name} className="w-full h-42 object-contain mb-4" />
            <h3 className="text-md text-emerald-500 text-semibold mb-3 ">{name.charAt(0).toUpperCase()+name.slice(1)}</h3>
            <p className="text-gray-500 mb-1">{brand.charAt(0).toUpperCase()+brand.slice(1)} | {color}</p>
            <p className="text-gray-500 mb-1">{ram} GB Ram | {storage} GB Storage</p>
            <p className="text-gray-500 mb-4">{display}" Display</p>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xl font-bold text-emerald-800">₹ {price}</p>
                    <p className="text-sm text-gray-400 line-through">₹ {mrp}</p>
                </div>
                <button className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 tansition-all duration-800" onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Productcard