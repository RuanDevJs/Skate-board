import { Dimensions, Platform } from "react-native";
import DeviceProps from "../@types/Device";

const { width, height } = Dimensions.get("window");
const plataform = Platform.OS;

function Device(): DeviceProps {
    return {
        width,
        height,
        plataform,
        behavior: plataform === "android" ? "height" : "padding",
    };
}

export default Device();
