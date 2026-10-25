import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  lista: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  conteudo: {
    padding: 16,
  },
  centro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  erro: {
    fontSize: 16,
    color: '#b71c1c',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  nome: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});