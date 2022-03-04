import { Component } from '@angular/core';
import { VideoModel } from '../../models/videoModel';

@Component({
    templateUrl: './portfolio-page.component.html',
    styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent  {

    portfolioVideos: VideoModel[] = [
        { 
            name: `Dashboard "Blades" do Xbox 360 reimaginada (Concept)`, 
            imageUrl: "../../../assets/images/xbox.png",
            url: "https://player.vimeo.com/video/683445435?h=3fe34345ed?h=ca61170d05&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            Esse foi o desafio que criei ao pensar em como projetar esse concept. Eu tinha dois requisitos: 
            precisava ficar incrível e deveria ter um aspecto clássico com toque moderno. A produção desse 
            projeto levou em torno de 5 meses, usando o meu tempo livre para criar cada detalhe e pensar em 
            como seriam as animações. Também realizei várias pesquisas, buscando referências em tudo que a 
            Microsoft já havia criado antes com o Xbox. 
            <br/>
            <br/>
            Foi aí que meu amigo Bruno me sugeriu a ideia de reimaginar a clássica dashboard "Blades" do 
            Xbox 360 para os dias atuais. Focando nesse aspecto o resto do design fluiu naturalmente, o mais 
            complexo de fato foram as animações e técnicas que seriam necessárias para executar o projeto.`,

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
            name: "Doctor Who: FLUX - Stranger Things Style", 
            imageUrl: "../../../assets/images/doctorwhoflux.png",
            url: "https://player.vimeo.com/video/680672176??h=3fe34345ed?h=ca61170d05&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            Como seria se Doctor Who: Flux tivesse a abertura no style de Stranger Things?
            <br/>
            <br/>
            Bom, esse é o resultado, nas últimas semanas eu foquei em criar o remake da abertura de Stranger Things, 
            tentei ao máximo deixar fiel ao original, desde o neon, brilho e a animação a 24fps.`,

        },

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

        { 
            name: "Playstation 5 Dashboard (Concept)", 
            imageUrl: "../../../assets/images/playstation.png",
            url: "https://player.vimeo.com/video/513990128??h=cdfcda688b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
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
            name: "Playstation ONE Dashboard (Concept)", 
            imageUrl: "../../../assets/images/ps1.png",
            url: "https://player.vimeo.com/video/683870302?h=cdfcda688b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            Playstation One, foi o meu primeiro videogame, tenho memórias incriveis e um carinho enorme por ele.

            <br/>
            <br/>
            Esse projeto é uma variação do concept do PS5, imaginei como seria se o PS1 tivesse um layout parecido, 
            utilizei os sons da versão Classic lançada pela Sony em 2018`,
        },

        { 
            name: "Music Player (Concept)", 
            imageUrl: "../../../assets/images/musicPlayer.png",
            url: "https://player.vimeo.com/video/504469574??h=1d76d70bba&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            Esse é o primeiro concept que desenvolvi, ele nasceu de um processo curioso… O estudo de ondas sonoras… 
            Foi aí que me veio a ideia de criar esse projeto, um player de música que tinha como destaque as ondas sonoras, 
            inclusive aproveitei esse conceito em uma das cenas desse comercial. 
            <br/>
            <br/>
            Em relação aos meus projetos mais recentes consigo ver uma grande evolução em meu trabalho como UI/UX designer, 
            tenho muito orgulho do resultado desse projeto, penso em fazer um remake dele futuramente`,

        },
        { 
            name: "Lady Gaga - Babylon (Lyric Video)", 
            imageUrl: "../../../assets/images/lady-gaga.png" ,
            url: "https://player.vimeo.com/video/500897302??h=c6c4865b20&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: `
            Quando comecei a montar o meu portfólio, eu buscava ideias e inspirações artísticas para criar algo único porém familiar. 
            Nesse processo escutei pela primeira vez a música Babylon do recém lançado (na época) Chromatica de Lady Gaga, 
            e foi aí que me veio a inspiração para criar esse projeto.
            <br/>
            <br/>
            A letra da música me trouxe várias ideias e inspirações, e o mais legal disso tudo foi representar alguns desses elementos, 
            como no trecho 
            <i>
                 “We can party like it's B.C. With a pretty 16th-century smile” 
            </i>Que faz uma referência a Mona Lisa de Leonardo da Vinci (um dos meus quadros favoritos por sinal) e o trecho 
            <i>
                “Bodies moving like a sculpture”
            </i>
            onde me veio a ideia de introduzir a estátua Vênus de Milo para representar esse momento, com a ideia de pessoas se movendo 
            como uma escultura. Outro ponto que me fez tomar a decisão artística de criar algo misturando os dois estilos Synthwave e Vaporwave 
            é a estética da música, com uma vibe oitentista e fashion. Senti que era a estética perfeita para ele, além da sensação que eu 
            queria transmitir do tempo passando (Vaporwave representando o dia e Synthwave representando a  noite) e assim foi o processo de criação.`,

        },
        { 
            name: "Retro Art", 
            imageUrl: "../../../assets/images/retro-art.png" ,
            url: "https://player.vimeo.com/video/529422361?h=2ba1ecf4f1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            description: ` `,
        },
    ]

    constructor() { }
}
