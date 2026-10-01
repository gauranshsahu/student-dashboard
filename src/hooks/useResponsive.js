import { useWindowDimensions } from "react-native";

// Single source of truth for breakpoints so every component agrees on what
// "mobile" means. Covers the full range down to 330px.
export default function useResponsive() {
  const { width } = useWindowDimensions();
  return {
    width,
    isMobile: width < 768, // sidebar becomes a drawer, topbar compacts
    isSmall: width < 420, // hide secondary topbar text
    isTiny: width < 360, // tightest phones, minimal chrome only
  };
}
