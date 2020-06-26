import React from 'react'

import classes from './Modal.module.css'
import Aux from '../../../hoc/AuxHoc/AuxHoc'
import Backdrop from '../Backdrop/Backdrop'

const Modal = () => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.show !== this.props.show ||
  //     nextProps.children !== this.props.children
  //   )
  // }

  return (
    <Aux>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0',
        }}
      >
        {this.props.children}
      </div>
    </Aux>
  )
}

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show !== prevProps.show &&
    nextProps.children !== prevProps.children,
)
