import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

// Wraps any content in a soft fade + slide-up entrance. Used for the
// welcome copy and staggered across the card grids so the dashboard feels
// alive on load instead of popping in all at once.
export default function FadeInUp({ children, delay = 0, style }) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 420,
      delay,
      useNativeDriver: false, // false for reliable behavior on react-native-web
    }).start();
  }, [anim, delay]);

  const translateY = anim.interpolate({ inputRange: [0, 1], outputRange: [16, 0] });

  return (
    <Animated.View style={[{ opacity: anim, transform: [{ translateY }] }, style]}>
      {children}
    </Animated.View>
  );
}
