"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

const QUICK_REPLIES = [
  "What services do you offer?",
  "How much does it cost?",
  "Book a consultation",
];

const GREETING: Message = {
  id: "greeting",
  role: "bot",
  text: "Hi! Welcome to S & C Business Group. How can we help you today? Ask us anything about our services or click below to book a consultation.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [open, messages]);

  async function sendMessage(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!webhookUrl || webhookUrl.includes("your-n8n-instance")) {
      await new Promise((r) => setTimeout(r, 1200));
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "bot",
          text: "Thanks for your message! Our team will get back to you shortly. You can also book a consultation directly at the link below.",
        },
      ]);
      return;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim() }),
      });
      const data = await res.json();
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "bot",
          text: data.reply ?? data.message ?? "Thanks for reaching out! We'll be in touch soon.",
        },
      ]);
    } catch {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "bot",
          text: "We're having trouble connecting right now. Please try again or book a consultation directly.",
        },
      ]);
    }
  }

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-cream-dark flex flex-col overflow-hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ maxHeight: "520px" }}
      >
        {/* Header */}
        <div className="bg-brand-black px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xs">
                SC
              </span>
            </div>
            <div>
              <p className="font-body text-white text-sm font-medium leading-none">
                S & C Business Group
              </p>
              <p className="font-body text-sage-light text-xs leading-none mt-1">
                Typically replies instantly
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-cream/40">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl font-body text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-sage text-white rounded-br-sm"
                    : "bg-white text-brand-black border border-cream-dark rounded-bl-sm shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-white border border-cream-dark rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1 items-center">
                  <span className="w-2 h-2 bg-sage-light rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-sage-light rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-sage-light rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick replies */}
        <div className="px-4 py-2 flex gap-2 overflow-x-auto shrink-0 border-t border-cream-dark bg-white">
          {QUICK_REPLIES.map((qr) => (
            <button
              key={qr}
              onClick={() => sendMessage(qr)}
              className="shrink-0 text-xs font-body text-sage border border-sage-light rounded-full px-3 py-1.5 hover:bg-sage hover:text-white transition-colors whitespace-nowrap"
            >
              {qr}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-cream-dark bg-white flex items-center gap-2 shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Type a message..."
            className="flex-1 font-body text-sm bg-cream rounded-full px-4 py-2 outline-none border border-cream-dark focus:border-sage transition-colors text-brand-black placeholder:text-muted"
          />
          <button
            onClick={() => sendMessage(input)}
            className="w-9 h-9 bg-sage hover:bg-sage-dark rounded-full flex items-center justify-center transition-colors shrink-0"
            aria-label="Send message"
          >
            <Send size={15} className="text-white" />
          </button>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-sage hover:bg-sage-dark rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
        aria-label="Open chat"
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}
      </button>
    </>
  );
}
