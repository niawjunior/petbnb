"use client"
import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Grid2,
} from "@mui/material"
import Layout from "../components/Layout"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username === "" || password === "") {
      setError("กรุณากรอกชื่อผู้ใช้หรืออีเมลและรหัสผ่าน")
      return
    }

    // Add your login logic here, such as an API call for authentication.
    // For now, we'll just reset the form on successful submission.
    setError("")
    console.log("Logging in with:", username, password)
  }

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            เข้าสู่ระบบ
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="ชื่อผู้ใช้หรืออีเมล"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="รหัสผ่าน"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                เข้าสู่ระบบ
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Layout>
  )
}

export default LoginPage
