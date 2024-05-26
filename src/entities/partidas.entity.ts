import { ClubesEntity } from "./clubes.entity";

export class PartidasEntity {
  clubes?: ClubesEntity;
  partidas?: PartidaEntity[];
}

export class PartidaEntity {
  aproveitamento_visitante?: string[];
  aproveitamento_mandante?: string[];
  transmissao?: {
    label?: string;
    url?: string;
  };
  local?: string;
  status_transmissao_tr?: string;
  status_cronometro_tr?: string;
  periodo_tr?: string;
  partida_data?: string;
  inicio_cronometro_tr?: string;
  placar_oficial_visitante?: null;
  placar_oficial_mandante?: null;
  partida_id?: number;
  clube_visitante_posicao?: number;
  clube_visitante_id?: number;
  clube_casa_posicao?: number;
  clube_casa_id?: number;
  timestamp?: number;
  campeonato_id?: number;
  valida?: boolean;
}
