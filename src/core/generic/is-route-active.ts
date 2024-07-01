const ROOT_PATH = '/';

/**
 * @name isRouteActive
 * @description A function to check if a route is active. This is used to
 * highlight the active link in the navigation.
 * @param targetLink - The link to check against
 * @param currentRoute - the current route
 */
export default function isRouteActive(
  targetLink: string,
  currentRoute: string,
) {
  // we remove any eventual query param from the route's URL
  const currentRoutePath = currentRoute.split('?')[0];

  if (!isRoot(currentRoutePath) && isRoot(targetLink)) {
    return false;
  }

  if (!currentRoutePath.includes(targetLink)) {
    return false;
  }

  const isSameRoute = targetLink === currentRoutePath;

  if (isSameRoute) {
    return true;
  }
}

function isRoot(path: string) {
  return path === ROOT_PATH;
}
