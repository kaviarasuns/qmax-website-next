"use client";

import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Check,
  Download,
  FileDown,
  Loader2,
  ShieldCheck,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

const DEFAULT_DOWNLOAD_URL =
  "/Qmax_Systems_Electronics_Engineering_Services_Std.pdf";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FormValues = {
  name: string;
  company: string;
  email: string;
};

type FieldKey = keyof FormValues;

type FieldErrors = Partial<Record<FieldKey, boolean>>;

const EMPTY_VALUES: FormValues = { name: "", company: "", email: "" };

function Field({
  id,
  type = "text",
  placeholder,
  autoComplete,
  ariaLabel,
  value,
  error,
  errorMessage,
  inputRef,
  onChange,
}: {
  id: string;
  type?: string;
  placeholder: string;
  autoComplete: string;
  ariaLabel: string;
  value: string;
  error?: boolean;
  errorMessage: string;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-label={ariaLabel}
        aria-invalid={error || undefined}
        className={cn(
          "w-full rounded-[12px] border bg-[#f7f7f9] px-4 py-3.5 text-[15px] text-[#09090b] transition duration-200 placeholder:text-[#9a9aa3] focus:bg-white focus:outline-none",
          error
            ? "border-red-500 bg-white shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"
            : "border-[#dcdce2] focus:border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"
        )}
      />
      {error && (
        <p className="mt-[7px] text-[13px] text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}

export default function DownloadPresentationModal({
  downloadUrl = DEFAULT_DOWNLOAD_URL,
  triggerClassName,
}: {
  downloadUrl?: string;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  function reset() {
    setValues(EMPTY_VALUES);
    setErrors({});
    setSubmitting(false);
    setSubmitted(false);
  }

  function handleOpenChange(next: boolean) {
    if (next) reset();
    setOpen(next);
  }

  function updateField(key: FieldKey, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    // Clear the field's error as soon as the user edits it.
    setErrors((current) =>
      current[key] ? { ...current, [key]: false } : current
    );
  }

  function triggerDownload() {
    // `download` forces a save of the same-origin file instead of navigating
    // the tab away, so the success state stays visible.
    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = downloadUrl.split("/").pop() ?? "presentation.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FieldErrors = {
      name: !values.name.trim(),
      company: !values.company.trim(),
      email: !EMAIL_RE.test(values.email.trim()),
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setSubmitting(true);
    // Simulated lead capture — swap for a real CRM/API call when available.
    await new Promise((resolve) => setTimeout(resolve, 1100));
    triggerDownload();
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-2.5 rounded-md bg-red-500 px-[22px] py-3 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-red-600 active:bg-red-700",
            triggerClassName
          )}
        >
          <Download className="h-[18px] w-[18px]" />
          Download
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[1000] bg-[rgba(11,11,13,0.42)] backdrop-blur-[6px] data-[state=closed]:animate-modal-overlay-out data-[state=open]:animate-modal-overlay-in" />
        <Dialog.Content
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            nameInputRef.current?.focus();
          }}
          aria-describedby={undefined}
          className="fixed left-1/2 top-1/2 z-[1000] w-[min(440px,calc(100vw-40px))] -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-[#e6e6ea] bg-white px-[34px] pb-8 pt-[38px] text-center shadow-[0_40px_90px_-28px_rgba(11,11,13,0.32)] focus:outline-none data-[state=closed]:animate-modal-card-out data-[state=open]:animate-modal-card-in"
        >
          <Dialog.Close
            aria-label="Close"
            className="absolute right-5 top-[18px] grid h-[42px] w-[42px] place-items-center rounded-full border border-[#dcdce2] bg-white text-[#6b6b73] shadow-[0_1px_2px_rgba(11,11,13,0.04),0_18px_50px_-16px_rgba(11,11,13,0.18)] transition-[transform,color,border-color] duration-200 hover:rotate-90 hover:border-red-500 hover:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            <X className="h-5 w-5" />
          </Dialog.Close>

          {submitted ? (
            <div className="duration-500 animate-in fade-in-0 slide-in-from-bottom-3">
              <div className="mx-auto mb-[18px] grid h-[74px] w-[74px] place-items-center rounded-full border border-[#16a34a]/35 bg-[#16a34a]/10">
                <Check className="h-[34px] w-[34px] text-[#16a34a]" strokeWidth={2.5} />
              </div>
              <Dialog.Title className="text-[22px] font-bold tracking-[-0.4px] text-[#09090b]">
                Thank You
              </Dialog.Title>
              <p className="mx-auto mt-2 max-w-[320px] text-[14.5px] text-[#6b6b73]">
                We appreciate your interest in Qmax Systems. Your presentation
                download has started.
              </p>
              <a
                href={downloadUrl}
                download
                className="mt-4 inline-block text-[13.5px] font-medium text-red-500 underline underline-offset-4 transition-colors hover:text-red-600"
              >
                Download didn&apos;t start? Click here.
              </a>
            </div>
          ) : (
            <>
              <div className="mx-auto mb-[18px] grid h-[60px] w-[60px] place-items-center rounded-[16px] border border-red-500/25 bg-red-500/10">
                <FileDown className="h-7 w-7 text-red-500" />
              </div>
              <Dialog.Title className="text-[22px] font-extrabold tracking-[-0.5px] text-[#09090b]">
                Download our presentation
              </Dialog.Title>
              <p className="mb-[22px] mt-2 text-sm text-[#6b6b73]">
                Fill in your details to access our company presentation.
              </p>

              <form onSubmit={handleSubmit} noValidate className="grid gap-3.5 text-left">
                <Field
                  id="dp-name"
                  placeholder="Your name"
                  autoComplete="name"
                  ariaLabel="Full name"
                  value={values.name}
                  error={errors.name}
                  errorMessage="Please enter your name."
                  inputRef={nameInputRef}
                  onChange={(value) => updateField("name", value)}
                />
                <Field
                  id="dp-company"
                  placeholder="Company name"
                  autoComplete="organization"
                  ariaLabel="Company name"
                  value={values.company}
                  error={errors.company}
                  errorMessage="Please enter your company name."
                  onChange={(value) => updateField("company", value)}
                />
                <Field
                  id="dp-email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  ariaLabel="Email address"
                  value={values.email}
                  error={errors.email}
                  errorMessage="Please enter a valid email address."
                  onChange={(value) => updateField("email", value)}
                />

                <div className="flex items-start gap-2.5 text-left text-[12.5px] leading-normal text-[#6b6b73]">
                  <ShieldCheck className="mt-0.5 h-[15px] w-[15px] flex-none text-[#16a34a]" />
                  <span>
                    We respect your inbox. Your details are safe with us and
                    strictly confidential.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-1 flex w-full items-center justify-center gap-2.5 rounded-[12px] bg-red-500 px-4 py-[15px] text-[15.5px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(239,68,68,0.6)] transition-colors duration-200 hover:bg-red-600 active:scale-[0.99] disabled:cursor-wait disabled:opacity-75"
                >
                  {submitting && (
                    <Loader2 className="h-[17px] w-[17px] animate-spin" />
                  )}
                  <span>Get the presentation</span>
                </button>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
