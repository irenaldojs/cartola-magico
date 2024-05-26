export class ClubesEntity {
  [key: string]: Clube;
}

class Clube {
  escudos?: {
    "60x60"?: string;
    "45x45"?: string;
    "30x30"?: string;
  };
  nome?: string;
  abreviacao?: string;
  slug?: string;
  apelido?: string;
  nome_fantasia?: string;
  id?: number;
  url_editoria?: string;
}
