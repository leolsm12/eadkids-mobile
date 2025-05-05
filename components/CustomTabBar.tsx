// components/CustomTabBar.tsx
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        if (isFocused) return null; // Oculta a aba atual

        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.button}
          >
            <Text style={styles.label}>
              {typeof label === 'string' ? label : label({ focused: false, color: '#333', position: 'beside-icon', children: '' })}
            </Text>
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
    padding: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
});
