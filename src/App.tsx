import { Box, createTheme, Stack } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import LeftBody from "./components/LeftBody";
import CenterBody from "./components/CenterBody";
import RightBody from "./components/RightBody";
import Footer from "./components/Footer";
import CreateButton from "./components/CreateButton";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const themeMode = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <Box bgcolor={"background.default"} color="text.primary">
        <Header />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBody />
          <CenterBody />
          <RightBody mode={mode} setMode={setMode} />
        </Stack>
        <CreateButton />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
