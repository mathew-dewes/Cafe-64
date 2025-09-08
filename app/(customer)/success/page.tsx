
import prisma from '@/server/db/prisma';
import { stripe } from '@/server/services/stripe'
import { redirect } from 'next/navigation'
import SuccessClient from '../_components/SuccessClient';



export default async function SuccessPage({ searchParams }:{
  searchParams: Promise<{session_id: string}>
}) {


  const { session_id } = await searchParams

  

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {metadata , status } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    
    const order_id = metadata?.orderId;

  const order = await prisma.order.update({
      where:{
        id: order_id
      },
      data:{
        paymentStatus:"paid",
        status: "READY"

  
      },
      include:
      {customer: true}
    });

  

    return (

      <section id="success">
              <SuccessClient name={order.customer!.name}   />
 
      </section>
    )
  }
}