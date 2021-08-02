import { Button } from '@material-ui/core';

const MyButton = ({ title, onClick, style }) => {
  return (
    <Button
      onClick={onClick}
      color="primary"
      variant="contained"
      type="submit"
      style={style}
    >
      {title}
    </Button>
  );
};

export default MyButton;