import { Box, Button, Stack, Typography } from "@mui/material";
import "./App.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import styled from "@emotion/styled";
import { blue, green, red } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";

function TestComponent() {
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

      <Root>
        <Typography>down(md): red</Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Root>

      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <Typography>xs=6 md=8</Typography>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Typography>xs=6 md=4</Typography>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Typography>xs=6 md=4</Typography>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <Typography>xs=6 md=8</Typography>
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7], // 반응형 opacity
            },
          }}
        />
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7], // 반응형 opacity
            },
          }}
        />
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7], // 반응형 opacity
            },
          }}
        />
      </Stack>
    </div>
  );
}

const Root = styled(`div`)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[100],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[100],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[100],
  },
}));

const CustomThemeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
}));

const CustomButton = styled(Button)({
  background: "red",
  color: "white",
});

export default TestComponent;
