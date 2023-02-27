import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';
import { useState } from 'react';

export default function App() {

  const [steps, setSteps] = useState([]);

  const onPress = async () => {
    console.log("Button Pressed");
    const html = `
      <html>
        <body>
          <h1> Print File </h1>
        </body>
      </html>
    `;

    const {uri} = await Print.printToFileAsync({html});

    console.log("Before Sharing");
    
    await Sharing.shareAsync(uri, {
      UTI:".pdf",
      dialogTitle:"SHare ITem",
      mimeType:"application/pdf"
    });
    
    console.log("After sharing")
  };

  return (
    <View style={styles.container}>

      <Pressable onPress={onPress} style={{
        padding: 20,
        backgroundColor:"limegreen",
        borderRadius: 10
      }}>
        <Text style={{ color:"white" }}>
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
