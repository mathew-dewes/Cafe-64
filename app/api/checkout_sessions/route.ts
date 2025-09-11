import { NextResponse } from "next/server"
import { stripe } from "@/server/services/stripe"
import { placeOrder } from "@/server/mutations/order"


export async function POST(req: Request) {
  try {
    const { items, email, customer_id } = await req.json()
    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_APP_URL!;

        const order = await placeOrder(customer_id, items, 'PENDING', "card")

    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      
      
      line_items: items.map((item: { name: string; price: number; quantity: number }) => ({
        price_data: {
          currency: "nzd",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      payment_method_types:["card"],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      metadata:{
         customerId: customer_id,
         orderId: order.id
      }

    });



    return NextResponse.json({ url: session.url })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
