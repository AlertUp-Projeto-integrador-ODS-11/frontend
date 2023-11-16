import Tema from './Tema';
import Usuario from './Usuario';

export default interface Postagem {
  id: number;
  titulo: string;
  descricao: string;
  relevancia: number;
  foto: string;
  municipio: string;
  data: string;
  tema: Tema | null;
  user: Usuario | null;
}