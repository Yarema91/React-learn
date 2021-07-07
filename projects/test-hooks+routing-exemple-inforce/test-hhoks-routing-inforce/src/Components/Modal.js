import React from 'react';
import { Button, TextField, DialogTitle, 
    Dialog, DialogContent, DialogActions,
     DialogContentText, IconButton, CloseIcon } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });


const Modal = ({ children, title, onClose}) => {
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div>
            <Button className='btn_newProduct' onClick={handleClickOpen}>New Product</Button>
            <Dialog open={open} onClose={handleClose} arial-labelledby='form-dialog-title'>
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>

                <DialogContent>
                    {children}

                    {/* <DialogContentText> Create new product</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id='name'
                        label='name'
                        type='name'
                        fullWidth /> */}
                </DialogContent>
                <DialogActions>
                <Button variant="contained" color="primary" onClick={handleClose} >Save</Button>
                    <Button onClick={handleClose} color='primary'>Cancel</Button>

                </DialogActions>
            </Dialog>
        </div>
    )
}
export default Modal
