## Swap Contact Form to Web3Forms

Update `src/components/site/ContactForm.tsx`:

1. Replace `FORMWIT_ENDPOINTS` with a `FORM_ENDPOINTS` map:
   - `contact` → `https://api.web3forms.com/submit`
   - `career` → existing FormWit endpoint (unchanged)
2. Add constant `WEB3FORMS_ACCESS_KEY = "c0be8f3a-3ad9-4b04-a5cd-a009a360c751"`.
3. In `handleSubmit` for `variant === "contact"`:
   - Append to FormData: `access_key`, `subject: "Contact Form — Zayed Amer"`, `from_name` (sender's name).
   - POST to Web3Forms endpoint.
   - Parse JSON and check `data.success === true` before showing success toast.
4. Keep `career` variant on FormWit with existing logic untouched.

Result: contact submissions arrive in your inbox with subject "Contact Form — Zayed Amer" and all fields (name, email, contact number, subject, message) fully rendered. Free tier: 250 submissions/month.