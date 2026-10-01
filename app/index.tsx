import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Sidebar from "../src/components/Sidebar";
import DashboardScreen from "../src/screens/DashboardScreen";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={[styles.root, gradientStyle]}>
      <Sidebar
        activeKey="dashboard"
        mobileVisible={menuOpen}
        onCloseMobile={() => setMenuOpen(false)} onNavigate={undefined}      />
      <DashboardScreen onOpenMenu={() => setMenuOpen(true)} />
    </View>
  );
}

// Plain object, not part of StyleSheet.create — "backgroundImage" with a
// linear-gradient is a web-only CSS concept that RN's native style schema
// doesn't recognize, but react-native-web forwards unknown style keys
// straight through as inline CSS, so this works on web as-is.
const gradientStyle = {
  backgroundImage:
    "linear-gradient(180deg, #78A0A0 0%, #507F88 35%, #183F5C 65%, #081830 100%)",
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    // minHeight: "100vh",
  },
});
