import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image,  Text, TouchableOpacity, View,
} from 'react-native';

import { buscarReceitas } from '../services/api';
import { styles } from '../styles/homeStyles';

export default function Home({ navigation }) {
  const [receitas, setReceitas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarReceitas('chicken');
        setReceitas(dados);
      } catch (e) {
        setErro('No fue posible cargar las recetas.');
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#d84315" />
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.centro}>
        <Text style={styles.erro}>{erro}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.lista}
      contentContainerStyle={styles.conteudo}
      data={receitas}
      keyExtractor={(item) => item.idMeal}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Detalhes', { receita: item })}
        >
          <Image source={{ uri: item.strMealThumb }} style={styles.imagem} />
          <Text style={styles.nome} numberOfLines={2}>
            {item.strMeal}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}