import { 
  faCheck, faTimes, faMinus, 
  faLongArrowAltUp, faLongArrowAltDown, faLongArrowAltRight
  } from '@fortawesome/free-solid-svg-icons';

export const TASKS_STATUS_ICONS = {
  1: {
    icon: faMinus,
    color: 'goldenrod'
  },
  2: {
    icon: faCheck,
    color: 'seagreen',
  },
  3: {
    icon: faTimes,
    color: 'red',
  },
};

export const TASK_PRIORITY_ICONS = {
  1: {
    icon: faLongArrowAltDown,
    color: 'limegreen',
  },
  2: {
    icon: faLongArrowAltRight,
    color: 'seagreen',
  },
  3: {
    icon: faLongArrowAltUp,
    color: 'goldenrod',
  },
  4: {
    icon: faLongArrowAltUp,
    color: 'red',
  },
};