import React from "react";

/**
 * Eco Pacific Painting — Input
 * Recreates .field-label / .field-input / .field-error from globals.css,
 * used across the Quote and Appointment forms. Supports text/email/tel/date
 * inputs, a select, and a textarea via `as`.
 */
export function Input({
  as = "input",
  type = "text",
  label,
  required = false,
  error,
  placeholder,
  options = [],
  rows = 4,
  value,
  onChange,
  id,
}) {
  const [focused, setFocused] = React.useState(false);

  const fieldStyle = {
    width: "100%",
    borderRadius: "var(--radius-xl)",
    border: `1px solid ${error ? "var(--danger)" : focused ? "var(--primary-400)" : "var(--navy-100, #D6E1EC)"}`,
    background: "#fff",
    padding: "0.875rem 1rem",
    fontSize: "var(--text-sm)",
    fontFamily: "var(--font-sans)",
    color: "var(--navy-800, #0B2A4A)",
    boxShadow: focused ? "0 0 0 4px var(--primary-100)" : "var(--shadow-soft)",
    outline: "none",
    transition: "all 300ms var(--ease-premium)",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--weight-medium)",
    color: "var(--navy-700)",
    marginBottom: "0.5rem",
  };

  const errorStyle = {
    marginTop: "0.375rem",
    fontSize: "var(--text-xs)",
    color: "var(--danger)",
  };

  let field;
  if (as === "select") {
    field = (
      <select
        id={id}
        style={fieldStyle}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    );
  } else if (as === "textarea") {
    field = (
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        style={{ ...fieldStyle, resize: "none" }}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    );
  } else {
    field = (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        style={fieldStyle}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    );
  }

  return (
    <div>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}{required && " *"}
        </label>
      )}
      {field}
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}
