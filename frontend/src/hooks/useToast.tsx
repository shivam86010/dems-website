import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import type { Toast, ToastOptions, ToastType } from "../type/toast";
import { ToastContainer } from "../components/ToastContainer";

interface ToastContextValue {
  toasts: Toast[];
  showToast: (message: string, type: ToastType, options?: ToastOptions) => void;
  removeToast: (id: string) => void;
  success: (message: string, options?: ToastOptions) => void;
  error: (message: string, options?: ToastOptions) => void;
  info: (message: string, options?: ToastOptions) => void;
  warning: (message: string, options?: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
  defaultDuration?: number;
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  defaultDuration = 5000,
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType, options?: ToastOptions) => {
      const id = Math.random().toString(36).substring(2, 9);
      const duration = options?.duration ?? defaultDuration;

      const newToast: Toast = {
        id,
        message,
        type,
        duration,
        title: options?.title,
      };

      setToasts((prev) => {
        const updated = [newToast, ...prev];
        return updated.slice(0, maxToasts);
      });

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [defaultDuration, maxToasts, removeToast],
  );

  const success = useCallback(
    (message: string, options?: ToastOptions) =>
      showToast(message, "success", options),
    [showToast],
  );

  const error = useCallback(
    (message: string, options?: ToastOptions) =>
      showToast(message, "error", options),
    [showToast],
  );

  const info = useCallback(
    (message: string, options?: ToastOptions) =>
      showToast(message, "info", options),
    [showToast],
  );

  const warning = useCallback(
    (message: string, options?: ToastOptions) =>
      showToast(message, "warning", options),
    [showToast],
  );

  const value = useMemo(
    () => ({
      toasts,
      showToast,
      removeToast,
      success,
      error,
      info,
      warning,
    }),
    [toasts, showToast, removeToast, success, error, info, warning],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
