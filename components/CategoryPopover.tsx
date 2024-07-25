import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CategoryPopoverProps {
  visible: boolean;
  onClose: () => void;
  onAddCategory: () => void;
  onDeleteCategory: () => void;
}

const CategoryPopover: React.FC<CategoryPopoverProps> = ({
  visible,
  onClose,
  onAddCategory,
  onDeleteCategory,
}) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={onAddCategory}>
        <Ionicons name="add-circle-outline" size={24} color="white" />
        <Text style={styles.optionText}>Add Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={onDeleteCategory}>
        <Ionicons name="trash-outline" size={24} color="white" />
        <Text style={styles.optionText}>Delete Category</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding:8,

    // Add positioning styles
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  optionText: {
    color: 'white',
    marginLeft: 8,
  },
});

export default CategoryPopover;


