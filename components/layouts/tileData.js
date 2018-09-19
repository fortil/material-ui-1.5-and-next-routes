import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Dashboard from '@material-ui/icons/Dashboard'
import ListAlt from '@material-ui/icons/ListAlt'
import PermIdentity from '@material-ui/icons/PermIdentity'
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfied'
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver'
import Crop from '@material-ui/icons/Crop'
import Link from 'next/link'

export const Doctor = props => (
  <div style={props.user ? { display: 'none' } : {}}>
    <Link href={`/${props.collection}/sessions`}>
      <ListItem button disabled={!(props.user && props.user.complete)}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Sesiones" />
      </ListItem>
    </Link>
    <Link href={`/${props.collection}/profile`}>
      <ListItem button disabled={!(props.user)}>
        <ListItemIcon>
          <PermIdentity />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>
    </Link>
  </div>
);

export const Consultant = props => (
  <div style={props.user ? { display: 'none' } : {}}>
    <Link href={`/${props.collection}/sessions`} >
      <ListItem button disabled={!(props.user && props.user.complete)}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Sesiones" />
      </ListItem>
    </Link>
    <Link href={`/${props.collection}/daily`}>
      <ListItem button disabled={!(props.user && props.user.complete)}>
        <ListItemIcon>
          <ListAlt />
        </ListItemIcon>
        <ListItemText primary="Mi Diario" />
      </ListItem>
    </Link>
    <Link href={`/${props.collection}/sentimental`}>
      <ListItem button disabled={!(props.user && props.user.complete)}>
        <ListItemIcon>
          <SentimentSatisfied />
        </ListItemIcon>
        <ListItemText primary="Estados de ánimo" />
      </ListItem>
    </Link>
    <Link href={`/${props.collection}/brains`}>
      <ListItem button disabled={!(props.user && props.user.complete)}>
        <ListItemIcon>
          <RecordVoiceOver />
        </ListItemIcon>
        <ListItemText primary="Pensamientos automáticos" />
      </ListItem>
    </Link>
    <Link href={`/${props.collection}/cognitive`}>
      <ListItem button disabled={!(props.user && props.user.complete)}>
        <ListItemIcon>
          <Crop />
        </ListItemIcon>
        <ListItemText primary="Distorsiones cognitivas" />
      </ListItem>
    </Link>
    <Link href={`/${props.collection}/profile`}>
      <ListItem button disabled={!(props.user)}>
        <ListItemIcon>
          <PermIdentity />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>
    </Link>
  </div>
);
