import React, {useRef, useCallback} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import { FcBriefcase,FcGraduationCap, FcSelfServiceKiosk, FcStackOfPhotos,FcKindle } from 'react-icons/fc';
const AboutMe = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const aboutMeItems = [
    {
      icon: <FcKindle />,
      date: 'Sept 2021',
      description: 'Began coding bootcamp',
    },
    {
      icon: <FcGraduationCap />,
      date: 'Oct 2022',
      description: 'Graduated from coding bootcamp',
    },
    {
      icon: <FcBriefcase />,
      date: 'Jan 2023',
      description: 'Re-enrolled into school, pursuing BS of Computer Science',
    },
    {
        icon: <FcSelfServiceKiosk/>,
        date: 'Feb - Mar 2023',
        description: 'Created this portfolio!',
      },
      {
        icon: <FcStackOfPhotos/>,
        date: 'Apr 2023',
        description: 'Deployed my first website!',
      },
  ];

  const observerRefs = aboutMeItems.map(() => useRef(null));

 const makeVisible = useCallback((element, delay) => {
    element.style.animationDelay = `${delay}s`;
    element.classList.add('animate__animated', 'animate__fadeIn');
  }, []);

  const makeInvisible = useCallback((element) => {
    element.classList.remove('animate__animated', 'animate__fadeIn');
  }, []);

  observerRefs.forEach((ref, index) => {
    useIntersectionObserver(
      ref,
      () => makeVisible(ref.current, index * 0.5),
      () => makeInvisible(ref.current)
    );
  });

  return (
    <section id="about-me" className="about-me">
      <h2>About Me</h2>
      <h3 className="subheader">My journey in tech </h3>
      <p className="about-me-intro">
        I'm a passionate software engineer who loves to learn new technologies and create
        innovative solutions. My journey started in 2021 when I attended a coding bootcamp, and
        since then, I've been constantly improving my skills and working on exciting projects.
      </p>
      <div className="timeline">
        {aboutMeItems.map((item, index) => (
          <div ref={observerRefs[index]} key={index} className="timeline-item">
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <p className="date">{item.date}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;