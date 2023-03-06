import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';

const useStyles = makeStyles((theme) => ({
  bigcard: {
    maxWidth: theme.spacing(130),
    padding: theme.spacing(5),
    borderRadius: theme.spacing(5),
    margin: 'auto',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
      margin: '0 1rem'
    }


  },
  video: {
    width: '100%',
    height: theme.spacing(70),
    "@media screen and (max-width: 460px)": {
      height: '400px'
    }
  }
}));

export default function DemoVideo() {
  const classes = useStyles();

  return (
    <div style={{ background: `linear-gradient(to bottom,  #FEE64E 0%, #BFA4F8 100%)`, position: 'relative' }}>
      <Card className={[classes.bigcard, "card"]}>
        <iframe className={classes.video} title="myFrame"
          src="https://www.youtube.com/embed/dECQDSZK7pE">
        </iframe>
      </Card>
    </div>
  );
}