import router from "../routes";

const resolveRoutes = (route) => {
    if(route === 'about' || route === 'contact') {
        return null;
    }
    if(route === 'home'){
        console.log(route);
        return '/home';
    }
    let validRoute = route === '/' ? route : '/:country';
        return validRoute;
}

export default resolveRoutes;