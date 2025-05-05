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
    color: '#009FB7',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#696773',
    textAlign: 'center',
    marginBottom: 24,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#272727',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    textAlign: 'center',
    color: '#272727',
  },
});
