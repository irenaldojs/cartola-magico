export class PatrocinadoresEntity {
  [key: number]: {
    nome_patrocinador?: string;
    descricao?: string;
    url_imagem_background?: string;
    url_termo_uso?: string;
    img_marca_patrocinador_svg?: string;
    img_marca_patrocinador_png?: string;
    url_link?: string;
    autorizacao_promocao?: string;
    servico_glive?: string;
    id?: number;
    optin?: boolean;
    destaque?: boolean;
    premiada?: boolean;
    externo?: boolean;
    liga_id?: number;
  };
}
