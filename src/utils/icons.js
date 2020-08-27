import { 
  faCheck, faTimes, faMinus, 
  faLongArrowAltUp, faLongArrowAltDown, faLongArrowAltRight
  } from '@fortawesome/free-solid-svg-icons';

export const TASKS_STATUS_ICONS = {
  1: {
    icon: faMinus,
    color: 'neutral'
  },
  2: {
    icon: faCheck,
    color: 'positive',
  },
  3: {
    icon: faTimes,
    color: 'negative',
  },
};

export const TASK_PRIORITY_ICONS = {
  1: {
    icon: faLongArrowAltDown,
    color: 'very_positive',
  },
  2: {
    icon: faLongArrowAltRight,
    color: 'positive',
  },
  3: {
    icon: faLongArrowAltUp,
    color: 'neutral',
  },
  4: {
    icon: faLongArrowAltUp,
    color: 'negative',
  },
};