import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../theme/colors";
import typography from "../theme/typography";
import { user } from "../data/mockData";
import useResponsive from "../hooks/useResponsive";

export default function TopBar({ onOpenMenu }) {
  const { isMobile, isSmall, isTiny } = useResponsive();

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        {isMobile ? (
          <Pressable style={styles.menuBtn} onPress={onOpenMenu}>
            <Ionicons name="menu-outline" size={22} color={colors.textPrimary} />
          </Pressable>
        ) : null}

        {!isMobile ? (
          <View style={styles.searchBox}>
            <Ionicons name="search-outline" size={16} color={colors.textMuted} />
            <TextInput
              placeholder="Search in Resources"
              placeholderTextColor={colors.textMuted}
              style={styles.searchInput}
            />
          </View>
        ) : (
          <Text style={styles.mobileBrand} numberOfLines={1}>
            EduRain
          </Text>
        )}

        <View style={styles.rightGroup}>
          {!isSmall ? (
            <View style={styles.gradePill}>
              <Text style={styles.gradeText} numberOfLines={1}>
                {user.grade}
              </Text>
              <Ionicons name="chevron-down" size={14} color={colors.textSecondary} />
            </View>
          ) : null}

          {!isTiny ? (
            <Pressable style={({ hovered }) => [styles.upgradeBtn, hovered && styles.upgradeBtnHover]}>
              <Ionicons name="sparkles-outline" size={14} color={colors.white} />
              {!isMobile ? <Text style={styles.upgradeText}>Upgrade to Pro</Text> : null}
            </Pressable>
          ) : null}

          {!isMobile ? (
            <Pressable style={styles.iconBtn}>
              <Ionicons name="notifications-outline" size={18} color={colors.textSecondary} />
            </Pressable>
          ) : null}

          <View style={styles.avatarGroup}>
            <View style={styles.avatar}>
              <Text style={styles.avatarInitial}>{user.name.charAt(0)}</Text>
            </View>
            {!isMobile ? <Text style={styles.userName}>{user.name}</Text> : null}
          </View>
        </View>
      </View>

      {isMobile ? (
        <View style={[styles.searchBox, styles.searchBoxMobile]}>
          <Ionicons name="search-outline" size={16} color={colors.textMuted} />
          <TextInput
            placeholder="Search in Resources"
            placeholderTextColor={colors.textMuted}
            style={styles.searchInput}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderBottomWidth: 1,
    borderBottomColor: colors.glassBorder,
    backgroundColor: colors.glassSurfaceStrong,
    // @ts-ignore - web-only CSS property, forwarded as inline style by react-native-web
    backdropFilter: "blur(18px)",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.glassSurface,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  mobileBrand: {
    color: colors.textPrimary,
    fontFamily: typography.serif,
    fontSize: 18,
    flexShrink: 1,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.glassSurface,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    minWidth: 220,
    flexShrink: 1,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  searchBoxMobile: {
    marginTop: 10,
    minWidth: 0,
    width: "100%",
  },
  searchInput: {
    marginLeft: 8,
    color: colors.textPrimary,
    fontFamily: typography.sans,
    fontSize: typography.sizes.body,
    // @ts-ignore - web-only, removes the default focus ring
    outlineStyle: "none",
    flex: 1,
  },
  rightGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  gradePill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.glassSurface,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    gap: 6,
    maxWidth: 160,
  },
  gradeText: {
    color: colors.textSecondary,
    fontFamily: typography.sans,
    fontSize: typography.sizes.label,
  },
  upgradeBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.accentIndigo,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
    // @ts-ignore
    transitionProperty: "opacity, transform",
    transitionDuration: "150ms",
  },
  upgradeBtnHover: {
    opacity: 0.88,
    transform: [{ translateY: -1 }],
  },
  upgradeText: {
    color: colors.white,
    fontFamily: typography.sans,
    fontWeight: "700",
    fontSize: typography.sizes.label,
  },
  iconBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.glassSurface,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  avatarGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.accentCyan,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitial: {
    color: colors.bgApp,
    fontFamily: typography.sans,
    fontWeight: "700",
    fontSize: typography.sizes.label,
  },
  userName: {
    color: colors.textPrimary,
    fontFamily: typography.sans,
    fontSize: typography.sizes.body,
    fontWeight: "600",
  },
});
