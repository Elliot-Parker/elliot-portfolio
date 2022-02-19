import { Component } from '@angular/core';
import { VideoModel } from '../../models/videoModel';

@Component({
    templateUrl: './portfolio-page.component.html',
    styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent  {

    portfolioVideos: VideoModel[] = [
        { 
            name: "The Watcher", 
            imageUrl: "../../../assets/images/theWatcher.png",
            url: "https://player.vimeo.com/video/661046903?h=ca61170d05&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            The Watcher is the complete Doctor Who streaming experience, including over  
            868 episodes, 297 stories, 39 seasons and 58 years of history, your choice.  
            <br/>
            Wherever, whenever, anywhere in time and space. 
            <br/>
            <br/>
            I have been studying motion design and video editing really hard in the  
            past few months, not just to evolve my skills and the job I love so much,  
            but to grow up my career and continue to be inspired every day to make  
            something different, something new, and who knows, to inspire someone.`,
        },
        { 
            name: "PS5 Concept", 
            imageUrl: "../../../assets/images/playstation.png",
            url: "https://player.vimeo.com/video/513990128?h=cdfcda688b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        },
        { 
            name: "Music Player", 
            imageUrl: "../../../assets/images/musicPlayer.png",
            url: "https://player.vimeo.com/video/504469574?h=1d76d70bba&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        },
        { 
            name: "Lady Gaga - Babylon", 
            imageUrl: "../../../assets/images/lady-gaga.png" ,
            url: "https://player.vimeo.com/video/500897302?h=c6c4865b20&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        },
        { 
            name: "Retro Art", 
            imageUrl: "../../../assets/images/retro-art.png" ,
            url: "https://player.vimeo.com/video/529422361?h=2ba1ecf4f1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        },
    ]

    constructor() { }
}
