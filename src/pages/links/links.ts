export class Examples {
    openLink(url: string) {
        const win = window.open(url);
        win.focus();
    }
}