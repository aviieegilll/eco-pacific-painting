/* @ds-bundle: {"format":4,"namespace":"EcoPacificPaintingDesignSystem_026966","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"LoadingScreen","sourcePath":"components/feedback/LoadingScreen.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ImagePlaceholder","sourcePath":"components/media/ImagePlaceholder.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ea0f726ea52d","components/content/SectionHeading.jsx":"255ecc47a91b","components/content/StatCard.jsx":"744eebe05ccb","components/feedback/LoadingScreen.jsx":"a6493b88d18e","components/forms/Input.jsx":"6a7d74ce4b14","components/media/ImagePlaceholder.jsx":"a1ccc08eba68","components/navigation/Footer.jsx":"96eaa1561c34","components/navigation/Navbar.jsx":"6391628db0f3","components/surfaces/Card.jsx":"1cfc00a52c71","ui_kits/website/ContactSection.jsx":"bb14ec93c67f","ui_kits/website/Hero.jsx":"990e99073a89","ui_kits/website/ProjectsSection.jsx":"4d75cac53d8a","ui_kits/website/QuoteSection.jsx":"38b1543788af","ui_kits/website/ReviewsSection.jsx":"c46703ada7cf","ui_kits/website/ServicesSection.jsx":"c81def51bee7","ui_kits/website/StatsSection.jsx":"27b8928aa8af"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EcoPacificPaintingDesignSystem_026966 = window.EcoPacificPaintingDesignSystem_026966 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
/**
 * Eco Pacific Painting — Button
 * Recreates the .btn / .btn-primary / .btn-secondary / .btn-light / .btn-outline-navy
 * utility classes from globals.css, plus the signature "paint-drip" liquid SVG
 * fused to the bottom edge (see PaintDripButton.tsx in the source codebase).
 *
 * IMPORTANT: per the source README, the drip effect is reserved for exactly
 * four CTAs sitewide — Get Free Quote, Call Now, Learn More About Us, View All
 * Services. Do not apply `drip` to ordinary buttons.
 */

