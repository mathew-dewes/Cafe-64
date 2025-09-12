

type ProductStat = {
  name: string;
  sales: number;
};

type SalesReport = {
  topSelling: ProductStat[];
  lowPerforming: ProductStat[];
};


export default function TopSelling({products}: {products: SalesReport}
){
    return (
        <div>
                  <h1>Top selling products</h1>
<div>
                        {products.topSelling.map((product, key)=>{
                            return <p key={key}><span>{product.name}</span> - sales x {product.sales}</p>
                        })}
            
                    </div>
        </div>
    )
}