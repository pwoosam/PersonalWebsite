import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

@autoinject()
export class Examples {
    contactForm: HTMLFormElement;
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
    private _httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    attached() {
        this.contactForm = <HTMLFormElement>document.getElementById('contactForm');
        this.name = <HTMLInputElement>document.getElementById('name');
        this.email = <HTMLInputElement>document.getElementById('email');
        this.message = <HTMLTextAreaElement>document.getElementById('message');
    }

    async sendMessage() {
        if (this.contactForm.checkValidity()) {
            await this._httpClient
                .createRequest("https://pwsbe.patrickwoosam.com/email/send")
                .asPost()
                .withContent({
                    name: this.name.value,
                    fromEmail: this.email.value,
                    body: this.message.value
                })
                .send();
        }

        this.contactForm.classList.add('was-validated');
    }
}
