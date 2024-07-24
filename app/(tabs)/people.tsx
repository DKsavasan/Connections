import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import ContactItem from "@/components/ContactItem";
import { contact } from "../../types";
import contacts from "../../assets/data/contacts";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryScroll from "@/components/CategoryScroll";

const people = () => {
  const Categories = ["All", "Close Friends", "Friends", "Family", "Work", "Gym Buddy"];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredContacts =
    selectedCategory === "All"
      ? contacts
      : contacts.filter((contact) => contact.category === selectedCategory);

  return (
    <View style={styles.container}>
      <CategoryScroll
        categories={Categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {contacts.length === 0 ? (
        <Text style={styles.emptyMessage}>
          At the moment you don't have any contacts. Please add in order to view
          them here.
        </Text>
      ) : (
        <FlatList
          data={filteredContacts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ContactItem contact={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  emptyMessage: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default people;
