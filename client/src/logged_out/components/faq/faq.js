import React, { useState } from "react";
import classNames from "classnames";
import { Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";



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

const FAQList = [
    {
      id: 1,
      question: "How long does it take to get feedback?",
      answer: "A maximum of 24 hours.",
    },
    {
      id: 2,
      question: "How does the service work?",
      answer:
        "You login, choose a subject and generate a question and upload a video of yourself speaking, we then use artificial intelligence to analyze your speech and provide you with feedback.",
    },
    {
      id: 3,
      question: "What is included in the feedback?",
      answer:
        "We provide you with a score out of 35, tell you how you rank against others, give a breakdown of your strengths and weaknesses, and a list of tips to improve your speaking.",
    },
    {
      id: 4,
      question: "Why are you called Auralyze.ai?",
      answer:
        "Auralyze means to analyze sound, and we use artificial intelligence to analyze your interviews and provide feedback. (we also think it sounds cool)",
    },
  ];
  
  function FAQ({ id, question, answer, activeId, setActiveId }) {
    const handleClick = () => {
      setActiveId(id === activeId ? null : id);
    };
  
    return (
      <div className={`faq ${id === activeId ? "active" : ""}`} onClick={handleClick}>
        <div className="question">{question}</div>
        {id === activeId && <div className="answer">{answer}</div>}
      </div>
    );
  }

function Faq(props) {
  const { classes, theme } = props;
  const [activeId, setActiveId] = useState(null);


  return (
    <Box
      display="flex"
      justifyContent="center"
      backgroundColor="#FEE64E"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div className={classes.videoContentWrapper}>
      <div className="App">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {FAQList.map((faq) => (
          <FAQ
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </div>
      </div>
    </Box>
  );
}



export default withStyles(styles, { withTheme: true })(Faq);
