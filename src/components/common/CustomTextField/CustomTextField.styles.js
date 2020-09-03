import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const CustomTextField = withStyles({
  root: {
    '& .MuiFormHelperText-root': {
      height: '12px',
      marginTop: '2px',
      fontSize: '10px',
      lineHeight: '1.2',
    },
  },
})(TextField);

export default CustomTextField;