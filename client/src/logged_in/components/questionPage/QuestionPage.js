import React, { useState, useEffect, useRef } from 'react'
import VideoRecorder from 'react-video-recorder'
import withStyles from '@mui/styles/withStyles';
import classNames from 'classnames';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import { useSelector } from "react-redux";

const styles = (theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem"
    }
  },
  videoSide: {
    width: "60%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  videoWrapper: {
    width: "100%",
    height: "620px"
  },

  btnTop: {
    padding: "15px",
    borderRadius: "10px 10px 0 0",
    border: "1px solid darkgrey",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  btnBot: {
    padding: "15px",
    borderRadius: "0 0 10px 10px",
    border: "1px solid darkgrey",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  textSide: {
    width: "35%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    background: "white",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  chatHead: {
    padding: "10px",
    margin: "0",
    borderBottom: "1px solid black",
    textAlign: "center"
  },
  chatBox: {
    flexGrow: "1",
    padding: "5px 10px",
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: "450px"

  },
  chatLefttBubble: {
    display: "flex",
    alignItems: "center"
  },

  bubbleLeftText: {
    background: "#f5f5f5",
    padding: "10px",
    margin: "10px 5px",
    borderRadius: "10px",
    // '&:after' : {
    //   content: '""',
    //   position: "absolute",
    //   display: "block",
    //   width: "0",
    //   zIndex: "1",
    //   borderStyle: "solid",
    //   borderWidth: "0 20px 20px 0",
    //   borderColor: "transparent #f5f5f5 transparent transparent",
    //   top: "60%",
    //   left: "-20px",
    //   marginTop: "-10px",
    // }
  },
  chatRightBubble: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse"
  },
  bubbleRightText: {
    position: "relative",
    background: "#FEE64E",
    padding: "10px",
    margin: "10px 5px",
    borderRadius: "10px",
    // '&:after' : {
    //   content: '""',
    //   position: "absolute",
    //   display: "block",
    //   width: "0",
    //   zIndex: "1",
    //   borderStyle: "solid",
    //   borderWidth: "20px 20px 0 0",
    //   borderColor: "rgb(254, 230, 78) transparent transparent transparent",
    //   top: "60%",
    //   right: "-20px",
    //   marginTop: "-10px",
    // }
  },

  textarea: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: '10px',
    borderRadius: "10px",
    background: "#f5f5f5"
  },
  inputArea: {
    border: "none",
    padding: "10px",
    width: "80%",
    background: "#f5f5f5",
    resize: "none"
  },
  sendInput: {
    border: "none",
    background: "#bfa4f8",
    height: "40px",
    width: "40px",
    borderRadius: "10px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  submitInput: {
    border: "none",
    background: "#bfa4f8",
    height: "40px",
    width: "90px",
    borderRadius: "10px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: 'pointer'
  },
  btns: {
    display: "flex"
  }
});

