import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import { layout as styles, drawerWidth } from '../styles/layout'
import { USER as INITIAL_STATE_USER } from '#/api/redux/states'
import Drawer from './drawer'
import Loading from './loading'
import { connect } from 'react-redux'

class LayoutLayout extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    showLoading: false,
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  componentWillReceiveProps({ showLoading }) {
    if (showLoading === false || showLoading === truw) {
      this.setState({ showLoading })
    }
  }

  render() {
    const { classes, children } = this.props
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-${drawerWidth}`])}
          >
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="title" color="inherit" noWrap>
                Progressus
              </Typography>
              <Typography variant="body2" color="inherit" noWrap>
                Conocete, mueve, avanza
              </Typography>
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={this.handleClose}>Salir</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer {...this.props} />
          <main className={classes.content}>
            {children}
            {this.state.showLoading ? <div className={classes.spinner} ><Loading /></div> : ''}
          </main>
        </div>
      </div>
    );
  }
}

LayoutLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

const mapStateToProps = ({ LOADING = { show: false }, USER = INITIAL_STATE_USER }) => ({
  showLoading: LOADING.show,
  user: USER.user,
})

export default connect(mapStateToProps)(withStyles(styles, { name: 'LayoutStyle' })(LayoutLayout))
