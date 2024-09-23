import { View, Image, Text } from "react-native";
import { Link } from "expo-router";
import { useEffect } from "react";
import { useRouter } from "expo-router";
export default function LaunchScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/get-started"); // Navigate to "Get Started" screen after 1.5 seconds
    }, 1500);

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Image
        source={require("../assets/images/DollarPe White Logo 4x.png")}
        className="w-40 h-40"
        resizeMode="contain"
      />
    </View>
  );
}
