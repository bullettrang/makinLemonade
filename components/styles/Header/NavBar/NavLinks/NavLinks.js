import styled from "styled-components";
import NavLink from "./NavLink/NavLink";

const RowOfLinks = styled.div`
  display: flex;
  justify-content: space-around;
  padding: calc(5vmin);
  margin-left: calc(40vmin);
`;

const NavLinks = props => {
  return (
    <RowOfLinks>
      {props.hyperlinks.map(link => (
        <NavLink title={link.title} href={link.href} />
      ))}
    </RowOfLinks>
  );
};

export default NavLinks;
