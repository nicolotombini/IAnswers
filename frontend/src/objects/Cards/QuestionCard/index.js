import { useMemo } from "react";

import PropTypes from "prop-types";
import { useState, forwardRef} from "react";
import { Line } from "react-chartjs-2";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import Box from "components/Box";
import Typography from "components/Typography";

import SearchingButton from "objects/Buttons/SearchingButton";


const StyledInput = styled(TextField)({
  margin:'20px 0',
  '& input:valid + fieldset': {
    borderColor: 'black',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'black',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderColor: 'black',
    borderLeftWidth: 6,
    padding: '4px !important',
  },
});

const TopicViewCard = forwardRef (( { color, title, description, date, chart, onClick, btnState, handleQuestionChange}, ref) => {

  return (
    <Card sx={{ height: "100%" }}>
      <Box padding="1rem">
            <Typography variant="button" color="text" fontWeight="light">
            <StyledInput
              label="Question"
              variant="outlined"
              placeholder='Insert your question'
              id="inputEmail"
              fullWidth
              id="inputQuestion"
              onChange={handleQuestionChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  <SearchingButton onClick={onClick} btnState={btnState}/>
                  </InputAdornment>
                ),
              }}
            />
            </Typography>
          </Box>
    </Card>
);
});

TopicViewCard.defaultProps = {
  color: "dark",
  description: "",
};

TopicViewCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default TopicViewCard;