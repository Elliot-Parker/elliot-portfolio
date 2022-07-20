import { Component, OnInit } from '@angular/core';
import { VideoModel } from 'src/app/models/videoModel';

@Component({
    templateUrl: './prototypes-page.component.html',
    styleUrls: ['./prototypes-page.component.css']
})
export class PrototypesPageComponent implements OnInit {

    prototypeVideos: VideoModel[] = [

       { 
            name: "Educativo: Vantagens de utilizar duas fontes de potássio", 
            imageUrl: "../../../assets/images/verdeag01.png",
            url: "https://www.youtube.com/embed/Cx8u6KtfwEs?controls=0",
            description: `
            Embora o uso de fertilizantes de liberação imediata seja adequado em certos contextos, os fertilizantes de liberação gradual beneficiam 
            a lavoura com vantagens a longo prazo. Entretanto, a combinação dessas diferentes formas de liberação de nutrientes pode ser 
            a chave para driblar algumas situações vivenciadas na lavoura. Confira no vídeo! 
            </i>`,
        },

        { 
            name: "Educativo: Adubação potássica e o rendimento animal", 
            imageUrl: "../../../assets/images/verdeag02.png",
            url: "https://www.youtube.com/embed/vWcErkTxc3w",
            description: `
            O sistema de produção a pasto, predominante no país, confere um diferencial à carne brasileira. 
            No entanto, a degradação das áreas de pastagem é um dos gargalos da produção, afetando a produtividade e rentabilidade da atividade. 
            Entenda como a adubação potássica pode impulsionar a produção pecuária e o rendimento animal.
            </i>`,
        },

        { 
            name: "Animação: Sucesso do Cliente Verde Agritech", 
            imageUrl: "../../../assets/images/verdeagSC.png",
            url: "https://www.youtube.com/embed/FxxartoaLSs",
            description: `
            Animação desenvolvida para o time de Sucesso do Cliente da Verde Agritech
            </i>`,
        },

        // { 
        //     name: "Reimaginação: Vinheta Verde Agritech e seus produtos", 
        //     imageUrl: "../../../assets/images/verdeag.png",
        //     url: "https://www.youtube.com/embed/FxxartoaLSs",
        //     description: ` Animação desenvolvida
        //     </i>`,
        // },

         { 
             name: "Campanha Verão Solstar 2022", 
             imageUrl: "../../../assets/images/verao.png",
             url: "https://player.vimeo.com/video/684765808??h=cdfcda688b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
             description: `
            Video promocional para a campanha 
             <i>
            Verão Solstar 2022
            </i>`,
        },

        { 
             name: "Como funciona a energia fotovoltaica? (Solstar)", 
             imageUrl: "../../../assets/images/fotovoltaica.png",
             url: "https://player.vimeo.com/video/684763626??h=cdfcda688b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
             description: `
             Vídeo explicativo sobre o funcionamento da energia fotovoltaica, desenvolvido para a empresa de energia solar Solstar.`,
        },

    //     { 
    //         name: "Animação: Vinheta Solstar", 
    //         imageUrl: "../../../assets/images/fotovoltaica.png",
    //         url: "https://player.vimeo.com/video/684763626??h=cdfcda688b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    //         description: `
    //         `,
    //    },

        // { 
        //     name: "Hello", 
        //     imageUrl: "../../../assets/images/hello.png",
        //     url: "https://player.vimeo.com/video/494310155?h=ab977db784&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        // },

        // {
        //     name: "Business Connect",
        //     imageUrl: "../../../assets/images/businessConnect.png",
        //     url: "https://player.vimeo.com/video/494310155?h=ab977db784&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        //     description: `
        //     Eu que fiz o design mas o Jean não usou`,
        // },

        // {
        //     name: "Business Connect 02",
        //     imageUrl: "../../../assets/images/businessConnect.png",
        //     url: "https://player.vimeo.com/video/494310155?h=ab977db784&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        //     description: `
        //     Eu que fiz o design mas o Jean não usou`,
        // },

        // {
        //     name: "Business Connect 03",
        //     imageUrl: "../../../assets/images/businessConnect.png",
        //     url: "https://player.vimeo.com/video/494310155?h=ab977db784&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        //     description: `
        //     Eu que fiz o design mas o Jean não usou`,
        // },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
