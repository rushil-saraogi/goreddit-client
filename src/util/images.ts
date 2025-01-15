export function cleanUrl(url: string) {
    return url.replace(/&amp;/g, '&');
}