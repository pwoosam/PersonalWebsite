export class Bottombar {
    openLink(url: string) {
        const win = window.open(url);
        win.focus();
    }
}