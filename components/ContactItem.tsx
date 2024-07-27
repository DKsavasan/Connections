import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { contact } from "../types";

interface ContactItemProps {
  contact: contact;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const initials = contact.name
    .trim()
    .split(" ")
    .reduce((acc, part, index, arr) => {
      if (index === 0 || index === arr.length - 1) {
        acc += part[0];
      }
      return acc;
    }, "")
    .toUpperCase();

  return (
    <View style={styles.container}>
      {contact.image ? (
        <Image source={{ uri: contact.image }} style={styles.image} />
      ) : (
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>{initials}</Text>
        </View>
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.checkInInfo}>
          Last check-in:{" "}
          <Text style={styles.checkInDate}>{contact.last_connected}</Text>
        </Text>
        <Text style={styles.checkInInfo}>
          Next check-in:{" "}
          <Text style={styles.checkInDate}>{contact.next_connection}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.checkInButton}>
        <Text style={styles.checkInButtonText}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2c2c2e",
    borderRadius: 8,
    marginBottom: 30,
  },
  initialsContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3a3a3c",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  initials: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  checkInInfo: {
    color: "#8e8e93",
    fontSize: 14,
    fontWeight: "bold",
  },
  checkInDate: {
    color: "#8e8e93",
    fontSize: 14,
    fontStyle: "italic",
  },
  checkInButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 20,
  },
  checkInButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
});

export default ContactItem;
