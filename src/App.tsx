import React, { useEffect } from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { selectUserState } from '@store/auth/auth.selectors';
import useToken from '@hooks/token';
import MemberRoutes from '@router/member.routes';
import VisitorRoutes from '@router/visitor.routes';
import { Roles, ROLE_KEY, } from '@store/auth/constants';

import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import { setUserRole } from "./store/auth/auth.slice";

toast.configure();
export const App = () => {
  const { token, setToken } = useToken();
  const currentUser = useSelector(selectUserState);
  const dispatch = useDispatch();

  useEffect(() => {
    setToken(currentUser.token);
    dispatch(setUserRole(sessionStorage.getItem(ROLE_KEY) as Roles));
  }, [currentUser.token, currentUser.role])

  return (
    <BrowserRouter>
      <Switch>
        {(currentUser.role === Roles.Admin || currentUser.role === Roles.Member)
          ? <MemberRoutes />
          : <VisitorRoutes />}
        <ToastContainer />
      </Switch>
    </BrowserRouter>
  );
}
