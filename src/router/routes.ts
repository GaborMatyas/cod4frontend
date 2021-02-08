import { ROUTE_PATH_LOGIN, ROUTE_PATH_REGISTER, ROUTE_PATH_SUMMARY, ROUTE_PATH_PAGE_NOT_FOUND} from './routing-path.constants';

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
    Login: `/${ROUTE_PATH_LOGIN}`,
    Summary: `/${ROUTE_PATH_SUMMARY}`,
    Register: `/${ROUTE_PATH_REGISTER}`,
    PageNotFound: `/${ROUTE_PATH_PAGE_NOT_FOUND}`
};