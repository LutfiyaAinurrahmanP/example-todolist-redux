import { Box } from "@mui/material";
import NavbarComponent from "../ui/NavbarComponent";
import SidebarComponents from "../ui/SidebarComponent";
import ContentComponent from "../ui/ContentComponent";

export default function MainLayout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavbarComponent />

      <Box display="flex" flex="1" sx={{ py: 4, gap: 4 }}>
        <SidebarComponents />
        <ContentComponent />
      </Box>
    </Box>
  );
}
