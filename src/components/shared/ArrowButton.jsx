import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const ArrowButton = ({ label, className, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      <p>{label}</p>
      <div className="arrow">
        <span />
        <span />
        <span />
      </div>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  align-items: center;
  border: none;
  background-color: #fff;
  p {
    margin: 0px;
    transition: all 0.5s ease;
    border-bottom: 2px solid white;
    color: var(--navy-blue);
  }
  .arrow {
    width: 120px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    span {
      display: block;
      width: 15px;
      height: 15px;
      border-bottom: 2px solid grey;
      border-right: 2px solid grey;
      transform: rotate(-45deg);
    }
  }

  :hover {
    p {
      transform: translate(0px, -5px);
      border-bottom: 2px solid grey;
    }
    .arrow span {
      animation: animate 2s infinite;
      :nth-child(2) {
        animation-delay: -0.2s;
      }
      :nth-child(3) {
        animation-delay: -0.4s;
      }
    }
  }

  @keyframes animate {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(-45deg) translate(40px, 40px);
    }
  }
`;

ArrowButton.propTypes = {
  label: PropTypes.string,
};

ArrowButton.defaultProps = {
  label: "",
};
