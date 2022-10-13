import AppLoader from 'components/apploader';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import { useStore } from 'store';
import { setStatuses, setTasks, setGroups, setAppLoader } from 'store/actions';
import routes from './routes';

const Routes: React.FC = () => {
    const { dispatch } = useStore();
    const [routeComponent, setRouteComponent] = useState<React.ReactElement[]>([]);

    useEffect(() => {
        (async () => {
            let newRouteComponent: React.ReactElement[] = []
            const getRoute = (routes?: any, path?: string) => {
                for (let i = 0; i < routes.length; i++) {
                    let route = routes[i];
                    let Component = route.Component;
                    let newpath = path ? path + route.path : route.path;
                    if (Component) {
                        newRouteComponent.push(<Route key={newpath} path={newpath} element={<Component />} />);
                    }
                    if (route.children.length) {
                        getRoute(route.children, newpath);
                    }
                }
            }
            getRoute(routes)
            setRouteComponent(newRouteComponent)
            initialize()
        })()
    }, [])

    const initialize = async () => {
        dispatch(setAppLoader(true))
        dispatch(setTasks())
        dispatch(setGroups())
        dispatch(setStatuses())
        dispatch(setAppLoader(false))
    }

    return <BrowserRouter>
        <AppLoader />
        <Router>
            {routeComponent}
        </Router>
    </BrowserRouter>
}

export default Routes;
