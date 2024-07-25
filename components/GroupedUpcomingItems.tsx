import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import { contact } from "../types";
import UpcomingItem from "./UpcomingItem";

interface GroupedUpcomingItemsProps {
  contacts: contact[];
}

const GroupedUpcomingItems: React.FC<GroupedUpcomingItemsProps> = ({
  contacts,
}) => {
  const groupedData = React.useMemo(() => {
    const groups = contacts.reduce((acc, contact) => {
      const [day, month, year] = contact.last_connected.split("-");
      const key = `${year}-${month}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(contact);
      return acc;
    }, {} as Record<string, contact[]>);

    return Object.entries(groups)
      .map(([key, data]) => {
        const [year, month] = key.split("-");
        return {
          title: `${new Date(
            parseInt(year),
            parseInt(month) - 1
          ).toLocaleString("default", { month: "long", year: "numeric" })}`,
          data,
        };
      })
      .sort((a, b) => {
        const [yearA, monthA] = a.title.split(" ");
        const [yearB, monthB] = b.title.split(" ");
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return (
          new Date(parseInt(yearB), monthNames.indexOf(monthB)).getTime() -
          new Date(parseInt(yearA), monthNames.indexOf(monthA)).getTime()
        );
      });
  }, [contacts]);

  return (
    <SectionList
      sections={groupedData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UpcomingItem contact={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
      )}
      stickySectionHeadersEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {

  },
  sectionHeaderText: {
    color: "#8e8e93",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default GroupedUpcomingItems;
