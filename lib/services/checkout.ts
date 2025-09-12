
export async function createCheckoutSession(){

    try {
        const res = await fetch("api/checkout_sessions",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
    
        });

        if (!res.ok) throw new Error ("Failed to create checkout session");
        return await res.json()
    } catch (error) {
        console.log(error)
        return null
        
    }

}