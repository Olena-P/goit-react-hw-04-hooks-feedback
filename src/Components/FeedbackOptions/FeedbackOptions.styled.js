import styled from "@emotion/styled";

export const Button = styled.button`
  width: auto;
  margin: 15px;
  background-color: ${(props) => props.theme.colors.bordo};
  font-size: large;
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 5px 10px 2px rgba(11, 11, 11, 0.34);
  border: none;
  border-radius: 9px;
  padding: 5px 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.red};
  }
`;
