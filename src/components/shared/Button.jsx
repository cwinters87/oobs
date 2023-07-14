import React from "react"
import LoadingButton from "@mui/lab/LoadingButton"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "0 20px 30px -10px #26394d",
            filter: "brightness(110%)",
            transform: "translateY(-0.12rem)",
            transition: "transform .5s",
          },
        },
      },

      variants: [
        {
          props: { variant: "outlined" },
          style: {
            color: "var(--primary-font-colour)",
            borderColor: "grey",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#0b5ed7",
              borderColor: "#0a58ca",
            },
          },
        },
        {
          props: { variant: "blue" },
          style: {
            width: "160px",
            paddding: "6px 12px",
            color: "var(--secondary-font-color)",
            backgroundColor: "var(--cobalt-blue)",
            borderColor: "var(--cobalt-blue)",
            "&:hover": {
              color: "var(--secondary-font-color)",
              backgroundColor: "var(--cobalt-blue)",
              borderColor: "var(--cobalt-blue)",
            },
          },
        },
        {
          props: { variant: "blueSmall" },
          style: {
            width: "120px",
            paddding: "6px 12px",
            color: "var(--secondary-font-color)",
            backgroundColor: "var(--cobalt-blue)",
            borderColor: "var(--cobalt-blue)",
            "&:hover": {
              color: "var(--secondary-font-color)",
              backgroundColor: "var(--cobalt-blue)",
              borderColor: "var(--cobalt-blue)",
            },
          },
        },
        {
          props: { variant: "blueLarge" },
          style: {
            width: "180px",
            paddding: "6px 12px",
            color: "var(--secondary-font-color)",
            backgroundColor: "var(--cobalt-blue)",
            borderColor: "var(--cobalt-blue)",
            "&:hover": {
              color: "var(--secondary-font-color)",
              backgroundColor: "var(--cobalt-blue)",
              borderColor: "var(--cobalt-blue)",
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            color: "#fff",
            backgroundColor: "#105abc",
            "&:hover": {
              backgroundColor: "#0b5ed7",
              borderColor: "#0a58ca",
            },
          },
        },
      ],
    },
  },
})

export const Button = ({
  onClick,
  loading,
  disabled,
  children,
  variant,
  className,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonWrapper
        onClick={onClick}
        loading={loading}
        disabled={disabled}
        variant={variant}
        className={className}
      >
        {children}
      </ButtonWrapper>
    </ThemeProvider>
  )
}

const ButtonWrapper = styled(LoadingButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: none;
  p {
    margin: 0;
    font-family: var(--font-light);
    font-size: 16px;
  }
`

Button.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  loading: false,
  disabled: false,
  className: "",
  variant: "contained",
}
