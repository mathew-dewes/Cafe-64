import getProducts from "@/server/queries/product";
import CartPreview from "./_components/CartPreview";
import MenuCard from "./_components/MenuCard";



export default async function page(){

const products = await getProducts();

    return (
        <div className="flex gap-30">
  
            <div className="mt-10 flex flex-col gap-20">
  {products?.map((product)=>{
                return <MenuCard id={product.id} description={product.description!} key={product.id} name={product.name} price={product.price}/>
            })}
            </div>
                      <CartPreview/>
        
      
          
      
        </div>
    )
}