import { NextRequest, NextResponse } from "next/server";
import {Resend} from 'resend';
import {ContactFormEmail} from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest){
    const body= await req.json();

    const{name, email, phone , service , message} = body;

    if(!message || !email || !name){
        return NextResponse.json(
            {error: "Missing fields"}, {status: 400})
    }

    

    try{
        const {data, error} = await resend.emails.send({
            from: `Website <info@malciconstruction.com>`,
            to: 'malciconstruction@gmail.com',
            subject: 'New submission',
            react: await ContactFormEmail({name, email, message, phone, service})
        })
        if (error) {
            return NextResponse.json(
              { message: "Email sending failed", error },
              { status: 400 }
            );
          }
      
          return NextResponse.json(
            { message: "Email sent successfully", data },
            { status: 200 }
          );
        
    } catch (error){
        console.error("Error sending email: ", error);
        return NextResponse.json({message:'Failed', error},{status:500})
    }


}