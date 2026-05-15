"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-[color,box-shadow] duration-500 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:opacity-50";

type BookInquiryFormProps = {
  email: string;
  className?: string;
};

export function BookInquiryForm({ email, className }: BookInquiryFormProps) {
  const [sentHint, setSentHint] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const from = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Website inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${from}`, "", message].join("\n"),
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSentHint(true);
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <label htmlFor="book-name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="book-name"
          name="name"
          type="text"
          autoComplete="name"
          className={fieldClass}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="book-email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="book-email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="book-message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="book-message"
          name="message"
          rows={4}
          required
          minLength={8}
          className={cn(fieldClass, "min-h-[100px] resize-y")}
          placeholder="Share what you are looking for — timing, location, or anything that helps."
        />
      </div>
      {sentHint && (
        <p className="text-sm text-muted-foreground transition-opacity duration-500" role="status">
          If your mail app did not open, you can email directly at {email}.
        </p>
      )}
      <Button
        type="submit"
        className="rounded-md px-6 transition-opacity duration-500 ease-out"
        variant="secondary"
      >
        Send inquiry
      </Button>
    </form>
  );
}
