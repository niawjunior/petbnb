import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material"
import Layout from "./components/Layout"
import Image from "next/image"
import heroImg from "../public/images/pets.jpg" // update path accordingly
import Search from "./components/Search"

export default function Home() {
  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          maxHeight: "calc(100vh - 64px)", // Set a maximum height for the hero section
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", // Ensures the image doesn't overflow
        }}
      >
        <Image
          style={{ objectFit: "cover", filter: "brightness(0.5)" }}
          src={heroImg}
          width={1920}
          height={1080}
          alt="Hero Image"
          priority
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
            ยินดีต้อนรับเข้าสู่ Pet B&B
          </Typography>
          <Typography variant="h5" component="p">
            ค้นหาห้องพักสําหรับสัตว์เลี้ยงของคุณ
          </Typography>

          <Search />
        </Box>
      </Box>

      {/* Main Content */}
      <Container sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            บ้านที่สะดวกสบายสำหรับสัตว์เลี้ยง
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            {`ค้นหาที่พักที่สมบูรณ์แบบสำหรับสัตว์เลี้ยงของคุณกับเจ้าของบ้านที่เชื่อถือได้ ไม่ว่าคุณจะมองหาความปลอดภัย ความสะดวกสบาย หรือเจ้าของบ้านท้องถิ่นใกล้เคียง เรามีครบทุกอย่าง`}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            เริ่มต้นเลย
          </Button>
        </Box>

        <Grid2 container spacing={4} sx={{ display: "flex" }}>
          {/* การ์ดความปลอดภัยเป็นอันดับแรก */}
          <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
            <Card sx={{ textAlign: "center", p: 3, flexGrow: 1 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  ความปลอดภัยเป็นอันดับแรก
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  เจ้าของบ้านทุกคนได้รับการยืนยันตัวตน และเชื่อถือได้
                  เพื่อให้แน่ใจว่าสภาพแวดล้อมปลอดภัยสำหรับสัตว์เลี้ยงของคุณ
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="medium" variant="outlined">
                  เรียนรู้เพิ่มเติม
                </Button>
              </CardActions>
            </Card>
          </Grid2>

          {/* การ์ดความสะดวกสบาย */}
          <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
            <Card sx={{ textAlign: "center", p: 3, flexGrow: 1 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  ความสะดวกสบาย
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  สัตว์เลี้ยงของคุณจะรู้สึกเหมือนอยู่บ้าน
                  ด้วยที่พักที่สะดวกสบายของเรา
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="medium" variant="outlined">
                  เรียนรู้เพิ่มเติม
                </Button>
              </CardActions>
            </Card>
          </Grid2>

          {/* การ์ดเจ้าของบ้านท้องถิ่น */}
          <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
            <Card sx={{ textAlign: "center", p: 3, flexGrow: 1 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  เจ้าของบ้านท้องถิ่น
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  พบเจ้าของบ้านที่เชื่อถือได้ในพื้นที่ของคุณ
                  เพื่อความสะดวกในการเข้าพัก
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="medium" variant="outlined">
                  เรียนรู้เพิ่มเติม
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Layout>
  )
}
