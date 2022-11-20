import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={s.container}>
      <p className={s.email}>{email}</p>
      <Button
        className={s.buttonEditor}
        variant="contained"
        size="small"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </Button>
    </div>
  );
}
