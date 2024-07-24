import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { contact } from '../types';

interface ContactItemProps {
  contact: contact;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const initials = contact.name.split(' ').map(n => n[0]).join('').toUpperCase();

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
        <Text style={styles.checkInInfo}>Last check-in: {contact.last_connected}</Text>
        <Text style={styles.checkInInfo}>Next check-in: {contact.next_connection}</Text>
      </View>
      <TouchableOpacity style={styles.checkInButton}>
        <Text style={styles.checkInButtonText}>Check in</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#2c2c2e',
      borderRadius: 8,
      marginBottom: 8,
    },
    initialsContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#3a3a3c',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    initials: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    infoContainer: {
      flex: 1,
    },
    name: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    checkInInfo: {
      color: '#8e8e93',
      fontSize: 14,
    },
    checkInButton: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
    },
    checkInButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
      },
  });

  
  export default ContactItem;
