import { NextRequest, NextResponse } from "next/server";
import { create,all } from "@/data/Customer";
import { Customer } from "@/type";
import { customerValidation } from "@/lib/Validation";

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
    const data:Customer=await req.json()
    customerValidation.parse(data)
    const result = await create(data);
    return NextResponse.json({result});
  } catch (error) {
    return NextResponse.json({error},{status:400});
  }
}
