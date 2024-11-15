import { Button, Typography } from "@mui/material";
import "./App.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import styled from "@emotion/styled";

function App() {
  return (
    <div>
      <Button variant="contained" startIcon={<AccessAlarmIcon />}>
        Hello world
      </Button>
      <Button variant="contained" color="secondary">
        Hello world
      </Button>
      <Button
        sx={{
          backgroundColor: "gray",
          color: "white",
          margin: 10,
          "&:hover": { backgroundColor: "black" },
          "&:disabled": { backgroundColor: "white", color: "black" },
        }}
      >
        Custom
      </Button>
      <CustomButton> Custom </CustomButton>
      <CustomThemeButton> CustomTheme </CustomThemeButton>

      <Typography variant="h2" gutterBottom>
        H2 우아
      </Typography>

      <h2>우아</h2>
    </div>
  );
}

const CustomThemeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
}));

const CustomButton = styled(Button)({
  background: "red",
  color: "white",
});

export default App;
