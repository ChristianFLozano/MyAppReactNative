This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## You should install all dependencies with
```bash
# using npm
npm i
# OR using Yarn
yarn install
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Process
## Task: Create Dashboard interface
When you read this, your project doesn't have a navigate component, then you have a login.js Supabase.js index.js & app.tsx

### Step 1: Create a archive .jsx where will it be your main page and create your views.

### Step 2: Install "react navigation" dependencies
Is important that you should end metro server
The Commands is in the [React navigation](https://reactnavigation.org/docs/hello-react-navigation) <br>
Install the required packages in your React Native project:
```bash
# Using npm
npm install @react-navigation/native

# OR using yarn
yarn add @react-navigation/native
```
Installing dependencies into a bare React Native project
```bash
# Using npm
npm install react-native-screens react-native-safe-area-context

# OR using yarn
yarn add react-native-screens react-native-safe-area-context
```
Installing the native stack navigator library
```bash
# Using npm
npm install @react-navigation/native-stack

# OR using yarn
yarn add @react-navigation/native-stack
```

### Step 3: Create a native stack navigator
You should create a archive .jsx where will it be your stack, in my case my archive is called 'Menu.jsx' <br>
import the next, login is the archive where you created your login and dashboard is my main page
```bash
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import DASHBOARD from "./Dashboard"
```
You will have create the next function
```bash
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const Stack = createNativeStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name="Login" component={LOGIN}  options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={DASHBOARD}  options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
```
Login always have be the first stack.screen
In NavigatorContainer -> Stack.Navigator, your Stack.Screen is your page, 
the component prop in these components is your page component, and in options you have headerShown: false.
### Step 4: Modify APP.jsx
You will have change where the render component of your archive "native stack navigator", in my case Menu.jsx
```bash
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Menu from './Menu';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Menu/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
```
with these your app will start in the firt page in the navigate 
### Step 5: Add this.props.navigation.navigate('your route')
Into conditional structure when the data is correct <br>
example
```bash
if (error) {
   Alert.alert("Error al iniciar sesion","Asegurese que las credenciales sean correctas o esten llenos los campos")
}
else{
   Alert.alert("Inicio correcto",`Bienvenido ${this.state.correo}`, ) //here
   this.props.navigation.navigate('Dashboard')
}
```
## Step 6: Run your metro server
``` bash
    npm start --reset-cache
```
If there are error, the error is called navigate undefined, you should run metro again with the last command

YEAAH We have finished
