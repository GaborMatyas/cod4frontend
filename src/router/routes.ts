import * as Paths from './routing-path.constants';

export interface Routes {
    Root: string;
    Auth: string;
    Summary: string;
}

export type RouteNames = keyof Routes;

export const ROUTE_PATHS: Record<RouteNames, string> = {
    Root: '/',
    Auth: `/${Paths.ROUTE_PATH_AUTH}`,
    Summary: `/${Paths.ROUTE_PATH_SUMMARY}`,
};