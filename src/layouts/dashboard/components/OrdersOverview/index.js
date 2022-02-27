// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

import { useState, useEffect } from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview({ tickers }) {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h4" fontWeight="medium">
          Pair Monitor
        </MDTypography>
        <hr />
        {/* <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon>{yesterdayComparisonPercentage.icon}</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              {yesterdayComparisonPercentage.percentage}%
            </MDTypography>{" "}
            today
          </MDTypography>
        </MDBox> */}
      </MDBox>
      <MDBox p={2}>
        {tickers.map((ticker, index) => (
          <TimelineItem
            color={ticker["color"]}
            icon={ticker["icon"]}
            title={ticker["pair"]}
            dateTime={ticker["timestamp"]}
            description={ticker["description"]}
            key={ticker["pair"]}
            lastItem
          />
        ))}
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
