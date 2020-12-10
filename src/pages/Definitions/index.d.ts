interface LastSearchDataType {
  title: string;
}

interface FotosDataType {
  id: number;
  lote_id: number;
  img: string;
  thumb: string;
  path: string;
  destaque: number;
}

export interface LoteDataType {
  id: number;
  leilao_id: number;
  lote_grupo_id: number;
  sub_valor_1: number;
  sub_valor_2?: number;
  sub_valor_avaliacao: number;
  sub_titulo: string;
  sub_descricao?: string;
  sub_maior_lance?: number;
  sub_usuario_lance_id?: number;
  sub_status: number;
  sub_permitir_parcelamento: number;
  one_foto?: FotosDataType;
}

export interface CidadeDataType {
  id: number;
  nome: string;
}

export interface EstadoDataType {
  id: number;
  sigla: string;
}

export interface ComitenteDataType {
  id: number;
  nome: string;
}

export interface LogoDataType {
  id: number;
  img: string;
  path: string;
}

export interface LeilaoDataType {
  id: number;
  titulo: string;
  descricao: string;
  modalidade_1: string;
  modalidade_2?: string;
  local: string;
  data_1: string;
  data_2?: string;
  encerrado_1: number;
  encerrado_2: number;
  logo?: LogoDataType;
  cidade: CidadeDataType;
  uf: EstadoDataType;
  comitente: ComitenteDataType;
  lotes: LoteDataType[];
}
