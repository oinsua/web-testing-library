import React from 'react'
import ErrorPage from '../pages/error'
import Home from '../pages/home'
import Login from '../pages/login'
import { GO_TO } from './go_to'

export const router = [
    {//Root
        path: GO_TO.ROOT,
        element: <Home />,
        errorElement: <div> Error Page</div>
    },
    {//Login
        path: GO_TO.LOGIN,
        element: <Login />,
        errorElement: <div> Error Page</div>
    },
    {//Error
        path: GO_TO.ERROR,
        element: <ErrorPage />,
    }
]
