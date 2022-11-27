import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignContent="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashbord" />
      </Box>
    </Box>
  );
};

export default Dashboard;
