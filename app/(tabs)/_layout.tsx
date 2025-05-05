import { CustomTabBar } from '@/components/CustomTabBar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
      }}
      initialRouteName="index"
      tabBar={(props) => <CustomTabBar {...props} />}
     >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="conteudo/conteudo_index" options={{ title: 'Conteudo' }} />
      <Tabs.Screen name="atividades/atividades_index" options={{ title: 'Atividades' }} />
      <Tabs.Screen name="concluidas/concluidas_index" options={{ title: 'Concluidas' }} />
      <Tabs.Screen name="perfil/perfil_index" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}