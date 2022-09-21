import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Card, CardMedia, IconButton,Collapse} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import lista from 'components/employeesmenu/data1';
import MappingBun from 'components/employeesmenu/MappingBun'

const useStyles = makeStyles((theme) => ({
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));



function SimpleCard(props) {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card className={classes.card}>
      <CardMedia
          component = 'img'  
          alt="Stranger Things"
          image="https://1000logos.net/wp-content/uploads/2019/06/Stranger-Things-Logo-2016.png"
          title="Stranger Things"
        />
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Stranger Things Team 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <div style = {{fontSize:14}}>
            {lista.map((row) => MappingBun(row)
            )}
            </div>
        </CardContent>
      </Collapse>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SimpleCard);
