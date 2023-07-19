import React, { Component, ChangeEvent } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { getWeather } from "../services/api";

interface FormComponentProps {
  setResult: (data: any) => void;
}

interface FormComponentState {
  data: {
    city: string;
    country: string;
  };
}

const StyledComponent = styled(Box)({
  background: "#339966",
  padding: 10,
});

const StyledInput = styled(InputBase)({
  color: "#fff",
  marginRight: 15,
  fontSize: 16,
});

const StyledButton = styled(Button)({
  background: "#ff9933",
  "&:hover": {
    background: "#660033",
  },
});

export default class Form extends Component<
  FormComponentProps,
  FormComponentState
> {
  constructor(props: FormComponentProps) {
    super(props);

    this.state = {
      data: {
        city: "",
        country: "",
      },
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value,
      },
    }));
  };

  getWeatherInfo = async () => {
    const { city, country } = this.state.data;
    const response = await getWeather(city, country);
    this.props.setResult(response);
  };

  render() {
    const { city, country } = this.state.data;
    return (
      <StyledComponent>
        <StyledInput
          placeholder="City"
          value={city}
          onChange={this.handleChange}
          name="city"
        />
        <StyledInput
          placeholder="Country"
          value={country}
          onChange={this.handleChange}
          name="country"
        />
        <StyledButton variant="contained" onClick={this.getWeatherInfo}>
          Get Weather
        </StyledButton>
      </StyledComponent>
    );
  }
}
