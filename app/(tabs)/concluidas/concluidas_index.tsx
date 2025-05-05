import { CustomButton } from '@/components/CustomButton';
import { Text, View } from 'react-native';
import { styles } from './_concluidas_styles';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REALIZADAS</Text>
      <CustomButton label="ADIÇÃO" onPress={() => console.log('Adição clicada')} 
         backgroundColor="#fff"
         borderColor="#000"
         textColor="#000"
         icon={true}/>
      <CustomButton label="SUBTRAÇÃO" onPress={() => console.log('Adição clicada')} 
        backgroundColor="#fff"
        borderColor="#000"
        textColor="#000"
        icon={true}/>
      <CustomButton label="MULTIPLICAÇÃO" onPress={() => console.log('Adição clicada')} 
        backgroundColor="#fff"
        borderColor="#000"
        textColor="#000"
        icon={true}/>
      <CustomButton label="UNIDADE" onPress={() => console.log('Adição clicada')} 
        backgroundColor="#fff"
        borderColor="#000"
        textColor="#000"
        icon={true}/>
      <CustomButton label="DEZENA" onPress={() => console.log('Adição clicada')} 
        backgroundColor="#fff"
        borderColor="#000"
        textColor="#000"
        icon={true}/>
      <CustomButton label="CENTENA" onPress={() => console.log('Adição clicada')} 
        backgroundColor="#fff"
        borderColor="#000"
        textColor="#000"
        icon={true}/>
    </View>
  );
}
