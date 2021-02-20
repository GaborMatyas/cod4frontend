import * as Paths from './routing-path.constants';

export interface Routes {
    Root: string;
    Login: string;
    Summary: string;
    Register: string;
    PageNotFound: string;
}

export type RouteNames = keyof Routes;

export const ROUTE_PATHS: Record<RouteNames, string> = {
    Root: '/',
    Login: `/${Paths.ROUTE_PATH_LOGIN}`,
    Summary: `/${Paths.ROUTE_PATH_SUMMARY}`,
    Register: `/${Paths.ROUTE_PATH_REGISTER}`,
    PageNotFound: `/${Paths.ROUTE_PATH_PAGE_NOT_FOUND}`
};