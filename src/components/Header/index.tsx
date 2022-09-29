import React from "react";

import { HeaderContainer } from "./styles";
import Logo from "../../../public/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
    </HeaderContainer>
  );
};
