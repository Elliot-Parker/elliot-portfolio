import { Component, OnInit } from '@angular/core';
import { VideoModel } from 'src/app/models/videoModel';

@Component({
    templateUrl: './prototypes-page.component.html',
    styleUrls: ['./prototypes-page.component.css']
})
export class PrototypesPageComponent implements OnInit {

    prototypeVideos: VideoModel[] = [
        { 
            name: "Hello", 
            imageUrl: "../../../assets/images/hello.png",
            url: "https://player.vimeo.com/video/494310155?h=ab977db784&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        },

        {
            name: "Business Connect",
            imageUrl: "../../../assets/images/businessConnect.png",
            url: "https://player.vimeo.com/video/494310155?h=ab977db784&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            Eu que fiz o design mas o Jean não usou`,
        },

        {
            name: "Business Connect 02",
            imageUrl: "../../../assets/images/businessConnect.png",
            url: "https://player.vimeo.com/video/494310155?h=ab977db784&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            Eu que fiz o design mas o Jean não usou`,
        },

        {
            name: "Business Connect 03",
            imageUrl: "../../../assets/images/businessConnect.png",
            url: "https://player.vimeo.com/video/494310155?h=ab977db784&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            Eu que fiz o design mas o Jean não usou`,
        },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
