import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { Consultant, Doctor } from './tileData'

export default function DrawerComponent(props) {
  const { classes, router, user } = props
  const collection = router.pathname.replace('/', '').split('/')[0]
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor={'left'}
    >
      <div className={classes.toolbar} >
        <img src={'/static/logo.png'} alt="PROGRESSUS" style={{ width: '100%' }} />
      </div>
      <Divider />
      {collection === 'consultant' ? <List><Consultant {...props} collection={collection} user={user} /></List> : <List><Doctor {...props} collection={collection} user={user} /></List>}
    </Drawer>
  )
}