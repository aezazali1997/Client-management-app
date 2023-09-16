import PropTypes from "prop-types";
// @mui
import { Box, List, ListItemText, Typography } from "@mui/material";
//
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import Link from "next/link";
import { useState } from "react";

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }: any) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item: any) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }: any) {
  const { title, path, icon, info } = item;

  return (
    <Link
      href={path}
      passHref={true}
      style={{
        display: "flex",
        padding: ".5rem .8rem",
        backgroundColor: "#e8ebee",
        marginBlock: 5,
      }}
    >
      <StyledNavItemIcon>{icon}</StyledNavItemIcon>
      <Typography
        style={{
          marginLeft: "20px",
          textTransform: "capitalize",
          fontWeight: 500,
          fontSize: "14px",
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}
