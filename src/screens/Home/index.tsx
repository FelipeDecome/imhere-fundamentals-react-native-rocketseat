import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>
        Quarta, 10 de julho de 2024.
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}
