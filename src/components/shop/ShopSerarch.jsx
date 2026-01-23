function ShopSearch({searchTerm,setSearchTerm}){
    return(
       
            <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
        
    );
}

export default ShopSearch;