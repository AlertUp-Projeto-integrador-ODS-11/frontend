import Tema from './Tema';
import Usuario from './Usuario';

export default interface Postagem {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  tema: Tema | null;
  user: Usuario | null;
}