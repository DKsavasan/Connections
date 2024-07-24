import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryScroll: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryButton,
            selectedCategory === category && styles.selectedCategory,
          ]}
          onPress={() => onSelectCategory(category)}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    marginBottom: 10,
  },
  categoryButton: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#2c2c2e",
  },
  selectedCategory: {
    backgroundColor: "#818181",
  },
  categoryText: {
    color: "white",
    fontSize: 18,
  },
});

export default CategoryScroll;
