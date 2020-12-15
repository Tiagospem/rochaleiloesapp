import {ReactNode} from 'react';

export interface UserProps {
  id: number;
  apelido: string;
  email: string;
  tipo_cadastro: number;
  cnpj?: string;
  cpf?: string;
  nome?: string;
  razao_social?: string;
  status: number;
}

interface CredentialsProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: UserProps;
  signIn(credentials: CredentialsProps): Promise<void>;
  signOut(): void;
  updateUserDate(): void;
  isSign: boolean;
  isRendering: boolean;
}

interface AuthState {
  token: string;
  user: UserProps;
}

export interface UrlOpenProps {
  children: ReactNode;
  url: string;
}

export interface SectionProfileProps {
  icon: string;
  label: string;
  onPress(): void;
}

interface LastSearchDataType {
  title: string;
}

interface GrupoDataType {
  g_lote: number;
  id: number;
}

interface FotosDataType {
  id: number;
  lote_id: number;
  img: string;
  thumb: string;
  path: string;
  destaque: number;
}

export interface UserProps {
  apelido: string;
}

export interface EditaisGeraisProps {
  id: number;
  nome: string;
  doc: string;
  path: string;
}

export interface EditaisProps {
  id: number;
  tipo: number;
  publicacao_id?: number;
  edital_file?: string;
  titulo?: string;
  path?: string;
}

interface DocumentoProps{
  nome: string;
  doc: string;
  path: string;
}

interface DocumentosProps {
  doc: DocumentoProps;
}

export interface LoteDataType {
  id: number;
  leilao_id: number;
  lote_grupo_id: number;
  sub_valor_1: number;
  sub_valor_2?: number;
  sub_valor_avaliacao: number;
  sub_titulo: string;
  api_lote_desc?: string;
  sub_informacao_adicional?: string;
  sub_maior_lance?: number;
  sub_usuario_lance_id?: number;
  sub_status: number;
  sub_parcelamento_pct_entrada?: string;
  sub_parcelamento_qtd_parcelas_max?: string;
  sub_permitir_parcelamento: number;
  grupo: GrupoDataType;
  one_foto?: FotosDataType;
  fotos?: FotosDataType[];
  user?: UserProps;
  editais_gerais?: EditaisGeraisProps[];
  editais?: EditaisProps[];
  documentos: DocumentosProps[];
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
