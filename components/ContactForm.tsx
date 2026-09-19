"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaCircleCheck,
} from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";

const EMAIL = "mprabhath1999@gmail.com";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (values: FormState): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    } else if (values.name.trim().length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailRegex.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please enter a message.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    return nextErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      const subject = encodeURIComponent(
        `Portfolio Contact from ${form.name.trim()}`
      );
      const body = encodeURIComponent(
        `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

      setIsSending(false);
      setIsSubmitted(true);
    }, 900);
  };

  const inputBaseClass =
    "w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder-white-200 outline-none transition focus:border-purple focus:ring-1 focus:ring-purple";

  const errorInputClass =
    "border-red-500 focus:border-red-500 focus:ring-red-500";

  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-3xl border border-white/[0.1] p-6 md:p-10 shadow-xl relative overflow-hidden"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center text-center py-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center mb-6"
            >
              <FaCircleCheck className="text-green-400" size={40} />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Message Ready to Send!
            </h3>
            <p className="text-white-200 mb-6 max-w-md">
              Your email client has opened with your message. If it didn&apos;t
              open automatically, make sure your email is configured. Thanks
              for reaching out!
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setForm({ name: "", email: "", message: "" });
                setErrors({});
              }}
              className="text-sm text-purple underline underline-offset-4 hover:opacity-80 transition"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-white-200"
              >
                <FaUser className="text-purple" /> Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                className={`${inputBaseClass} ${errors.name ? errorInputClass : "border-white/[0.1]"}`}
              />
              {errors.name && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
                  <FiAlertCircle /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-white-200"
              >
                <FaEnvelope className="text-purple" /> Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className={`${inputBaseClass} ${errors.email ? errorInputClass : "border-white/[0.1]"}`}
              />
              {errors.email && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
                  <FiAlertCircle /> {errors.email}
                </p>
              )}
            </div>
<div>
              <label
                htmlFor="message"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-white-200"
              >
                <FaPaperPlane className="text-purple" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or just say hello..."
                value={form.message}
                onChange={handleChange}
                className={`${inputBaseClass} resize-none ${errors.message ? errorInputClass : "border-white/[0.1]"}`}
              />
              {errors.message && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
                  <FiAlertCircle /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none disabled:opacity-70"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;