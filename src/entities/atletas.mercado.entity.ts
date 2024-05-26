import { AtletaEntity } from "./atleta.entity";
import { ClubesEntity } from "./clubes.entity";
import { PosicoesEntity } from "./posicoes.entity";
import { StatusEntity } from "./status.entity";

export class AtletasMercadoEntity {
  clubes?: ClubesEntity;
  posicoes?: PosicoesEntity;
  status?: StatusEntity;
  atletas?: AtletaEntity[];
}
