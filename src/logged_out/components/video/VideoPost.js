import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import format from "date-fns/format";
import { Grid, Typography, Card, Box } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import ShareButton from "../../../shared/components/ShareButton";
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

const styles = (theme) => ({
  videoContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1500,
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  card: {
    boxShadow: theme.shadows[4],
  },
});

function VideoPost(props) {
  const { classes, date, title, content } = props;

  useEffect(() => {
    document.title = `Auralyze.ai- ${title}`;
    smoothScrollTop();
  }, [title]);

  return (
    <Box
      className={classNames("lg-p-top", classes.wrapper)}
      display="flex"
      justifyContent="center"
      background= "linear-gradient(to bottom, #BFA4F8 0%, #FEE64E 100%)"
    >
      <div className={classes.videoContentWrapper}>
        <Grid container spacing={5}>
          <Grid item md={9}>
            <Card className={classes.card}>
              <Box pt={3} pr={3} pl={3} pb={2}>
                <Typography variant="h4">
                  <b>{title}</b>
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {format(new Date(date * 1000), "PPP", {
                    awareOfUnicodeTokens: true,
                  })}
                </Typography>
              </Box>
              <Box p={3}>
                {content}
                <Box pt={2}>
                  <Grid spacing={1} container>
                    {["Twitter", "Reddit"].map(
                      (type, index) => (
                        <Grid item key={index}>
                          <ShareButton
                            type={type}
                            title="React SaaS Template"
                            description="I found an awesome template for an webapp using React!"
                            disableElevation
                            variant="contained"
                            className="text-white"
                            classes={{
                              label: "text-white",
                            }}
                          />
                        </Grid>
                      )
                    )}
                  </Grid>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

VideoPost.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  otherArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(VideoPost);
