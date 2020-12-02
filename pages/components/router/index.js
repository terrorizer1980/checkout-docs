
import { createContext, useState, useEffect, useContext } from 'react';

import style from './style.module.css'

const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
    const [ routerState, setRouterState ] = useState();

    return (
        <RouterContext.Provider value={ [ routerState, setRouterState ] }>
            { children }
        </RouterContext.Provider>
    )
}

export const useRoute = () => {
    const [ routerState ] = useContext(RouterContext);
    return routerState;
}

export const Link = ({ to: name, children }) => {
    const [ routerState, setRouterState ] = useContext(RouterContext);

    const activate = (event) => {
        event.preventDefault();
        setRouterState(name);
    };

    return (
        <a
            className={ style.link }
            href='#'
            onClick={ activate }>
            { children }
        </a>
    )
}

export const Route = ({ name, default: def = false, children }) => {
    const [ routerState, setRouterState ] = useContext(RouterContext);

    useEffect(() => {
        if (def) {
            setRouterState(name);
        }
    }, [])

    return (name === routerState)
        ? children
        : null;
}