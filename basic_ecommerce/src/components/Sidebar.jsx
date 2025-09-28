import products from "../products.json"




const Sidebar = ({brands,priceRange,setPriceRange,selectedBrand,setSelectedBrand,selectedRam,setSelectedRam,selectedStorage, setSelectedStorage})=>{

    // Get Ram in Assending Order
    const ramOptions = [...new Set(products.map((p)=>p.ram).sort((a,b)=>a-b))]
    // Get Storage in Assending Order
    const storageOptions = [...new Set(products.map((p)=>p.storage).sort((a,b)=>a-b))]

    // Min and max Price Amount for Dynamic Change
    const minPrice = Math.min(...new Set(products.map((p)=>p.price)))
    const maxPrice = Math.max(...new Set(products.map((p)=>p.price)))
    
    
    return(
        <div className="w-64 bg-emerald-100 p-4 h-screen sticky top-16 shadow-inner overflow-y-auto">
            <h2 className="text-xl font-bold text-emerald-800 mb-6">Filters</h2>
            {/* Brand Filter  */}
            <div className="mb-6">
                <h3 className="font-medium text-emerald-800 mb-2">Brands</h3>
                {brands.map((brand,index)=>(
                    <label className="flex items-center gap-1" key={index}>
                        <input type="checkbox" className="accent-emerald-800" onChange={()=>setSelectedBrand(selectedBrand.includes(brand)?selectedBrand.filter((b)=>b!==brand):[...selectedBrand,brand])}/>
                        {brand.charAt(0).toUpperCase()+brand.slice(1)}
                    </label>
                ))}
            </div>
            
            
            {/* Price Range */}
                <div className="mb-6">
                    <h3 className="font-medium text-emerald-800 mb-2">Price Range</h3>
                    <input type="range" className="w-full accent-emerald-800 mb-3" min={minPrice} max={maxPrice} value={priceRange[1]}
                    onChange={(e)=>setPriceRange([minPrice, parseInt(e.target.value)])}/>
                    <div className="flex justify-between text-emerald-800 text-sm">
                        <span>₹ {priceRange[0]}</span>
                        <span>₹ {priceRange[1]}</span>
                    </div>
                </div>


            {/* Ram */}

            <div className="mb-6">
                 <h3 className="font-medium text-emerald-800 mb-2">RAM</h3>
                 <select className="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-100 p-2" value={selectedRam} onChange={(e)=>setSelectedRam(e.target.value?parseInt(e.target.value):null)}>
                    <option value="">All</option>
                    {
                        ramOptions.map((ram)=>(
                           <option value={ram} key={ram}>{ram} GB</option>
                        ))
                    }
                 </select>
            </div>
            {/* Storage */}
            <div className="mb-6">
                 <h3 className="font-medium text-emerald-800 mb-2">STORAGE</h3>
                 <select className="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-100 p-2" value={selectedStorage} onChange={(e)=>setSelectedStorage(e.target.value?parseInt(e.target.value):null)}>
                    <option value="">All</option>
                    {
                        storageOptions.map((storage)=>(
                           <option value={storage} key={storage}>{storage} GB</option>
                        ))
                    }
                 </select>
            </div>
            
        </div>
    )
}

export default Sidebar