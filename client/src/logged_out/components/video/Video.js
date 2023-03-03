import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import BlogCard from "../blog/BlogCard";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  videoContentWrapper: {
    backgroundColor: "#FEE64E",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
    justifyContent: "center",
  },
  wrapper: {
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function getVerticalVideoPosts(isWidthUpSm, isWidthUpMd, videoPosts) {
  const gridRows = [[], [], []];
  let rows;
  let xs;
  if (isWidthUpMd) {
    rows = 3;
    xs = 4;
  } else if (isWidthUpSm) {
    rows = 2;
    xs = 6;
  } else {
    rows = 1;
    xs = 12;
  }
  videoPosts.forEach((videoPost, index) => {
    gridRows[index % rows].push(
      <Grid key={videoPost.id} item xs={12}>
        <Box mb={3}>
          <BlogCard
            src={videoPost.src}
            title={videoPost.title}
            snippet={videoPost.snippet}
            date={videoPost.date}
            url={videoPost.url}
          />
        </Box>
      </Grid>
    );
  });
  return gridRows.map((element, index) => (
    <Grid key={index} item xs={xs}>
      {element}
    </Grid>
  ));
}

function Video(props) {
  const { classes, videoPosts, selectVideo, theme } = props;

  const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    selectVideo();
  }, [selectVideo]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      backgroundColor="#FEE64E"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div className={classes.videoContentWrapper}>
        <Grid container spacing={3}>
          {getVerticalVideoPosts(isWidthUpSm, isWidthUpMd, videoPosts)}
        </Grid>
      </div>
    </Box>
  );
}

Video.propTypes = {
  selectVideo: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  videoPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(styles, { withTheme: true })(Video);
