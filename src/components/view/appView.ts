import News from './news/news';
import Sources from './sources/sources';
import { NewResponseObject, SourceResponseObject } from '../../types/index';

export class AppView {
    private news;
    private sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewResponseObject | SourceResponseObject): void {
        if ('articles' in data && Array.isArray(data.articles)) {
            this.news.draw(data.articles);
        } else {
            this.news.draw([]);
        }
    }

    public drawSources(data: NewResponseObject | SourceResponseObject): void {
        if ('sources' in data && Array.isArray(data.sources)) {
            this.sources.draw(data.sources);
            return;
        } else {
            this.sources.draw([]);
        }
    }
}

export default AppView;
