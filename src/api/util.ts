export const apiBase: Record<string, string> = {
    development: 'http://localhost:4000',
    production: 'https://goreddit-server-fce99feca526.herokuapp.com',
};

export function get(url: string, invalidateCache: boolean = false) {
    const options: RequestInit = {};

    if (invalidateCache) {
        options.next = {
            revalidate: 300
        }
    }

    return fetch(`${apiBase[process.env.NODE_ENV]}${url}`, options)
        .then(data => data.json());
}

export function tableDateFormat(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}