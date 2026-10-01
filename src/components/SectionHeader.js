import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../theme/colors";
import typography from "../theme/typography";

export default function SectionHeader({ icon, title, actionLabel, onAction }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.titleRow}>
        {icon ? (
          <Ionicons name={icon} size={18} color={colors.accentCyan} style={styles.icon} />
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </View>

      {actionLabel ? (
        <Pressable onPress={onAction} style={styles.action}>
          <Text style={styles.actionText}>{actionLabel}</Text>
          <Ionicons name="chevron-forward" size={14} color={colors.textSecondary} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.serif,
    fontSize: typography.sizes.h1,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actionText: {
    color: colors.textSecondary,
    fontFamily: typography.sans,
    fontSize: typography.sizes.label,
  },
});
