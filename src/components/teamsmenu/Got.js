import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia, IconButton, Collapse } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import 'assets/css/TeamContainer.css'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import MappingBun from './MappingTeam'
import { GET_GOT } from './queries'

const useStyles = makeStyles(theme => ({
  card: {
    width: 400,
    height: 300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 10,

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

  const { data, loading } = useQueryWithErrorHandling(GET_GOT, { variables: { id: null }, onCompleted: data => setState(data.team) })

  useEffect(() => {
    if (loading || !data) return setState(data?.team)
  }, [data])

  return (
    <Card className={classes.card}>
      <CardMedia
        component='img'
        alt='Game of Thrones'
        image='https://moneyinc.com/wp-content/uploads/2020/11/Game-of-Thrones-750x422.jpg'
        title='Game of Thrones'
      />
      <CardContent>
        <Typography className={classes.title} color='textSecondary'>
          Game of Thrones Team
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
          {data?.team.map((row, index) => (
            <MappingBun row={row} key={index}></MappingBun>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(useStyles)(SimpleCard)
