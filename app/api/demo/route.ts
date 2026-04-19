import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const webhook = process.env.DEMO_FORM_WEBHOOK_URL?.trim()
  if (!webhook) {
    return NextResponse.json(
      {
        error:
          "Demo submissions are not configured yet. Set DEMO_FORM_WEBHOOK_URL or email sales@afrainity.com.",
      },
      { status: 503 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    return NextResponse.json(
      { error: "Could not reach the form handler. Try again later." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
