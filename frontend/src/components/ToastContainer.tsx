import React, { useEffect, useState } from "react";
import { useToast } from "../hooks/useToast";
import { ToastItem } from "./ToastItem";
import { createPortal } from "react-dom";

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onClose={() => removeToast(toast.id)}
          style={{
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>,
    document.body,
  );
};
