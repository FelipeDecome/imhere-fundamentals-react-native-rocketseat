import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([
    "Participante 1",
    "Participante 2",
    "Participante 3",
    "Participante 4",
    "Participante 5",
    "Participante 6",
    "Participante 7",
    "Participante 8",
    "Participante 9",
    "Participante 10",
    "Participante 11",
    "Participante 12",
  ]);

  function handleAddParticipant() {
    if (participants.includes("Participante 2")) {
      Alert.alert("Erro", "Participante já cadastrado.");
      return;
    }
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover participante", `Deseja remover o participante ${name}?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        style: 'destructive',
        onPress: () => setParticipants(state => state.filter(participant => participant !== name)),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>
        Quarta, 10 de julho de 2024.
      </Text>

      <View style={{
        flex: 1,
        gap: 32,
      }}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor={"#6b6b6b"}
          />

          <TouchableOpacity
            onPress={handleAddParticipant}
            style={styles.button}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{
            gap: 8,
          }}
          data={participants}
          renderItem={({ item }) => (
            <Participant name={item} onRemove={handleRemoveParticipant}/>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyStyle}>
              Nenhum participante cadastrado. Adicione participantes para o evento.
            </Text>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
