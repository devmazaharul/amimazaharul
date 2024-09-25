
import  Nodemailer  from 'nodemailer';
import { NextResponse } from 'next/server';


export const POST=async(req)=>{
    const {messagebody}=await req.json();
   

try {
    const transporter = Nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "Gmail",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "freelancermazaharul1@gmail.com",
          pass: "xptt cdyz votj bcby",
        },
      }); 

      const info = await transporter.sendMail({
        from: '"amimazaharul"<freelancermazaharul1@gmail.com>',
        to: "expertmazaharul@gmail.com", // list of receivers
        subject: "Thanks for contact", // Subject line
        html: `<p style={{fontFamily:"monospace"}}>${messagebody}</p>`
      });
      if(info){
        return NextResponse.json({status:200,message:"Success"});

      }else{
        return NextResponse.json({status:201,message:"faild"});
      }
} catch (error) {
    return NextResponse({status:500,message:"error"})
}




}


