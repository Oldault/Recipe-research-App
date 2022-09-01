import React from "react";
import "./choose.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";

const theme = createTheme({
  basic: {
    black: "#1D1D1D",
  },
  palette: {
    primary: {
      main: "#1D1D1D",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
      },
    },
  },
});

const Choose = () => {
  const myfunction = () => {
    console.log("CLICKED");
  };

  const imgStyle = {
    position: "absolute",
    top: "4px",
    left: "8px",
  };

  const btnStyle = {
    display: "flex",
    m: "6px 0px",
    width: "180px",
  };

  const boxStyle = {
    p: "0px",
    m: "0px 66px",
    display: "flex",
    flexDirection: "column",
  };

  const saladIcon = (
    <Icon>
      <img alt="salad" src={require("./PNG/salad.png")} style={imgStyle} />
    </Icon>
  );

  const sandwhichIcon = (
    <Icon>
      <img
        alt="sandwhich"
        src={require("./PNG/sandwhich.png")}
        style={imgStyle}
      />
    </Icon>
  );

  const cakeIcon = (
    <Icon>
      <img alt="cake" src={require("./PNG/cake.png")} style={imgStyle} />
    </Icon>
  );

  const soupIcon = (
    <Icon>
      <img alt="soup" src={require("./PNG/soup.png")} style={imgStyle} />
    </Icon>
  );

  const asianIcon = (
    <Icon>
      <img alt="asian" src={require("./PNG/asian.png")} style={imgStyle} />
    </Icon>
  );

  return (
    <div className="choose-app">
      <h1>Categories</h1>
      <div className="categories">
        <ThemeProvider theme={theme} display="flex">
          <Box component="span" sx={boxStyle}>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              className="button"
              startIcon={saladIcon}
              sx={btnStyle}
            >
              Salad
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              className="button"
              startIcon={sandwhichIcon}
              sx={btnStyle}
            >
              Sandwich
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              className="button"
              startIcon={cakeIcon}
              sx={btnStyle}
            >
              Cake
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              className="button"
              startIcon={soupIcon}
              sx={btnStyle}
            >
              Soup
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              className="button"
              startIcon={asianIcon}
              sx={btnStyle}
            >
              Asian
            </Button>
          </Box>
          <Box></Box>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Choose;
