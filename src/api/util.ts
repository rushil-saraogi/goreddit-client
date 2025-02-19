const environmentToApi: Record<string, string> = {
    development: 'http://localhost:4000',
    production: 'https://goreddit-server-fce99feca526.herokuapp.com',
};

const originToApi: Record<string, string> = {
    'http://localhost:3000': 'http://localhost:4000',
    'https://goreddit-client-81758f319607.herokuapp.com': 'https://goreddit-server-fce99feca526.herokuapp.com',
    'http://goreddit-client-81758f319607.herokuapp.com': 'http://goreddit-server-fce99feca526.herokuapp.com',
};

export function getApiUrl() {
    return typeof window === "undefined"
        ? environmentToApi[process.env.NODE_ENV]
        : originToApi[window.location.origin];
}

export function get(url: string, invalidateCache: boolean = false) {
    const options: RequestInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (invalidateCache) {
        options.next = {
            revalidate: 0
        }
    }

    return fetch(`${getApiUrl()}${url}`, options)
        .then(data => data.json());
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function post(url: string, body: any) {
    return fetch(`${getApiUrl()}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(data => data.json());
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function put(url: string, body: any) {
    return fetch(`${getApiUrl()}${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(data => data.json());
}

export function del(url: string) {
    return fetch(`${getApiUrl()}${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json());
}

export function tableDateFormat(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}