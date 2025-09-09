import { isAuthenticated } from "@/server/auth/session";
import AddProductForm from "../_components/AddProductForm";


export default async function page(){

        await isAuthenticated()
    return (
        <div>
            <h1 className="text-xl font-semibold mb-10">Add product</h1>
          <AddProductForm/>
        </div>
    )
}