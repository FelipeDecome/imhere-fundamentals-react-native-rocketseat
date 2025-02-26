import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131016',
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 64,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
    marginTop: 4,
  },
  form: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 32,
    width: '100%',
  },
  input: {
    backgroundColor: '#1f1e25',
    borderRadius: 8,
    color: '#fdfcfe',
    flex: 1,
    fontSize: 16,
    height: 56,
    padding: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#31cf67',
    borderRadius: 8,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  buttonText: {
    color: '#fdfcfe',
    fontSize: 24,
  },
  listEmptyStyle: {
    color: '#fdfcfe',
    fontSize: 14,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
})
