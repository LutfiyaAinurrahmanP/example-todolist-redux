import { Box, Card } from "@mui/material";

import SidebarComponents from "./components/ui/SidebarComponent";
import MainLayout from "./components/layouts/MainLayout";
import { grey } from "@mui/material/colors";

function App() {
  return (
    <Box
      width="100%"
      height="100%"
      sx={{ bgcolor: grey[200], p: 2, boxSizing: "border-box" }}
    >
      <MainLayout></MainLayout>
    </Box>
  );
}

export default App;
