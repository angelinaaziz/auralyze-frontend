import React from "react";
  
const questionBank = (
<iframe className="vid" title="myFrame"
    src="https://www.youtube.com/embed/zWRKWkFF51w" height={600} width={1050}>
</iframe>
);

const posts = [
  {
    title: "How to Prepare for a Dental School Interview",
    id: 1,
    date: 1676905380,
    src: 'https://internationaldentistcentral.com/wp-content/uploads/2017/11/im-panel.jpg',
    snippet:
      "A video guide on how to prepare for a dental school interview. This video is aimed at UK dental school interviews but the advice is applicable to all dental school interviews.",
    content: questionBank,
  },
];

export default posts;