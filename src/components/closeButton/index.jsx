import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

function RemoveButton({ onClick }) {
  return (
    <Button
      variant="contained"
      color="error"
      size="small"
      sx={{
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        minWidth: "unset",
        marginLeft: "4px",
      }}
      onClick={onClick}
      className="remove-button"
    >
      <CloseIcon sx={{ color: "white" }} />
    </Button>
  );
}
RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
