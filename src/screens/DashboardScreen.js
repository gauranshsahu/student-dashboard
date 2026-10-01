import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import colors from "../theme/colors";
import typography from "../theme/typography";
import TopBar from "../components/TopBar";
import SectionHeader from "../components/SectionHeader";
import StudyPlanCard from "../components/StudyPlanCard";
import LibraryCard from "../components/LibraryCard";
import FadeInUp from "../components/FadeInUp";
import useResponsive from "../hooks/useResponsive";
import { studyPlans, library, user } from "../data/mockData";

export default function DashboardScreen({ onOpenMenu }) {
  const { isMobile } = useResponsive();

  return (
    <View style={styles.container}>
      <TopBar onOpenMenu={onOpenMenu} />

      <ScrollView
        contentContainerStyle={[styles.scrollContent, isMobile && styles.scrollContentMobile]}
      >
        <FadeInUp delay={0}>
          <Text style={[styles.welcome, isMobile && styles.welcomeMobile]}>
            Welcome back, {user.name.toLowerCase()}. Continue your mission.
          </Text>
          <Text style={styles.welcomeSub}>Here's what's lined up for you today.</Text>
        </FadeInUp>

        <FadeInUp delay={60}>
          <SectionHeader icon="compass-outline" title="Study Plans" />
        </FadeInUp>
        <View style={styles.cardRow}>
          {studyPlans.map((item, index) => (
            <FadeInUp key={item.key} delay={100 + index * 70} style={styles.cardFlex}>
              <StudyPlanCard item={item} />
            </FadeInUp>
          ))}
        </View>

        <View style={styles.sectionGap} />

        <FadeInUp delay={80}>
          <SectionHeader icon="library-outline" title="Library" actionLabel="View All Resources" />
        </FadeInUp>
        <View style={styles.cardRow}>
          {library.map((item, index) => (
            <FadeInUp key={item.key} delay={140 + index * 70} style={styles.cardFlex}>
              <LibraryCard item={item} />
            </FadeInUp>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 48,
  },
  scrollContentMobile: {
    padding: 16,
    paddingBottom: 40,
  },
  welcome: {
    color: colors.textPrimary,
    fontFamily: typography.serif,
    fontSize: typography.sizes.display,
    marginBottom: 4,
    maxWidth: 640,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 12,
  },
  welcomeMobile: {
    fontSize: 24,
  },
  welcomeSub: {
    color: colors.textSecondary,
    fontFamily: typography.sans,
    fontSize: typography.sizes.body,
    marginBottom: 28,
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  cardFlex: {
    flexBasis: 240,
    flexGrow: 1,
    minWidth: 200,
  },
  sectionGap: {
    height: 32,
  },
});
