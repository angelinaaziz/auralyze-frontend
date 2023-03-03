import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

import withTheme from '@mui/styles/withTheme';

function StatisticsArea(props) {
  const { theme, CardChart, data } = props;
  return (
    CardChart &&
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CardChart
            data={data.profit}
            color={theme.palette.secondary.light}
            height="70px"
            title="Questions Completed"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardChart
            data={data.views}
            color={theme.palette.primary.light}
            height="70px"
            title="Feedback Received"
          />
        </Grid>
      </Grid>
    )
}

StatisticsArea.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  CardChart: PropTypes.elementType
};

export default withTheme(StatisticsArea);
