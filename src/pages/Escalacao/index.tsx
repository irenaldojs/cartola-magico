import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { dataStore } from "../../store/dataStore";
import { EsquemaEntity } from "../../entities/esquema.entity";
import { useEffect, useState } from "react";

export default function Escalacao() {
  const { esquemas } = dataStore((data) => data);
  const [esquemaSelecionado, setEsquemaSelecionado] = useState<string>("3-4-3");
  const [esquemaObject, setEsquemaObject] = useState<EsquemaEntity>(
    esquemas?.[0] as EsquemaEntity,
  );

  useEffect(() => {
    if (!esquemas || esquemas.length === 0) return;

    setEsquemaSelecionado(esquemas[0].nome as string);
    setEsquemaObject(esquemas[0]);
  }, [esquemas]);

  useEffect(() => {
    console.log(esquemaObject, esquemaSelecionado);
  }, [esquemaSelecionado]);

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
      <Box></Box>
    </Box>
  );
}
