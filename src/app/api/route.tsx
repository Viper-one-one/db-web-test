// default api route file as supported by next.js
// something for later, working on integrating on PHP for backend

import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({ message: "Hello, World!" });
}

