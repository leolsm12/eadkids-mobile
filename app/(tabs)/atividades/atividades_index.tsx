import { CustomButton } from '@/components/CustomButton';
import { Text, View } from 'react-native';
import { styles } from './_atividades_styles';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ATIVIDADES</Text>
      <CustomButton label="ADIÇÃO" onPress={() => console.log('Adição clicada')} />
      <CustomButton label="SUBTRAÇÃO" onPress={() => console.log('Adição clicada')} />
      <CustomButton label="MULTIPLICAÇÃO" onPress={() => console.log('Adição clicada')} />
      <CustomButton label="UNIDADE" onPress={() => console.log('Adição clicada')} />
      <CustomButton label="DEZENA" onPress={() => console.log('Adição clicada')} />
      <CustomButton label="CENTENA" onPress={() => console.log('Adição clicada')} />
    </View>
  );
}
