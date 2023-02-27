# mr-expo-sharing-bug
Minimum reproduction for expo sharing bug

### Bug

1. Sharing.shareAsync call never resolves
2. The console.log("After sharing"); is never called
3. Cannot perform another share again as the previous one has not resolved yet.
We get this warning.

![image](https://user-images.githubusercontent.com/28915667/221496515-2bc514a8-f6e7-4e6c-8dea-6687966a8230.png)

### Expo Environment

expo-env-info 1.0.5 environment info:
System:
OS: Linux 5.19 Ubuntu 22.04.1 LTS 22.04.1 LTS (Jammy Jellyfish)
Shell: Unknown
Binaries:
Node: 16.16.0 - ~/.nvm/versions/node/v16.16.0/bin/node
Yarn: 1.22.19 - ~/.nvm/versions/node/v16.16.0/bin/yarn
npm: 8.11.0 - ~/.nvm/versions/node/v16.16.0/bin/npm
npmPackages:
expo: ~48.0.4 => 48.0.4
react: 18.2.0 => 18.2.0
react-native: 0.71.3 => 0.71.3
npmGlobalPackages:
eas-cli: 2.6.0
expo-cli: 6.3.2
Expo Workflow: managed
