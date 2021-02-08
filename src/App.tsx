import React, { useEffect } from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { isUserLoggedIn } from '@store/auth/auth.selectors';
import useToken from '@hooks/token';
import MemberRoutes from '@router/member.routes';
import VisitorRoutes from '@router/visitor.routes';

import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

toast.configure();
export const App = () => {
  const { token, setToken } = useToken();
  const storedTokenInRedux = useSelector(isUserLoggedIn);

  useEffect(() => {
    if (storedTokenInRedux) {
      setToken(storedTokenInRedux);
    }
    console.log(!!storedTokenInRedux);
  }, [storedTokenInRedux])

  return (
    <BrowserRouter>
      <Switch>
        {(token && token !== 'undefined') ? <MemberRoutes /> : <VisitorRoutes />}
        <ToastContainer />
      </Switch>
    </BrowserRouter>
  );
}
