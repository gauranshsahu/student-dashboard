import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../theme/colors";
import typography from "../theme/typography";

export default function StudyPlanCard({ item, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ hovered }) => [styles.card, hovered && styles.cardHover]}
    >
      <View style={styles.topRow}>
        <View style={styles.iconChip}>
          <Ionicons name={item.icon} size={18} color={colors.accentCyan} />
        </View>
        <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
      </View>

      <Text style={styles.title}>{item.title}</Text>
      {item.subtitle ? <Text style={styles.subtitle}>{item.subtitle}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexBasis: 240,
    flexGrow: 1,
    backgroundColor: colors.glassSurface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    padding: 18,
    minWidth: 220,
    // @ts-ignore - web-only CSS properties, forwarded as inline style by react-native-web
    backdropFilter: "blur(14px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.28)",
    transitionProperty: "transform, border-color, box-shadow",
    transitionDuration: "180ms",
  },
  cardHover: {
    borderColor: colors.accentIndigo,
    transform: [{ translateY: -3 }],
    // @ts-ignore
    boxShadow: "0 16px 36px rgba(108,99,255,0.28)",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  iconChip: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.bgCardAlt,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.sans,
    fontWeight: "700",
    fontSize: typography.sizes.h2,
    marginBottom: 4,
  },
  subtitle: {
    color: colors.textSecondary,
    fontFamily: typography.sans,
    fontSize: typography.sizes.label,
  },
});
