


import Form from 'next/form'
import { filterOrders } from "@/server/mutations/order";
import FilterDropdown from './FilterDropDown';
import { orderByOptions, orderDirectionOptions, orderStatus } from './constants';



type ProductFiltersProps = {
  status?: string;
  orderBy?: string;
  direction?: string;
};

export default function ProductFilters({ status, orderBy, direction }: ProductFiltersProps){



 

    return (
        <Form action={filterOrders} className="flex gap-5 items-center">
            <div>
                <p className="mb-1">Status</p>
   <FilterDropdown defaultValue={status ?? ""} name={"status"} fields={orderStatus}/>
            </div>
            <div>
                      <p className=" mb-1">Order by</p>
   <FilterDropdown defaultValue={orderBy ?? ""}  name="orderBy" fields={orderByOptions}/>
            </div>
            <div>
                        <p className=" mb-1">Order</p>
   <FilterDropdown defaultValue={direction ?? ""} name="order" fields={orderDirectionOptions}/>
            </div>
            <div className="mt-6">
  
            </div>
        
         
         
        </Form>
    )
}