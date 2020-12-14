const resolveRoutes = (route) => {
    if(route === 'about' || route === 'contact') {
        return null;
    }
    let validRoute = route === '/' ? route : '/:country';
        return validRoute;
}

export default resolveRoutes;