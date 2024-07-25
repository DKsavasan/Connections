import { View, Text, StyleSheet } from "react-native";
import React, { useState, useMemo } from "react";
import contacts from "../../assets/data/contacts";
import CategoryScroll from "@/components/CategoryScroll";
import GroupedHistoryItems from "@/components/GroupedHistoryItems";

const history: React.FC = () => {
  const Categories = [
    "All",
    "Close Friends",
    "Friends",
    "Family",
    "Work",
    "Gym Buddy",
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredContacts = useMemo(() => {
    return selectedCategory === "All"
      ? contacts
      : contacts.filter((contact) => contact.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <CategoryScroll
        categories={Categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {contacts.length === 0 ? (
        <Text style={styles.emptyMessage}>
          Welcome to the History page, once you add Connections you will see
          your contact log here!
        </Text>
      ) : (
        <GroupedHistoryItems contacts={filteredContacts} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#2c2c2e",
  },
  emptyMessage: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default history;
