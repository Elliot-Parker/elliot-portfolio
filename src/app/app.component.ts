import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faYoutube, faVimeoV, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { VideoModel } from './models/videoModel';
import { DetailsModalService } from './services/details-modal.service';
import { RouterOutlet } from '@angular/router';
import { transition, trigger, useAnimation } from '@angular/animations';
import { moveFromRight } from 'ngx-router-animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger("moveFromRight", [transition("* => *", useAnimation(moveFromRight))]),
    ]
})
export class AppComponent implements OnInit {

    title = 'Elliot Parker';
    youtubeIcon = faYoutube;
    vimeoIcon = faVimeoV;
    instagramIcon = faInstagram;
    twitterIcon = faTwitter;
    closeIcon = faTimes;

    isDetailsModalOpen = false;

    selectedVideo: VideoModel = {};
  
    navItems = [
        { name: "Portfólio", routerLink: "/" },
        { name: "Protótipos", routerLink: "/prototypes" },
        { name: "Sobre mim", routerLink: "/about" },
        { name: "Contato", routerLink: "/contact" },
    ];

    socialItems = [
        {
            url: "https://www.youtube.com/channel/UCk9rQkva1d2tcJNN1IUVRQA",
            icon: this.youtubeIcon
        },
        {
            url: "https://vimeo.com/elliotparker",
            icon: this.vimeoIcon
        },
        {
            url: "https://www.instagram.com/elliotparker_br/",
            icon: this.instagramIcon
        },
        {
            url: "https://twitter.com/ElliotParker_BR",
            icon: this.twitterIcon
        },
    ]

    constructor(private modalService: DetailsModalService, private sanitizer: DomSanitizer) { }
    ngOnInit(): void
    {
        this.modalService.videoData$.subscribe((video: VideoModel) => {

            this.selectedVideo = video;
            this.isDetailsModalOpen = true;
        })
    }

    sanitizeUrl(url?: string) {

        return this.sanitizer.bypassSecurityTrustResourceUrl(url ?? "");
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet?.activatedRouteData?.["state"];
    }
}
