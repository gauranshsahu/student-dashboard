// Color tokens lifted from the "spaceedu" reference (deep navy, cyan/indigo
// accents, soft lavender text) so the whole app reads as one system.
export default {
  bgApp: "#0A1128",        // outermost background
  bgSidebar: "#0D1533",    // sidebar panel, a hair lighter than bgApp
  bgCard: "#131C40",       // resting card surface
  bgCardAlt: "#182353",    // icon chips / secondary surface
  border: "#232C56",       // hairline borders on cards & inputs

  accentCyan: "#4FD8E0",   // "Planet Earth" underline / live indicators
  accentIndigo: "#6C63FF", // primary buttons, active nav state

  textPrimary: "#F5F6FA",
  textSecondary: "#9AA3C7",
  textMuted: "#616B93",

  white: "#FFFFFF",
  danger: "#FF6B6B",
  success: "#4FD8A0",

  // Translucent surfaces used once a background video/image is in play,
  // so panels read as "glass" over the footage instead of blocking it.
  glassSurface: "rgba(19, 28, 64, 0.55)",
  glassSurfaceStrong: "rgba(13, 21, 51, 0.75)",
  glassBorder: "rgba(255, 255, 255, 0.08)",
};
