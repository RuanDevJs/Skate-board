import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import PosterProps from "../@types/Poster";
import Device from "../helpers/Device";

const ITEM_SIZE = Device.width * 0.72;

export default function Poster({ item, index, translateX }: PosterProps) {
  const INPUT_RANGE = [
    (index - 1) * Device.width,
    index * Device.width,
    (index + 1) * Device.width,
  ];

  const rStyledPoster = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(
            interpolate(translateX.value, INPUT_RANGE, [-100, 0, -100])
          ),
        },
      ],
      opacity: interpolate(translateX.value, INPUT_RANGE, [0, 1, 0]),
    };
  });

  const hStyledPoster = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(
            interpolate(translateX.value, INPUT_RANGE, [80, 0, 80])
          ),
        },
      ],
      opacity: interpolate(translateX.value, INPUT_RANGE, [0, 1, 0]),
    };
  });

  return (
    <View style={styles.container}>
      <Image
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        source={{ uri: item.source }}
        blurRadius={16}
      />
      <View>
        <Animated.Image
          source={{ uri: item.source }}
          style={[styles.poster, rStyledPoster]}
          resizeMode="cover"
        />
      </View>
      <Animated.View style={hStyledPoster}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Device.width,
    height: Device.height,
    alignItems: "center",
    justifyContent: "center",
  },
  poster: {
    width: ITEM_SIZE,
    height: ITEM_SIZE * 1.2,
    resizeMode: "cover",
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    color: "#f2f2f2",
    fontWeight: "900",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 8,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 14,
    color: "#f9f9f9",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 14 * 1.5,
    paddingHorizontal: 8,
  },
});
