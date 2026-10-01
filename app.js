import { StyleSheet, View, useWindowDimensions } from "react-native";
import Sidebar from "./src/components/Sidebar";
import DashboardScreen from "./src/screens/DashboardScreen";
import colors from "./src/theme/colors";

export default function App() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={[styles.root, isMobile && styles.mobileRoot]}>
      {!isMobile && <Sidebar activeKey="dashboard" />}
      <DashboardScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.bgApp,
    minHeight: "100vh",
  },
  mobileRoot: {
    flexDirection: "column",
  },
});