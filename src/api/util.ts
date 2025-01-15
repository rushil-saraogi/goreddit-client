export const apiBase: Record<string, string> = {
    development: 'http://localhost:4000',
    production: 'https://goreddit-server-fce99feca526.herokuapp.com',
};

export function get(url: string) {
    return fetch(`${apiBase[process.env.NODE_ENV]}${url}`)
        .then(data => data.json());
}