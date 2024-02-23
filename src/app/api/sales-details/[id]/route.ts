import { update,find, remove } from "@/data/DetailPenjualan";
import { DPValidation } from "@/lib/Validation";
import { DetailPenjualan } from "@/type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await find(params.id);
    return NextResponse.json({result});
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data: DetailPenjualan = await req.json();
    DPValidation.parse(data)
    const result = await update(data, params.id);
    return NextResponse.json({result});
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await remove(params.id);
    return NextResponse.json({result});
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
