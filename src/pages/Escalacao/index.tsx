import {
  Avatar,
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { dataStore } from "../../store/dataStore";
import { EsquemaEntity } from "../../entities/esquema.entity";
import { useEffect, useState } from "react";
import Campo from "../../img/campo.png";
import { AtletaEntity } from "../../entities/atleta.entity";

export default function Escalacao() {
  const { esquemas, atletasMercado } = dataStore((data) => data);
  const [esquemaSelecionado, setEsquemaSelecionado] = useState<string>("3-4-3");
  const [esquemaObject, setEsquemaObject] = useState<EsquemaEntity>(
    esquemas?.[0] as EsquemaEntity,
  );
  const [ata, setAta] = useState<AtletaEntity[]>();
  const [gol, setGol] = useState<AtletaEntity[]>();
  const [lat, setLat] = useState<AtletaEntity[]>();
  const [mei, setMei] = useState<AtletaEntity[]>();
  const [tec, setTec] = useState<AtletaEntity[]>();
  const [zag, setZag] = useState<AtletaEntity[]>();

  useEffect(() => {
    if (!esquemas || esquemas.length === 0) return;

    setEsquemaSelecionado(esquemas?.[0].nome as string);
    setEsquemaObject(esquemas?.[0] as EsquemaEntity);
  }, [esquemas]);

  useEffect(() => {
    // console.log(esquemaObject, esquemaSelecionado);
    setAta(MudarEsquema(esquemaObject?.posicoes?.ata ?? 3, ata));
    setGol(MudarEsquema(esquemaObject?.posicoes?.gol ?? 1, gol));
    setLat(MudarEsquema(esquemaObject?.posicoes?.lat ?? 0, lat));
    setMei(MudarEsquema(esquemaObject?.posicoes?.mei ?? 4, mei));
    setZag(MudarEsquema(esquemaObject?.posicoes?.zag ?? 3, zag));
    if (atletasMercado && atletasMercado.atletas && atletasMercado.atletas[0]) {
      const newTec: AtletaEntity[] = [];
      newTec.push(atletasMercado.atletas[16]);
      console.log(newTec);
      setTec(newTec);
    } else {
      setTec(MudarEsquema(esquemaObject?.posicoes?.tec ?? 3, tec));
    }
  }, [esquemaObject]);

  return (
    <Box display={"flex"} gap={1}>
      <Box>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            id="demo-simple-select"
            value={esquemaSelecionado}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            onChange={(event: SelectChangeEvent) => {
              if (!esquemas) return;
              const selecionado = esquemas.find(
                (esquema) => esquema.nome === event.target.value,
              );
              setEsquemaSelecionado(selecionado?.nome as string);
              setEsquemaObject(selecionado as EsquemaEntity);
            }}
          >
            {esquemas &&
              esquemas?.map((esquema, index) => (
                <MenuItem value={esquema.nome} key={index}>
                  {esquema.nome}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText>Esquema</FormHelperText>
        </FormControl>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${Campo})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "60%",
          height: 810,
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          height={"100%"}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* Ataque */}
          <Box
            position={"absolute"}
            width={"100%"}
            top={120}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            {ata?.map((atleta, index) => AvatarJogador(atleta, index))}
          </Box>
          {/* Meio Campo */}
          <Box
            position={"absolute"}
            display={"flex"}
            top={280}
            width={"100%"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            {mei?.map((atleta, index) => {
              const width = index < 2 ? "45%" : "30%";
              const marginBottom = index < 2 ? 10 : 0;
              return (
                <Box
                  key={index}
                  sx={{ width: width }}
                  display={"flex"}
                  justifyContent={"center"}
                  marginBottom={marginBottom}
                >
                  {AvatarJogador(atleta, index)}
                </Box>
              );
            })}
          </Box>
          {/* Laterais */}
          <Box
            position={"absolute"}
            width={"100%"}
            bottom={280}
            gap={20}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            {lat?.map((atleta, index) => AvatarJogador(atleta, index))}
          </Box>
          {/* Zagueiros */}
          <Box
            position={"absolute"}
            width={"80%"}
            bottom={180}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            {zag?.map((atleta, index) => AvatarJogador(atleta, index))}
          </Box>
          {/* Goleiro */}
          <Box
            position={"absolute"}
            width={"100%"}
            bottom={60}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            {gol?.map((atleta, index) => AvatarJogador(atleta, index))}
          </Box>
          {/* Tecnico */}
          <Box
            position={"absolute"}
            width={"100%"}
            bottom={100}
            left={-80}
            display={"flex"}
            flexDirection={"row"}
          >
            {tec?.map((atleta, index) => AvatarJogador(atleta, index))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function MudarEsquema(
  limite: number,
  atletas?: AtletaEntity[],
): AtletaEntity[] {
  const novaLista: AtletaEntity[] = [];
  const empty: AtletaEntity = {} as AtletaEntity;

  if (atletas) {
    for (let i = 0; i < atletas.length; i++) {
      if (i < limite) {
        novaLista.push(atletas[i]);
      }
    }
  }

  for (let i = 0; novaLista.length < limite; i++) {
    novaLista.push(empty);
  }

  return novaLista;
}

function AvatarJogador(
  atleta: AtletaEntity,
  index: number,
  onClick?: () => void,
) {
  const size = 60;
  if (!atleta.foto)
    return (
      <IconButton key={index} onClick={onClick}>
        <Avatar
          sx={{ width: size, height: size, border: 1, borderColor: "black" }}
        />
      </IconButton>
    );

  const foto = atleta.foto.replace("FORMATO", "220x220");

  return (
    <IconButton key={index} onClick={onClick}>
      <Avatar
        src={foto}
        alt={atleta.apelido}
        sx={{ width: size, height: size, border: 1, borderColor: "black" }}
      />
    </IconButton>
  );
}
