import React from "react";

// import  NavigationDots from '../components/NavigationDots.jsx';
// import  Socials from '../components';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {/* <Socials /> */}

        <div className="app__wrapper app__flex">
          <Component />
        </div>

        {/* <NavigationDots active={idName} /> */}
      </div>
    );
  };

export default AppWrap;