


import Form from 'next/form'
import { filterOrders } from "@/lib/mutations/order";
import FilterDropdown from './FilterDropDown';
import { orderByOptions, orderDirectionOptions, orderStatus } from './constants';



type ProductFiltersProps = {
  status?: string;
  orderBy?: string;
  direction?: string;
};

export default function ProductFilters({ status, orderBy, direction }: ProductFiltersProps){



 

    return (
        <Form action={filterOrders} className="flex flex-col lg:flex-row gap-5 items-center">
            <div className='flex gap-5'>
                <div>
                    <p className="mb-1 text-base font-semibold text-center">Status</p>
   <FilterDropdown defaultValue={status ?? ""} name={"status"} fields={orderStatus}/>
                </div>
                <div>
                    <p className=" mb-1 text-base font-semibold text-center">Order by</p>
   <FilterDropdown defaultValue={orderBy ?? ""}  name="orderBy" fields={orderByOptions}/>
                </div>
               
            </div>
            <div>
                        <p className=" mb-1 text-base font-semibold text-center">Order</p>
   <FilterDropdown defaultValue={direction ?? ""} name="order" fields={orderDirectionOptions}/>
            </div>
            <div className="mt-6">
  
            </div>
        
         
         
        </Form>
    )
}