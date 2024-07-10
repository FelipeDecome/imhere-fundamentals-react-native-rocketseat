import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  name: {
    backgroundColor: '#1f1e25',
    borderRadius: 8,
    color: '#fdfcfe',
    flex: 1,
    fontSize: 16,
    padding: 16,
    textAlignVertical: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#e23c44',
    borderRadius: 8,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  buttonText: {
    color: '#fdfcfe',
    fontSize: 24,
  },
})
