export class AtletaEntity {
  scouts?: {
    [key: string]: number;
  };
  jogos_num?: number;
  atleta_id?: number;
  rodada_id?: number;
  clube_id?: number;
  posicao_id?: number;
  status_id?: number;
  pontos_num?: number;
  media_num?: number;
  variacao_num?: number;
  preco_num?: number;
  entrou_em_campo?: boolean;
  slug?: string;
  apelido?: string;
  apelido_abreviado?: string;
  nome?: string;
  foto?: string;
}
