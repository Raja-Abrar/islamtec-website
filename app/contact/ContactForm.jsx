"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setShowWhatsapp(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Thank you. Please continue on WhatsApp.");
        setShowWhatsapp(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 grid gap-12 lg:grid-cols-2 items-stretch">
      {/* LEFT COLUMN */}
      <div className="bg-muted rounded-2xl p-10 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Why Contact Islamtec?
          </h2>

          <p className="text-textLight leading-relaxed mb-6">
            Islamtec is dedicated to teaching the Qur’an with proper Tajweed in a
            structured and supportive environment, helping students recite with
            confidence and correctness.
          </p>

          <ul className="space-y-3 text-textLight">
            <li>• Child-focused Qur’an learning</li>
            <li>• Tajweed-centered instruction</li>
            <li>• Support for adult learners</li>
            <li>• Clear enrollment guidance</li>
          </ul>
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/923335692879"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="rounded-2xl border border-muted p-10 shadow-sm flex flex-col justify-between">
        <div>
          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />

            <input
              type="tel"
              name="phone"
              placeholder="WhatsApp / Phone (optional)"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-fit"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-sm text-textLight">
                {status}
              </p>
            )}

            {showWhatsapp && (
              <div className="text-center">
                <a
                  href="https://wa.me/923335692879?text=Assalamu Alaikum, I just submitted the contact form on Islamtec."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium underline hover:text-primaryDark"
                >
                  Continue on WhatsApp
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
