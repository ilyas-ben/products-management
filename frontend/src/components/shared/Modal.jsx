import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";

const Modal = ({
  isModalOpen,
  closeModal,
  onConfirm,
  title,
  contentText,
  confirmText = "Yes",
  cancelText = "No",
}) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={closeModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <DialogTitle id="modal-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="modal-description">
          {contentText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>{cancelText}</Button>
        <Button onClick={onConfirm} autoFocus>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
  contentText: PropTypes.node.isRequired,
  confirmText: PropTypes.node,
  cancelText: PropTypes.node,
};

export default Modal;
