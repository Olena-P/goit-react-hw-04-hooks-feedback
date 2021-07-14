import styled from "@emotion/styled";

export const List = styled.ul`
  margin-top: 80px;
`;
export const Item = styled.li`
  /* background-color: azure; */
  margin-bottom: 15px;
  font-size: large;
  color: ${(props) => props.theme.colors.white};
`;
