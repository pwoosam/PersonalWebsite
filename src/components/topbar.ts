import { Router } from "aurelia-router";
import { bindable } from "aurelia-framework";
import ResizeObserver from 'resize-observer-polyfill';

export class Topbar {
    @bindable router: Router;

    attached() {
        const bgImage = <HTMLImageElement>document.createElement('img');
        bgImage.className = 'bg-image';
        bgImage.id = 'bgImage';
        bgImage.alt = 'navbar background image';

        let imageWidth = window.innerWidth;
        if (window.innerHeight > imageWidth) {
            imageWidth = window.innerHeight;
        }
        bgImage.src = `https://pwsbe.patrickwoosam.com/bgimage/${imageWidth}`;

        const bgImageContainer = <HTMLDivElement>document.getElementById('bgImageContainer');
        bgImageContainer.appendChild(bgImage);

        const topbar = document.getElementById('topbar');
        const toggleBtn = document.getElementById('toggleBtn');

        const resizeObserver = new ResizeObserver(() => {
            const rect = topbar.getBoundingClientRect();
            let height = rect.bottom - rect.top;

            if (getComputedStyle(toggleBtn).display == 'none') {
                height = 400;
            }

            bgImage.height = height;
        });

        resizeObserver.observe(topbar);
    }
}