const VARIANTS = {
  primary: {
    bg: "var(--primary-500)",
    bgHover: "var(--primary-600)",
    color: "#fff",
    border: "none",
    shadow: "var(--shadow-glow)"
  },
  secondary: {
    bg: "var(--navy-700)",
    bgHover: "var(--navy-800)",
    color: "#fff",
    border: "none",
    shadow: "var(--shadow-soft)"
  },
  light: {
    bg: "#fff",
    bgHover: "var(--primary-50)",
    color: "var(--primary-600)",
    border: "1px solid var(--primary-200)",
    shadow: "var(--shadow-soft)"
  },
  "outline-navy": {
    bg: "transparent",
    bgHover: "var(--navy-50)",
    color: "var(--navy-800)",
    border: "1px solid var(--navy-200)",
    shadow: "none"
  }
};
const SIZES = {
  md: {
    padding: "0.875rem 1.75rem",
    fontSize: "var(--text-sm)"
  },
  sm: {
    padding: "0.625rem 1.25rem",
    fontSize: "var(--text-xs)"
  }
};
function DripSvg({
  fill
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 16",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -1,
      width: "100%",
      height: 14,
      pointerEvents: "none",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 H60 C62,6 56,13 49,13 C43,13 40,7 40,3 C40,7 36,10 31,10 C25,10 22,5 24,0 Z",
    fill: fill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M85,0 H130 C132,4 128,9 123,9 C119,9 117,5 118,2 C116,5 111,7 107,5 C104,3.5 104,1 106,0 Z",
    fill: fill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M155,0 H220 V0 C205,0 202,11 194,11 C188,11 186,6 188,2 C185,5 180,6 177,3 C175,1 176,0 178,0 Z",
    fill: fill
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "220",
    height: "4",
    fill: fill
  }));
}
function Button({
  children,
  variant = "primary",
  size = "md",
  drip = false,
  icon = null,
  iconPosition = "right",
  disabled = false,
  as = "button",
  href,
  onClick,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const dripFill = variant === "light" ? "#FFFFFF" : v.bg;
  const [hover, setHover] = React.useState(false);
  const buttonStyle = {
    position: "relative",
    zIndex: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "var(--radius-full)",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-semibold)",
    padding: s.padding,
    fontSize: s.fontSize,
    color: v.color,
    background: hover && !disabled ? v.bgHover : v.bg,
    border: v.border,
    boxShadow: hover && !disabled ? "var(--shadow-lift)" : v.shadow,
    transform: hover && !disabled ? "translateY(-2px)" : "translateY(0)",
    transition: "all 400ms var(--ease-premium)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.7 : 1,
    userSelect: "none",
    ...style
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconPosition === "left" ? icon : null, children, icon && iconPosition === "right" ? icon : null);
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: buttonStyle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, inner), drip && /*#__PURE__*/React.createElement(DripSvg, {
    fill: dripFill
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
/**
 * Eco Pacific Painting — SectionHeading
 * Recreates SectionHeading.tsx: an eyebrow label, a display-md title, and an
 * optional subtitle, centered or left-aligned.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "42rem",
      margin: align === "center" ? "0 auto" : 0,
      textAlign: align === "center" ? "center" : "left",
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: inverse ? "var(--primary-400)" : "var(--primary-500)",
      marginBottom: "0.75rem"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-display-md)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      color: inverse ? "#fff" : "var(--navy-900)",
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "1rem",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: inverse ? "rgba(255,255,255,0.7)" : "var(--navy-500)"
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/LoadingScreen.jsx
try { (() => {
/**
 * Eco Pacific Painting — LoadingScreen
 * Recreates LoadingScreen.tsx: a full-screen white overlay shown for ~2.2s on
 * first load, with the wordmark wiped in via clip-path and a blurred cyan
 * light-sweep bar traveling across it.
 */
function LoadingScreen({
  visible = true
}) {
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "3.5rem",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "3rem",
      fontWeight: "var(--weight-extrabold)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--navy-900)"
    }
  }, "ECO PACIFIC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      left: "40%",
      height: "100%",
      width: "0.75rem",
      borderRadius: "var(--radius-full)",
      filter: "blur(1px)",
      background: "linear-gradient(to right, var(--primary-300), var(--primary-500), var(--primary-300))",
      display: "none"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "0.5rem",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: "var(--weight-medium)",
      color: "var(--primary-500)"
    }
  }, "PAINTING")));
}
Object.assign(__ds_scope, { LoadingScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/LoadingScreen.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/**
 * Eco Pacific Painting — Input
 * Recreates .field-label / .field-input / .field-error from globals.css,
 * used across the Quote and Appointment forms. Supports text/email/tel/date
 * inputs, a select, and a textarea via `as`.
 */
function Input({
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
  id
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
    boxSizing: "border-box"
  };
  const labelStyle = {
    display: "block",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--weight-medium)",
    color: "var(--navy-700)",
    marginBottom: "0.5rem"
  };
  const errorStyle = {
    marginTop: "0.375rem",
    fontSize: "var(--text-xs)",
    color: "var(--danger)"
  };
  let field;
  if (as === "select") {
    field = /*#__PURE__*/React.createElement("select", {
      id: id,
      style: fieldStyle,
      value: value,
      onChange: onChange,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select..."), options.map(o => /*#__PURE__*/React.createElement("option", {
      key: o,
      value: o
    }, o)));
  } else if (as === "textarea") {
    field = /*#__PURE__*/React.createElement("textarea", {
      id: id,
      rows: rows,
      placeholder: placeholder,
      style: {
        ...fieldStyle,
        resize: "none"
      },
      value: value,
      onChange: onChange,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    });
  } else {
    field = /*#__PURE__*/React.createElement("input", {
      id: id,
      type: type,
      placeholder: placeholder,
      style: fieldStyle,
      value: value,
      onChange: onChange,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    });
  }
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: labelStyle
  }, label, required && " *"), field, error && /*#__PURE__*/React.createElement("p", {
    style: errorStyle
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/media/ImagePlaceholder.jsx
try { (() => {
/**
 * Eco Pacific Painting — ImagePlaceholder
 * Recreates ImagePlaceholder.tsx — the site's real, ship-as-is stand-in for
 * client photography. Every image on the production site is currently one
 * of these (no photography has been supplied yet). Preserves exact aspect
 * ratio so swapping in a real <img> requires no layout changes.
 */
const RATIOS = {
  square: "1 / 1",
  video: "16 / 10",
  portrait: "3 / 4",
  wide: "21 / 9"
};
function ImagePlaceholder({
  label = "Project Photo",
  ratio = "video",
  gradient,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      aspectRatio: RATIOS[ratio] || RATIOS.video,
      background: gradient || "linear-gradient(to bottom right, var(--navy-100), var(--color-skyfaint), var(--primary-100))",
      color: "var(--navy-400)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 15l-5-5L5 21"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)"
    }
  }, label)));
}
Object.assign(__ds_scope, { ImagePlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ImagePlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/**
 * Eco Pacific Painting — Footer
 * Recreates Footer.tsx: navy-900 footer with wordmark + blurb + social row,
 * quick links, services list, and contact details, plus a legal bar.
 */
function Footer({
  links = [],
  services = [],
  phone,
  email,
  address,
  hours
}) {
  const col = {
    fontWeight: "var(--weight-semibold)",
    color: "#fff",
    fontSize: "var(--text-sm)",
    marginBottom: "1rem"
  };
  const item = {
    color: "rgba(255,255,255,0.6)",
    fontSize: "var(--text-sm)",
    textDecoration: "none",
    display: "block",
    padding: "0.3rem 0"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy-900)",
      color: "rgba(255,255,255,0.8)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "4rem 2rem",
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: "2.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.25rem",
      fontWeight: "var(--weight-extrabold)",
      color: "#fff"
    }
  }, "ECO PACIFIC"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "0.6875rem",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--primary-400)",
      fontWeight: "var(--weight-medium)",
      marginTop: "0.25rem"
    }
  }, "PAINTING"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "1rem",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-relaxed)",
      maxWidth: "20rem",
      color: "rgba(255,255,255,0.6)"
    }
  }, "Bringing colour to life with quality painting you can trust \u2014 serving homes and businesses across Metro Vancouver."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.75rem",
      marginTop: "1.5rem"
    }
  }, ["f", "i", "★"].map((glyph, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: "2.25rem",
      height: "2.25rem",
      borderRadius: "var(--radius-full)",
      border: "1px solid rgba(255,255,255,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.75rem"
    }
  }, glyph)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: col
  }, "Quick Links"), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: item
  }, l.label))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: col
  }, "Services"), services.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#services",
    style: item
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: col
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone}`,
    style: item
  }, phone), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: item
  }, email), /*#__PURE__*/React.createElement("span", {
    style: item
  }, address), /*#__PURE__*/React.createElement("span", {
    style: item
  }, hours))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.1)",
      padding: "1.5rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      fontSize: "var(--text-xs)",
      color: "rgba(255,255,255,0.5)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Eco Pacific Painting. All Rights Reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Terms & Conditions"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
/**
 * Eco Pacific Painting — Navbar
 * Recreates Navbar.tsx: fixed header, transparent-over-hero until scrolled
 * (then a frosted glass-nav), wordmark, link row, phone + drip CTA, and a
 * slide-in mobile drawer.
 */
function Navbar({
  links = [],
  phone = "+1 (604) 716-9395",
  scrolled = false
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      width: "100%",
      padding: scrolled ? "0.75rem 2rem" : "1.5rem 2rem",
      background: scrolled ? "rgba(255,255,255,0.8)" : "transparent",
      backdropFilter: scrolled ? "blur(var(--blur-nav))" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.4)" : "1px solid transparent",
      boxShadow: scrolled ? "var(--shadow-soft)" : "none",
      transition: "all 500ms var(--ease-premium)",
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.125rem",
      fontWeight: "var(--weight-extrabold)",
      color: "var(--navy-900)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, "ECO PACIFIC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--primary-500)"
    }
  }, "PAINTING")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0
    },
    className: "eco-navbar-links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--navy-700)",
      textDecoration: "none"
    }
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem"
    },
    className: "eco-navbar-actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline-navy",
    size: "sm"
  }, phone), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm"
  }, "Book Appointment")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Open menu",
    onClick: () => setMobileOpen(v => !v),
    style: {
      display: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "0.5rem"
    },
    className: "eco-navbar-toggle"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--navy-800)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  })))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 1024px) {
          .eco-navbar-links, .eco-navbar-actions { display: none !important; }
          .eco-navbar-toggle { display: block !important; }
        }
      `));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
