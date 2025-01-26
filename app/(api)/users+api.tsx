require('dotenv').config();

const { neon } = require('@neondatabase/serverless');


const sql = neon(`${process.env.DATABASE_URL}`);



export async function POST (request:Request){
    try {
     const {name,email,clerkId} = await request.json()
    if(!name || !clerkId || !email ) return Response.json({error: 'Missing required Fields'})

   const response = await sql` INSERT INTO users (name,email,clerk_id) VALUES (${name},${email},${clerkId})`
   console.log(" response from apidb : ",response)
   return new Response(JSON.stringify({data:response}),{status:201})
    } catch (error) {
        console.log(error)
        return Response.json({error:error},{status:500})
    }
   
}