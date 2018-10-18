import { Router } from "aurelia-router";
import { bindable } from "aurelia-framework";
import ResizeObserver from 'resize-observer-polyfill';

export class Topbar {
    @bindable router: Router;

    attached() {
        const bgImage = <HTMLImageElement>document.getElementById('bgImage');
        const topbar = document.getElementById('topbar');
        const toggleBtn = document.getElementById('toggleBtn');

        const resizeObserver = new ResizeObserver(() => {
            const rect = topbar.getBoundingClientRect();
            let height = rect.bottom - rect.top;

            if (getComputedStyle(toggleBtn).display == 'none') {
                height = 35 * parseInt(getComputedStyle(document.documentElement)['font-size']);
            }

            bgImage.height = height;
        });

        resizeObserver.observe(topbar);
    }
}