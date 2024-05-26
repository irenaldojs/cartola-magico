import { create } from "zustand";
import { ClubesEntity } from "../entities/clubes.entity";
import { EsquemaEntity } from "../entities/esquema.entity";
import { MercadoStatusEntity } from "../entities/mercado.status.entity";
import { PartidasEntity } from "../entities/partidas.entity";
import { PatrocinadoresEntity } from "../entities/patrocinadores.entity";
import { PosicoesEntity } from "../entities/posicoes.entity";
import { Rodada } from "../entities/rodada.entity";
import { AtletasMercadoEntity } from "../entities/atletas.mercado.entity";

type DataStoreProps = {
  atletasMercado?: AtletasMercadoEntity;
  clubes?: ClubesEntity;
  esquemas?: EsquemaEntity[];
  mercadoStatus?: MercadoStatusEntity;
  partidas?: PartidasEntity;
  patrocinadores?: PatrocinadoresEntity;
  posicoes?: PosicoesEntity[];
  rodadas?: Rodada[];
  fetchData: () => Promise<void>;
};

export const dataStore = create<DataStoreProps>((set) => ({
  atletas: undefined,
  clubes: undefined,
  esquemas: undefined,
  mercadoStatus: undefined,
  partidas: undefined,
  patrocinadores: undefined,
  posicoes: undefined,
  rodadas: undefined,
  fetchData: async () => {
    // Atletas Mercado
    await fetch("https://api.cartola.globo.com/atletas/mercado").then(
      (res) =>
        res
          .json()
          .then((data) =>
            set({ atletasMercado: data as AtletasMercadoEntity }),
          ),
      //.finally(() => console.log(dataStore.getState().atletasMercado)),
    );

    // Clubes
    await fetch("https://api.cartola.globo.com/clubes").then(
      (res) => res.json().then((data) => set({ clubes: data as ClubesEntity })),
      //.finally(() => console.log(dataStore.getState().clubes)),
    );

    // Esquemas
    await fetch("https://api.cartola.globo.com/esquemas").then(
      (res) =>
        res.json().then((data) => set({ esquemas: data as EsquemaEntity[] })),
      //.finally(() => console.log(dataStore.getState().esquemas)),
    );

    // Mercado Status
    await fetch("https://api.cartola.globo.com/mercado/status").then(
      (res) =>
        res
          .json()
          .then((data) => set({ mercadoStatus: data as MercadoStatusEntity })),
      //.finally(() => console.log(dataStore.getState().mercadoStatus)),
    );

    // Partidas
    await fetch("https://api.cartola.globo.com/partidas").then(
      (res) =>
        res.json().then((data) => set({ partidas: data as PartidasEntity })),
      //.finally(() => console.log(dataStore.getState().partidas)),
    );

    // Posicoes
    await fetch("https://api.cartola.globo.com/posicoes").then(
      (res) =>
        res.json().then((data) => set({ posicoes: data as PosicoesEntity[] })),
      //.finally(() => console.log(dataStore.getState().posicoes)),
    );

    // Patrocinadores
    await fetch("https://api.cartola.globo.com/patrocinadores").then(
      (res) =>
        res
          .json()
          .then((data) =>
            set({ patrocinadores: data as PatrocinadoresEntity }),
          ),
      //.finally(() => console.log(dataStore.getState().patrocinadores)),
    );

    // Rodadas
    await fetch("https://api.cartola.globo.com/rodadas").then(
      (res) => res.json().then((data) => set({ rodadas: data as Rodada[] })),
      //.finally(() => console.log(dataStore.getState().rodadas)),
    );
  },
}));
