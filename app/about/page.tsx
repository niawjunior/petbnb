import Layout from "../components/Layout"
import { Container, Box, Typography } from "@mui/material"

const AboutPage = () => {
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
            เกี่ยวกับเรา
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            เราคือแพลตฟอร์มที่รวบรวมที่พักสำหรับสัตว์เลี้ยง
            ไม่ว่าคุณจะมีสุนัขหรือแมว
            เราช่วยให้คุณค้นหาสถานที่ที่เหมาะสมที่สุดสำหรับเพื่อนตัวน้อยของคุณ
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: "left",
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            ความเป็นมา
          </Typography>
          <Typography variant="body1" component="p">
            PetBnB เริ่มต้นจากความรักในสัตว์เลี้ยงของเรา
            และการตระหนักถึงความต้องการที่เพิ่มขึ้นสำหรับบริการที่พักสำหรับสัตว์เลี้ยง
            เราตั้งเป้าที่จะทำให้การหาที่พักที่เหมาะสมและสะดวกที่สุดสำหรับสัตว์เลี้ยงของคุณเป็นไปอย่างง่ายดาย
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: "left",
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            บริการของเรา
          </Typography>
          <Typography variant="body1" component="p">
            เรามีเครือข่ายที่พักสำหรับสัตว์เลี้ยงที่หลากหลาย ครอบคลุมพื้นที่ต่าง
            ๆ และสามารถรองรับทุกความต้องการของสัตว์เลี้ยงของคุณ
            ไม่ว่าจะเป็นการพักระยะสั้นหรือระยะยาว
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: "left",
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            ติดตามเรา
          </Typography>
          <Typography variant="body1" component="p">
            เราพร้อมช่วยคุณในการดูแลสัตว์เลี้ยงของคุณทุกเมื่อ
            ติดต่อเราผ่านช่องทางโซเชียลมีเดียของเราเพื่อรับข่าวสารและโปรโมชั่นล่าสุด!
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export default AboutPage
