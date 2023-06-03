import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import fulllogo from "../../../assets/BlogApp_FullLogo.svg"
import collapsedlogo from "../../../assets/BlogAppLogo.svg"

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={collapsedlogo} alt="Blog" width="35px" style={{marginTop: "10px"}}/>
        ) : (
          <img src={fulllogo} alt="Blog" style={{marginTop: "20px"}} height="50px" />
        )}
      </Link>
    </Button>
  );
};