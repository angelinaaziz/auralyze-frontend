import React, { useState } from 'react';
import classNames from 'classnames';
import { Box, Grid } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const styles = (theme) => ({
  videoContentWrapper: {
    backgroundColor: '#FEE64E',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    },
    maxWidth: 1280,
    width: '100%',
    justifyContent: 'center'
  },
  wrapper: {
    minHeight: '60vh'
  },
  noDecoration: {
    textDecoration: 'none !important'
  }
});

const FAQList = [
  {
    id: 1,
    question: 'How long does it take to get feedback?',
    answer: 'A maximum of 24 hours.'
  },
  {
    id: 2,
    question: 'How does the service work?',
    answer:
      'You login, choose a subject and generate a question and upload a video of yourself speaking, we then use artificial intelligence to analyze your speech and provide you with feedback.'
  },
  {
    id: 3,
    question: 'What is included in the feedback?',
    answer:
      'We provide you with a score out of 35, tell you how you rank against others, give a breakdown of your strengths and weaknesses, and a list of tips to improve your speaking.'
  },
  {
    id: 4,
    question: 'Why are you called Auralyze.ai?',
    answer:
      'Auralyze means to analyze sound, and we use artificial intelligence to analyze your interviews and provide feedback. (we also think it sounds cool)'
  }
];

function FAQ({ id, question, answer, activeId, setActiveId }) {
  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: id === activeId ? '#fff' : '#BFA4F8',
        height: 'max-content',
        marginTop: 3,
        borderRadius: 4,
        marginBottom: 2,
      }}
    >
      <CardContent>
        <Box display={'flex'} >
          {id === activeId ? (
            <RemoveIcon
              onClick={() => setActiveId(null)}

              sx={{ fontSize: 35,color:'red' }}
            />
          ) : (
            <AddIcon onClick={() => setActiveId(id)} sx={{ fontSize: 40 }} />
          )}
          <Box>
            <Typography fontSize={16} mx={1} mt={0.5} color='black' gutterBottom>
              {question}
            </Typography>
            {id === activeId && (
              <Typography variant='body2'>{answer}</Typography>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

function Faq(props) {
  const { classes } = props;
  const [activeId, setActiveId] = useState(null);

  return (
    <Grid
      container
      lg={12}
      display='flex'
      justifyContent='center'
      backgroundColor='#FEE64E'
      className={classNames(classes.wrapper, 'lg-p-top')}
    >
      <Grid item lg={6} sm={12}>
        <Typography sx={{fontWeight:'bold',fontSize:40,}} mb={1} textAlign='center' >Frequently Asked Questions<br /></Typography>
        {FAQList?.map((faq) => (
          <FAQ
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default withStyles(styles, { withTheme: true })(Faq);