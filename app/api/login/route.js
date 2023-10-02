import { NextResponse } from "next/server";

export const POST = (request) => {
  try {

    const { email, password } = request.json();

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
