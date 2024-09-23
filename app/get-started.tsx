import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ImageBackground,
} from "react-native";
import {
  Grid,
  GettingStarted1,
  GettingStarted2,
  GettingStarted3,
  GettingStarted4,
} from "../assets/images/index";

const slides = [
  {
    backgroundColor: "#dde2fc",
    title: `Are you \n an NRI working \n professional?`,
    description: "Send money to India 🇮🇳 with high rates.",
    image: GettingStarted1,
  },
  {
    backgroundColor: "#e0dbfc",
    title: `Make \n Every Dollar Count \n with Dollarpe!`,
    description: `Enjoy the best USA to India \n exchange rates 💰 today.`,
    image: GettingStarted2,
  },
  {
    backgroundColor: "#d7f4d1",
    title: `Invite & \n earn commission \n for lifetime.`,
    description: `Send money to \n India 🇮🇳 with high rates.`,
    image: GettingStarted3,
  },
  {
    backgroundColor: "#f7dedd",
    title: `Instant Payments, \n Zero Fees \n Guaranteed!`,
    description: `Enjoy fee-free, instant \n transfers from USA to India.`,
    image: GettingStarted4,
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const opacity = useRef(new Animated.Value(1)).current;

  const nextSlide = () => {
    // Animate the opacity to 0 before transitioning to the next slide
    Animated.timing(opacity, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      // Update the slide once the opacity animation completes
      setCurrentSlide((prev) => (prev + 1) % slides.length);

      // Animate the opacity back to 1 for the next slide
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Grid}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        {slides.map((slide, index) => (
          <Animated.View
            key={index}
            style={[
              styles.slide,
              {
                backgroundColor: slide.backgroundColor,
                opacity: index === currentSlide ? opacity : 0,
              },
            ]}
          >
            <View style={styles.overlay} />
            <View style={styles.content}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text></Text>
              <Text style={styles.description}>{slide.description}</Text>
              <Image source={slide.image} style={styles.image} />
            </View>
          </Animated.View>
        ))}

        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setCurrentSlide(index)}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === currentSlide ? "#000000" : "#7c7c7c",
                },
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  imageBackground: { flex: 1, justifyContent: "center", rotation: -17.83 },
  slide: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  pagination: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
    marginBottom: 10,
  },
  button: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center", // Center horizontally
    backgroundColor: "#000",
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 30,
    height: 48,
    width: "75%", // Adjust as needed for desired button width
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Carousel;
