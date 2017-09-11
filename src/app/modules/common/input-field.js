import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MARGIN, PADDING, COLORS } from '../../constants/style';

const Input = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  padding: ${PADDING.NORMAL};
  margin: ${MARGIN.HALF};
  border: 1px solid ${COLORS.GREY.NOBEL};
`;

class InputField extends Component {
  render() {
    const { placeholder, text, onChange } = this.props;
    return <Input onChange={onChange} type="text" placeholder={placeholder} value={text} />;
  }
}

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
