"use client"
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"

import PetsIcon from "@mui/icons-material/Pets"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import Link from "next/link"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        <ListItem>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(244, 12, 240, 0.6)", // Semi-transparent background
          backdropFilter: "blur(10px)", // Optional: Adds a subtle blur for a glassy effect
        }}
      >
        <Toolbar>
          <PetsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              Pet B&B
            </Link>
          </Typography>

          {/* Responsive Menu for Mobile */}
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Desktop Links
            <>
              <Button color="inherit" href="/">
                Home
              </Button>
              <Button color="inherit" href="/about">
                About
              </Button>
              <Button color="inherit" href="/services">
                Services
              </Button>
              <Button color="inherit" href="/contact">
                Contact
              </Button>
              <Button color="inherit" href="/login">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>

      <Box
        sx={{
          minHeight: "calc(100vh - 210px)", // Set a minimum height for the content
        }}
      >
        {children}
      </Box>

      <Box component="footer" sx={{ p: 3, mt: 4, backgroundColor: "#f8f8f8" }}>
        <Typography variant="body1" align="center">
          PetBnB &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  )
}

export default Layout
