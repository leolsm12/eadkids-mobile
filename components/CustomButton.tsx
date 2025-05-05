import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle; // opcional, para personalização extra
}

const screenWidth = Dimensions.get('window').width;

export const CustomButton: React.FC<CustomButtonProps> = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: screenWidth * 0.7,
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 12,
    borderWidth: 2,
    borderColor: '#ff6937', // laranja
  },
  text: {
    color: '#ff6937', // texto laranja
    fontSize: 18,
    fontWeight: 'bold',
  },
});