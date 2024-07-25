import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface RemoveCategoryModalProps {
  visible: boolean;
  onClose: () => void;
}

const Categories = [
  "All",
  "Close Friends",
  "Friends",
  "Family",
  "Work",
  "Gym Buddy",
];

const RemoveCategoryModal: React.FC<RemoveCategoryModalProps> = ({
  visible,
  onClose,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    if (visible) {
      setSelectedCategories([]);
    }
  }, [visible]);

  const handleRemove = () => {
    // Add logic to handle the removal of selected categories
    onClose();
  };

  const toggleCategorySelection = (category: string, isChecked: boolean) => {
    setSelectedCategories((prevSelected) =>
      isChecked
        ? [...prevSelected, category]
        : prevSelected.filter((item) => item !== category)
    );
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalView}>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <AntDesign
                  name="closecircleo"
                  size={24}
                  color="black"
                  style={styles.closeButtonText}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Remove Categories</Text>
              {Categories.map((category) => (
                <View key={category} style={styles.categoryContainer}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="#2196F3"
                    text={category}
                    iconStyle={{ borderColor: "#2196F3" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ textDecorationLine: "none" }}
                    isChecked={selectedCategories.includes(category)}
                    onPress={(isChecked: boolean) =>
                      toggleCategorySelection(category, isChecked)
                    }
                  />
                </View>
              ))}
              <TouchableOpacity style={styles.button} onPress={handleRemove}>
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    margin: 50,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 10,
    padding: 10,
  },
  closeButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    margin: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RemoveCategoryModal;
