import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { grey } from "@mui/material/colors";

export default function SidebarComponent() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const listSx = {
    borderRadius: "100px",
    border: 2,
    borderColor: grey[300],
    "&.Mui-selected": {
      bgcolor: "white",
      borderColor: grey[500],
    },
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 160 }}>
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          sx={listSx}
        >
          <ListItemIcon>
            <AssignmentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Schedule"
            primaryTypographyProps={{
              fontSize: "small",
              textTransform: "none",
              color: grey[700],
              fontWeight: "bold",
            }}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={listSx}
        >
          <ListItemIcon>
            <AssignmentLateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Urgently"
            primaryTypographyProps={{
              fontSize: "small",
              textTransform: "none",
              color: grey[700],
              fontWeight: "bold",
            }}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          sx={listSx}
        >
          <ListItemIcon>
            <NoteAddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Optional"
            primaryTypographyProps={{
              fontSize: "small",
              textTransform: "none",
              color: grey[700],
              fontWeight: "bold",
            }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
}
