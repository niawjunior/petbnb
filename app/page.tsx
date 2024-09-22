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
            ยินดีต้อนรับเข้าสู่ PetBnB
          </Typography>
          <Typography variant="h5" component="p">
            ค้นหาห้องพักสําหรับสัตว์เลี้ยงของคุณ
          </Typography>

          <Search />
        </Box>
      </Box>

      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" gutterBottom>
            Comfortable Homes for Pets
          </Typography>
          <Typography variant="h5">
            Find the perfect stay for your pets with trusted hosts.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </Box>

        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Safety First
                </Typography>
                <Typography color="text.secondary">
                  All hosts are verified and trustworthy.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Comfort
                </Typography>
                <Typography color="text.secondary">
                  Your pets will feel right at home.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Local Hosts
                </Typography>
                <Typography color="text.secondary">
                  Find hosts in your local area.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Layout>
  )
}
