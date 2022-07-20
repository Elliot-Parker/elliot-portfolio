import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactInfoModel } from 'src/app/models/contactInfoModel';
declare let Email: any;

@Component({
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

    contactInfo: ContactInfoModel = {
        name: "",
        email: "",
        messageBody: ""
    };
    

    constructor(private Http: HttpClient) { }

    ngOnInit(): void {
    }

    async onSubmit(form: NgForm) {

        const model = form.value as ContactInfoModel;

        this.Http.post("https://elliot-portfolio.azurewebsites.net/api/send-email", model)
            .subscribe({
                complete: () => alert("Email enviado com sucesso!"),
                error: (e) => alert("Ocorreu um erro ao enviar o email. Tente novamente mais tarde"),
            });
    }

}
