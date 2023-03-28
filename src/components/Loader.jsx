import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="0.5rem"
      pb="1.1rem"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
