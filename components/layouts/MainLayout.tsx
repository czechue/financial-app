import Link from "next/link";
import { Box, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React, { ReactNode } from "react";
import Header from "../ui/Header/Header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
      width: theme.spacing(24),
    },
    main: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
    },
  })
);

type MainLayout = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayout) {
  const classes = useStyles();

  return (
    <Container>
      <Header />
      <Box className={classes.box}>
        <Paper className={classes.paper}>
          <MenuList>
            <Link href='' passHref>
              <MenuItem>Dashboard</MenuItem>
            </Link>
            <Link href='financial-cushion' passHref>
              <MenuItem>Financial cushion</MenuItem>
            </Link>
            <Link href='my-portfolio' passHref>
              <MenuItem>My portfolio</MenuItem>
            </Link>
            <Link href='model-portfolio' passHref>
              <MenuItem>Model portfolio</MenuItem>
            </Link>
          </MenuList>
        </Paper>
        <main className={classes.main}>{children}</main>
      </Box>
    </Container>
  );
}
