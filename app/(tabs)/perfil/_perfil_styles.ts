import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff6937',
  },
  photoText: {
    marginTop: 8,
    color: '#555',
  },
  input: {
    width: '90%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  comentario: {
    height: 100,
    textAlignVertical: 'top',
  },
});