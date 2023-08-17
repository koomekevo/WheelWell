import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ setSelectedCategory }) {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Car Repair",
      value: "car_repair",
      icon: require("./../../../assets/car_repair.png"),
    },
    {
      id: 3,
      name: "Car Wash",
      value: "car_wash",
      icon: require("./../../../assets/car_wash.png"),
    },
  ];
  return (
    <View style={{ marginTop: 15 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        Select Top Category
      </Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
