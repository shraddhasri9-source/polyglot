"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { useEnquiry } from "@/components/providers/enquiry-provider";

export default function EnquiryModal() {
  const { isOpen, prefilledCourse, closeModal } = useEnquiry();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Sync prefilled course when modal opens
  useEffect(() => {
    if (isOpen) {
      // Direct mapping to valid select values if there's any slight mismatches
      let selectedVal = "";
      if (prefilledCourse) {
        if (prefilledCourse.includes("Spoken English")) {
          selectedVal = "Spoken English & Skills";
        } else if (prefilledCourse.includes("IELTS")) {
          selectedVal = "IELTS & Languages";
        } else if (prefilledCourse.includes("Indian & Foreign") || prefilledCourse.includes("Languages")) {
          selectedVal = "Indian & Foreign Languages";
        } else if (prefilledCourse.includes("Handwriting")) {
          selectedVal = "Handwriting Classes";
        } else {
          selectedVal = "Other";
        }
      }
      setFormData((prev) => ({
        ...prev,
        course: selectedVal,
      }));
      setErrors({});
      setStatus("idle");
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    }
  }, [isOpen, prefilledCourse]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Enter a valid phone number (min 10 digits)";
    }
    if (!formData.course) newErrors.course = "Please select a program";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="absolute inset-0 bg-neutral-900/60 backdrop-blur-xs"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-none border border-neutral-200 bg-white shadow-2xl z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Image of Students */}
            <div className="hidden md:block relative w-full min-h-[540px] bg-neutral-100">
              <img
                src="/students.png"
                alt="Students studying at Polyglot Academy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0931A7]/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-1.5 z-10">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#FBBB6B] bg-white/10 px-2.5 py-0.5 rounded-none backdrop-blur-xs">
                  Polyglot Academy
                </span>
                <h4 className="text-xl font-bold leading-snug drop-shadow-md text-white">
                  Empowering careers through language excellence.
                </h4>
              </div>
            </div>

            {/* Right Column: Form Container */}
            <div className="p-6 sm:p-8 flex flex-col justify-center bg-white relative min-h-[500px]">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 rounded-none p-2 text-neutral-400 hover:bg-neutral-100 hover:text-black hover:rotate-90 duration-300 transition-all cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-6 text-center"
                >
                  <div className="mb-4 rounded-none bg-[#0931A7]/10 p-4 text-[#0931A7]">
                    <CheckCircle className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">Enquiry Submitted!</h3>
                  <p className="mt-2 text-sm text-neutral-600 font-medium">
                    Thank you for reaching out, <span className="font-semibold text-black">{formData.name}</span>. An academic advisor will contact you shortly to plan your learning journey.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-8 inline-flex items-center justify-center rounded-none bg-[#0931A7] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#072889] cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0931A7] bg-[#0931A7]/5 px-2.5 py-1 rounded-none">
                      Admissions & Programs
                    </span>
                    <h3 className="mt-2.5 text-xl font-bold text-neutral-900 sm:text-2xl">
                      Start Your Journey
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 font-medium">
                      Hyderabad's trusted hub for language learning and communication excellence.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name field */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full rounded-none border px-4 py-2.5 text-sm outline-none transition-all placeholder:text-neutral-400 ${
                          errors.name
                            ? "border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-neutral-200 focus:border-[#0931A7] focus:ring-1 focus:ring-[#0931A7]"
                        }`}
                      />
                      {errors.name && (
                        <span className="mt-1 block text-xs font-medium text-red-500">{errors.name}</span>
                      )}
                    </div>

                    {/* Contact Info (Grid) */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full rounded-none border px-4 py-2.5 text-sm outline-none transition-all placeholder:text-neutral-400 ${
                            errors.email
                              ? "border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-neutral-200 focus:border-[#0931A7] focus:ring-1 focus:ring-[#0931A7]"
                          }`}
                        />
                        {errors.email && (
                          <span className="mt-1 block text-xs font-medium text-red-500">{errors.email}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full rounded-none border px-4 py-2.5 text-sm outline-none transition-all placeholder:text-neutral-400 ${
                            errors.phone
                              ? "border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-neutral-200 focus:border-[#0931A7] focus:ring-1 focus:ring-[#0931A7]"
                          }`}
                        />
                        {errors.phone && (
                          <span className="mt-1 block text-xs font-medium text-red-500">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    {/* Course Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Select Program *
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className={`w-full rounded-none border bg-white px-4 py-2.5 text-sm outline-none transition-all appearance-none cursor-pointer ${
                            errors.course
                              ? "border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-neutral-200 focus:border-[#0931A7] focus:ring-1 focus:ring-[#0931A7]"
                          }`}
                        >
                          <option value="" disabled>Choose a course</option>
                          <option value="Spoken English & Skills">Spoken English & Communication Skills</option>
                          <option value="IELTS & Languages">IELTS & Global Exam Prep</option>
                          <option value="Indian & Foreign Languages">Foreign Languages (French, German, Spanish, etc.)</option>
                          <option value="Handwriting Classes">Handwriting & Creative Strokes</option>
                          <option value="Other">Other Query / Career Guidance</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                      {errors.course && (
                        <span className="mt-1 block text-xs font-medium text-red-500">{errors.course}</span>
                      )}
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Learning Goals & Questions (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your learning goals or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-none border border-neutral-200 px-4 py-2.5 text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-[#0931A7] focus:ring-1 focus:ring-[#0931A7] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-none bg-[#0931A7] py-3 text-sm font-semibold text-white shadow-md shadow-[#0931A7]/10 transition-all duration-300 hover:bg-[#072889] hover:scale-[1.01] active:scale-100 disabled:opacity-70 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting Enquiry...
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
