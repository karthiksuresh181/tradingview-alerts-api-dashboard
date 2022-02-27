// @mui material components
import Grid from "@mui/material/Grid";

import { useState, useEffect } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Dashboard components
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

import logoGoogleDev from "assets/images/small-logos/google-webdev.svg";

const axios = require("axios");

function Dashboard() {
  const [tickers, setTickers] = useState([]);

  const getOverview = () => {
    axios.get(`${process.env.REACT_APP_API_HOST}/dashboard/get_status`).then((res) => {
      setTickers(res.data);
    });
  };

  useEffect(() => {
    getOverview();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview tickers={tickers} />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
