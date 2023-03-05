import React from "react";
import { withTheme } from "@mui/styles";
import { makeStyles } from '@mui/styles';
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const useStyles = makeStyles((theme) => ({
  flexColumnReverse: {
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column-reverse !important'
    }
  },
  root: {
    background: `linear-gradient(to bottom, #BFA4F8 0%, #FEE64E 100%)`,
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    fontWeight: theme.typography.fontWeightBold,
  },
  bubble1: {
    backgroundColor: '#7DEAC2',
    borderRadius: '100px',
    textAlign: 'center',
    maxWidth: theme.spacing(110),
    color: 'white',
    shadows: '20px 20px 10px #888888',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    border: '5px solid black',

    [theme.breakpoints.down("md")]: {
      maxWidth: theme.spacing(55)
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 0.6rem",
      padding: theme.spacing(2)
    }

  },
  bubble2: {
    backgroundColor: '#EA7D7D',
    borderRadius: '100px',
    textAlign: 'left',
    maxWidth: theme.spacing(110),
    color: 'white',
    shadows: '20px 20px 10px #888888',
    alignItems: 'center',
    padding: theme.spacing(4),
    border: '5px solid black',

    [theme.breakpoints.down("md")]: {
      maxWidth: theme.spacing(55)
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 0.6rem",
      padding: theme.spacing(3)
    }
  },
  bubble3: {
    backgroundColor: '#7D8EEA',
    borderRadius: '100px',
    textAlign: 'center',
    maxWidth: theme.spacing(110),
    color: 'white',
    shadows: '20px 20px 10px #888888',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    border: '5px solid black',

    [theme.breakpoints.down("md")]: {
      maxWidth: theme.spacing(55)
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 0.6rem",
      padding: theme.spacing(3)
    }
  },
  featureHeading: {
    textAlign: 'center',
    fontSize: '50px',
    fontFamily: 'Raleway',
  },
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    justifyContent: "center",
    fontFamily: 'Raleway',
  },
  extraLargeButtonSee: {
    borderRadius: "100px",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
    height: theme.spacing(7),
    width: theme.spacing(30),
    border: "4px solid white",
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
    backgroundColor: "#7DEAC2",
    marginTop: theme.spacing(1.5),
  },
  extraLargeButtonTry: {
    borderRadius: "100px",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
    height: theme.spacing(7),
    alignContent: 'center',
    justifyItems: 'center',
    width: theme.spacing(30),
    border: "4px solid white",
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
    backgroundColor: "#EA7D7D",
    marginTop: theme.spacing(1.5),
  },
  extraLargeButtonVids: {
    borderRadius: "100px",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
    height: theme.spacing(7),
    width: theme.spacing(30),
    border: "4px solid white",
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
    backgroundColor: "#7D8EEA",
    marginTop: theme.spacing(1.5),
  },
  bubbles: {
    display: 'flex',
    paddingLeft: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: '0'
    }

  },
  feedback: {
    width: '30%',
    height: '30%',
    borderRadius: '50px',
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: '80%',
      margin: 'auto'
    }
  },
  education: {
    width: '30%',
    height: '30%',
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: '80%',
      margin: 'auto'
    }
  },
  Heading: {
    textAlign: 'center',
    fontSize: '50px',
    fontFamily: 'Raleway',
    marginTop: theme.spacing(15),

    [theme.breakpoints.down("sm")]: {
      fontSize: '42px'
    }
  },
  extraLargeButton: {
    borderRadius: "100px",
    fontWeight: theme.typography.fontWeightBold,
    display: "flex",
    fontSize: 15,
    height: 90,
    width: 380,
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

    [theme.breakpoints.down("sm")]: {
      width: 280
    }
  },
}));

function FeatureSection() {
  ;
  const classes = useStyles();

  return (
    <div style={{ background: `linear-gradient(to bottom, #BFA4F8 0%, #FEE64E 100%)`, alignItems: 'center' }}>
      <div className={classes.root} alignItems='center'>
        <br></br>
        <br></br>
        <h1 className={classes.featureHeading}>Feedback.</h1>
        <Paper className={classes.bubble1}>
          <div className={classes.bubbles}>
            <img className={classes.feedback} src="/images/logged_in/feedback.jpg" alt="" /><div><h2 textAlign='right'>Personalised AI<br></br> Feedback <u>Every Time</u></h2><p>Auralyze.ai will transcribe your answer and score you based on real interview criteria. Gone are the days of guessing how you did - let the tech do the hard work!<br></br><Button
              variant="contained"
              className={classes.extraLargeButtonSee}
              classes={{ label: classes.extraLargeButtonLabel }}
              href="/blog/post/how-can-ai-seriously-help-you-with-your-interview-prep"
            >See How ➡️</Button></p></div></div></Paper>
        <h1 className={classes.featureHeading}>Practice.</h1>
        <Paper className={classes.bubble2}>
          <div className={`${classes.bubbles} ${classes.flexColumnReverse}`}>
            <div alignItems="center" textAlign="center">
              <h2 className={classes.Bank} > A Massive Bank <br></br> of Questions</h2> <p> Have access to questions across multiple courses including : Oxbridge, Medicine, Dentistry and Law.</p><Button
                variant="contained"
                className={classes.extraLargeButtonTry}
                classes={{ label: classes.extraLargeButtonLabel }}
                href="/blog/post/dental-interview-question-bank"
              >Try Some Q's 📃</Button>
            </div>
            <svg style={{ maxWidth: '100%' }}>
              <QuestionMarkIcon></QuestionMarkIcon>
            </svg>
          </div>
        </Paper>
        <h1 className={classes.featureHeading}>Education.</h1>
        <Paper className={classes.bubble3}><div className={classes.bubbles}><img className={classes.education} src="/images/logged_in/education.png" alt="" /><div><h2 textAlign='right'><img src="" alt="" /> Learn As You Go</h2> <p> Once you answer your question you will have content triggered relating to what you missed out on. Get that 1-to-1 tuition without having to  pay extortionate fees.</p><Button
          variant="contained"
          className={classes.extraLargeButtonVids}
          classes={{ label: classes.extraLargeButtonLabel }}
          href="/video"
        >Watch our Vids 🎥 </Button></div></div></Paper>
        <br></br>
        <h1 className={classes.Heading}>Interviews reimagined<br></br> with AI</h1>
        <Button
          variant="contained"
          color="secondary"
          className={classes.extraLargeButton}
          classes={{ label: classes.extraLargeButtonLabel }}
          href="https://join.slack.com/t/auralyzeai/shared_invite/zt-1pb1tc6ub-mrwYYF~_5v9bCGeTIJ5r2A">
          Join The Community Now
        </Button>
      </div >
      <br></br>
    </div >

  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
