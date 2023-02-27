import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';

export default function App() {

  const onPress = async () => {
    const html = `
      <html>
        <body>
          <h1> Print File </h1>
        </body>
      </html>
    `;
    const {uri} = await Print.printToFileAsync({html});

    console.log("Before");
    await Sharing.shareAsync(uri, {
      UTI:".pdf",
      dialogTitle:"SHare ITem",
      mimeType:"application/pdf"
    });
    console.log("After")
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <Pressable onPress={onPress}>
        <Text>
          Share
        </Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