/**
 * Eco Pacific Painting — Card
 * Recreates .surface-card (solid, hover-lift) and .glass-card (frosted, used
 * for the Quote form panel) from globals.css.
 */
function Card({
  children,
  variant = "surface",
  hoverLift = true,
  style,
  padding = "2rem"
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    borderRadius: "var(--radius-2xl)",
    padding,
    transition: "all 500ms var(--ease-premium)",
    ...style
  };
  const variantStyle = variant === "glass" ? {
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(var(--blur-card))",
    WebkitBackdropFilter: "blur(var(--blur-card))",
    border: "1px solid rgba(255,255,255,0.6)",
    boxShadow: "var(--shadow-card)"
  } : {
    background: "#fff",
    border: "1px solid var(--border-default)",
    boxShadow: hover && hoverLift ? "var(--shadow-lift)" : "var(--shadow-soft)",
    transform: hover && hoverLift ? "translateY(-4px)" : "translateY(0)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      ...variantStyle
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
/**
 * Eco Pacific Painting — StatCard
 * Recreates the StatCard pattern inside Stats.tsx: an icon chip, a big
 * count-up figure with suffix, and a label — used in the 4-up stats strip
 * beneath the hero.
 */
function StatCard({
  icon,
  value,
  suffix = "",
  label
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "2rem",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "3rem",
      height: "3rem",
      margin: "0 auto",
      borderRadius: "var(--radius-xl)",
      background: "var(--primary-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1rem",
      color: "var(--primary-500)"
    }
  }, icon), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "2rem",
      fontWeight: "var(--weight-extrabold)",
      color: "var(--navy-900)",
      margin: 0
    }
  }, value, suffix), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.5rem",
      fontSize: "var(--text-sm)",
      color: "var(--navy-500)",
      fontWeight: "var(--weight-medium)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactSection.jsx
