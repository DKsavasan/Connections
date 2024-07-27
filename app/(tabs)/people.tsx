import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState, useMemo, useRef } from "react";
import ContactItem from "@/components/ContactItem";
import { contact } from "../../types";
import contacts from "../../assets/data/contacts";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryScroll from "@/components/CategoryScroll";
import AlphabetList from "@/components/AlphabetList";

const sortContactsAlphabetically = (a: contact, b: contact) => {
  const nameA = a.name.trim().toLowerCase();
  const nameB = b.name.trim().toLowerCase();

  const partsA = nameA.split(' ');
  const partsB = nameB.split(' ');

  const firstNameComparison = partsA[0].localeCompare(partsB[0]);

  return firstNameComparison !== 0 ? firstNameComparison : nameA.localeCompare(nameB);
};

const People = () => {
  const Categories = ["All", "Close Friends", "Friends", "Family", "Work", "Gym Buddy"];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const flatListRef = useRef<FlatList>(null);

  const filteredAndSortedContacts = useMemo(() => {
    const filtered = selectedCategory === "All"
      ? contacts
      : contacts.filter((contact) => contact.category === selectedCategory);
    
    return filtered.sort(sortContactsAlphabetically);
  }, [selectedCategory, contacts]);

  const handleSelectLetter = (letter: string) => {
    const index = filteredAndSortedContacts.findIndex(contact => 
      contact.name.trim().toLowerCase().startsWith(letter.toLowerCase())
    );
    if (index !== -1) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <CategoryScroll
        categories={Categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <AlphabetList onSelectLetter={handleSelectLetter} />

      {contacts.length === 0 ? (
        <Text style={styles.emptyMessage}>
          At the moment you don't have any contacts. Please add in order to view
          them here.
        </Text>
      ) : (
        <FlatList
          ref={flatListRef}
          data={filteredAndSortedContacts}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ContactItem contact={item} />}
          onScrollToIndexFailed={(info) => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
            });
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#2c2c2e',
  },
  emptyMessage: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default People;