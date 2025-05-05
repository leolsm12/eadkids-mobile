import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './_perfil_styles'; // Importando os estilos do arquivo _perfil_styles.ts

export default function PerfilScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.photoContainer}>
        {/* Imagem padrão */}
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.photoText}>Adicionar Foto</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.comentario]}
        placeholder="Deixe seu comentário"
        value={comentario}
        onChangeText={setComentario}
        multiline
      />
    </View>
  );
}