export class EsquemaEntity {
  esquema_id?: number;
  nome?: string;
  posicoes?: {
    ata?: number;
    gol?: number;
    lat?: number;
    mei?: number;
    tec?: number;
    zag?: number;
  };
}
