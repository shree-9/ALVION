# ALVION

A React Native mobile application built with TypeScript.

## About This Project

This is my mobile app project called ALVION. I'm still learning React Native and TypeScript, so if you find any bugs or have suggestions, please let me know!

## What I Used

- React Native - for building the mobile app
- TypeScript - for type safety 
- Expo -  I'm using Expo based on the app.json file

## Prerequisites

Before you start, make sure you have these installed on your computer:

- Node.js (I used version 18 or higher, but other versions might work too)
- npm (comes with Node.js) or yarn
- Expo CLI (if using Expo) - install with: `npm install -g expo-cli`
- For iOS: Xcode (Mac only)
- For Android: Android Studio

**Note:** I'm assuming you have a basic understanding of JavaScript and know how to use the terminal/command prompt.

## How to Install and Run

### Step 1: Clone the Repository

First, download the project to your computer:

```bash
git clone https://github.com/shree-9/ALVION.git
cd ALVION
```

### Step 2: Install Dependencies

Install all the required packages:

```bash
npm install
```

Or if you use yarn:

```bash
yarn install
```

**Note:** This might take a few minutes. Don't worry if you see some warnings!

### Step 3: Start the App

Run the development server:

```bash
npm start
```

Or:

```bash
npx expo start
```

### Step 4: Run on Device/Emulator

After starting the app, you should see a QR code in your terminal. You can:

- **For Android:** Scan the QR code with the Expo Go app
- **For Emulator:** Press 'a' for Android emulator 

## Project Structure

```
ALVION/
├── assets/          # Images, fonts, and other static files
├── src/            # Source code goes here
├── App.tsx         # Main app component
├── index.ts        # Entry point
├── app.json        # App configuration
├── package.json    # Dependencies and scripts
└── tsconfig.json   # TypeScript configuration
```


## Troubleshooting

### If `npm install` fails:
- Try deleting `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Make sure you have the latest version of Node.js

### If the app won't start:
- Try `npm start --reset-cache`
- Make sure no other apps are running on the same port
- Check if you have Expo CLI installed globally

### Metro bundler issues:
- Close the terminal and restart
- Try `npx expo start -c` to clear cache
