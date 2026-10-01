import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import colors from "../theme/colors";

// Small pulsing dot used next to "LIVE NOW" so the one truly time-sensitive
// card on the dashboard actually reads as live.
export default function LiveDot() {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.7, duration: 700, useNativeDriver: false }),
        Animated.timing(pulse, { toValue: 1, duration: 700, useNativeDriver: false }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [pulse]);

  return <Animated.View style={[styles.dot, { transform: [{ scale: pulse }] }]} />;
}

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.success,
  },
});
