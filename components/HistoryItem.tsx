import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { contact } from "../types";

interface ContactItemProps {
  contact: contact;
}

const HistoryItem: React.FC<ContactItemProps> = ({ contact }) => {
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

  console.log(initials);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.toptext}>
          Connected with <Text style={styles.name}>{contact.name}</Text> at{" "}
          <Text style={styles.checkInInfo}>{contact.last_connected}</Text>
        </Text>
        <Text style={styles.bottomtext}>
          <Text style={styles.about}>About:</Text>
          {contact.about}
        </Text>
      </View>
      {contact.image ? (
        <Image source={{ uri: contact.image }} style={styles.image} />
      ) : (
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>{initials}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#2c2c2e",
    borderRadius: 8,
    marginBottom: 10,
  },
  initialsContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3a3a3c",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 20,
  },
  toptext: {
    color: "white",
    fontSize: 18,
    paddingBottom: 5,
  },
  initials: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
  },
  bottomtext: {
    color: "white",
    fontSize: 18,
  },
  about: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  checkInInfo: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
});

export default HistoryItem;
