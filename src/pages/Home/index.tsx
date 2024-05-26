import { Box, Typography } from "@mui/material";
import { dataStore } from "../../store/dataStore";
import Partida from "../../compoents/Partida";

export default function Home() {
  const { partidas, mercadoStatus } = dataStore((data) => data);
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={1}
    >
      <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
        Partidas {mercadoStatus?.nome_rodada}{" "}
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        width={"100%"}
      >
        {partidas?.partidas
          ?.sort((a, b) => {
            if (a.partida_data && b.partida_data) {
              if (a.partida_data > b.partida_data) return -1;
              if (a.partida_data < b.partida_data) return 1;
            }
            return 0;
          })
          .reverse()
          .map((partida, index) => (
            <Partida key={index} {...partida} />
          ))}
      </Box>
    </Box>
  );
}
