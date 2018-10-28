import { autoinject, TaskQueue } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import ResizeObserver from 'resize-observer-polyfill';

@autoinject()
export class Bottombar {
    private _ea: EventAggregator;
    private _taskQueue: TaskQueue;
    private _footer: HTMLElement;
    private _footerHeight: number;

    constructor(ea: EventAggregator, taskQueue: TaskQueue) {
        this._ea = ea;
        this._taskQueue = taskQueue;
    }

    attached() {
        this._footer = document.getElementById('footer');
        const rect = this._footer.getBoundingClientRect();
        this._footerHeight = rect.bottom - rect.top + 2;

        // Position the footer and make it visible when ready
        // TODO: Remove this setTimeout and fix the actual problem
        setTimeout(() => {
            this.repositionFooter();
            this._footer.style.visibility = 'visible';
        }, 300);

        this._ea.subscribe('router:navigation:success', () => {
            this.repositionFooter();
        });

        const resizeObserver = new ResizeObserver(() => {
            this.repositionFooter();
        });

        resizeObserver.observe(document.body);
    }

    repositionFooter() {
        const rect = document.getElementById('content').getBoundingClientRect();
        const contentHeight = rect.bottom - rect.top;
        
        const windowHeight = window.innerHeight;
        
        if (contentHeight + this._footerHeight < windowHeight) {
            this._footer.style.position = 'absolute';
            this._footer.style.top = `${windowHeight - this._footerHeight}px`;
        }
        else {
            this._footer.style.position = 'unset';
        }
    }

    openLink(url: string) {
        const win = window.open(url);
        win.focus();
    }
}