import React from "react";
import { Tabs } from "expo-router";
import {
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#2c2c2e" },
        headerStyle: { backgroundColor: "#2c2c2e" },
        headerTintColor: "white",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="people"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="people" size={(size = 35)} color={color} />
          ),
          title: "People",
        }}
      />
      <Tabs.Screen
        name="upcoming"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="connect-without-contact"
              size={(size = 30)}
              color={color}
            />
          ),
          title: "Upcoming",
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="adduser" size={(size = 30)} color={color} />
          ),
          title: "Add",
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="history" size={(size = 25)} color={color} />
          ),
          title: "History",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={(size = 25)} color={color} />
          ),
          title: "Settings",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
