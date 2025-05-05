import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const tabIcons: Record<string, { name: string; label: string }> = {
  index: { name: 'home', label: 'Home' },
  'conteudo/conteudo_index': { name: 'book-outline', label: 'Conteúdo' },
  'atividades/atividades_index': { name: 'book', label: 'Atividades' },
  'concluidas/concluidas_index': { name: 'checkmark-done-outline', label: 'Concluídas' },
  'perfil/perfil_index': { name: 'person-circle-outline', label: 'Perfil' },
};

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        if (isFocused) return null; // Oculta a aba atual

        const { options } = descriptors[route.key];
        const routeName = route.name;
        const iconData = tabIcons[routeName] ?? { name: 'help', label: routeName };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.button}
          >
            <View style={styles.iconCircle}>
              <Ionicons name={iconData.name as any} size={24} color="#ff6937" />
            </View>
            <Text style={styles.label}>{iconData.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ff6937',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: '#333',
  },
});
