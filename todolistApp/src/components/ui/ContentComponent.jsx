import { Box } from "@mui/material";

export default function ContentComponent({ children }) {
  return (
    <Box sx={{ bgcolor: "white", borderRadius: "16px", width: "100%" }}>
      {children}
    </Box>
  );
}
