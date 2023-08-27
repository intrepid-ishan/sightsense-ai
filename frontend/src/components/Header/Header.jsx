import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './Header.styles';
import { Link } from 'react-router-dom';

const Header = ({ buttonRoute, buttonTitle }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          {'SightSense AI'}
        </Typography>
        <div className={classes.grow}></div>
        <Button
          component={Link}
          to={buttonRoute}
          color="inherit"
          className={classes.galleryButton}
        >
          {buttonTitle}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