function QuestionPage(props) {
  const { classes } = props
  const [questions, setQuestions] = useState([]);
  const [subject, setSubject] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState("Tell Me About Yourself")
  const [userTimeLimit, setUserTimeLimit] = useState(300000)
  const [userCountDown, setUserCountDown] = useState(5000)
  const [chats, setChats] = useState([])
  const [videoRecorded, setVideoRecorded] = useState(false)
  const [videoBlob, setVideoBlob] = useState()
  const [videoSent, setVideoSent] = useState(false)

  const userID = useSelector((state) => state.login.userID)
  console.log(userID)
  const message = useRef()

  useEffect(() => {
    fetch("/questions.json")
      .then(response => response.json())
      .then(data => {
        setQuestions(data)
      });
  }, []);

  const handleSubjectChange = event => {
    setSubject(event.target.value);
  };

  const handleButtonClick = () => {
    setVideoSent(false)
    if (!subject) {
      return;
    }
    const subjectQuestions = questions[subject];
    const randomIndex = Math.floor(Math.random() * subjectQuestions.length);
    setSelectedQuestion(subjectQuestions[randomIndex]);
  };

  //handle chat box 
  let handleSendChat = () => {
    if (message.current.value) {
      setChats([...chats, { message: message.current.value, isSender: true }])
      message.current.value = ""
      message.current.focus()
    }
  }
  function handleSubmitVideo() {
    console.log('submiting video')

    let formData = new FormData();
    let fileName = `${selectedQuestion}.${'mp4'}`;
    let file = new File([videoBlob], fileName);

    console.log('video file....')
    console.log(file)
    formData.append('file', file);
    formData.append('upload_preset', "aue92bwk");

    // Post request to cloudinary to save current image file
    var instance = axios.create();
    delete instance.defaults.headers.common['Authorization'];
    instance.post("https://api.cloudinary.com/v1_1/busy-bee/video/upload", formData).then(response => {

      console.log(response)
      let answerData = {
        question: selectedQuestion,
        userID: userID,
        video: response.data.secure_url
      }
      axios.post("/api/users/save-answer", answerData).then((res) => {
        console.log('response from save answers api..')
        console.log(res)
        setVideoRecorded(false)
        setVideoSent(true)
      })
    })


  }
  return (
    <React.Fragment>
      {videoSent ?
        <div onClick={() => setVideoSent(false)}>
          <p>Video Submitted! You'll recieve comprehensive feedback to your email in the next 24 hours!</p>
        </div>
        : null}
      <h2 className="question">  {selectedQuestion} </h2>
      <div className={classNames("questionArea", classes.mainContainer)} >
        <div className={classNames("questionAreaVideo questionPageSection", classes.videoSide)}>
          <div className="questionTitleArea questionPageSection">

            <div className={classNames("questionAelection", classes.btns)} >
              <select onChange={handleSubjectChange} className={classNames(classes.btnTop)}>
                <option value="">Select a subject</option>
                <option value="Dentistry">Dentistry</option>
                <option value="Computer Science">Computer Science</option>
              </select>
              <button className={classNames("changeQuestion", classes.btnTop)} style={{ background: "#FEE64E" }} onClick={handleButtonClick} >Generate Question</button>
            </div>
          </div>
          <div className={classes.videoWrapper}>
            <VideoRecorder
              countdownTime={userCountDown}
              timeLimit={userTimeLimit}
              showReplayControls={true}
              renderDisconnectedView={() => <div></div>}
              replayVideoAutoplayAndLoopOff={true}
              onRecordingComplete={(videoBlob) => {
                // Do something with the video...
                fetch(`http://127.0.0.1:8000/api/videos/`, {
                  method: 'POST',
                  body: videoBlob,
                  'ContentType': 'video/webm',
                })
                  .then(res => {
                    console.log(res)
                  })
                  .catch(error => console.log(error))
                console.log("videoBlob", videoBlob);
                setVideoBlob(videoBlob)
                setVideoRecorded(true)
              }
              }
            />
          </div>

          <div className={classNames("recordingOptionContainer", classes.btns)}>
            <select className={classNames("recordingOption", classes.btnBot)} onClick={e => setUserTimeLimit(parseInt(e.target.value))}>
              <option defaultValue value="300000">Time Limit: 5 minutes</option>
              <option value="30000">Time Limit: 30 seconds</option>
              <option value="10000">Time Limit: 10 seconds</option>
              <option value="60000">Time Limit: 1 minute</option>
              <option value="120000">Time Limit: 2 minutes</option>
              <option value="180000">Time Limit: 3 minutes</option>
            </select>

            <select className={classNames("recordingOption", classes.btnBot)} onClick={e => setUserCountDown(parseInt(e.target.value))}>
              <option defaultValue value="5000">Countdown: 5 seconds</option>
              <option value="10000">Countdown: 10 seconds</option>
              <option value="30000">Countdown: 30 seconds</option>
              <option value="60000">Countdown: 1 minute</option>
              <option value="120000">Countdown: 2 minutes</option>
              <option value="180000">Countdown: 3 minutes</option>
            </select>

          </div>
        </div>
        {videoRecorded ?
          <div>
            <button className={classes.submitInput}
              onClick={() => handleSubmitVideo()}>
              <p>Submit Response</p>
            </button>
          </div>
          :
          null
        }

        <div className={classNames("questionAreaNotes questionPageSection", classes.textSide)}>
          <p className={classes.chatHead}>Some Space to gather your thoughts</p>

          <div className={classes.chatBox}>
            {chats.map((chat, index) => (
              <div key={index} className={chat.isSender === true ? classes.chatRightBubble : classes.chatLeftBubble}>
                <div className={chat.isSender === true ? classes.bubbleRightText : classes.bubbleLeftText}>{chat.message}</div>
              </div>
            ))}

          </div>



          <div className={classes.textarea}>
            <textarea ref={message} placeholder="click here and start typing" label="notes" className={classNames("questionAreaNotesInput", classes.inputArea)} type="text"></textarea>
            <button className={classes.sendInput} onClick={() => handleSendChat()}><SendIcon /></button>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(QuestionPage);
