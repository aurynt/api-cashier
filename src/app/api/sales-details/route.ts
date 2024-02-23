import { NextRequest, NextResponse } from "next/server";
import { create,all } from "@/data/DetailPenjualan";
import { DetailPenjualan } from "@/type";
import { DPValidation } from "@/lib/Validation";

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
    const data:DetailPenjualan=await req.json()
    DPValidation.parse(data)
    const result = await create(data);
    return NextResponse.json({result});
  } catch (error) {
    return NextResponse.json({error},{status:400});
  }
}
