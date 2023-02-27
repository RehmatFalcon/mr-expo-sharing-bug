# mr-expo-sharing-bug
Minimum reproduction for expo sharing bug

### Bug

1. Sharing.shareAsync call never resolves
2. The console.log("After sharing"); is never called
3. Cannot perform another share again as the previous one has not resolved yet.
We get this warning.

![image](https://user-images.githubusercontent.com/28915667/221496515-2bc514a8-f6e7-4e6c-8dea-6687966a8230.png)

### Expo
sdk: 48
