import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material"
import Layout from "../components/Layout"

const ContactPage = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            ติดต่อเรา
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            หากคุณมีคำถามหรือต้องการข้อมูลเพิ่มเติม
            กรุณาติดต่อเราผ่านแบบฟอร์มด้านล่าง
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 4, justifyContent: "center" }}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ชื่อ" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="อีเมล" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="ข้อความ"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: "10px 50px" }}
            >
              ส่งข้อความ
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            หรือติดต่อเราโดยตรงที่:
          </Typography>
          <Typography>โทร: (123) 456-7890</Typography>
          <Typography>อีเมล: info@example.com</Typography>
          <Typography>
            ที่อยู่: 123 ถนนแห่งหนึ่ง, เมืองใหญ่, ประเทศไทย
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export default ContactPage
