# Jenius Contact App 👋

This is a project for Technical Test using [React Native](https://reactnative.dev) [Expo](https://expo.dev).

## Get started

1. Install dependencies

   ```bash
   npm i
   ```

2. Start the app

   ```bash
    npm run start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

3. Build app using vercel for web

   ```bash
    npm i -g vercel
   ```
   ```bash
    vercel
   ```

4. Or Install EAS for build into mobile platform

   ```bash
    npm i -g eas-cli
   ```

5. Build app using eas as bundle or preview

   ```bash
    eas build -p [android|ios]
   ```
   ```bash
    eas build -p [android|ios] --profile preview
   ```