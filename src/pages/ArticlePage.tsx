import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  // Dados completos dos artigos
  const articles: Record<string, any> = {
    "natureza-divina-cristo": {
      title: "A Natureza Divina de Cristo: Uma Análise Bíblica",
      category: "Cristologia",
      date: "15 de Setembro, 2024",
      readTime: "8 min",
      author: "Dr. Paulo Santos",
      content: `
        <p>A questão da divindade de Cristo é fundamental para a fé cristã. Sem uma compreensão clara de quem Jesus é, nossa teologia inteira desmorona. Neste artigo, examinaremos as evidências bíblicas que atestam a natureza divina de nosso Senhor.</p>

        <h2>Evidências no Antigo Testamento</h2>
        <p>Desde o Antigo Testamento, encontramos profecias que apontam para a divindade do Messias vindouro. Isaías 9:6 declara: "Porque um menino nos nasceu, um filho se nos deu; o governo está sobre os seus ombros; e o seu nome será: Maravilhoso Conselheiro, Deus Forte, Pai da Eternidade, Príncipe da Paz."</p>

        <p>Note que o profeta não hesita em chamar o Messias de "Deus Forte" e "Pai da Eternidade" - títulos que pertencem exclusivamente a Deus. Esta profecia, cumprida em Cristo, estabelece desde o início Sua natureza divina.</p>

        <h2>O Testemunho de João</h2>
        <p>O Evangelho de João abre com uma das declarações mais profundas sobre a divindade de Cristo: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus" (João 1:1). João não deixa espaço para ambiguidade - Jesus é identificado como o Verbo eterno que é Deus.</p>

        <p>Mais adiante, em João 8:58, Jesus faz uma afirmação extraordinária: "Em verdade, em verdade vos digo: antes que Abraão existisse, EU SOU." Ao usar o nome divino revelado a Moisés na sarça ardente (Êxodo 3:14), Jesus estava claramente reivindicando ser Yahweh, o Deus eterno de Israel.</p>

        <h2>As Reivindicações de Jesus</h2>
        <p>Jesus não apenas aceitou adoração (algo que até os anjos recusam, veja Apocalipse 22:8-9), mas também perdoou pecados - uma prerrogativa exclusivamente divina. Em Marcos 2:5-7, quando Jesus perdoa os pecados de um paralítico, os escribas corretamente reconhecem que "Quem pode perdoar pecados, senão um, que é Deus?"</p>

        <h2>A Adoração dos Discípulos</h2>
        <p>Após a ressurreição, Tomé declara a Jesus: "Senhor meu e Deus meu!" (João 20:28). Jesus não corrige Tomé, mas aceita esta adoração. Se Jesus não fosse Deus, este seria o momento perfeito para esclarecer o mal-entendido. Em vez disso, Ele afirma Tomé.</p>

        <h2>As Epístolas Paulinas</h2>
        <p>Paulo é igualmente claro sobre a divindade de Cristo. Em Filipenses 2:6, ele escreve que Jesus "subsistindo em forma de Deus, não julgou como usurpação o ser igual a Deus." Colossenses 2:9 declara: "Porquanto, nele, habita, corporalmente, toda a plenitude da Divindade."</p>

        <h2>Implicações Práticas</h2>
        <p>Compreender a divindade de Cristo não é apenas um exercício teológico abstrato. Tem profundas implicações práticas:</p>

        <ul>
          <li><strong>Para a Salvação:</strong> Somente um Salvador divino poderia pagar a dívida infinita do pecado humano.</li>
          <li><strong>Para a Adoração:</strong> Jesus é digno de nossa adoração total e incondicional.</li>
          <li><strong>Para a Vida Cristã:</strong> O poder que ressuscitou Cristo dos mortos está disponível para nós hoje.</li>
          <li><strong>Para a Esperança:</strong> Nossa fé não está em um mero profeta, mas no próprio Deus encarnado.</li>
        </ul>

        <h2>Conclusão</h2>
        <p>A evidência bíblica para a divindade de Cristo é esmagadora. Desde as profecias do Antigo Testamento até as declarações explícitas do Novo Testamento, as Escrituras testificam consistentemente que Jesus Cristo é verdadeiro Deus e verdadeiro homem.</p>

        <p>C.S. Lewis famosamente argumentou que Jesus não nos deixou a opção de considerá-lo apenas um grande mestre moral. Ou Ele era quem disse ser - Deus encarnado - ou era um lunático ou um mentiroso. As evidências apontam decisivamente para a primeira opção.</p>

        <p>Que possamos, como Tomé, adorar a Cristo declarando: "Senhor meu e Deus meu!" Esta verdade não é apenas para ser conhecida, mas para ser vivida e celebrada cada dia de nossas vidas.</p>
      `
    },
    "graca-obras-salvacao": {
      title: "Graça e Obras: O Equilíbrio Bíblico da Salvação",
      category: "Soteriologia",
      date: "10 de Setembro, 2024",
      readTime: "12 min",
      author: "Dra. Maria Oliveira",
      content: `
        <p>Uma das questões mais debatidas na história da igreja é o papel da graça e das obras na salvação. Enquanto alguns enfatizam apenas a graça, outros parecem sugerir que nossas obras contribuem para a salvação. Mas o que a Bíblia realmente ensina?</p>

        <h2>A Salvação pela Graça</h2>
        <p>Efésios 2:8-9 é cristalino: "Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus; não de obras, para que ninguém se glorie." Paulo não poderia ser mais claro - a salvação é inteiramente obra da graça de Deus, não resultado de nossos esforços.</p>

        <p>Romanos 3:23-24 reforça este ponto: "Pois todos pecaram e carecem da glória de Deus, sendo justificados gratuitamente, por sua graça, mediante a redenção que há em Cristo Jesus." A justificação é gratuita, pela graça, por meio da redenção em Cristo.</p>

        <h2>Mas E Quanto a Tiago?</h2>
        <p>Tiago 2:17 aparentemente contradiz Paulo: "Assim, também a fé, se não tiver obras, por si só está morta." Como reconciliamos estas passagens?</p>

        <p>A chave está em entender que Paulo e Tiago estão abordando questões diferentes. Paulo responde: "Como somos salvos?" Resposta: pela graça, mediante a fé. Tiago pergunta: "Como sabemos que nossa fé é genuína?" Resposta: ela produzirá obras.</p>

        <h2>Fé que Justifica vs. Fé que Salva</h2>
        <p>Martin Lutero compreendeu isso perfeitamente quando disse: "Somos salvos somente pela fé, mas a fé que salva nunca está sozinha." A fé verdadeira inevitavelmente produz boas obras, não como causa da salvação, mas como evidência dela.</p>

        <h2>O Papel das Obras</h2>
        <p>As obras desempenham vários papéis importantes na vida cristã:</p>

        <ul>
          <li><strong>Evidência da Salvação:</strong> Demonstram que nossa fé é genuína (Tiago 2:18)</li>
          <li><strong>Crescimento Espiritual:</strong> Nos santificam e nos conformam à imagem de Cristo (Filipenses 2:12-13)</li>
          <li><strong>Testemunho ao Mundo:</strong> Glorificam a Deus diante dos outros (Mateus 5:16)</li>
          <li><strong>Recompensas Eternas:</strong> Resultam em galardões no céu (1 Coríntios 3:12-15)</li>
        </ul>

        <h2>A Ordem Correta</h2>
        <p>A sequência bíblica é crucial: primeiro vem a graça, depois a fé, e então as obras. Não trabalhamos para a salvação; trabalhamos a partir da salvação. Como João escreve em 1 João 4:19: "Nós amamos porque ele nos amou primeiro."</p>

        <h2>Evitando Extremos</h2>
        <p>Devemos evitar dois extremos perigosos:</p>

        <p><strong>Legalismo:</strong> Adicionar obras à fé como requisito para salvação. Isto nega a suficiência da graça de Deus e torna Cristo insuficiente.</p>

        <p><strong>Antinomianismo:</strong> Usar a graça como desculpa para o pecado. Paulo antecipa esta objeção em Romanos 6:1-2: "Que diremos, pois? Permaneceremos no pecado, para que seja a graça mais abundante? De modo nenhum!"</p>

        <h2>Conclusão</h2>
        <p>O equilíbrio bíblico é claro: somos salvos pela graça mediante a fé, não por obras. Mas a fé verdadeira sempre produzirá boas obras. Como Agostinho disse: "Ame a Deus e faça o que quiser" - porque se realmente amamos a Deus, desejaremos obedecer-Lhe.</p>

        <p>Que possamos descansar completamente na graça de Deus para nossa salvação, enquanto vivemos vidas de obediência agradecida como resposta ao Seu amor imerecido.</p>
      `
    },
    "pais-igreja-formacao": {
      title: "Os Pais da Igreja e a Formação Doutrinária",
      category: "História",
      date: "5 de Setembro, 2024",
      readTime: "15 min",
      author: "Dr. João Ferreira",
      content: `
        <p>Os Pais da Igreja - aqueles líderes e teólogos dos primeiros séculos do cristianismo - desempenharam um papel crucial na preservação, defesa e articulação da fé cristã. Seu legado continua a influenciar a igreja hoje.</p>

        <h2>Quem Foram os Pais da Igreja?</h2>
        <p>O termo "Pais da Igreja" refere-se aos líderes cristãos e teólogos aproximadamente dos anos 100-800 d.C. Eles são geralmente divididos em:</p>

        <ul>
          <li><strong>Pais Apostólicos (100-150 d.C.):</strong> Clemente de Roma, Inácio de Antioquia, Policarpo</li>
          <li><strong>Apologistas (150-300 d.C.):</strong> Justino Mártir, Irineu, Tertuliano</li>
          <li><strong>Pais Nicenos (300-500 d.C.):</strong> Atanásio, Agostinho, Jerônimo, João Crisóstomo</li>
        </ul>

        <h2>Defendendo a Fé</h2>
        <p>Os Pais enfrentaram numerosas heresias que ameaçavam a integridade da fé cristã. Irineu combateu o gnosticismo, Atanásio defendeu a divindade de Cristo contra o arianismo, e Agostinho refutou o pelagianismo.</p>

        <p>Seu trabalho não foi simplesmente reativo. Ao articular a fé contra heresias, eles ajudaram a clarificar e definir doutrinas essenciais como a Trindade, a pessoa de Cristo, e a natureza da salvação.</p>

        <h2>Contribuições Duradouras</h2>
        <p>As contribuições dos Pais da Igreja incluem:</p>

        <ul>
          <li><strong>O Credo:</strong> Os credos Apostólico e Niceno resumem a fé cristã essencial</li>
          <li><strong>O Cânon:</strong> Ajudaram a identificar quais livros constituem as Escrituras</li>
          <li><strong>A Teologia:</strong> Desenvolveram vocabulário e conceitos teológicos fundamentais</li>
          <li><strong>A Liturgia:</strong> Moldaram a adoração e as práticas da igreja</li>
        </ul>

        <h2>Por Que Ainda Importam?</h2>
        <p>Estudar os Pais da Igreja não é mero interesse histórico. Eles oferecem:</p>

        <p><strong>Perspectiva Histórica:</strong> Nos conectam com a igreja primitiva e suas práticas.</p>

        <p><strong>Sabedoria Teológica:</strong> Suas insights sobre Escritura e doutrina continuam relevantes.</p>

        <p><strong>Unidade Cristã:</strong> Representam a fé comum antes das divisões denominacionais posteriores.</p>

        <h2>Conclusão</h2>
        <p>Os Pais da Igreja são uma herança preciosa para todos os cristãos. Ao estudá-los, ganhamos uma apreciação mais profunda da fé que nos foi transmitida e somos equipados para defendê-la em nossa própria geração.</p>
      `
    },
    "hermeneutica-biblica": {
      title: "Hermenêutica Bíblica: Princípios de Interpretação",
      category: "Hermenêutica",
      date: "1 de Setembro, 2024",
      readTime: "10 min",
      author: "Rev. Carlos Silva",
      content: `
        <p>A hermenêutica bíblica é a ciência e arte de interpretar as Escrituras corretamente. Sem princípios sólidos de interpretação, corremos o risco de distorcer a Palavra de Deus para apoiar nossas próprias ideias preconcebidas.</p>

        <h2>Princípios Fundamentais</h2>
        
        <h3>1. O Princípio Gramatical-Histórico</h3>
        <p>Devemos interpretar a Bíblia em seu contexto original - considerando a gramática, o contexto histórico e cultural. O que o texto significava para os leitores originais? Esta é a base para entender o que significa para nós hoje.</p>

        <h3>2. O Princípio da Analogia da Fé</h3>
        <p>A Escritura interpreta a Escritura. Passagens mais claras nos ajudam a entender passagens mais obscuras. A Bíblia não se contradiz, então interpretações que conflitam com o ensinamento claro das Escrituras devem ser rejeitadas.</p>

        <h3>3. O Princípio do Contexto</h3>
        <p>Nunca devemos isolar um versículo de seu contexto. Considere o contexto imediato (parágrafos circundantes), o contexto do livro inteiro, e o contexto de toda a Escritura.</p>

        <h2>Gêneros Literários</h2>
        <p>A Bíblia contém vários gêneros literários, cada um requerendo abordagens interpretativas apropriadas:</p>

        <ul>
          <li><strong>Narrativa:</strong> Ensina através de histórias e exemplos</li>
          <li><strong>Poesia:</strong> Usa linguagem figurada e paralelismo</li>
          <li><strong>Profecia:</strong> Requer atenção ao cumprimento e simbolismo</li>
          <li><strong>Epístolas:</strong> Ensinamento doutrinário direto</li>
          <li><strong>Apocalíptica:</strong> Rica em simbolismo e imagens</li>
        </ul>

        <h2>Evitando Erros Comuns</h2>
        <p>Alguns erros interpretativos comuns incluem:</p>

        <ul>
          <li>Eisegese (ler nossas ideias no texto) em vez de exegese (extrair o significado do texto)</li>
          <li>Alegorização excessiva que ignora o sentido literal</li>
          <li>Ignorar o contexto histórico e cultural</li>
          <li>Aplicar promessas específicas de forma universal</li>
        </ul>

        <h2>O Papel do Espírito Santo</h2>
        <p>Embora princípios hermenêuticos sejam essenciais, nunca devemos esquecer que a interpretação correta das Escrituras também requer a iluminação do Espírito Santo (1 Coríntios 2:14). Devemos abordar a Palavra com oração e humildade.</p>

        <h2>Conclusão</h2>
        <p>A hermenêutica bíblica não é um obstáculo à leitura devocional das Escrituras, mas uma ferramenta que nos ajuda a ouvir mais claramente o que Deus está dizendo. Ao aplicarmos estes princípios fielmente, honramos a Deus e Sua Palavra.</p>
      `
    }
  };

  const currentArticle = articles[articleId || ""];

  if (!currentArticle) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
            <Button onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Início
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Botão Voltar */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para Início
          </Button>

          {/* Cabeçalho do Artigo */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                {currentArticle.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {currentArticle.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {currentArticle.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {currentArticle.readTime} de leitura
              </div>
            </div>

            <div className="flex items-center justify-between pb-6 border-b border-border">
              <p className="text-foreground font-medium">
                Por {currentArticle.author}
              </p>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>

          {/* Conteúdo do Artigo */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:text-muted-foreground prose-ul:my-6
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: currentArticle.content }}
          />

          {/* Rodapé do Artigo */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => navigate("/")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Artigos
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar Artigo
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticlePage;
