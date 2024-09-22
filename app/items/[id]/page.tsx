import {
  Box,
  Typography,
  Grid2,
  Button,
  Rating,
  Container,
} from "@mui/material"
import petImage from "../../../public/images/pets.jpg" // update path accordingly
import Layout from "@/app/components/Layout"
import ImageGallery from "@/app/components/ImageGallery"

// Mock data for a single house (replace with actual data when navigating from the list)
const houseDetail = {
  title: "บ้านพักสุดหรู",
  description: `บ้านที่สะดวกสบายและปลอดภัยสำหรับสัตว์เลี้ยงของคุณ 
                ตั้งอยู่ในใจกลางเมือง มีสิ่งอำนวยความสะดวกครบครัน.`,
  price: "1500 บาท/คืน",
  rating: 4.5,
  images: [
    { id: 1, src: petImage.src, alt: "House Image 1", width: 400, height: 300 },
    { id: 2, src: petImage.src, alt: "House Image 2", width: 400, height: 300 },
    { id: 3, src: petImage.src, alt: "House Image 3", width: 400, height: 300 },
  ],
  importantInfo: [
    { label: "Wi-Fi", value: "Available" },
    { label: "Pet Friendly", value: "Yes" },
    { label: "Parking", value: "Free" },
    { label: "Check-in Time", value: "2:00 PM" },
    { label: "Check-out Time", value: "12:00 PM" },
  ],
  location: "ใจกลางเมือง, Bangkok, Thailand",
}

export default function HouseDetail() {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        {/* Top Image Gallery using ImageList */}
        <Box sx={{ mt: 6, mb: 6 }}>
          <ImageGallery images={houseDetail.images} />
        </Box>

        {/* Content Section */}
        <Grid2 container spacing={4}>
          {/* Left: House Details */}
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                {houseDetail.title}
              </Typography>
              <Rating
                name="read-only"
                value={houseDetail.rating}
                readOnly
                sx={{ mb: 2 }}
              />
              <Typography variant="h6" sx={{ mb: 4 }}>
                {houseDetail.description}
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                ราคา: {houseDetail.price}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                จองทันที
              </Button>
            </Box>
          </Grid2>

          {/* Right: Key Info and Location */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                ข้อมูลสำคัญ
              </Typography>
              {houseDetail.importantInfo.map((info, index) => (
                <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                  <strong>{info.label}:</strong> {info.value}
                </Typography>
              ))}
            </Box>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                ตำแหน่งที่ตั้ง
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {houseDetail.location}
              </Typography>

              {/* Example Location Map */}
              {/* You can embed a real Google Map iframe or integrate a library */}
              <Box
                component="img"
                sx={{ width: "100%", height: 200, objectFit: "cover" }}
                src={petImage.src} // Replace with actual map image or Google Map embed
                alt="Map Location"
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Layout>
  )
}
