import React from "react";
import PropTypes from "prop-types";
import StyledInput, { Prefix, Suffix, InputContainer } from "./style";
import { useTheme } from "styled-components"
import Icon from "components/Icon"
import InputText from './InputText/index'

import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";

function Input({ placeholder = "Search here...", prefix, suffix, ...rest }) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
}

function Search({ placeholder = "Search here...", ...rest }) {
 const theme = useTheme()
  return (
    <Input
      placeholder={placeholder}
      prefix={<Icon icon={SearchIcon} color={theme.gray3} width={18} height={18} />}
      {...rest}
    />
  );
}

Input.Search = Search;
Input.Text = InputText

Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
};

export default Input;
