import { useRef, useState } from "react";
import { cycles, formContent, ui } from "../data";
import { Eyebrow, Icon } from "./ui";
const blank = { name: "", phone: "", email: "", cycle: "", message: "" };
export function AdmissionForm({
  request,
  initialCycle,
}: {
  request: string;
  initialCycle: string;
}) {
  const [values, setValues] = useState({
    ...blank,
    cycle: cycles.some((c) => c.slug === initialCycle) ? initialCycle : "",
  });
  const [errors, setErrors] = useState<Partial<typeof blank>>({}),
    [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  function update(key: keyof typeof blank, value: string) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setSent(false);
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Partial<typeof blank> = {};
    if (!values.name.trim()) next.name = formContent.errors.name;
    const phone = values.phone.replace(/\D/g, "");
    if (
      phone.length < 8 ||
      phone.length > 15 ||
      !/^[+\d\s().-]+$/.test(values.phone)
    )
      next.phone = formContent.errors.phone;
    if (
      values.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
    )
      next.email = formContent.errors.email;
    if (!cycles.some((c) => c.slug === values.cycle))
      next.cycle = formContent.errors.cycle;
    if (values.message.trim().length < 10)
      next.message = formContent.errors.message;
    setErrors(next);
    setSent(!Object.keys(next).length);
    if (Object.keys(next).length)
      requestAnimationFrame(() =>
        form.current
          ?.querySelector<HTMLElement>('[aria-invalid="true"]')
          ?.focus(),
      );
  }
  return (
    <form
      className="admission-form"
      id="formulaire"
      ref={form}
      noValidate
      onSubmit={submit}
    >
      <Eyebrow>{ui.formEyebrow}</Eyebrow>
      <h2>{ui.formTitle}</h2>
      <p className="form-notice">{ui.formNotice}</p>
      {request === "visite" || request === "cambridge" ? (
        <p className="request-context">
          <Icon name={request === "visite" ? "school" : "globe"} />
          {request === "visite" ? ui.requestVisit : ui.requestCambridge}
        </p>
      ) : null}
      <div className="form-grid">
        {(Object.keys(blank) as (keyof typeof blank)[]).map((key) => (
          <div
            className={`field ${key === "message" ? "field-full" : ""}`}
            key={key}
          >
            <label htmlFor={key}>
              {formContent.labels[key]}
              {key !== "email" && <span aria-hidden="true"> *</span>}
            </label>
            {key === "cycle" ? (
              <select
                id={key}
                name={key}
                required
                value={values[key]}
                aria-invalid={!!errors[key]}
                aria-describedby={errors[key] ? `${key}-error` : undefined}
                onChange={(e) => update(key, e.target.value)}
              >
                <option value="">{ui.selectCycle}</option>
                {cycles.map((c) => (
                  <option value={c.slug} key={c.slug}>
                    {c.title}
                  </option>
                ))}
              </select>
            ) : key === "message" ? (
              <textarea
                id={key}
                name={key}
                rows={4}
                required
                value={values[key]}
                aria-invalid={!!errors[key]}
                aria-describedby={errors[key] ? `${key}-error` : undefined}
                onChange={(e) => update(key, e.target.value)}
              />
            ) : (
              <input
                id={key}
                name={key}
                type={
                  key === "phone" ? "tel" : key === "email" ? "email" : "text"
                }
                autoComplete={
                  key === "phone" ? "tel" : key === "name" ? "name" : "email"
                }
                required={key !== "email"}
                value={values[key]}
                aria-invalid={!!errors[key]}
                aria-describedby={errors[key] ? `${key}-error` : undefined}
                onChange={(e) => update(key, e.target.value)}
              />
            )}{" "}
            {errors[key] && (
              <span className="field-error" id={`${key}-error`}>
                {errors[key]}
              </span>
            )}
          </div>
        ))}
      </div>
      <button className="button button-primary" type="submit">
        {ui.submit}
        <Icon name="arrow" />
      </button>
      {sent && (
        <p className="form-success" role="status">
          <Icon name="check" />
          {ui.formDemo}
        </p>
      )}
    </form>
  );
}
