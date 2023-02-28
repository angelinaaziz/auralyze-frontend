import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography, Button, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    justifyContent: "center",
  },
  extraLargeButton: {
    borderRadius: "100px",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
    height: 60,
    width: 280,
    border: "4px solid black",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  wrapper: {
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  container: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  containerFix: {
    zIndex: 99,
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
  fixBlob1: {
    position: "absolute",
    left: "0",
    maxWidth: "500px",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  fixBlob2: {
    position: "absolute",
    right: "0",
    top: "0",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)} display="flex" flexDirection="row">
          <img src="/images/logged_out/other-yellow-blob.png" alt="blob" className={classes.fixBlob1} />
          <div justifyContent="center" className={classNames(classes.containerFix, "container")}>
            <Box justifyContent="center" className="row">
              <Box
                display="flex"
                justifyContent="center"
                textAlign="center"
                flexDirection="column"
                height="100%"
              >
                <Box mb={2}>
                  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet"></link>
                  <Typography style={{ fontFamily: 'Raleway, sans-serif' }} fontWeight="bolder" variant={isWidthUpLg ? "h2" : "h3"}>
                    Smash your interviews <br></br>
                    using AI 🚀
                  </Typography>
                </Box>
                <div>
                  <Box mb={2}>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
                    <Typography
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                      variant={isWidthUpLg ? "h6" : "body1"}
                      color="textSecondary"
                    >
                      <p justifyContent="center"> Practice 100s of questions with instant feedback</p>
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.extraLargeButton}
                    classes={{ label: classes.extraLargeButtonLabel }}
                    href=""
                  >
                    Boost your interview now 🚀
                  </Button>
                </div>
              </Box>
            </Box>
          </div>
          <img src="/images/logged_out/Yellow-blob.png" alt="blob" className={classes.fixBlob2} />
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FEE64E"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
