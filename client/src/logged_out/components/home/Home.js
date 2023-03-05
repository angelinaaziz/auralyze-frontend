import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import DemoVideo from "./DemoVideo";
import FeatureSection from "./FeatureSection";

function Home(props) {
  const { selectHome, handleMobileDrawerClose } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <DemoVideo />
      <FeatureSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
