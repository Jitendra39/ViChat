import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({work, load, message}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    load('')
    setOpen(false);
  };

  return (
    <React.Fragment>
         <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {/* {"Do you want to delete your post?"} */}
          {message}
        </DialogTitle>
  
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={work} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}