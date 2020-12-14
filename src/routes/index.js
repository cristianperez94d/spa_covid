import Header from '../template/Header';
import Home from '../pages/Home';
import Country from '../pages/Country';
import Error404 from '../pages/Error404';
import getHash from '../untils/getHash';
import resolveRoutes from '../untils/resolveRoutes';

const routes = {
    '/': Home,
    '/:country': Country,
}

const router = async (event, search) => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    
    if(search){
        render = Home(search);
        content.innerHTML = await render;
    }
    else{
        content.innerHTML = await render();
    }

    if(document.getElementById('input_search')){
        document.getElementById('input_search').addEventListener('keyup', function (event){
            if(event.keyCode === 13){
                 (async (event) => {
                    router(event, document.getElementById('input_search').value);
                })() 
            }
        })
        document.getElementById('btn_search').addEventListener('click', function() {
            (async (event) => {
                router(event ,document.getElementById('input_search').value);
            })() 
        })
    }
}

export default router;