import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Platform,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { MenuView } from "@react-native-menu/menu";

interface CategoryModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
}

const CategoryModal: React.FC<CategoryModalProps> = ({
  isVisible,
  onClose,
  title,
}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={isVisible}
    onRequestClose={onClose}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{title}</Text>
        <TouchableOpacity onPress={onClose} style={styles.submitButton}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export function CategoryMenu() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handlePressAction = ({ nativeEvent }: { nativeEvent: any }) => {
    if (nativeEvent.event === "add") {
      setIsAddModalVisible(true);
    } else if (nativeEvent.event === "delete") {
      setIsDeleteModalVisible(true);
    }
  };

  return (
    <View>
      <MenuView
        title="Category Actions"
        onPressAction={handlePressAction}
        actions={[
          {
            id: "add",
            title: "Add Category",
            image: Platform.select({
              ios: "plus",
              android: "ic_menu_add",
            }),
          },
          {
            id: "delete",
            title: "Delete Category",
            image: Platform.select({
              ios: "trash",
              android: "ic_menu_delete",
            }),
            attributes: {
              destructive: true,
            },
          },
        ]}
      >
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </MenuView>

      <CategoryModal
        isVisible={isAddModalVisible}
        onClose={() => setIsAddModalVisible(false)}
        title="Add Category"
      />
      <CategoryModal
        isVisible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        title="Delete Category"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
});
