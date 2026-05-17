import React, { useEffect, useState } from "react";
import type { Toast } from "../type/toast";
import "./ToastStyles.css";

interface ToastItemProps {
  toast: Toast;
  onClose: () => void;
  style?: React.CSSProperties;
}

const icons = {
  success: "✓",
  error: "✕",
  info: "ℹ",
  warning: "⚠",
};

const getToastStyles = (type: Toast["type"]) => {
  const styles = {
    success: {
      backgroundColor: "#10b981",
      borderColor: "#059669",
    },
    error: {
      backgroundColor: "#ef4444",
      borderColor: "#dc2626",
    },
    info: {
      backgroundColor: "#3b82f6",
      borderColor: "#2563eb",
    },
    warning: {
      backgroundColor: "#f59e0b",
      borderColor: "#d97706",
    },
  };
  return styles[type];
};

export const ToastItem: React.FC<ToastItemProps> = ({
  toast,
  onClose,
  style,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onClose, 300);
      }, toast.duration - 300);

      return () => clearTimeout(timer);
    }
  }, [toast.duration, onClose]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  const toastStyles = getToastStyles(toast.type);

  return (
    <div
      className={`toast-item ${isExiting ? "toast-exit" : "toast-enter"}`}
      style={{
        ...toastStyles,
        ...style,
      }}
      role="alert"
      aria-live="polite"
    >
      <div className="toast-icon">{icons[toast.type]}</div>
      <div className="toast-content">
        {toast.title && <div className="toast-title">{toast.title}</div>}
        <div className="toast-message">{toast.message}</div>
      </div>
      <button
        className="toast-close-button"
        onClick={handleClose}
        aria-label="Close notification"
      >
        ×
      </button>
      {toast.duration && toast.duration > 0 && (
        <div
          className="toast-progress-bar"
          style={{
            animationDuration: `${toast.duration}ms`,
          }}
        />
      )}
    </div>
  );
};
