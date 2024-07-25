import { View, Text } from "react-native";
import React from "react";
import * as DropdownMenu from "zeego/dropdown-menu";
import { Entypo } from "@expo/vector-icons";

const CategoryDropdown1: React.FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        loop={false}
        side="bottom"
        align="center"
        alignOffset={0}
        avoidCollisions={true}
        collisionPadding={0}
        sideOffset={0}
      >
        <DropdownMenu.Label>Edit Categories</DropdownMenu.Label>
        <DropdownMenu.Item key="Add Category">
          <DropdownMenu.ItemTitle>Add Category</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default CategoryDropdown1;
