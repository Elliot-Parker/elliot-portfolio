import { Component } from '@angular/core';
import { VideoModel } from '../../models/videoModel';

@Component({
    templateUrl: './portfolio-page.component.html',
    styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent  {

    portfolioVideos: VideoModel[] = [
        { 
            name: "Xbox Series X/S Blades Dashboard (Concept)", 
            imageUrl: "../../../assets/images/xbox.png",
            url: "https://player.vimeo.com/video/683445435?h=3fe34345ed?h=ca61170d05&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            Como seria se o Xbox Series X/S tivesse o layout da clássica dashboard do Xbox 360 de 2005?
            <br/>
            <br/>
            Esse foi o desafio que criei ao pensar em como projetar esse concept, 
            eu tinha apenas duas ideias na cabeça, 
            a primeira era que precisava ficar incrível o projeto e a segunda era que deveria ter um aspecto clássico com toque moderno. 
            A produção desse projeto levou em torno de 5 meses, usando o meu tempo 
            livre para criar cada detalhe e pensar em como seriam as animações, 
            também realizei várias pesquisas, buscando referências em tudo que a 
            Microsoft já havia criado antes com o Xbox.
            <br/>
            <br/>
            Foi aí que meu amigo Bruno sugeriu a ideia de reimaginar a clássica 
            dashboard do Xbox 360 de 2005 a <i> <b> "Blades". </i> </b> Focando nesse aspecto o resto 
            do design fluiu naturalmente, o mais complexo de fato foram as animações 
            e técnicas que seriam necessárias para executar o projeto, realizei 
            diversos estudos e pesquisa para compreender a melhor forma de executar 
            e assim consegui chegar na versão final.`,
        },

        { 
            name: "The Watcher (Concept)", 
            imageUrl: "../../../assets/images/theWatcher.png",
            url: "https://player.vimeo.com/video/661046903?h=ca61170d05&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            É a experiência definitiva de streaming para Doctor Who, incluindo 
            868 episódios, 297 histórias, 39 temporadas e 58 anos de história. 
            <br/>
            <br/>
            <i>
                É sua escolha. Onde, quando, qualquer lugar no tempo e espaço.
            </i>
            <br/>
            <br/>
            Esse projeto me deu bastante orgulho quando finalizei ele, estudei 
            bastante motion design e edição de vídeo nos últimos meses, 
            não só para evoluir minhas habilidades e o trabalho que amo demais, 
            mas para crescer em minha carreira, e continuar a ser inspirado todos 
            os dias a criar algo diferente, algo novo e quem sabe inspirar alguém. `,
        },
        { 
            name: "PS5 Dashboard (Concept)", 
            imageUrl: "../../../assets/images/playstation.png",
            url: "https://player.vimeo.com/video/513990128?h=cdfcda688b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            Videogames fazem parte da minha vida desde a infância, é algo pelo qual 
            sou apaixonado e trabalhar com motion design me permitiu ter essa possibilidade 
            de explorar a minha criatividade para criar algo relacionado a isso.
            <br/>
            <br/>
            Quando o design da interface do PS5 foi revelada, tive a inspiração de criar 
            a minha própria versão da Dashboard, foi um grande aprendizado pois 
            aprendi técnicas novas para dar vida a esse projeto.`,
        },
        { 
            name: "Music Player (Concept)", 
            imageUrl: "../../../assets/images/musicPlayer.png",
            url: "https://player.vimeo.com/video/504469574?h=1d76d70bba&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        },
        { 
            name: "Lady Gaga - Babylon (Lyric Video)", 
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
