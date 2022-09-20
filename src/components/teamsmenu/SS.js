import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardMedia} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Height } from '@material-ui/icons';

const styles = {
  card: {
    minWidth: 275,
    width : 300,
    height : 300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
      <CardMedia
          component = 'img'  
          alt="Contemplative Reptile"
          image="https://1000logos.net/wp-content/uploads/2019/06/Stranger-Things-Logo-2016.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Stranger Things Team 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
