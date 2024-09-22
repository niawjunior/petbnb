import { Box, Button, TextField } from "@mui/material"

const Search = () => {
  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 1,
        borderRadius: 2,
      }}
    >
      <TextField
        sx={{
          width: "100%",
        }}
        id="search-pets"
        variant="outlined"
        inputMode="search"
        placeholder="ค้นหา สัตว์เลี้ยง หรือ สถานที่"
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginLeft: 1,
        }}
      >
        ค้นหา
      </Button>
    </Box>
  )
}

export default Search
