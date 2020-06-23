
import React from 'react';

import { Dialog } from '@material-ui/core'



export const Modal = (props) => { 
 
  return (
    <Dialog onClose={props.modalClose} aria-labelledby="simple-dialog-title" open={props.open}>
    {props.children}
    </Dialog>
  );
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

