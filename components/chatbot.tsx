"use client";

import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 Welcome to Polyglot Academy. How can I help you choose the right language program today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response after a short delay
    setTimeout(() => {
      setIsTyping(false);
      const botResponses = [
        "That's a great question! Our programs range from conversational labs to intensive certificate courses. Would you like to check out our Spanish or Mandarin program?",
        "We offer flexible hybrid and on-campus formats. You can also book a free 15-minute consultation with an advisor to discuss your goals!",
        "Our upcoming semester starts next month. You can enroll directly on our website or submit an enquiry using the form below.",
        "Sure thing! Speak with our admissions advisors to find the right learning path for you.",
      ];
      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: randomResponse, sender: "bot" },
      ]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[350px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#0931A7] px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/25">
                <span className="material-symbols-outlined text-[20px] select-none">
                  smart_toy
                </span>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0931A7] bg-green-500" />
              </div>
              <div>
                <h4 className="text-sm font-medium leading-tight">
                  Polyglot Assistant
                </h4>
                <span className="text-[10px] font-medium text-white/70">
                  Online • Replies instantly
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] select-none">
                close
              </span>
            </button>
          </div>

          {/* Messages Container */}
          <div className="h-[260px] overflow-y-auto bg-neutral-50 p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-xs ${
                    msg.sender === "user"
                      ? "bg-[#0931A7] text-white rounded-br-none"
                      : "bg-white text-neutral-800 border border-neutral-200 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-1.5 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 shadow-xs rounded-bl-none">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" />
                </div>
              </div>
            )}
          </div>

          {/* Form Input */}
          <form
            onSubmit={handleSend}
            className="flex border-t border-neutral-200 p-3 bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-neutral-100 rounded-xl px-4 py-2 text-sm text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#0931A7]/30 focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0931A7] text-white shadow-xs hover:bg-[#072889] disabled:opacity-40 disabled:hover:bg-[#0931A7] transition-all"
            >
              <span className="material-symbols-outlined text-[18px] select-none">
                send
              </span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0931A7] text-white shadow-lg shadow-[#0931A7]/30 hover:bg-[#072889] hover:shadow-xl hover:shadow-[#0931A7]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        aria-label="Open Chatbot"
      >
        <span className="material-symbols-outlined text-[30px] select-none">
          {isOpen ? "close" : "chat"}
        </span>
      </button>
    </div>
  );
}
