import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia, IconButton, Collapse } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import MappingBun from './MappingTeam'
import { GET_BB } from './queries'

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    height: 300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}))

function SimpleCard(props) {
  const { classes } = props
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const [state, setState] = useState(null)

  const { data, loading } = useQueryWithErrorHandling(GET_BB, { variables: { id: null }, onCompleted: data => setState(data.teamBB) })

  useEffect(() => {
    if (loading || !data) return setState(data?.teamBB)
  }, [data])

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          sx={{ maxHeight: { xs: 60, md: 60 }, maxWidth: { xs: 60, md: 60 } }}
          component='img'
          alt='Breaking Bad'
          image='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/2560px-Breaking_Bad_logo.svg.png'
          title='Breaking Bad'
        />
        <CardContent>
          <Typography className={classes.title} color='textSecondary'>
            Breaking Bad Team
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
            title='Show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            {data?.teamBB.map((row, index) => (
              <MappingBun row={row} key={index}></MappingBun>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(useStyles)(SimpleCard)
