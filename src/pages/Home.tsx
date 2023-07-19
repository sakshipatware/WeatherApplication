import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import Sunset from "../assets/images/bg.jpg";
import Form from "../components/Form";
import Information from "../components/Information";

const StyledComponent = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  width: "65%",
});

const StyledImage = styled(Box)({
  backgroundImage: `url(${Sunset})`,
  width: "27%",
  height: "80%",
  backgroundSize: "cover",
  borderRadius: "20px 0 0 20px",
});

const Home: React.FC = () => {
  const [result, setResult] = useState({});

  return (
    <StyledComponent>
      <StyledImage></StyledImage>
      <Box className="App-header">
        <Form setResult={setResult} />
        <Information result={result} />
      </Box>
    </StyledComponent>
  );
};

export default Home;
