import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../theme/colors";
import typography from "../theme/typography";
import LiveDot from "./LiveDot";

export default function LibraryCard({ item, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ hovered }) => [styles.card, hovered && styles.cardHover]}
    >
      <View style={styles.iconChip}>
        <Ionicons name={item.icon} size={18} color={colors.accentCyan} />
      </View>

      <Text style={styles.title}>{item.title}</Text>

      <View style={styles.metaRow}>
        {item.live ? <LiveDot /> : null}
        <Text style={[styles.meta, item.live && styles.metaLive]}>{item.meta}</Text>
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Enter Vault</Text>
        <Ionicons name="chevron-forward" size={13} color={colors.accentCyan} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexBasis: 200,
    flexGrow: 1,
    backgroundColor: colors.glassSurface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    padding: 18,
    minWidth: 180,
    // @ts-ignore - web-only CSS properties, forwarded as inline style by react-native-web
    backdropFilter: "blur(14px)",
    transitionProperty: "transform, border-color",
    transitionDuration: "150ms",
  },
  cardHover: {
    borderColor: colors.accentIndigo,
    transform: [{ translateY: -2 }],
  },
  iconChip: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.bgCardAlt,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.sans,
    fontWeight: "700",
    fontSize: typography.sizes.h2,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 16,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.success,
  },
  meta: {
    color: colors.textSecondary,
    fontFamily: typography.sans,
    fontSize: typography.sizes.label,
  },
  metaLive: {
    color: colors.success,
    fontWeight: "700",
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  footerText: {
    color: colors.accentCyan,
    fontFamily: typography.sans,
    fontWeight: "600",
    fontSize: typography.sizes.label,
  },
});
