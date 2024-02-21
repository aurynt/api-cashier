import { update,find, remove } from "@/data/Items";
import { itemsValidation } from "@/lib/Validation";
import { Item } from "@/type";
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
    const data: Item = await req.json();
    itemsValidation.parse(data)
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
