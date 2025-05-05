import { Ionicons } from '@expo/vector-icons'; // Importando o ícone de cadeado
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  borderColor?: string;
  textColor?: string;
  backgroundColor?: string;
  icon?: boolean; // Nova prop para mostrar ou não o ícone
}

const screenWidth = Dimensions.get('window').width;

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onPress,
  style,
  borderColor = '#ff6937',
  textColor = '#ff6937',
  backgroundColor = '#fff',
  icon = false, // Valor padrão 'false' significa que o ícone não será exibido
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          borderColor: borderColor,
          backgroundColor: backgroundColor,
        },
        style,
      ]}
      onPress={onPress}
    >
      {/* Exibe o ícone de cadeado se a prop 'icon' for true */}
      {icon && <Ionicons name="lock-closed" size={24} color={textColor} style={styles.icon} />}
      
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: screenWidth * 0.7,
    paddingVertical: 14,
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 12,
    borderWidth: 2,
    flexDirection: 'row', // Para alinhar o ícone e o texto
    justifyContent: 'center', // Alinha o conteúdo horizontalmente
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8, // Dá espaço entre o ícone e o texto
  },
  icon: {
    marginRight: 8, // Dá espaço à direita do ícone, se necessário
  },
});
