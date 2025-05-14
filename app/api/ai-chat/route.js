
import { responseChat } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req){
    const {prompt} = await req.json();
    console.log("Prompt", prompt)
    try {
        const result = await responseChat.sendMessage({message:prompt});
        const AIResp = result.text;
        console.log(AIResp)
        return NextResponse.json({result:AIResp})
    } catch (error) {
        return NextResponse.json({error})
    }
}