import agostinho from "./assets/agostinho.png";
import casa from "./assets/casa.png";
import caverna from "./assets/caverna.png";
import feridaPalavra from "./assets/feridaPalavra.png";
import articlesMetadata from "./metadatas/articlesMetadata";

const Propedeutica = [
  {
    ...articlesMetadata["chamado-da-teologia"],
    content: (
      <>
        <h2 className="text-center mb-6">
          <strong>Introdução: O Sentido da Teologia e Sua Vocação Formativa</strong>
        </h2>
        <p className="mb-6">
          Antes de se estudar teologia, é necessário compreender o que ela realmente é.
          A palavra <em>“teologia”</em> vem de <strong>theos</strong> (Deus) e <strong>logos</strong> (palavra, discurso, razão).
          Fazer teologia é falar sobre Deus, mas é também deixar que Deus fale conosco.
        </p>
        <p className="mb-6">
          A verdadeira teologia não é apenas um estudo intelectual, mas um <strong>chamado à transformação de vida</strong>.
          É o encontro entre fé, razão e devoção; entre o homem e o mistério divino.
        </p>
        <p className="mb-6">
          A <strong>propedêutica teológica</strong> — isto é, o estudo preparatório antes da teologia propriamente dita —
          busca responder perguntas fundamentais:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>O que é, de fato, teologia?</li>
          <li>Por que escolhi estudá-la?</li>
          <li>O que preciso saber antes de dar os próximos passos?</li>
        </ul>
        <p className="mb-6">
          Essas perguntas não são meramente acadêmicas, mas espirituais.
          Elas tocam o cerne da vocação de quem deseja conhecer a Deus com profundidade e fidelidade.
        </p>

        <h2 className="text-center mb-6">
          <strong>Os Ramos da Teologia: Uma Introdução Sistemática</strong>
        </h2>

        <h3 className="text-center mb-4"><strong>Teologia Histórica</strong></h3>
        <p className="mb-6">
          A Teologia Histórica investiga o desenvolvimento da doutrina cristã ao longo dos séculos — desde os Pais da Igreja,
          passando pelos concílios, pela Reforma, até os dias atuais.
          Ela busca compreender como diferentes gerações de cristãos entenderam e formularam a fé,
          mostrando que a teologia é viva e caminha junto com a história.
        </p>

        <h3 className="text-center mb-4"><strong>Teologia Exegética</strong></h3>
        <p className="mb-6">
          A Teologia Exegética é o estudo detalhado e fiel do texto bíblico.
          Seu foco está na interpretação das Escrituras em suas línguas originais — hebraico, aramaico e grego —
          para extrair o sentido pretendido pelo autor inspirado.
          Trata-se de ouvir o texto em sua voz mais pura, buscando compreender o que Deus quis comunicar
          antes de perguntar o que o texto “diz a mim”.
        </p>

        <h3 className="text-center mb-4"><strong>Teologia Apologética</strong></h3>
        <p className="mb-6">
          A Teologia Apologética defende racionalmente a fé cristã diante de objeções, dúvidas e outras cosmovisões.
          Ela lida com temas como a existência de Deus, a ressurreição de Cristo e a confiabilidade das Escrituras,
          mostrando que a fé cristã não é irracional, mas profundamente coerente e sustentada pela verdade.
        </p>

        <h3 className="text-center mb-4"><strong>Teologia Filosófica</strong></h3>
        <p className="mb-6">
          A Teologia Filosófica usa ferramentas da filosofia — especialmente a lógica e a metafísica —
          para refletir sobre temas como a natureza de Deus, o livre-arbítrio, a eternidade, a mente e a alma.
          É nesse campo que ocorre o <strong>diálogo entre fé e razão</strong>,
          um terreno fértil onde o pensar se torna um ato de adoração.
        </p>

        <h3 className="text-center mb-4"><strong>Teologia Homilética</strong></h3>
        <p className="mb-6">
          A Homilética é a <strong>arte de pregar</strong>.
          Ela estuda como comunicar com fidelidade o texto bíblico, de modo pastoral, claro e relevante.
          A boa pregação nasce de um coração submisso à Palavra e de uma mente que compreende a verdade com profundidade.
        </p>

        <h3 className="text-center mb-4"><strong>Teologia Sistemática</strong></h3>
        <p className="mb-6">
          A Teologia Sistemática organiza as doutrinas cristãs em temas — Deus, Cristo, Espírito Santo, pecado,
          salvação, escatologia, e assim por diante — buscando coerência e clareza na exposição da fé.
          Ela é o mapa que ajuda o teólogo a compreender o todo da revelação divina.
        </p>

        <h3 className="text-center mb-4"><strong>Teologia Dogmática</strong></h3>
        <p className="mb-6">
          Próxima da sistemática, a Dogmática se ocupa dos ensinos oficiais de cada tradição cristã — católica,
          reformada, luterana, entre outras.
          Seu objetivo é preservar a fidelidade à confissão e à ortodoxia da fé,
          estudando as doutrinas normativas a partir dos credos e confissões históricas.
        </p>

        <h3 className="text-center mb-4"><strong>Teologia Bíblica</strong></h3>
        <p className="mb-6">
          Por fim, a Teologia Bíblica busca compreender as ênfases teológicas de cada autor ou seção das Escrituras —
          a teologia paulina, joanina, lucana etc.
          Em vez de sistematizar conceitos, segue o desenvolvimento progressivo da revelação de Deus ao longo da história redentiva.
        </p>

        <h2 className="text-center mb-6">
          <strong>Propedêutica Teológica e o Discipulado: O Fundamento da Formação</strong>
        </h2>
        <p className="mb-6">
          No Sermão da Montanha, o texto sagrado nos mostra que Jesus se dirigiu aos seus discípulos.
          Ele não pregou para a multidão — a multidão apenas ouviu porque havia discípulos ali para escutá-Lo.
        </p>
        <p className="mb-6">
          O mundo só ouvirá o Evangelho se houver discípulos no mundo dispostos a ouvi-lo.
          A teologia começa no discipulado. E o discipulado começa na escuta.
        </p>
        <p className="mb-6">
          A diferença entre o homem sensato e o insensato está no alicerce sobre o qual constroem suas casas:
        </p>
        <img
          src={casa}
          alt="Ilustração da parábola da casa sobre a rocha e sobre a areia"
          className="rounded-2xl shadow-md my-6 mx-auto w-full max-w-2xl"
        />
        <ul className="list-disc ml-6 mb-6">
          <li>
            O homem sensato cava fundo e edifica sobre a rocha. Quando vêm as tempestades,
            sua casa permanece firme, pois foi construída sobre a obediência aos ensinamentos de Cristo.
          </li>
          <li>
            O homem insensato constrói na areia — rápido, fácil, superficial. Quando a mesma tempestade chega,
            sua casa desmorona, e a ruína é total.
          </li>
        </ul>
        <p className="mb-6">
          A teologia não é para os impacientes.
          Ela não é apenas conteúdo, mas um novo modo de viver.
          A verdadeira teologia é feita de <strong>sangue, suor e lágrimas</strong>.
          Ela exige constância, arrependimento e obediência.
          É o <strong>caminho estreito da formação espiritual</strong>.
        </p>

        <h2 className="text-center mb-6"><strong>O Chamado Divino e a Natureza do Teólogo</strong></h2>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “Os homens procuram cada vez mais métodos melhores de crescimento da igreja.
          Deus procura homens melhores.”
        </blockquote>
        <p className="mb-6">
          A teologia autêntica nasce da santidade.
          <strong> Deus não unge planos — unge pessoas. </strong>
          O mundo não precisa de grandes pregadores, mas de homens e mulheres grandes na fé,
          no amor, na fidelidade e no coração.
        </p>
        <p className="mb-6">
          Homens e mulheres que preguem sermões santos não apenas no púlpito, mas com a vida.
          São esses que podem mudar uma geração para Deus.
        </p>
        <p className="mb-6">
          O teólogo, portanto, é aquele que serve a Deus com a mente, mas também com o coração.
          Ele pensa para crer, e crê para pensar.
          Sua vocação é, antes de tudo, espiritual.
        </p>

        <h2 className="text-center mb-6"><strong>Conclusão: Construindo sobre a Rocha da Palavra</strong></h2>
        <p className="mb-6">
          A propedêutica teológica nos abre um caminho para então estudar e aprender que
          a teologia não é acumular conhecimento, mas <strong>ser moldado pela Palavra</strong>.
        </p>
        <p className="mb-6">
          O verdadeiro teólogo é aquele que constrói sua casa sobre a rocha, mesmo que isso exija tempo,
          esforço e renúncia.
          É aquele que se deixa ferir pela Palavra, pois sabe que a ferida da Palavra é também sua cura.
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “Deus não unge planos. Deus unge homens.”
        </blockquote>
        <p className="mb-6">
          E quando Ele encontra um coração disposto, faz da teologia não apenas uma ciência —
          mas uma <strong>forma de santidade</strong>.
        </p>
      </>
    ),
  },
  {
    ...articlesMetadata["crise-liberalismo"],
    content: (
      <>
        <h2 className="text-center"><strong>Introdução: A Teologia diante da Modernidade</strong></h2>
        <p className="mb-6">
          Ao longo da história, a teologia cristã foi desafiada a dialogar com as transformações culturais, filosóficas e científicas de cada época.
          Quando a modernidade ergueu a razão como árbitra suprema da verdade, a fé passou a ser questionada.
          Em meio a esse contexto surgiu um movimento que marcou profundamente o pensamento teológico: o liberalismo teológico.
        </p>
        <p className="mb-6">
          Sua intenção inicial parecia nobre — tornar a fé cristã relevante ao homem moderno, que já não aceitava a revelação divina como fonte de conhecimento confiável.
          Porém, ao tentar adaptar a fé aos moldes da ciência moderna, a teologia liberal rompeu com a própria essência da teologia, que é conhecer a Deus pela fé e por meio da revelação.
        </p>

        <h2 className="text-center"><strong>O Liberalismo Teológico: Uma Boa Intenção que Desviou do Alvo</strong></h2>
        <p className="mb-6">
          A teologia liberal nasceu do desejo de reconciliar o cristianismo com o espírito científico do século XIX.
          Seu objetivo era mostrar que o Evangelho ainda poderia ser crível para o homem racional, que já não via a Bíblia como autoridade absoluta.
          Mas, para isso, o liberalismo precisou fazer uma concessão perigosa: fazer teologia sem o recurso da fé.
        </p>
        <p className="mb-6">
          O resultado foi um deslocamento profundo do objeto da teologia.
          O foco deixou de ser Deus que se revela nas Escrituras (2ª pessoa) e passou a ser a experiência humana de crença em Deus (3ª pessoa).
          Assim, a teologia liberal se tornou, nas palavras de alguns críticos, uma antropologia religiosa — o estudo do que o homem pensa sobre Deus, e não do Deus que fala ao homem.
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “O objeto da teologia clássica é o Deus que se revela;
          o objeto da teologia liberal é o que os povos produzem a partir de sua crença em Deus.”
        </blockquote>
        <p className="mb-6">
          Essa mudança de foco transformou a teologia em reflexão sobre a religiosidade humana, perdendo de vista o próprio Deus como centro e fundamento de toda verdade.
        </p>

        <h2 className="text-center"><strong>O Jesus Histórico e o Cristo da Fé</strong></h2>
        <p className="mb-6">
          Entre as distinções mais marcantes propostas pelo liberalismo está a separação entre o “Jesus histórico” e o “Cristo da fé”.
          Segundo essa visão, o Jesus histórico seria aquele que pode ser estudado à luz do método histórico-crítico — analisado como qualquer outro personagem da história, sem pressupor sua divindade ou os milagres narrados.
          Já o Cristo da fé seria uma construção espiritual, o produto da imaginação e da experiência religiosa dos primeiros cristãos.
        </p>
        <p className="mb-6">
          O problema é que, ao separar o Jesus da história do Cristo da fé, o liberalismo destrói a base do cristianismo.
          A fé cristã se sustenta em um evento real — a Encarnação — e em fatos históricos, como a ressurreição.
          Sem eles, o Evangelho se torna apenas uma narrativa simbólica.
        </p>

        <h2 className="text-center"><strong>Paul Tillich e o Sacrifício da Razão</strong></h2>
        <p className="mb-6">
          O teólogo Paul Tillich, um dos expoentes do pensamento liberal, chegou a afirmar que pouco importa se o Jesus histórico existiu ou não; o que realmente conta é o Cristo da fé, aquele que é pregado e experimentado.
          Tillich considerava essa distinção um avanço, pois libertava a fé da necessidade de provas históricas.
        </p>
        <p className="mb-6">
          Mas a fé cristã nunca exigiu o sacrifício da razão.
          Ao contrário do que propunha o liberalismo, Deus não exige que o homem abdique de sua capacidade racional para crer.
          Como ensina a tradição cristã, Deus é mais glorificado em nós quando pensamos e cremos, porque Ele nos criou como seres que crêem e pensam — homo credens et cogitans.
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “Jesus nunca pediu o sacrifício da sua razão.”
        </blockquote>
        <p className="mb-6">
          A fé e a razão, portanto, não são inimigas. São dimensões distintas, mas inseparáveis da vida espiritual.
        </p>

        <h2 className="text-center"><strong>Fé e Razão: Distintos, mas Inseparáveis</strong></h2>
        <p className="mb-6">
          A relação entre fé e razão pode ser expressa pela máxima latina:
          <em>Distinctio sed non separata</em> — “Distintos, mas inseparáveis.”
        </p>
        <p className="mb-6">
          Fé e razão são como a rosa e sua cor: diferentes, mas inseparáveis.
          A cor não é a rosa, mas sem cor não há rosa. Da mesma forma, a razão não é a fé, mas sem fé a razão perde seu sentido último.
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “Assim como a cor dá o tom da rosa, a fé dá o tom da razão.”
        </blockquote>
        <p className="mb-6">
          Essa metáfora revela uma profunda harmonia: a fé ilumina a razão, e a razão estrutura a fé.
          Separá-las é mutilar a integridade da alma humana.
          A verdadeira teologia nasce quando ambas se encontram em adoração.
        </p>

        <h2 className="text-center"><strong>Pressupostos: A Base Invisível de Todo Pensamento</strong></h2>
        <p className="mb-6">
          Mas afinal, o que é um pressuposto?
          É aquilo que serve de base para todo pensamento.
          Toda pessoa, mesmo a mais cética, possui crenças fundamentais que não podem ser provadas empiricamente.
          As perguntas últimas — por que existimos? de onde viemos? para onde vamos? — nunca são respondidas pela ciência, pois não pertencem ao campo empírico, mas ao campo da fé.
        </p>
        <p className="mb-6">
          Dito isso, podemos afirmar com segurança: todas as pessoas têm fé, porque todas têm pressupostos.
          Mesmo o agnóstico, que diz “não sei se Deus existe”, já parte de uma crença: a crença de que o conhecimento do transcendente é inacessível.
        </p>
        <p className="mb-6">
          O agnosticismo, portanto, é uma forma de fé — a fé na impossibilidade do conhecimento.
        </p>

        <h2 className="text-center"><strong>A Teologia Clássica e o Papel da Revelação</strong></h2>
        <p className="mb-6">
          Em contraste, a teologia clássica não se submete aos cânones da ciência moderna.
          Ela reconhece que seu objeto é Deus e a experiência humana com Deus, e que ambos não podem ser estudados como fenômenos empíricos.
          Deus não é um objeto a ser observado, mas um Sujeito que se revela.
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “O que propomos aqui não é a teologia científica, mas a teologia enquanto mãe das ciências.”
        </blockquote>
        <p className="mb-6">
          A teologia clássica não rejeita a razão, mas a coloca em seu devido lugar: como serva da fé.
          A razão ajuda a organizar, expressar e defender o que a fé crê.
          Mas é a fé que nos permite ver o invisível, ouvir o inaudível, e conhecer o incognoscível.
        </p>

        <h2 className="text-center"><strong>O Papel do Teólogo na Vida, na Igreja e na Cidade</strong></h2>
        <p className="mb-6">
          A teologia não é um saber neutro.
          Ela molda o ser e o agir do teólogo.
          Por isso, podemos dizer que o teólogo tem três papéis fundamentais:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Na vida, o teólogo é propedêutico — busca compreender a Palavra e aplicá-la em si mesmo.</li>
          <li>Na igreja, o teólogo é dogmático — guarda, ensina e preserva a doutrina da fé.</li>
          <li>Na cidade, o teólogo é apologético — defende racionalmente a fé diante do mundo.</li>
        </ul>
        <p className="mb-6">
          Essas três dimensões formam o perfil completo de um servo de Deus: alguém que vive a Palavra, ensina a Palavra e testemunha a Palavra.
        </p>

        <h2 className="text-center"><strong>Conclusão: Deus é a Última Palavra</strong></h2>
        <p className="mb-6">
          Toda tentativa de fazer teologia sem fé termina no vazio.
          O liberalismo tentou tornar a fé relevante para o homem moderno, mas esqueceu que o papel da teologia não é adaptar Deus ao homem, e sim formar o homem à imagem de Deus.
        </p>
        <p className="mb-6">
          A teologia cristã parte de um pressuposto inegociável: Deus fala.
          E quando Ele fala, a razão se inclina, não se apaga.
          Somos sempre a penúltima palavra; Ele é sempre a última.
        </p>
        <p className="mb-6">
          A fé e a razão não competem.
          Elas se encontram no mistério da revelação, onde o Deus transcendente se faz conhecido.
          Fazer teologia é, portanto, escutar essa voz e permitir que ela molde tudo o que somos — mente, coração e vida.
        </p>
      </>
    ),
  },
  {
    ...articlesMetadata["palavra-que-fere"],
    content: (
      <>
        <h2 className="text-center mb-6"><strong>Introdução: O Teólogo Diante do Mistério</strong></h2>
        <p className="mb-6">
          Fazer teologia é caminhar descalço sobre o terreno santo da revelação.
          É uma vocação que exige tanto o rigor do intelecto quanto a rendição do coração.
          O teólogo não é um simples estudioso de doutrinas, mas um peregrino que busca compreender o Deus que se revela, e nessa busca é transformado por aquilo que contempla.
        </p>
        <p className="mb-6">
          A teologia, portanto, é um trabalho lento de consciência de quem Deus é e de quem nós somos.
          Ela não se satisfaz em repetir o que outros disseram sobre Deus; quer ouvi-Lo falar novamente.
          Mas ouvir Deus é sempre perigoso — porque Sua Palavra fere antes de curar, desestrutura antes de edificar.
        </p>

        <h2 className="text-center mb-6"><strong>A Oração: O Lugar Onde o Saber se Torna Encontro</strong></h2>
        <p className="mb-6">
          A oração é o ponto onde o saber teológico deixa de ser um exercício mental e se torna comunhão viva.
          Ela não é um refúgio emocional, mas uma luta santa.
          Como dizia Søren Kierkegaard:
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “A oração é uma luta com Deus, e nessa luta você vencerá todas as vezes que for vencido.”
        </blockquote>
        <p className="mb-6">
          A oração é uma forma de nos apresentarmos a Deus — e, ao mesmo tempo, de apresentar Deus a nós mesmos.
          Por isso, um teólogo que não ora deixa de ser teólogo; torna-se apenas um especialista em assuntos religiosos.
          A oração revela que fazer teologia é também ser teologia, é viver o que se crê.
        </p>

        <h2 className="text-center mb-6"><strong>A Palavra que Fere e Revela</strong></h2>
        <p className="mb-6">
          O verdadeiro teólogo nasce quando a Palavra o fere.
          Essa ferida é o espelho pelo qual Deus mostra quem Ele é e quem nós somos.
          A Escritura não é um fenômeno que desperta curiosidade, mas uma presença que confronta.
          Ela nos mostra Deus como Ele quer ser visto e nós como realmente somos diante d’Ele.
          Não é o que dizemos sobre Deus que importa, mas o que Deus diz sobre Si — e sobre nós.
        </p>
        <p className="mb-6">
          A Bíblia, portanto, não é apenas um livro que fala de Deus, mas um espelho triplo: reflete Deus, o mundo e o próprio leitor.
          Ela revela o que somos, o que o mundo é e quem é Aquele que sustenta todas as coisas pela Sua Palavra.
        </p>
        <img
          src={feridaPalavra}
          alt="Ilustração da palavra que fere"
          className="rounded-2xl shadow-md my-6 mx-auto w-full max-w-2xl"
        />

        <h2 className="text-center mb-6"><strong>A Alegoria da Caverna e o Caminho da Luz</strong></h2>
        <p className="mb-6">
          A caminhada teológica é, em muitos sentidos, semelhante à jornada descrita por Platão na “Alegoria da Caverna”, no diálogo entre Sócrates e Glauco.
        </p>
        <p className="mb-6">
          <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
            "Mas o que aconteceria se eles fossem
            libertados de suas correntes e curados de sua
            desrazão? E se um desses homens fosse solto,
            forçado subitamente a levantar-se, a virar a
            cabeça, a andar e a olhar na direção da luz?
            Todos esses movimentos o fariam sofrer; ele
            ficaria cego e não poderia por algum momento
            distinguir os objetos dos quais anteriormente via
            apenas as sombras.
          </blockquote>
          <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
            E se o forçassem a olhar para a própria luz?
            Não pensas que os olhos lhe doeriam, que ele
            viraria as costas e voltaria para as coisas que
            pode olhar e que as consideraria
            verdadeiramente mais nítidas do que as coisas
            que lhe mostram? É preciso que ele se habitue
            para que possa ver as coisas do alto.”
          </blockquote>
        </p>
        <img
          src={caverna}
          alt="Ilustração da alegoria da caverna"
          className="rounded-2xl shadow-md my-6 mx-auto w-full max-w-2xl"
        />
        <p className="mb-6">
          Na alegoria,
          Homens acorrentados olham apenas sombras projetadas no fundo da caverna — para eles, a sombra é a realidade.
          Mas quando um deles é libertado, é forçado a levantar-se, virar o rosto, andar e olhar para a luz.
          E o texto nos diz:
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “Todos esses movimentos o fariam sofrer; ele ficaria cego e, por algum momento, não distinguiria os objetos dos quais antes via apenas as sombras.
          E se o forçassem a olhar para a própria luz? Os olhos lhe doeriam, e ele voltaria às sombras, considerando-as mais nítidas do que aquilo que vê.”
        </blockquote>
        <p className="mb-6">
          Platão conclui que todo conhecimento é fruto de uma libertação dolorosa.
          O homem, ao sair da escuridão, sofre antes de enxergar — e somente após essa dor ele compreende a verdade.
        </p>
        <p className="mb-6">
          Assim também é o caminho da teologia: o primeiro passo é doloroso.
          Conhecer a Deus é ser arrancado das sombras das opiniões e confrontado pela luz da revelação.
          Como o prisioneiro que aprende a olhar para fora da caverna, o teólogo aprende a olhar para além de si — e uma vez que vê a luz, não há retorno possível.
        </p>
        <p className="mb-6">
          Santo Agostinho interpreta essa jornada à luz da fé:
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “O conhecimento que nos liberta é obra do Espírito Santo, que através da Palavra de Deus fere o teólogo — e, ao feri-lo, o liberta.”
        </blockquote>
        <p className="mb-6">
          Aprendamos, então, com Santo Agostinho:
        </p>
        <img
          src={agostinho}
          alt="Fala agostinho"
          className="rounded-2xl shadow-md my-6 mx-auto w-full max-w-2xl"
        />
        <h2 className="text-center mb-6"><strong>O Clamor de Anselmo: A Alma Que Pede Luz</strong></h2>
        <p className="mb-6">
          Séculos depois, Anselmo de Cantuária expressou a mesma verdade em sua oração no Proslogion:
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “Senhor, curvado como estou, só posso ver para baixo.
          Levanta-me, a fim de poder olhar para o alto.
          As minhas iniquidades acumularam-se sobre a minha cabeça, envolvem-me e, como um pesado fardo, oprimem-me.
          Liberta-me.”
        </blockquote>
        <p className="mb-6">
          O clamor de Anselmo é o mesmo de todo teólogo autêntico: não apenas compreender Deus, mas ser erguido por Ele.
          Anselmo entende que a razão, sem graça, se curva sobre si mesma.
          Somente quando Deus levanta o homem é que ele pode olhar para o alto — e a teologia torna-se adoração.
        </p>
        <p className="mb-6">
          Agostinho ecoa esse sentimento:
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “Fizeste-nos para Ti, e inquieto está o nosso coração enquanto não repousa em Ti.”
        </blockquote>
        <p className="mb-6">
          Toda a teologia é movida por essa inquietude: o desejo de repousar em Deus.
          Assim como o prisioneiro da caverna deseja a luz, o coração do teólogo deseja o rosto de Deus — e encontra descanso apenas quando o contempla.
        </p>

        <h2 className="text-center mb-6"><strong>O Cansaço do Mensageiro: A Voz e o Silêncio em Adélia Prado</strong></h2>
        <p className="mb-6">
          A poeta Adélia Prado oferece uma das mais belas representações do cansaço espiritual daquele que carrega a Palavra.
          Em Oráculos de Maio (1999), ela escreve:
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “O poeta ficou cansado.
          Pois não quero mais ser Teu arauto.
          Já que todos têm voz, por que só eu devo tomar navios
          de rota que não escolhi?
          Por que não gritas, Tu mesmo,
          a miraculosa trama dos teares,
          já que Tua voz reboa
          nos quatro cantos do mundo?
          (...)
          Ó Deus,
          me deixa trabalhar na cozinha,
          nem vendedor nem escrivão,
          me deixa fazer Teu pão.
          Filha, diz-me o Senhor,
          eu só como palavras.”
        </blockquote>
        <p className="mb-6">
          Adélia expressa aqui o drama do mensageiro: o fardo de falar em nome de Deus quando o coração anseia por silêncio.
          Não é um desejo de abandonar a fé, mas de servir nos próprios termos — de escolher a forma do próprio ministério.
          E Deus, com ternura e firmeza, responde: “Eu só como palavras.”
        </p>
        <p className="mb-6">
          Ele lembra à alma cansada que a vocação do teólogo é alimentar o mundo com a Palavra viva.
          Assim como o pão é partido para nutrir, o verbo é dito para transformar.
          A Palavra é o alimento de Deus — e, por isso, também deve ser o alimento do teólogo.
        </p>

        <h2 className="text-center mb-6"><strong>Conclusão: A Palavra que Fere e Cura</strong></h2>
        <p className="mb-6">
          No fim, a teologia é uma jornada da caverna à luz, da sombra à presença, do cansaço ao repouso.
          Ela começa como estudo e termina como oração.
          O teólogo autêntico não busca dominar o texto, mas ser dominado por ele; não quer explicar Deus, mas ser explicado por Ele.
        </p>
        <p className="mb-6">
          A Palavra fere, mas é na ferida que nasce o conhecimento verdadeiro.
          Ela confronta, mas também consola.
          Ela revela quem Deus é — e, inevitavelmente, quem somos.
        </p>
        <blockquote className="mb-6 pl-4 border-l-4 border-accent italic">
          “Toda Palavra de Deus é, antes de ser consolo, uma ferida.”
        </blockquote>
        <p className="mb-6">
          A teologia, em última instância, é essa ferida luminosa —
          a dor de ser visto por Deus e o júbilo de ser transformado pela Sua voz.
          E quando o teólogo, cansado mas fiel, repousa diante da Escritura, descobre que todo seu estudo era, na verdade, um retorno à casa do Pai.
        </p>
      </>
    )
  }
];

export default Propedeutica;
