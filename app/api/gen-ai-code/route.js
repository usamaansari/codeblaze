
import { codeChat } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req){
    const {prompt} = await req.json();
    console.log("Prompt", prompt)
    try {
        const result = await codeChat.sendMessage({message:prompt});
        const AIResp = result.text;
        console.log(AIResp)
        const jsonMatch = AIResp.match(/```json\s*([\s\S]*?)\s*```/);

if (jsonMatch && jsonMatch[1]) {
  const jsonString = jsonMatch[1];
  return NextResponse.json(JSON.parse(jsonString))
}
else{
    return NextResponse.json(JSON.parse(AIResp))
}
       
    } catch (error) {
        return NextResponse.json({error:error.message || "Unexpected error"})
    }
}