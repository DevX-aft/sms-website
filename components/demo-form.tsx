"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ROLES = [
  "Head / Principal",
  "Deputy Head",
  "Teacher",
  "ICT / Technician",
  "Administrator / Bursar",
  "Other",
] as const

export function DemoForm() {
  const [name, setName] = useState("")
  const [school, setSchool] = useState("")
  const [role, setRole] = useState<string>("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !school.trim() || !role || !email.trim()) {
      setStatus("error")
      setMessage("Please fill in name, school, role, and email.")
      return
    }

    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          school: school.trim(),
          role,
          email: email.trim(),
          phone: phone.trim(),
          notes: notes.trim(),
          source: typeof window !== "undefined" ? window.location.href : "",
        }),
      })

      const data = (await res.json().catch(() => ({}))) as { error?: string }

      if (!res.ok) {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again or email sales@afrainity.com.")
        return
      }

      setStatus("success")
      setMessage("Thank you — we will be in touch shortly.")
      setName("")
      setSchool("")
      setRole("")
      setEmail("")
      setPhone("")
      setNotes("")
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again or email sales@afrainity.com.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="demo-name">Full name</Label>
        <Input
          id="demo-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-school">School name</Label>
        <Input
          id="demo-school"
          name="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
          placeholder="Official school name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-role">Your role</Label>
        <Select value={role} onValueChange={setRole} required>
          <SelectTrigger id="demo-role">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            {ROLES.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-email">Work email</Label>
        <Input
          id="demo-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@school.ac.zw"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-phone">Phone (optional)</Label>
        <Input
          id="demo-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+263 …"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-notes">Anything we should know? (optional)</Label>
        <Textarea
          id="demo-notes"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="e.g. number of students, campuses, timeline…"
          className="resize-y min-h-[100px]"
        />
      </div>

      {message ? (
        <p
          className={`text-sm ${status === "success" ? "text-primary" : status === "error" ? "text-destructive" : "text-muted-foreground"}`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      ) : null}

      <Button type="submit" className="w-full sm:w-auto" disabled={status === "loading"} size="lg">
        {status === "loading" ? "Sending…" : "Request a demo"}
      </Button>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Your details are sent securely to our team. Hosting uses a server-side hook — configure{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-[0.8rem]">DEMO_FORM_WEBHOOK_URL</code>{" "}
        for your Google Sheet / Apps Script endpoint.
      </p>
    </form>
  )
}
