# Viatel case

Repository belonging to Thomas Berggren

## Description

This app is built in Expo for easy and quick implementations

## Screenshots

<img width="334" alt="image" src="https://github.com/ttlenell/viatelCase/assets/55179117/191f61c0-2b82-4e66-90bb-e34390af65f6">
<img width="334" alt="image" src="https://github.com/ttlenell/viatelCase/assets/55179117/e50c688f-e0ea-40db-95d9-ca1c55282200">


## Getting Started

### Dependencies

Start by cloning

```
git clone git@github.com:ttlenell/viatelCase.git
```

Expo

Installing the expo CLI is mandatory to be able to run the project.

```
npm i -g expo-cli
```

If any issues occur with Expo, please follow this installation setup
https://docs.expo.dev/get-started/installation/

Expo Go is okay for this project since we aren't changing any native folders (iOS/android).

The guides below will help you install a simulator for iOS and an emulator for Android.

```
iOS: https://docs.expo.dev/workflow/ios-simulator/
```

```
Android: https://docs.expo.dev/workflow/android-studio-emulator/
```

### Installing

After cloning the project, you need to:

Run yarn to install all dependencies

```
yarn
```

### Executing the app

The metro server (React Native server that works with a file watcher called watchman. Basically it checks for file changes to enable hot reload when saving a code change in VS code for example) will start at when running the commands below.

When running apps on the simulator/emulator, it tends to work better on iOS rather than android. Worth keeping in mind if you have FPS issues in the android emulator.

To run iOS

```
npx expo start
```

And press the letter "i" on your keyboard when the server is started

To run Android
Press the letter "a" on your keyboard when the server is started

If the app runs really slow in Expo GO, then I suggest to run the app with the command

```
npx expo run:android
```

This will build the native android files and run it more like a development build.
