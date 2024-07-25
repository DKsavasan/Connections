import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoryPopover from './CategoryPopover';
import AddCategoryModal from './AddCategoryModal';
import DeleteCategoryModal from './DeleteCategoryModal';

const CategoryManager: React.FC = () => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleAddCategory = () => {
    setPopoverVisible(false);
    setAddModalVisible(true);
  };

  const handleDeleteCategory = () => {
    setPopoverVisible(false);
    setDeleteModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setPopoverVisible(true)}>
        <Ionicons name="apps" size={24} color="white" />
      </TouchableOpacity>
      
      <CategoryPopover
        visible={isPopoverVisible}
        onClose={() => setPopoverVisible(false)}
        onAddCategory={handleAddCategory}
        onDeleteCategory={handleDeleteCategory}
      />
      
      <AddCategoryModal
        visible={isAddModalVisible}
        onClose={() => setAddModalVisible(false)}
      />
      
      <DeleteCategoryModal
        visible={isDeleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add positioning styles as needed
  },
});

export default CategoryManager;
