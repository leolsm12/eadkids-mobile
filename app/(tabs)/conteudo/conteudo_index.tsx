import { Text, View } from 'react-native';
import { styles } from './_conteudo_styles';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.info}>Nome: João da Silva</Text>
      <Text style={styles.info}>Email: joao@email.com</Text>

    </View>
  );
}
