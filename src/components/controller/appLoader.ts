import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'b382a7ba1b274d598c7b74da16f3fa90', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
