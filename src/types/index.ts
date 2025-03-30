export interface ResponseObject {
    status: string;
    totalResults: number;
}

export interface Articles {
    source: ArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}
export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface ArticleSource {
    id: string;
    name: string;
}

export interface NewResponseObject extends ResponseObject {
    articles?: Articles[];
}
export interface SourceResponseObject extends ResponseObject {
    sources?: Source[];
}
