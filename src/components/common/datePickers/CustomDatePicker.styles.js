import { KeyboardDatePicker } from "@material-ui/pickers";
import { withStyles } from '@material-ui/core/styles';

export const CustomDatePicker = withStyles({
  root: {
    '& .MuiInputBase-input': {
      width: '120px',
    },
  },
})(KeyboardDatePicker);