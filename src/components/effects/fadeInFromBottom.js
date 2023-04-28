import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as styles from './fadeInFromBottom.module.css';

const FadeInFromBottom = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const onIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0.1,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.fadeInFromBottom} ${
        isVisible ? styles.isVisible : ''
      }`}
    >
      {children}
    </div>
  );
};

FadeInFromBottom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FadeInFromBottom;