try { (() => {
// Eco Pacific Painting — Contact section (design-system Card + SectionHeading)
function ContactSection() {
  const {
    Card,
    SectionHeading
  } = window.EcoPacificPaintingDesignSystem_026966;
  const CARDS = [{
    icon: /*#__PURE__*/React.createElement(PhoneIcon2, null),
    label: "Phone",
    value: "+1 (604) 716-9395"
  }, {
    icon: /*#__PURE__*/React.createElement(MailIcon, null),
    label: "Email",
    value: "ecopacificpainting04@gmail.com"
  }, {
    icon: /*#__PURE__*/React.createElement(PinIcon, null),
    label: "Address",
    value: "10670 132A Street, British Columbia"
  }, {
    icon: /*#__PURE__*/React.createElement(ClockIcon2, null),
    label: "Business Hours",
    value: "Monday – Saturday · 7:00 AM – 7:00 PM"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: "5rem 0",
      background: "var(--color-mist)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 2rem"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact Us",
    title: "Let's Start Your Project"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3.5rem",
      display: "grid",
      gridTemplateColumns: "2fr 3fr",
      gap: "2.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "1rem"
    }
  }, CARDS.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.label,
    hoverLift: false,
    padding: "1.5rem",
    style: {
      display: "flex",
      gap: "1rem",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "1rem",
      background: "var(--primary-50)",
      color: "var(--primary-500)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, c.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      color: "var(--navy-400)"
    }
  }, c.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0.25rem 0 0",
      fontWeight: 600,
      color: "var(--navy-900)",
      fontSize: "var(--text-sm)"
    }
  }, c.value))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "1.5rem",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)",
      minHeight: 320,
      background: "linear-gradient(135deg, var(--navy-100), var(--color-skyfaint))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--navy-400)",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, "Map embed \u2014 service area"))));
}
function PhoneIcon2() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
  }));
}
function MailIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 6-10 7L2 6"
  }));
}
function PinIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }));
}
function ClockIcon2() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  }));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Eco Pacific Painting — Hero section (ui kit composition)
// Uses design-system Button + ImagePlaceholder. Copy for hero matches src/components/sections/Hero.tsx.
function Hero() {
  const {
    Button,
    ImagePlaceholder
  } = window.EcoPacificPaintingDesignSystem_026966;
  const badges = ["Licensed & Insured", "Free Estimates", "Residential & Commercial", "Satisfaction Guaranteed"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      paddingTop: "9rem",
      paddingBottom: "5rem",
      overflow: "hidden",
      background: "linear-gradient(to bottom, rgba(230,244,255,0.6), #fff 60%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-10rem",
      right: "-10rem",
      width: 560,
      height: 560,
      borderRadius: "50%",
      background: "rgba(214,233,255,0.5)",
      filter: "blur(80px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 2rem",
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3.5rem",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--primary-500)",
      marginBottom: "1.25rem"
    }
  }, "Bringing Colour to Life"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "3.25rem",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: "var(--navy-900)",
      margin: 0
    }
  }, "Premium Painting. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--primary-500)"
    }
  }, "Exceptional Results.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "1.5rem",
      fontSize: "1.125rem",
      color: "var(--navy-500)",
      lineHeight: 1.6,
      maxWidth: "32rem"
    }
  }, "Transform your home or business with expert residential and commercial painting services. Delivering premium craftsmanship, reliable service and exceptional finishes across the Greater Vancouver area."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2.25rem",
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(ArrowIcon, null)
  }, "Get Free Quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(PhoneIcon, null)
  }, "Call Now")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3rem",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1rem"
    }
  }, badges.map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      borderRadius: "1.5rem",
      border: "1px solid var(--border-default)",
      background: "rgba(255,255,255,0.7)",
      padding: "1rem"
    }
  }, /*#__PURE__*/React.createElement(CheckShieldIcon, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 500,
      color: "var(--navy-700)",
      lineHeight: 1.3
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    className: "eco-hero-image-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "2rem",
      overflow: "hidden",
      boxShadow: "var(--shadow-lift)"
    }
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    label: "Luxury home exterior \u2014 freshly painted",
    ratio: "portrait"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "699px",
      left: "356px",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      background: "#fff",
      boxShadow: "var(--shadow-lift)",
      border: "1px solid var(--navy-50, #EEF3F8)",
      borderRadius: "1rem",
      padding: "1rem 1.25rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--primary-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(CheckShieldIcon, {
    small: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--navy-900)"
    }
  }, "850+ Projects"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      color: "var(--navy-400)"
    }
  }, "Completed with care"))))), /*#__PURE__*/React.createElement("style", null, `
        @media (min-width: 1025px) {
          .eco-hero-image-col { margin-top: -90px; }
        }
      `));
}
function ArrowIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }));
}
function PhoneIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
  }));
}
function CheckShieldIcon({
  small
}) {
  const s = small ? 18 : 20;
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--primary-500)",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  }));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsSection.jsx
try { (() => {
// Eco Pacific Painting — Projects gallery with category filter + lightbox
function ProjectsSection() {
  const {
    SectionHeading,
    ImagePlaceholder
  } = window.EcoPacificPaintingDesignSystem_026966;
  const {
    useState,
    useMemo
  } = React;
  const PROJECTS = [{
    id: "p1",
    title: "Modern Home Exterior",
    location: "Vancouver, BC",
    category: "Exterior"
  }, {
    id: "p2",
    title: "Kitchen Cabinet Refinish",
    location: "Surrey, BC",
    category: "Cabinets"
  }, {
    id: "p3",
    title: "Commercial Office Building",
    location: "Richmond, BC",
    category: "Commercial"
  }, {
    id: "p4",
    title: "Coastal Family Residence",
    location: "Burnaby, BC",
    category: "Residential"
  }, {
    id: "p5",
    title: "Living Room Interior Refresh",
    location: "Langley, BC",
    category: "Interior"
  }, {
    id: "p6",
    title: "Cedar Deck Restoration",
    location: "Coquitlam, BC",
    category: "Decks"
  }];
  const CATEGORIES = ["All", "Residential", "Commercial", "Interior", "Exterior", "Cabinets", "Decks"];
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const filtered = useMemo(() => filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter), [filter]);
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    style: {
      padding: "5rem 0",
      background: "var(--navy-900)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 2rem"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Projects",
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff"
      }
    }, "Recent Painting Projects"),
    subtitle: "A look at the craftsmanship and transformations we deliver across Metro Vancouver.",
    inverse: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2.5rem",
      display: "flex",
      justifyContent: "center",
      gap: "0.625rem",
      flexWrap: "wrap"
    }
  }, CATEGORIES.map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat,
    onClick: () => setFilter(cat),
    style: {
      padding: "0.5rem 1rem",
      borderRadius: "9999px",
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      border: "none",
      cursor: "pointer",
      transition: "all 300ms var(--ease-premium)",
      background: filter === cat ? "var(--primary-500)" : "rgba(255,255,255,0.05)",
      color: filter === cat ? "#fff" : "rgba(255,255,255,0.7)",
      boxShadow: filter === cat ? "var(--shadow-glow)" : "none"
    }
  }, cat))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2.5rem",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1.25rem"
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => setActive(p),
    style: {
      all: "unset",
      cursor: "pointer",
      borderRadius: "1rem",
      overflow: "hidden",
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    ratio: "video",
    label: p.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(8,30,54,0.85), transparent 60%)",
      display: "flex",
      alignItems: "flex-end",
      padding: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "#fff",
      fontWeight: 600
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "rgba(255,255,255,0.7)",
      fontSize: "var(--text-sm)"
    }
  }, p.location))))))), active && /*#__PURE__*/React.createElement("div", {
    onClick: () => setActive(null),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 90,
      background: "rgba(8,30,54,0.95)",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 720,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "1rem",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    ratio: "video",
    label: active.title
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1rem",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "#fff",
      fontWeight: 600,
      fontSize: "1.125rem"
    }
  }, active.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "rgba(255,255,255,0.6)",
      fontSize: "var(--text-sm)"
    }
  }, active.location)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive(null),
    style: {
      position: "absolute",
      top: "1.5rem",
      right: "1.5rem",
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.1)",
      border: "none",
      color: "#fff",
      cursor: "pointer"
    }
  }, "\u2715"))));
}
window.ProjectsSection = ProjectsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/QuoteSection.jsx
try { (() => {
// Eco Pacific Painting — Quote form (design-system Card variant=glass, Input, Button)
function QuoteSection() {
  const {
    Card,
    SectionHeading,
    Input,
    Button
  } = window.EcoPacificPaintingDesignSystem_026966;
  const {
    useState
  } = React;
  const [status, setStatus] = useState("idle");
  if (status === "success") {
    return /*#__PURE__*/React.createElement("section", {
      id: "quote",
      style: {
        padding: "5rem 0",
        background: "linear-gradient(to bottom, rgba(230,244,255,0.5), #fff)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        margin: "0 auto",
        padding: "0 2rem"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      style: {
        textAlign: "center",
        padding: "3.5rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--primary-500)"
      }
    }, /*#__PURE__*/React.createElement(CheckCircleIcon, null)), /*#__PURE__*/React.createElement("h3", {
      style: {
        marginTop: "1.25rem",
        fontSize: "1.25rem",
        fontWeight: 600,
        color: "var(--navy-900)"
      }
    }, "Thank you for contacting Eco Pacific Painting"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: "0.5rem",
        color: "var(--navy-500)",
        maxWidth: 420,
        marginLeft: "auto",
        marginRight: "auto"
      }
    }, "Your quote request has been received. Our team will review your information and get back to you as soon as possible."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "1.5rem"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline-navy",
      onClick: () => setStatus("idle")
    }, "Submit Another Request")))));
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "quote",
    style: {
      padding: "5rem 0",
      background: "linear-gradient(to bottom, rgba(230,244,255,0.5), #fff)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 2rem"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Get A Free Quote",
    title: "Request Your Free, No-Obligation Quote",
    subtitle: "Tell us about your project and our team will get back to you within 24 hours."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "3rem auto 0"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "glass",
    padding: "2.5rem"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setStatus("success");
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "fullName",
    label: "Full Name",
    required: true,
    placeholder: "Jane Doe"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "phone",
    type: "tel",
    label: "Phone Number",
    required: true,
    placeholder: "(604) 555-0100"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    label: "Email Address",
    required: true,
    placeholder: "jane@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "address",
    label: "Property Address",
    required: true,
    placeholder: "123 Main St, Surrey"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    as: "select",
    label: "Property Type",
    required: true,
    options: ["Residential", "Commercial"]
  }), /*#__PURE__*/React.createElement(Input, {
    as: "select",
    label: "Service Required",
    required: true,
    options: ["Residential Painting", "Commercial Painting", "Cabinet Painting", "Deck & Fence Staining"]
  }), /*#__PURE__*/React.createElement(Input, {
    as: "select",
    label: "Project Size",
    required: true,
    options: ["Small", "Medium", "Large", "Not Sure"]
  })), /*#__PURE__*/React.createElement(Input, {
    as: "textarea",
    label: "Additional Notes",
    rows: 4,
    placeholder: "Tell us about your project\u2026"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Request My Free Quote")))))));
}
function CheckCircleIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12.5l2.5 2.5L16 9"
  }));
}
window.QuoteSection = QuoteSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/QuoteSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ReviewsSection.jsx
try { (() => {
// Eco Pacific Painting — Client reviews (design-system Card + SectionHeading)
function ReviewsSection() {
  const {
    Card,
    SectionHeading
  } = window.EcoPacificPaintingDesignSystem_026966;
  const REVIEWS = [{
    name: "Amanda R.",
    location: "Vancouver, BC",
    rating: 5,
    quote: "Eco Pacific Painting transformed our home. The team was professional, kept everything spotless, and finished right on schedule."
  }, {
    name: "Jason T.",
    location: "Langley, BC",
    rating: 5,
    quote: "Great experience from the first quote to the final walkthrough. Communication was clear the whole way through."
  }, {
    name: "Priya S.",
    location: "Burnaby, BC",
    rating: 5,
    quote: "Very professional and detail-oriented. Our office looks brand new, with zero disruption to our team."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    style: {
      padding: "5rem 0",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 2rem"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Client Reviews",
    title: "What Our Clients Say",
    subtitle: "Real feedback from homeowners and businesses across Metro Vancouver."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3.5rem",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1.5rem"
    }
  }, REVIEWS.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.name,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(QuoteIcon, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      marginTop: "1rem"
    }
  }, Array.from({
    length: r.rating
  }).map((_, i) => /*#__PURE__*/React.createElement(StarIcon, {
    key: i
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "1rem",
      color: "var(--navy-600, #1B3F66)",
      lineHeight: 1.6,
      flex: 1
    }
  }, "\u201C", r.quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--primary-100)",
      color: "var(--primary-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 600
    }
  }, r.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      color: "var(--navy-900)",
      fontSize: "var(--text-sm)"
    }
  }, r.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--navy-400)",
      fontSize: "var(--text-xs)"
    }
  }, r.location))))))));
}
function QuoteIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "var(--primary-200)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 10c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6H7v-6Zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6h-5v-6Z"
  }));
}
function StarIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "#FBBF24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7L2 9.2l7.1-.6L12 2Z"
  }));
}
window.ReviewsSection = ReviewsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ReviewsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesSection.jsx
try { (() => {
// Eco Pacific Painting — Services grid (design-system Card + SectionHeading + Button)
function ServicesSection() {
  const {
    Card,
    SectionHeading,
    Button
  } = window.EcoPacificPaintingDesignSystem_026966;
  const SERVICES = [{
    icon: /*#__PURE__*/React.createElement(HomeIcon, null),
    title: "Residential Painting",
    description: "Full-home interior and exterior painting delivered with meticulous prep and a flawless, lasting finish."
  }, {
    icon: /*#__PURE__*/React.createElement(BuildingIcon, null),
    title: "Commercial Painting",
    description: "Minimal-disruption painting programs for offices, retail and industrial properties, scheduled around your hours."
  }, {
    icon: /*#__PURE__*/React.createElement(RollerIcon, null),
    title: "Interior Painting",
    description: "Walls, ceilings, trim and feature accents finished with premium, low-VOC coatings for a refined result."
  }, {
    icon: /*#__PURE__*/React.createElement(SunIcon, null),
    title: "Exterior Painting",
    description: "Weather-resistant systems that protect your property while elevating its curb appeal for years to come."
  }, {
    icon: /*#__PURE__*/React.createElement(ArchiveIcon, null),
    title: "Cabinet Painting",
    description: "Factory-smooth cabinet refinishing for kitchens and bathrooms — a fraction of the cost of full replacement."
  }, {
    icon: /*#__PURE__*/React.createElement(FenceIcon, null),
    title: "Deck & Fence Staining",
    description: "Protective staining that guards outdoor wood against Vancouver's climate while enhancing natural grain."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: "5rem 0",
      background: "var(--color-mist)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 2rem"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Services",
    title: "Complete Painting Solutions",
    subtitle: "From single rooms to full commercial properties, our team delivers premium finishes tailored to your space."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3.5rem",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1.5rem"
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "1rem",
      background: "var(--primary-50)",
      color: "var(--primary-500)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1.25rem"
    }
  }, s.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-h3)",
      fontWeight: 600,
      color: "var(--navy-900)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.625rem",
      color: "var(--navy-500)",
      lineHeight: 1.6
    }
  }, s.description)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3rem",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "View All Services"))));
}
function HomeIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5 12 3l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9v11h14V9"
  }));
}
function BuildingIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "3",
    width: "16",
    height: "18",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"
  }));
}
function RollerIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "14",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11v9M8 20h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H8"
  }));
}
function SunIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  }));
}
function ArchiveIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M10 13h4"
  }));
}
function FenceIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4v16M9 4v16M14 4v16M19 4v16M2 9h6M2 15h6M7 9h6M7 15h6M12 9h6M12 15h6"
  }));
}
window.ServicesSection = ServicesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatsSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Eco Pacific Painting — Stats strip (uses design-system StatCard)
function StatsSection() {
  const {
    StatCard
  } = window.EcoPacificPaintingDesignSystem_026966;
  const STATS = [{
    icon: /*#__PURE__*/React.createElement(TrophyIcon, null),
    value: 500,
    suffix: "+",
    label: "Projects Completed"
  }, {
    icon: /*#__PURE__*/React.createElement(CalendarIcon, null),
    value: 10,
    suffix: "+",
    label: "Years Experience"
  }, {
    icon: /*#__PURE__*/React.createElement(SmileIcon, null),
    value: 100,
    suffix: "%",
    label: "Customer Satisfaction"
  }, {
    icon: /*#__PURE__*/React.createElement(ClockIcon, null),
    value: 24,
    suffix: " Hrs",
    label: "Quote Response"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      marginTop: "-4rem",
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 2rem",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1.5rem"
    }
  }, STATS.map(s => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: s.label
  }, s)))));
}
function TrophyIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5h3a2 2 0 0 1-2 4M7 5H4a2 2 0 0 0 2 4"
  }));
}
function CalendarIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  }));
}
function SmileIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"
  }));
}
function ClockIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  }));
}
window.StatsSection = StatsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatsSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.LoadingScreen = __ds_scope.LoadingScreen;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ImagePlaceholder = __ds_scope.ImagePlaceholder;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Card = __ds_scope.Card;

})();
