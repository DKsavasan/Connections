import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, ScrollView } from "react-native";

const NewContactScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [socialProfile, setSocialProfile] = useState("");
  const [notes, setNotes] = useState("");

  const resetInputs = () => {
    setFirstName("");
    setLastName("");
    setCompany("");
    setTitle("");
    setPhone("");
    setEmail("");
    setDate("");
    setSocialProfile("");
    setNotes("");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileImage} />
        <Button title="Add Photo" onPress={() => {}} />
      </View>

      <View style={styles.inputSection}>
        <View style={styles.nameContainer}>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            style={[styles.fullInput]}
            placeholder="First name"
            placeholderTextColor="#ccc"
            multiline
          />
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            style={[styles.fullInput]}
            placeholder="Last name"
            placeholderTextColor="#ccc"
            multiline
          />
        </View>
        <View style={styles.nameContainer}>
          <TextInput
            value={company}
            onChangeText={setCompany}
            style={styles.fullInput}
            placeholder="Company"
            placeholderTextColor="#ccc"
            multiline
          />
          <TextInput
            value={title}
            onChangeText={setTitle}
            style={styles.fullInput}
            placeholder="Title"
            placeholderTextColor="#ccc"
            multiline
          />
        </View>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          placeholder="add phone"
          placeholderTextColor="#ccc"
          multiline
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="add email"
          placeholderTextColor="#ccc"
          multiline
        />

        <TextInput
          value={date}
          onChangeText={setDate}
          style={styles.input}
          placeholder="add date"
          placeholderTextColor="#ccc"
          multiline
        />
        <TextInput
          value={socialProfile}
          onChangeText={setSocialProfile}
          style={styles.input}
          placeholder="add social profile"
          placeholderTextColor="#ccc"
          multiline
        />
        <TextInput
          value={notes}
          onChangeText={setNotes}
          style={[styles.notes]}
          placeholder="Notes"
          placeholderTextColor="#ccc"
          multiline
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Submit" color="#007AFF" onPress={resetInputs} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2c2e",
  },
  profileSection: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#444",
    marginBottom: 10,
  },
  inputSection: {
    padding: 10,
  },
  input: {
    backgroundColor: "#212124",
    color: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  notes: {
    backgroundColor: "#212124",
    color: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    height: 100,
  },
  nameContainer: {
    flexDirection: "column",
    marginVertical: 5,
    backgroundColor: "#212124",
    borderRadius: 5,
  },
  fullInput: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: "#212124",
    color: "#fff",
    padding: 10,
    marginVertical: 0,
    borderRadius: 5,
  },
  buttonContainer: {
    padding: 10,
    alignItems: "center",
  },
});

export default NewContactScreen;
