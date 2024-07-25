import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import AddCategoryModal from "./AddCategoryModal"; // Assuming the correct path to your modal components
import DeleteCategoryModal from "./DeleteCategoryModal";

const MenuButton: React.FC = ({}) => {
  const [visible, setVisible] = useState(false);
  const [addCategoryModalVisible, setAddCategoryModalVisible] = useState(false);
  const [deleteCategoryModalVisible, setDeleteCategoryModalVisible] =
    useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const openAddCategoryModal = () => {
    setAddCategoryModalVisible(true);
    hideMenu();
  };

  const openDeleteCategoryModal = () => {
    setDeleteCategoryModalVisible(true);
    hideMenu();
  };

  return (
    <View
      style={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <Menu
        visible={visible}
        anchor={
          <Entypo
            name="dots-three-vertical"
            size={24}
            color="black"
            onPress={showMenu}
          />
        }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={openAddCategoryModal} >
          Add Category
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={openDeleteCategoryModal}>Delete Category</MenuItem>
      </Menu>

      {/* Wrap modals in components that depend on their state */}
      <View>
        <AddCategoryModal
          visible={addCategoryModalVisible}
          onClose={() => setAddCategoryModalVisible(false)}
        />
      </View>
      <View>
        <DeleteCategoryModal
          visible={deleteCategoryModalVisible}
          onClose={() => setDeleteCategoryModalVisible(false)}
        />
      </View>
    </View>
  );
};

export default MenuButton;
