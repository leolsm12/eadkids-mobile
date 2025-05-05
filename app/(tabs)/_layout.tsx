import { CustomTabBar } from '@/components/CustomTabBar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="conteudo/conteudo_index" options={{ title: 'conteudo' }} />
      <Tabs.Screen name="atividades/atividades_index" options={{ title: 'atividades' }} />
      <Tabs.Screen name="concluidas/concluidas_index" options={{ title: 'concluidas' }} />
      <Tabs.Screen name="perfil/perfil_index" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}