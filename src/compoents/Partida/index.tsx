import { Box, Typography } from "@mui/material";
import { PartidaEntity } from "../../entities/partidas.entity";
import { dataStore } from "../../store/dataStore";
import { Block, Check, Close, Remove } from "@mui/icons-material";

export default function Partida(props: PartidaEntity) {
  const clubes = dataStore((data) => data.clubes);
  if (!clubes) return <>Erro</>;
  return (
    <Box
      display={"flex"}
      gap={1}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minWidth={700}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"45%"}
          gap={1}
        >
          <Box
            display={"flex"}
            alignItems={"end"}
            justifyContent={"right"}
            minWidth={100}
          >
            {props.aproveitamento_mandante &&
              props.aproveitamento_mandante.map((item) => testIcon(item))}
          </Box>
          <Box
            display={"flex"}
            gap={1}
            alignItems={"end"}
            justifyContent={"right"}
          >
            <Typography variant="h6">
              {props.clube_casa_id && clubes[props.clube_casa_id]?.nome}
            </Typography>
            {props.clube_casa_id && (
              <img src={clubes[props.clube_casa_id]?.escudos?.["45x45"]} />
            )}
          </Box>
        </Box>

        <Box width={"5%"} textAlign={"center"}>
          X
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"45%"}
          gap={1}
        >
          <Box
            display={"flex"}
            gap={1}
            alignItems={"end"}
            justifyContent={"left"}
          >
            {props.clube_visitante_id && (
              <img src={clubes[props.clube_visitante_id]?.escudos?.["45x45"]} />
            )}
            <Typography variant="h6">
              {props.clube_visitante_id &&
                clubes[props.clube_visitante_id]?.nome}
            </Typography>
          </Box>

          <Box
            display={"flex"}
            alignItems={"end"}
            justifyContent={"right"}
            minWidth={100}
          >
            {props.aproveitamento_visitante &&
              props.aproveitamento_visitante.map((item) => testIcon(item))}
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} gap={1} alignItems={"end"}>
        <Typography variant="subtitle2">{props.local}</Typography>
        <Typography variant="subtitle2">
          {formatDate(props.partida_data ?? "")}
        </Typography>
      </Box>
    </Box>
  );
}

function formatDate(prop: string) {
  if (!prop) return "";

  const [date, time] = prop.split(" ");
  const newDate = date.split("-").reverse().join("/");
  const splitTime = time.split(":");
  const formatData = `${splitTime[0]}:${splitTime[1]} - ${newDate}`;

  return formatData;
}

function testIcon(props?: string): JSX.Element {
  const fontSize = "small";
  if (props === "v") {
    return <Check fontSize={fontSize} sx={{ backgroundColor: "#72FF2C" }} />;
  } else if (props === "d") {
    return <Close fontSize={fontSize} sx={{ backgroundColor: "#FF5531" }} />;
  } else if (props === "e") {
    return <Remove fontSize={fontSize} sx={{ backgroundColor: "#D6DBDF" }} />;
  }
  return <Block fontSize={fontSize} />;
}
