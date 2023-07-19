import React, { Component } from "react";
import { Box, Typography, styled } from "@mui/material";
import {
  LocationOn,
  SettingsBrightness,
  Opacity,
  Brightness5,
  Brightness6,
  Dehaze,
  Cloud,
} from "@mui/icons-material";

interface InformationProps {
  result: any;
}
const StyledBox = styled(Box)({
  margin: "60px 80px",
});
const StyledTypography = styled(Typography)({
  padding: 5,
  fontSize: 18,
  letterSpacing: 2,
  "& > svg": {
    marginRight: 10,
  },
});
export default class Information extends Component<InformationProps> {
  render() {
    const { result } = this.props;
    return result && Object.keys(result).length > 0 ? (
      <StyledBox>
        <StyledTypography>
          {" "}
          <LocationOn />
          Location:{result.name},{result.sys.country}
        </StyledTypography>
        <StyledTypography>
          <SettingsBrightness />
          Temprature: {result.main.temp}
        </StyledTypography>
        <StyledTypography>
          <Opacity />
          Humidity: {result.main.humidity}
        </StyledTypography>
        <StyledTypography>
          <Brightness5 />
          Sun Rise:{new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
        </StyledTypography>
        <StyledTypography>
          <Brightness6 />
          Sun Set:{new Date(result.sys.sunset * 1000).toLocaleTimeString()}
        </StyledTypography>
        <StyledTypography>
          <Dehaze />
          Humidity:{result.weather[0].main}
        </StyledTypography>
        <StyledTypography>
          <Cloud />
          Clouds:{result.clouds.all}%
        </StyledTypography>
      </StyledBox>
    ) : (
      <StyledTypography>Please enter the values</StyledTypography>
    );
  }
}
