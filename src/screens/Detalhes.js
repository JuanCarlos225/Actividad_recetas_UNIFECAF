import { Image, ScrollView, Text, View } from 'react-native';

import { styles } from '../styles/detalhesStyles';

export default function Detalhes({ route }) {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: receita.strMealThumb }} style={styles.imagem} />

      <View style={styles.info}>
        <Text style={styles.nome}>{receita.strMeal}</Text>
        <Text style={styles.detalhe}>
          {receita.strCategory} · {receita.strArea}
        </Text>

        <Text style={styles.titulo}>Modo de preparo</Text>
        <Text style={styles.texto}>{receita.strInstructions}</Text>
      </View>
    </ScrollView>
  );
}