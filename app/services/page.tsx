import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid2,
} from "@mui/material"
import Layout from "../components/Layout"
import {
  Hotel,
  LocalShipping,
  MedicalServices,
  Pets,
} from "@mui/icons-material"

const services = [
  {
    title: "ที่พักระยะสั้นสำหรับสัตว์เลี้ยง",
    description:
      "บริการที่พักระยะสั้นสำหรับสัตว์เลี้ยงของคุณ ให้คุณมั่นใจว่าสัตว์เลี้ยงจะได้รับการดูแลอย่างดีในระหว่างที่คุณไม่อยู่",
    icon: <Hotel color="primary" />,
  },
  {
    title: "ที่พักระยะยาวสำหรับสัตว์เลี้ยง",
    description:
      "ไม่ว่าคุณจะต้องเดินทางเป็นเวลานาน เรามีบริการที่พักระยะยาวที่ปลอดภัยและสะดวกสบายสำหรับสัตว์เลี้ยงของคุณ",
    icon: <Pets color="primary" />, // Use the Pets icon for long-term accommodation
  },
  {
    title: "บริการดูแลพิเศษสำหรับสัตว์เลี้ยง",
    description:
      "บริการดูแลพิเศษสำหรับสัตว์เลี้ยงที่ต้องการการดูแลที่แตกต่างจากปกติ เช่น การให้อาหารพิเศษ หรือการดูแลด้านสุขภาพ",
    icon: <MedicalServices color="primary" />, // Use Medical Services icon for special care
  },
  {
    title: "บริการนัดหมายการเดินทางสำหรับสัตว์เลี้ยง",
    description:
      "บริการรับส่งสัตว์เลี้ยงถึงหน้าบ้าน เพื่อความสะดวกในการเดินทางและให้คุณมั่นใจว่าสัตว์เลี้ยงของคุณจะถึงที่หมายอย่างปลอดภัย",
    icon: <LocalShipping color="primary" />, // Use Local Shipping icon for pet transportation
  },
]

const ServicePage = () => {
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
            บริการของเรา
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            เรามีบริการที่หลากหลายเพื่อตอบสนองความต้องการของสัตว์เลี้ยงของคุณ
          </Typography>
        </Box>

        <Grid2 size="auto" container spacing={4}>
          {services.map((service, index) => (
            <Grid2
              size={{
                xs: 12,
                sm: 6,
              }}
              key={index}
            >
              <Card
                sx={{
                  boxShadow: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      textAlign: "center",
                      mb: 2,
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      border: "1px solid #ccc",
                      borderColor: "primary.main",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                  >
                    {service.icon} {/* Render the icon */}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="text.secondary"
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Layout>
  )
}

export default ServicePage
