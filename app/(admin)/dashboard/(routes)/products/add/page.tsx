
import AddProductForm from "../_components/AddProductForm";


export default async function page(){

    return (
        <div>
            <h1 className="text-xl font-semibold mb-5">Add product</h1>
          <AddProductForm/>
        </div>
    )
}