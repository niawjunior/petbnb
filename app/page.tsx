import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Rating,
  Typography,
} from "@mui/material"
import Layout from "./components/Layout"
import Image from "next/image"
import heroImg from "../public/images/pets.jpg" // update path accordingly
import Search from "./components/Search"

const houses = [
  {
    id: 1,
    title: "บ้านพักสุดหรู",
    description:
      "บ้านที่สะดวกสบายและปลอดภัยสำหรับสัตว์เลี้ยงของคุณ ตั้งอยู่ในใจกลางเมือง.",
    price: "1500 บาท/คืน",
    rating: 4.5,
    image: heroImg.src,
  },
  {
    id: 2,
    title: "บ้านพักกลางป่า",
    description:
      "บ้านท่ามกลางธรรมชาติที่สัตว์เลี้ยงของคุณจะได้สัมผัสกับอากาศบริสุทธิ์.",
    price: "1200 บาท/คืน",
    rating: 4.0,
    image: heroImg.src,
  },
  {
    id: 3,
    title: "บ้านพักริมทะเล",
    description:
      "บ้านพักสุดชิลติดทะเล เหมาะสำหรับสัตว์เลี้ยงที่ชอบวิ่งเล่นริมหาด.",
    price: "1800 บาท/คืน",
    rating: 5.0,
    image: heroImg.src,
  },
  {
    id: 4,
    title: "บ้านพักบนภูเขา",
    description:
      "บ้านพักวิวภูเขาที่สัตว์เลี้ยงของคุณจะได้ผ่อนคลายกับทิวทัศน์สวยงาม.",
    price: "1600 บาท/คืน",
    rating: 4.3,
    image: heroImg.src,
  },
  {
    id: 5,
    title: "บ้านพักใจกลางเมือง",
    description:
      "บ้านพักในย่านใจกลางเมืองที่สะดวกต่อการเดินทางและการดูแลสัตว์เลี้ยง.",
    price: "2000 บาท/คืน",
    rating: 4.7,
    image: heroImg.src,
  },
]
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

      <Container>
        <Box sx={{ mt: 6, mb: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
          >
            บ้านพร้อมสำหรับเข้าพัก
          </Typography>

          <Grid2 container spacing={4}>
            {houses.map((house) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={house.id}>
                <Card sx={{ textAlign: "center", p: 3 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={house.image} // Use the image from the data
                    alt={house.title}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                      {house.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {house.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2 }}
                    >
                      ราคา: {house.price}
                    </Typography>
                    <Rating
                      name="read-only"
                      value={house.rating}
                      readOnly
                      sx={{ mt: 1 }}
                    />
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="medium" variant="outlined">
                      ดูรายละเอียด
                    </Button>
                  </CardActions>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
    </Layout>
  )
}
