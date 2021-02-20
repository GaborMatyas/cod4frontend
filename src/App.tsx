import React, { useEffect } from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { selectUserState } from '@store/auth/auth.selectors';
import MemberRoutes from '@router/member.routes';
import VisitorRoutes from '@router/visitor.routes';
import { Roles, ROLE_KEY, } from '@app/store/auth/auth.constants';
import { setUserRole } from "./store/auth/auth.slice";


import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

toast.configure();

export const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUserState);

  useEffect(() => {
    dispatch(setUserRole(sessionStorage.getItem(ROLE_KEY) as Roles));
  }, [sessionStorage.getItem(ROLE_KEY)])

  return (
    <BrowserRouter>
      <Switch>
        {currentUser.role === Roles.Admin || currentUser.role === Roles.Member
          ? <MemberRoutes />
          : <VisitorRoutes />}
        <ToastContainer />
      </Switch>
    </BrowserRouter>
  );
}
