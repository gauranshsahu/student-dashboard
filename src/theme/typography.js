import { Platform } from "react-native";

// Serif for display moments (the "EARTH" treatment) and a plain sans for
// everything functional. No custom font files are bundled here — these
// fall back to solid system faces per platform. Swap in real font files
// (e.g. Playfair Display + Inter) later by dropping them in ./assets/fonts
// and loading them with expo-font in App.js.
const serif = Platform.select({
  web: "Georgia, 'Times New Roman', serif",
  ios: "Georgia",
  android: "serif",
  default: "serif",
});

const sans = Platform.select({
  web: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif",
  ios: "System",
  android: "sans-serif",
  default: "System",
});

export default {
  serif,
  sans,
  sizes: {
    display: 34,
    h1: 24,
    h2: 18,
    body: 14,
    label: 12,
    micro: 11,
  },
};
