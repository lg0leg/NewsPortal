export type CallbackType<T> = (data?: T) => void;

export interface INews {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    source: {
        name: string;
        id: string;
    };
}

export interface ISources {
    name: string;
    id: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface DrowNewsData {
    status: string;
    totalResults: number;
    articles: Array<INews>;
}

export interface DrowSourcesData {
    status: string;
    sources: Array<ISources>;
}
