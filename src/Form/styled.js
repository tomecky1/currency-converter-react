import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.75em;
  text-align: center;
  color: #bf4f74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 1.5em;
  background: papayawhip;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const FormWrapper = styled.form`
  background-color: #fff;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 15px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const Button = styled.button`
  width: 50%;
  border: none;
  background-color: teal;
  color: white;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: hsl(180, 100%, 40%);
  }
`;

export const Currency = styled.span`
  display: inline-block;
  width: 100%;
  padding: 15px;
  max-width: 400px;
`;

export const Amount = styled.input`
  border: 1px solid darkgray;
  padding: 15px;
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 10px;
`;

export const Select = styled.select`
  width: 100%;
  display: inline-block;
`;
