import React from "react";
  
const Prepare = (
<iframe className="vid" title="myFrame"
    src="https://www.youtube.com/embed/zWRKWkFF51w" height={600} width={1050}>
</iframe>
);
const Webinar = (
<iframe className="vid" title="webinar"
  src="https://www.youtube.com/embed/S_bPMp8X9Ug" height={600} width={1050}>
</iframe>
);

const posts = [
  {
    title: "How to Prepare for a Dental School Interview",
    id: 1,
    date: 1676905380,
    src: "/images/logged_out/auralyze_dental_thumbnail.png",
    snippet:
      "A video guide on how to prepare for a dental school interview. This video is aimed at UK dental school interviews but the advice is applicable to all dental school interviews.",
    content: Prepare,
  },
  {
    title: "How to Ace Your Dental School Interview: Full Webinar",
    id: 2,
    date: 1677857496,
    src: 'https://www.cl-dental-school.co.uk/assets/images/parallax_images/school/school-768.webp',
    snippet:
      "A full webinar on  all things dental interview related. This webinar is aimed at UK dental school interviews but the advice is applicable to all dental school interviews.",
    content: Webinar,
  },
];

export default posts;