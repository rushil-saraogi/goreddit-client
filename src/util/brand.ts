interface BrandMetaData {
    [key: string]: {
        tags?: string[];
        video?: string;
    };
}

type BrandTag = 'editor' | 'microbrand';

export const brandTags: Record<BrandTag, string> = {
    editor: 'Editor\'s Pick',
    microbrand: 'Microbrand',
}

export const brandMetaData: BrandMetaData = {
    'Casio': {
        tags: [brandTags.editor],
        video: 'https://www.youtube.com/embed/8e1lWmdLYCk?si=4qnw_zdSVYnpY5YB',
    },
    'Seiko': {
        tags: [brandTags.editor],
    },
    'Rolex': {
        tags: [brandTags.editor],
        video: 'https://www.youtube.com/embed/y6jBbXYUYiQ?si=iS4kt6uQolyZw5D1'
    },
    'Omega': {
        tags: [brandTags.editor],
        video: 'https://www.youtube.com/embed/4Kr9KPcdrN4?si=CmJ2b6Gzd6XA4PR7',
    },
    'Grand Seiko': {
        tags: [brandTags.editor],
    },
    'Farer': {
        tags: [brandTags.microbrand],
    },
    'Lorier': {
        tags: [brandTags.microbrand, brandTags.editor],
        video: 'https://www.youtube.com/embed/pmQjnv60nO0?si=rMLKJ1bBdiXVe22W&amp;controls=0'
    },
    'Hamilton': {
        tags: [brandTags.editor],
    },
    'Junghans': {
        tags: [brandTags.editor],
    },
    'Christopher Ward': {
        tags: [brandTags.microbrand],
    },
    'Nodus': {
        tags: [brandTags.microbrand],
    },
    'Formex': {
        tags: [brandTags.microbrand],
    },
    'Tudor': {
        tags: [brandTags.editor],
        video: 'https://www.youtube.com/embed/d1HdFgVH4CI?si=DlAwjlRFr_26hV5q',
    },
    'Oris': {
        video: 'https://www.youtube.com/embed/9UQFDi9TiJY?si=Q5GY0jzjTEoaeYZN',
    },
};
