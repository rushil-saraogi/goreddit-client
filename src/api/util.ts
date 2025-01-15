export const apiBase: string = 'http://localhost:4000';

export function get(url: string) {
    return fetch(`${apiBase}${url}`)
        .then(data => data.json());
}