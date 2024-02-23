import { update, find, remove } from "@/data/User";
import { verifyPassword } from "@/lib/Password";
import { usersValidation } from "@/lib/Validation";
import { User } from "@/type";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await find(params.id);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data: User<{ password?: string }> = await req.json();
    usersValidation.parse(data);
    if (await verifyPassword(data.password!, params.id)) {
      delete data.password;
      const result = await update(data, params.id);
      return NextResponse.json({ result });
    }
    throw new ZodError([{message:'Not match',path:['password'],code:'custom'}]);
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ err }, { status: 400 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await remove(params.id);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
