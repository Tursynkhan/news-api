import Loader from './loader';
const apiUrl = process.env.API_URL || 'https://newsapi.org/v2/';
const apiKey = process.env.API_KEY || '';

class AppLoader extends Loader {
    constructor() {
        super(apiUrl, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;
