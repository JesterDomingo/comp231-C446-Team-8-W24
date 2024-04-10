import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import auth from './../auth/auth-helper'
import axios from 'axios'
import { listByUser } from './api-order.js'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: '12px 24px',
    padding: theme.spacing(3),
    backgroundColor: '#3f3f3f0d'
  }),
  title: {
    margin: `${theme.spacing(2)}px 0 12px ${theme.spacing(1)}px`,
    color: theme.palette.openTitle
  }
}))

export default function MyOrders() {
  const classes = useStyles()
  const [orders, setOrders] = useState([])
  const [places, setPlaces] = useState([])

  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    axios.get("/api/getUserPlaces", {
      params: {
        id: jwt.user._id
      }
    })
      .then(response => {
        const { data } = response;
        setPlaces(data);
      })
      .catch(error => {
        console.error("Error fetching places:", error);
      });
  }, [])


  return (
    <Paper className={classes.root} elevation={4}>
      <Typography type="title" className={classes.title}>
        Your Places
      </Typography>
      <List dense>
        {places.map((place, i) => {
          return <span key={i}>
            <Link
              to={{
                pathname: `/a/${place._id}`,
              }}
              className="card"
            >
              {/* <Link to={"/order/" + place._id}> */}
                <ListItem button>
                  <ListItemText primary={<strong>{"Place " + place.title}</strong>} secondary={`Located: ${place.address}`} />
                </ListItem>
              {/* </Link> */}
            </Link>
            <Divider />
          </span>
        })}
      </List>
    </Paper>
  )
}
