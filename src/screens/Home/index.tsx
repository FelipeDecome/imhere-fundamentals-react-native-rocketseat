import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

function ListEmptyComponent() {
  return (
    <Text style={styles.listEmptyStyle}>
      Nenhum participante cadastrado. Adicione participantes para o evento.
    </Text>
  );
}

export function Home() {
  const [participantName, setParticipantName] = useState<string>("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleAddParticipant() {
    const name = participantName.trim();

    if (participants.includes(name)) {
      Alert.alert("Participante cadastrado!", `Participante '${name}' já está cadastrado.`);
      return;
    }

    setParticipants(state => [...state, name]);

    setParticipantName("");
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover participante", `Deseja remover o participante '${name}'?`, [
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
            onChangeText={setParticipantName}
            placeholder="Nome do participante"
            placeholderTextColor={"#6b6b6b"}
            style={styles.input}
            value={participantName}
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
            <Participant name={item} onRemove={handleRemoveParticipant} />
          )}
          ListEmptyComponent={ListEmptyComponent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
