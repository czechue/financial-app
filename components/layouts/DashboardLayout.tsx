import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React, { ReactNode } from "react";
import MainLayout from "./MainLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItem: {
      padding: theme.spacing(2),
    },
  })
);

type DashboardLayoutProps = {
  slotOne: ReactNode;
  slotTwo: ReactNode;
};

export default function DashboardLayout({
  slotOne,
  slotTwo,
}: DashboardLayoutProps) {
  const classes = useStyles();

  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Paper className={classes.gridItem}>{slotOne}</Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper className={classes.gridItem}>{slotTwo}</Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
