import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

// Define the type for slide data
export type GettingStartedSlideData = {
  backgroundColor: string;
  title: string;
  description: string;
  image: string;
};

// Manually defining the prop type for the component
type CarouselProps = {
  slides: GettingStartedSlideData[];
};

// Define the functional component without using React.FC
const GettingStartedCarousel = ({ slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <View className="flex-1 justify-center relative">
      {slides.map(({ backgroundColor, title, description, image }, index) => (
        <View
          key={index}
          className={`absolute inset-0 justify-center items-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundColor }}
        >
          <View className="absolute inset-0 bg-black bg-opacity-20" />
          <View className="items-center px-5">
            <Text className="text-white text-4xl font-bold mb-3">{title}</Text>
            <Text className="text-white text-lg mb-5">{description}</Text>
            <Image source={{ uri: image }} className="w-52 h-52 mb-5" />
          </View>
        </View>
      ))}

      <View className="absolute bottom-24 left-0 right-0 flex-row justify-center items-center">
        {slides.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentSlide ? "bg-black" : "bg-gray-500"
            }`}
          />
        ))}
      </View>

      <TouchableOpacity className="absolute bottom-12 left-1/2 transform -translate-x-24 bg-black py-2 px-6 rounded-full flex flex-row items-center justify-center h-10">
        <Text className="text-white text-lg font-bold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GettingStartedCarousel;
