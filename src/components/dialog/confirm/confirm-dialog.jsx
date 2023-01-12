import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

export default function ConfirmModal({
  onConfirm,
  message,
  title,
  onClose,
  ...rest
}) {
  return (
    <Dialog {...rest} onClose={() => onClose?.()}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose?.()}>Cancel</Button>
        <Button onClick={() => onConfirm?.()} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmModal.defaultProps = {
  onConfirm: () => {},
  message: "",
  title: "",
};

ConfirmModal.propTypes = {
  ...Dialog.propTypes,
  onConfirm: PropTypes.func,
  message: PropTypes.string,
  title: PropTypes.string,
};
