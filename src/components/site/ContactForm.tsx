import { useState, type FormEvent } from "react";
import { toast } from "sonner";

type Variant = "contact" | "career";

const WEB3FORMS_KEYS: Record<Variant, string> = {
  contact: "c0be8f3a-3ad9-4b04-a5cd-a009a360c751",
  career: "26ee992b-d7b4-40d4-b329-95c2ee45ed12",
};

const FORM_ENDPOINTS: Record<Variant, string> = {
  contact: "https://api.web3forms.com/submit",
  career: "https://api.web3forms.com/submit",
};

const inputCls =
  "w-full bg-transparent border-0 border-b border-gray-300 rounded-none px-0 py-3 text-base text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none focus:ring-0 transition-colors";

export function ContactForm({ variant = "contact" }: { variant?: Variant }) {
  const [submitting, setSubmitting] = useState(false);
  const isCareer = variant === "career";
  const heading = isCareer ? "Apply Now" : "Drop Us a Line";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEYS[variant]);
    formData.append(
      "subject",
      isCareer ? "Career Application — Zayed Amer" : "Contact Form — Zayed Amer",
    );
    const name = (formData.get("name") as string) || "Website Visitor";
    formData.append("from_name", name);
    setSubmitting(true);
    try {
      const res = await fetch(FORM_ENDPOINTS[variant], {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) throw new Error("Web3Forms failed");
      toast.success(
        isCareer
          ? "Application received — we'll review and get back to you."
          : "Message sent — we'll be in touch shortly.",
      );
      form.reset();
    } catch {
      toast.error("Couldn't send — please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-extrabold text-navy text-4xl sm:text-5xl md:text-6xl tracking-tight">
          {heading}
        </h2>
        <div className="h-1 w-16 bg-orange mt-4 mb-12 rounded-full" />

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-12 gap-y-2">
          <div>
            <input
              required
              name="name"
              type="text"
              maxLength={100}
              placeholder="Name *"
              className={inputCls}
            />
          </div>
          <div>
            <input
              required
              name="email"
              type="email"
              maxLength={255}
              placeholder="Email *"
              className={inputCls}
            />
          </div>
          <div>
            <input
              required
              name="contact_number"
              type="tel"
              maxLength={30}
              placeholder="Contact Number *"
              className={inputCls}
            />
          </div>
          <div>
            <input
              required
              name={isCareer ? "position" : "subject"}
              type="text"
              maxLength={150}
              placeholder={isCareer ? "Position Applying For *" : "Subject *"}
              className={inputCls}
            />
          </div>

          <div className="md:col-span-2 mt-6">
            <textarea
              required={!isCareer}
              name="message"
              maxLength={2000}
              rows={5}
              placeholder={isCareer ? "Cover Letter / Message" : "Message *"}
              className={`${inputCls} resize-none`}
            />
          </div>

          {isCareer && (
            <div className="md:col-span-2 mt-8">
              <input
                required
                name="cv_link"
                type="url"
                maxLength={500}
                placeholder="CV Link * (Google Drive, Dropbox, LinkedIn)"
                className={inputCls}
              />
            </div>
          )}

          <div className="md:col-span-2 mt-10">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-3 bg-orange text-white font-bold tracking-[0.2em] uppercase text-sm px-10 py-4 hover:bg-navy transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending..." : isCareer ? "Submit Application" : "Send Message"}
              <span aria-hidden>→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
