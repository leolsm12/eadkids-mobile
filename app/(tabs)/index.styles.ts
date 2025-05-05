import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFF',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6937',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#696773',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#272727',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#272727',
  },
});
