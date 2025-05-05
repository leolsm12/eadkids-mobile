import { Text, View } from 'react-native';
import { styles } from './index.styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      
      <Text style={styles.title}>EadKids</Text>
      <Text style={styles.subtitle}>
        <Text style={{ color: '#ff6937' }}>Transformando </Text>
        <Text style={{ color: '#272727' }}>o mundo num lugar </Text>
        <Text style={{ color: '#ff6937' }}>melhor.</Text>
      </Text>
      <Text style={styles.quote}>
        "A educação é a arma mais poderosa que você pode usar para mudar o mundo."
      </Text>
      <Text style={styles.author}>– Nelson Mandela</Text>
    </View>
  );
}