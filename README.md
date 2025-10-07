🍽️ Chef Christoffel Menu Manager
Part 2 – Adding the Logic
(Cross-Platform Mobile App)

📖 Project Overview

Chef Christoffel changes his menu every night and needs a small cross-platform app that allows him to capture new dishes quickly.
This project adds the main logic that makes the app functional. It allows the chef to add dishes, view them in a list, and see how many menu items are currently loaded.

🧠 Purpose of Part 2

In this stage, the focus was on coding the logic behind the interface.
The app now allows:

Adding new dishes with their name, description, course, and price.

Choosing from a predefined course list (Starters | Mains | Desserts).

Viewing all the items that have been added.

Seeing the total number of menu items on the screen.

Removing any dish if needed.

Importing a few sample dishes for quick testing.

No data is stored permanently — everything is kept only while the app is open.

⚙️ How to Run the App

Make sure Node.js and Expo CLI are installed:

npm install -g expo-cli


Create a new Expo TypeScript project (or open this one).

Copy the file HomeScreen.tsx into src/screens/.

Replace the content of App.tsx with:

import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
export default function App() { return <HomeScreen />; }


Install all dependencies:

npm install
npm install @react-native-picker/picker


Start the project:

npx expo start


Scan the QR code with the Expo Go app (or run it in an emulator).

🧩 Features in Action
Action	Description
Add Item	Saves the dish temporarily in the list
Import Sample Menu	Loads a short example menu (not hard-coded)
Remove	Deletes a dish from the list
Total Menu Items	Shows how many dishes have been added
💡 Technologies Used

React Native + TypeScript (via Expo)

React Hooks (useState) for state management

@react-native-picker/picker for course selection

VS Code for coding and testing

🎬 Demonstration Video

A short video shows how dishes are added, listed, and removed.
https://youtube.com/shorts/1ti3FP6_E9M?si=OgxlXn-_e7UwISab

📂 Repository Structure
chef-menu-manager/
 ┣ src/
 ┃ ┗ screens/
 ┃     ┗ HomeScreen.tsx
 ┣ App.tsx
 ┣ package.json
 ┗ README.md

🧍‍♂️ Student Reflection

During this part I learned how to manage React Native state using TypeScript and how to build a small interface that reacts to user input.
The most challenging part was keeping the data dynamic without saving it permanently, but using the useState hook solved this easily.
Overall, the app now works exactly as required and is ready for the next part where data storage will be added.

✅ End of Part 2 – Adding the Logic
