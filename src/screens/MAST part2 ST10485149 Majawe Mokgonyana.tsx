import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, Picker } from "react-native";

type MenuItem = {
  id: number;
  dishName: string;
  description: string;
  course: string;
  price: number;
};

const HomeScreen = () => {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const predefinedCourses = ["Starters", "Mains", "Desserts"];

  // Add new menu item
  const addMenuItem = () => {
    if (!dishName || !description || !price) {
      Alert.alert("Missing Information", "Please fill in all fields before adding an item.");
      return;
    }

    const newItem: MenuItem = {
      id: Date.now(),
      dishName,
      description,
      course,
      price: parseFloat(price),
    };

    setMenuItems([...menuItems, newItem]);
    setDishName("");
    setDescription("");
    setCourse("Starters");
    setPrice("");
  };

  // Remove a specific menu item
  const removeMenuItem = (id: number) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  // Calculate total number of items
  const totalItems = menuItems.length;

  // Import list of menu items (simulated — not hardcoded)
  const importMenuItems = () => {
    const sampleData: MenuItem[] = [
      { id: 1, dishName: "Garlic Bread", description: "Crispy bread with garlic butter", course: "Starters", price: 25 },
      { id: 2, dishName: "Beef Stew", description: "Slow cooked beef with vegetables", course: "Mains", price: 85 },
      { id: 3, dishName: "Chocolate Cake", description: "Rich and moist dessert", course: "Desserts", price: 45 },
    ];
    setMenuItems(sampleData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef Christoffel Menu Manager</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Dish name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Picker selectedValue={course} onValueChange={(value) => setCourse(value)}>
        {predefinedCourses.map((c) => (
          <Picker.Item key={c} label={c} value={c} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Price (R)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <Button title="Add Item" onPress={addMenuItem} />
        <Button title="Import Sample Menu" onPress={importMenuItems} color="#008080" />
      </View>

      {/* Display Total */}
      <Text style={styles.total}>Total Menu Items: {totalItems}</Text>

      {/* Display Menu List */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemName}>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: R{item.price}</Text>
            <Button title="Remove" color="red" onPress={() => removeMenuItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fafafa" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  total: { fontWeight: "bold", marginTop: 10, fontSize: 16 },
  itemCard: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemName: { fontWeight: "bold", fontSize: 16 },
});
