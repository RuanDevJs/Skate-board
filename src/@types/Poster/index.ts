import Animated from "react-native-reanimated";

import Skate from "../Skates";

export default interface Poster {
    item: Skate;
    index: number;
    translateX: Animated.SharedValue<number>;
}
