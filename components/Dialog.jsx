"use client";

import { useState, useEffect, useRef } from "react";

export default function Dialog({ triggerText = "Open Dialog", openDialog2, children }) {
  const [open, setOpen] = useState(openDialog2);
  const dialogRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Close on click outside
  const handleClickOutside = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition duration-300"
      >
        {triggerText}
      </button>

      {/* Dialog Portal */}
      {open && (
        <div
          onClick={handleClickOutside}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
        >
          {/* Dialog Content */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            className="bg-amber-700 rounded-xl shadow-lg p-6 w-full max-w-md relative animate-in fade-in zoom-in-95"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
