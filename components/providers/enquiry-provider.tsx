"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import EnquiryModal from "@/components/ui/enquiry-modal";

interface EnquiryContextType {
  isOpen: boolean;
  prefilledCourse: string;
  openModal: (courseName?: string) => void;
  closeModal: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledCourse, setPrefilledCourse] = useState("");

  const openModal = (courseName?: string) => {
    if (courseName) {
      setPrefilledCourse(courseName);
    } else {
      setPrefilledCourse("");
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPrefilledCourse("");
  };

  // First time visitor detection
  useEffect(() => {
    const hasVisited = localStorage.getItem("polyglot_enquiry_shown");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        openModal();
        localStorage.setItem("polyglot_enquiry_shown", "true");
      }, 2000); // 2 seconds delay
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <EnquiryContext.Provider value={{ isOpen, prefilledCourse, openModal, closeModal }}>
      {children}
      <EnquiryModal />
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (context === undefined) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
}
