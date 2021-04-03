import react from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home';

import authService from '../services/authService'

function GuestRoute ({element: component, ...rest}) {
    const IsAuthenticated = authService.IsAuthenticated();

    return (
        <Route {...rest} element={(
            IsAuthenticated
            ? <Home />
            : component
        )}/>
    )
}

export default GuestRoute;