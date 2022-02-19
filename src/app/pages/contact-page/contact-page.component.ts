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
    

    constructor() { }

    ngOnInit(): void {
    }

    async onSubmit(form: NgForm) {

        const model = form.value as ContactInfoModel; 

        const message =  await Email.send({
            SecureToken: "ce382382-ac89-4309-9b45-b79c4d2db75e",
            To : 'pedro.-.contato@outlook.com',
            From : "elliot.-.parker@outlook.com",
            Subject : `${(model.name as string).split(" ")[0]} quer entrar em contato com você`,
            Body : `
            <b>Nome:</b> ${model.name} <br/>
            <b>Email:</b> ${model.email} <br/>
            <b>Mensagem:</b> ${model.messageBody}
            `
        });

        alert(message);
    }

}
