import { NextRequest, NextResponse } from "next/server";
import { create, all } from "@/data/User";
import { User } from "@/type";
import { rewriteUser } from "@/lib/Data";

export async function GET() {
  try {
    const result = await all();
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data: User<{ salt: string; hash: string }> = rewriteUser(
      await req.json()
    );
    const result = await create(data);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
