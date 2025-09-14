import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import BedtimeOffIcon from "@mui/icons-material/BedtimeOff";

import { FormControlLabel, styled, Switch, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { blue, grey, red } from "@mui/material/colors";
import CircleIcon from "@mui/icons-material/Circle";

export default function NavbarComponent() {
  const [nightMode, setNightMode] = React.useState(false);
  const [taskTab, setTaskTab] = React.useState("all");
  //   const [nightMode, setNightMode] = React.useState(false);

  function handleNightMode() {
    setNightMode((prev) => !prev);
  }

  function handleTaskTab(_e, newValue) {
    setTaskTab(newValue);
  }

  const tabSx = {
    textTransform: "none",
    borderRadius: "100px",
    fontSize: "small",
    "&.Mui-selected": {
      bgcolor: grey[200],
      color: grey[900],
      fontWeight: "bold",
    },
  };

  const colorSx = {
    color: grey[800],
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: grey[900],
          opacity: 1,
          border: 0,
          ...theme.applyStyles("dark", {
            backgroundColor: grey[900],
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: grey[900],
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[600],
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...theme.applyStyles("dark", {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: "#39393D",
      }),
    },
  }));

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          px: 0.7,

          bgcolor: "white",
          borderRadius: "100px",
        }}
      >
        <Typography variant="h3">
          <Tabs>
            <Tab label="Todolist app" sx={tabSx} />
          </Tabs>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            px: 0.75,
            py: 0.5,
            bgcolor: "white",
            borderRadius: "100px",
            "&.Mui-selected": {
              bgcolor: grey[300],
              fontWeight: "bold",
            },
          }}
        >
          <Tabs
            centered
            value={taskTab}
            onChange={handleTaskTab}
            TabIndicatorProps={{ sx: { display: "none" } }}
          >
            <Tab value="all" label="All task" sx={tabSx} />
            <Tab value="daily" label="Daily" sx={tabSx} />
            <Tab value="weekly" label="Weekly" sx={tabSx} />
            <Tab value="monthly" label="Monthly" sx={tabSx} />
          </Tabs>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            px: 2,
            py: 2,
            bgcolor: "white",
            borderRadius: "100px",
          }}
        >
          <Box sx={{ alignItems: "center", display: "flex", gap: 2 }}>
            {nightMode ? <BedtimeIcon /> : <BedtimeOffIcon sx={colorSx} />}
            <IOSSwitch onChange={handleNightMode} checked={nightMode} />
          </Box>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            px: 1.5,
            py: 1.5,
            borderRadius: "100px",
            display: "flex",
            bgcolor: "white",
            gap: 1,
          }}
        >
          <CircleIcon fontSize="large" sx={{ color: red[900] }} />
          <CircleIcon fontSize="large" sx={{ color: blue[900] }} />
          <CircleIcon fontSize="large" sx={{ color: grey[900] }} />
        </Box>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          borderRadius: "100px",
          display: "flex",
          gap: 2,
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            px: 1.5,
            py: 1.5,
            borderRadius: "100px",
            display: "flex",
            bgcolor: "white",
          }}
        >
          <SearchIcon fontSize="medium" />
        </Box>
        <Box
          sx={{
            alignItems: "center",
            px: 0.75,
            py: 0.75,
            borderRadius: "100px",
            display: "flex",
            bgcolor: "white",
          }}
        >
          <AccountCircleIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
}
