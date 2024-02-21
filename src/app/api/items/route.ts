import { NextRequest, NextResponse } from "next/server";
import { create,all } from "@/data/Items";
import { Item } from "@/type";
import { itemsValidation } from "@/lib/Validation";

export async function GET() {
  try {
    const result = await all();
    return NextResponse.json({result});
  } catch (error) {
    return NextResponse.json({error},{status:400});
  }
}

export async function POST(req: NextRequest) {
  try {
    const data:Item=await req.json()
    itemsValidation.parse(data)
    const result = await create(data);
    return NextResponse.json({result});
  } catch (error) {
    return NextResponse.json({error},{status:400});
  }
}
