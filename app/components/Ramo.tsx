import { RamoInterface } from "../page";
import ramos from "../ramos.json";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function agrupar<T>(arr: T[], cada: number) {
  const grupos = [];
  for (let i = 0; i < arr.length; i += cada) {
    grupos.push(arr.slice(i, i + cada));
  }
  return grupos;
}

export default function Ramo({
  sigla,
  nombre,
  url,
  onBack,
}: RamoInterface & { onBack: () => void }) {
  const ramoData = (ramos as Record<string, any[]>)[sigla] || [];

  return (
    <Box className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-4 shadow-sm">
      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <ArrowBackIcon
          onClick={onBack}
          sx={{ cursor: "pointer", fontSize: 28 }}
        />
        <Typography variant="h5" fontWeight={700}>
          {nombre} - {sigla}
        </Typography>
      </Stack>

      <Stack spacing={2}>
        {agrupar(ramoData, 2).map((grupo, index) => (
          <Stack
            key={index}
            direction={{ xs: "column", md: "row" }}
            spacing={2}
          >
            {grupo.map((item) => (
              <Card
                key={item.clase}
                sx={{
                  flex: 1,
                  borderRadius: 3,
                  boxShadow: 2,
                  transition: "0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 5,
                  },
                }}
              >
                <CardActionArea
                  component="a"
                  href={`${url}Clase${item.clase}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ height: "100%" }}
                >
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      mb={1.5}
                    >
                      <Typography variant="h6" fontWeight={700}>
                        Clase {item.clase}
                      </Typography>

                      {item.texto_guia && (
                        <Chip
                          icon={<MenuBookIcon />}
                          label={item.texto_guia}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      )}
                    </Stack>

                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      gutterBottom
                      sx={{ opacity: 0.9 }}
                    >
                      {item.contenido}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      <strong>Objetivo:</strong> {item.objetivo}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
