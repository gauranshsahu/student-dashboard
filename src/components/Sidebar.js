import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../theme/colors";
import typography from "../theme/typography";
import { sidebarMain, sidebarStudy } from "../data/mockData";
import useResponsive from "../hooks/useResponsive";

const DRAWER_WIDTH = 240;

function NavRow({ item, active, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ hovered }) => [
        styles.navRow,
        active && styles.navRowActive,
        hovered && !active && styles.navRowHover,
      ]}
    >
      <Ionicons
        name={item.icon}
        size={18}
        color={active ? colors.white : colors.textSecondary}
        style={styles.navIcon}
      />
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{item.label}</Text>
    </Pressable>
  );
}

function SidebarContent({ activeKey, onNavigate }) {
  return (
    <>
      <View style={styles.brandRow}>
        <View style={styles.brandMark}>
          <Ionicons name="planet-outline" size={18} color={colors.bgApp} />
        </View>
        <Text style={styles.brandText}>EduRain</Text>
      </View>

      <Text style={styles.sectionLabel}>Menu</Text>
      <View style={styles.navGroup}>
        {sidebarMain.map((item) => (
          <NavRow
            key={item.key}
            item={item}
            active={item.key === activeKey}
            onPress={() => onNavigate && onNavigate(item.key)}
          />
        ))}
      </View>

      <Text style={styles.sectionLabel}>Your Study</Text>
      <View style={styles.navGroup}>
        {sidebarStudy.map((item) => (
          <NavRow
            key={item.key}
            item={item}
            active={item.key === activeKey}
            onPress={() => onNavigate && onNavigate(item.key)}
          />
        ))}
      </View>

      <View style={styles.spacer} />

      <Pressable style={({ hovered }) => [styles.upgradeBtn, hovered && styles.upgradeBtnHover]}>
        <Ionicons name="sparkles-outline" size={15} color={colors.bgApp} />
        <Text style={styles.upgradeText}>Upgrade to Pro</Text>
      </Pressable>
    </>
  );
}

export default function Sidebar({ activeKey = "dashboard", onNavigate, mobileVisible = false, onCloseMobile }) {
  const { isMobile } = useResponsive();
  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isMobile) return;
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: mobileVisible ? 0 : -DRAWER_WIDTH,
        duration: 220,
        useNativeDriver: false,
      }),
      Animated.timing(backdropOpacity, {
        toValue: mobileVisible ? 1 : 0,
        duration: 220,
        useNativeDriver: false,
      }),
    ]).start();
  }, [mobileVisible, isMobile, translateX, backdropOpacity]);

  const handleNavigate = (key) => {
    onNavigate && onNavigate(key);
    if (isMobile) onCloseMobile && onCloseMobile();
  };

  if (!isMobile) {
    return (
      <View style={styles.container}>
        <SidebarContent activeKey={activeKey} onNavigate={handleNavigate} />
      </View>
    );
  }

  return (
    <>
      {mobileVisible ? (
        <Animated.View
          style={[styles.backdrop, { opacity: backdropOpacity }]}
          pointerEvents={mobileVisible ? "auto" : "none"}
        >
          <Pressable style={StyleSheet.absoluteFill} onPress={onCloseMobile} />
        </Animated.View>
      ) : null}

      <Animated.View
        style={[styles.container, styles.drawer, { transform: [{ translateX }] }]}
      >
        <SidebarContent activeKey={activeKey} onNavigate={handleNavigate} />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: DRAWER_WIDTH,
    backgroundColor: colors.glassSurfaceStrong,
    borderRightWidth: 1,
    borderRightColor: colors.glassBorder,
    paddingVertical: 24,
    paddingHorizontal: 18,
    minHeight: "100%",
    // @ts-ignore - web-only CSS property, forwarded as inline style by react-native-web
    backdropFilter: "blur(18px)",
  },
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 40,
    // @ts-ignore - web-only, gives the drawer real depth as it slides over content
    boxShadow: "12px 0 40px rgba(0,0,0,0.45)",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(5, 9, 24, 0.6)",
    zIndex: 30,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  brandMark: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: colors.accentCyan,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  brandText: {
    color: colors.textPrimary,
    fontFamily: typography.serif,
    fontSize: 19,
  },
  sectionLabel: {
    color: colors.textMuted,
    fontFamily: typography.sans,
    fontSize: typography.sizes.micro,
    letterSpacing: 0.5,
    marginBottom: 10,
    marginTop: 6,
  },
  navGroup: {
    marginBottom: 22,
  },
  navRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 2,
    // @ts-ignore
    transitionProperty: "background-color",
    transitionDuration: "120ms",
  },
  navRowHover: {
    backgroundColor: colors.bgCard,
  },
  navRowActive: {
    backgroundColor: colors.accentIndigo,
  },
  navIcon: {
    marginRight: 10,
  },
  navLabel: {
    color: colors.textSecondary,
    fontFamily: typography.sans,
    fontSize: typography.sizes.body,
  },
  navLabelActive: {
    color: colors.white,
    fontWeight: "600",
  },
  spacer: {
    flex: 1,
  },
  upgradeBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.accentCyan,
    borderRadius: 999,
    paddingVertical: 11,
    gap: 8,
    // @ts-ignore
    transitionProperty: "opacity, transform",
    transitionDuration: "150ms",
  },
  upgradeBtnHover: {
    opacity: 0.9,
    transform: [{ translateY: -1 }],
  },
  upgradeText: {
    color: colors.bgApp,
    fontFamily: typography.sans,
    fontWeight: "700",
    fontSize: typography.sizes.body,
    marginLeft: 6,
  },
});
