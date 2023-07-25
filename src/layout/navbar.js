import styled from "@emotion/styled"
import { Menu as BurgerIcon, ChevronLeft } from "@mui/icons-material"
import CloseIcon from "@mui/icons-material/Close"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Menu as Dropdown,
  MenuItem as DropdownItem,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useContext, useState } from "react"
import { Button } from "../components/shared"
import { AuthContext } from "../utils/context/AuthContext"

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
          height: "72px",
          boxShadow: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          height: "100%",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "var(--khaki-light)",
          top: "55px !important",
          boxShadow: "none",
          border: "1px solid var(--money-green)",
          color: "var(--money-green)",
          li: {
            height: "50px",
            ":hover": {
              color: "var(--cobalt-blue)",
            },
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          fontFamily: "var(--font-ligth)",
          "@media (min-width: 1201px)": {
            display: "none",
          },
        },
        paper: {
          boxSizing: "border-box",
          width: "300px",

          "@media (max-width: 500px)": {
            width: "100vw",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
          border: "none",
          boxShadow: "none",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0px",
          minHeight: "unset",
          "&.Mui-expanded": {
            minHeight: "unset",
          },
        },
        content: {
          margin: "0px",
          "&.Mui-expanded": {
            margin: "0px",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--khaki-light)",
          padding: "0px 20px",
        },
      },
    },
  },
})

function NavBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElAccount, setAnchorElAccount] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const authContext = useContext(AuthContext)
  const logOut = authContext?.logOut
  const isLoggedIn = authContext?.isLoggedIn
  const open = Boolean(anchorEl)
  const openAccount = Boolean(anchorElAccount)

  const handleLogout = () => {
    if (typeof logOut === "function") {
      logOut()
      typeof window !== "undefined" && window.location.reload()
    }
    navigate("/")
  }

  const handleDropdown = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownAccount = (event) => {
    setAnchorElAccount(event.currentTarget)
  }

  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  const handleDropdownCloseAccount = () => {
    setAnchorElAccount(null)
  }

  const handleSideBar = () => {
    setSideBarOpen((prevState) => !prevState)
  }

  const handleAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <ToolBox>
            <Logo>
              <Link to="/">
                <StaticImage
                  src="../images/navbar/nav-tasksuite-logo.png"
                  placeholder="blurred"
                  alt="tasksuite logo"
                />
              </Link>
            </Logo>
            <BurgerMenu
              aria-label="open drawer"
              edge="start"
              onClick={handleSideBar}
            >
              <BurgerIcon />
            </BurgerMenu>
            <MenuGroup>
              <MenuLink onClick={handleDropdown} className={open ? "open" : ""}>
                <p>Products</p>
                <ChevronIcon />
              </MenuLink>
              <Dropdown
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleDropdownClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <DropdownItem onClick={() => navigate("/loansuite")}>
                  Loan Suite
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/loanorigination")}>
                  Loan Origination Suite
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/loanmanagement")}>
                  Loan Management Suite
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/loanservicing")}>
                  Loan Servicing Suite
                </DropdownItem>
                <DropdownItem onClick={() => navigate("/loancreditai")}>
                  Loan Credit ai
                </DropdownItem>
              </Dropdown>
              <MenuLink onClick={() => navigate("/lenders")}>
                For Lenders
              </MenuLink>
              <MenuLink onClick={() => navigate("/brokers")}>
                For Brokers
              </MenuLink>
              <MenuLink onClick={() => navigate("/about")}>About</MenuLink>
            </MenuGroup>
            <MenuGroup>
              <Button
                onClick={() => {
                  navigate("/contact")
                }}
              >
                <p>Request a demo</p>
              </Button>
              <Divider />
              {isLoggedIn ? (
                <MenuGroup>
                  <MenuLink
                    onClick={handleDropdownAccount}
                    className={openAccount ? "open" : ""}
                  >
                    <p>Account</p>
                    <ChevronIcon />
                  </MenuLink>
                  <Dropdown
                    id="account-menu"
                    anchorEl={anchorElAccount}
                    open={openAccount}
                    onClose={handleDropdownCloseAccount}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <DropdownItem onClick={() => navigate("/dashboard")}>
                      Dashboard
                    </DropdownItem>
                    <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                  </Dropdown>
                </MenuGroup>
              ) : (
                <MenuLink onClick={() => navigate("/login")}>Login</MenuLink>
              )}
            </MenuGroup>
          </ToolBox>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="right"
        variant="temporary"
        open={sideBarOpen}
        onClose={handleSideBar}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <SideBar>
          <TopBar>
            <Logo>
              <Link to="/">
                <StaticImage
                  src="../images/navbar/nav-tasksuite-logo.png"
                  placeholder="blurred"
                  alt="tasksuite logo"
                />
              </Link>
            </Logo>
            <IconButton onClick={handleSideBar}>
              <CloseIcon />
            </IconButton>
          </TopBar>
          <SideBarMenus>
            <Accordion
              expanded={expanded === "products"}
              onChange={handleAccordion("products")}
            >
              <AccordionSummary
                aria-controls="products-content"
                id="products-accoridion"
              >
                <MenuLink className={expanded === "products" ? "open" : ""}>
                  <p>Products</p>
                  <ChevronIcon />
                </MenuLink>
              </AccordionSummary>
              <AccordionDetails>
                <MenuLink onClick={() => navigate("/loansuite")}>
                  Loan Suite
                </MenuLink>
                <MenuLink onClick={() => navigate("/loanorigination")}>
                  Loan Origination Suite
                </MenuLink>
                <MenuLink onClick={() => navigate("/loanmanagement")}>
                  Loan Management Suite
                </MenuLink>
                <MenuLink onClick={() => navigate("/loanservicing")}>
                  Loan Servicing Suite
                </MenuLink>
                <MenuLink onClick={() => navigate("/loancreditai")}>
                  Loan Credit ai
                </MenuLink>
              </AccordionDetails>
            </Accordion>
            <MenuLink onClick={() => navigate("/lenders")}>
              For Lenders
            </MenuLink>
            <MenuLink onClick={() => navigate("/brokers")}>
              For Brokers
            </MenuLink>
            <MenuLink onClick={() => navigate("/about")}>About</MenuLink>
            {isLoggedIn && (
              <MenuLink onClick={() => navigate("/dashboard")}>
                Dashboard
              </MenuLink>
            )}
            <MenuLink
              onClick={isLoggedIn ? handleLogout : () => navigate("/login")}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </MenuLink>
            <Button
              onClick={() => {
                navigate("/contact")
              }}
            >
              <p>Request a demo</p>
            </Button>
          </SideBarMenus>
        </SideBar>
      </SwipeableDrawer>
    </ThemeProvider>
  )
}

const ToolBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-light);
  max-width: 1440px;
  width: 100%;
`

const MenuLink = styled.a`
  color: var(--primary-font-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  text-decoration: none;

  p {
    margin: 0px;
  }
  .MuiSvgIcon-root {
    transition: transform 0.3s ease-in-out;
    transform: rotate(-90deg);
  }
  &.open {
    .MuiSvgIcon-root {
      transform: rotate(-270deg);
    }
  }
  :hover {
    color: var(--cobalt-blue);
    transition: 250ms;
  }
`

const BurgerMenu = styled(IconButton)`
  @media (min-width: 1201px) {
    display: none;
  }
`

const ChevronIcon = styled(ChevronLeft)`
  width: 18px;
  height: 18px;
  margin-left: 0.5rem;
  svg {
    margin: 0px;
  }
`

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: grey;
`

const Logo = styled.div`
  width: 150px;
`

const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  a {
    color: var(--primary-font-color);
  }
  @media (max-width: 1200px) {
    display: none;
  }
`

const SideBar = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 20px;
  width: 100%;
`

const SideBarMenus = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  a {
    color: var(--primary-font-color);
    margin: 0px 20px;
    height: 70px;
  }
  button {
    margin: 20px;
  }
`

export default NavBar
