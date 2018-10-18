export class Examples {
    contactForm: HTMLFormElement;
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;

    attached() {
        this.contactForm = <HTMLFormElement>document.getElementById('contactForm');
        this.name = <HTMLInputElement>document.getElementById('name');
        this.email = <HTMLInputElement>document.getElementById('email');
        this.message = <HTMLTextAreaElement>document.getElementById('message');
    }

    sendMessage() {
        if (this.contactForm.checkValidity()) {
            console.log('sent', [
                this.name.value,
                this.email.value,
                this.message.value
            ]);
        }
        else{
            console.log('not sent');
        }

        this.contactForm.classList.add('was-validated');
    }
}