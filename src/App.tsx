const WORKS = [
  { img: "/img/img.png", client: "Bravino", kind: "Vinhos · Social" },
  { img: "/img/img1.png", client: "Fascina", kind: "Odontologia · Institucional" },
  { img: "/img/img2.png", client: "Nutrivanza", kind: "Agro · Campanha" },
  { img: "/img/img3.png", client: "Bravino", kind: "Vinhos · Conteúdo" },
  { img: "/img/img4.png", client: "Line Seguros", kind: "Seguros · Campanha" },
  { img: "/img/img5.png", client: "Hot Wheels", kind: "Colecionáveis · Lançamento" },
  { img: "/img/img6.png", client: "Dog & Cat", kind: "Pet · Promoção" },
  { img: "/img/img7.png", client: "SynapsOne", kind: "Tecnologia · Institucional" },
  { img: "/img/img8.png", client: "Moturial", kind: "Motos · Campanha" },
  { img: "/img/img9.png", client: "Mini GT", kind: "Colecionáveis · Lançamento" },
];

const SERVICES = [
  {
    title: "Vídeo",
    body: "Captação, edição e finalização de reels, depoimentos, institucionais e cobertura de evento. Do roteiro à entrega pronta para publicar.",
  },
  {
    title: "Motion graphics",
    body: "Animação de logo, vinheta, abertura, legenda animada e peças em movimento para redes sociais e telas.",
  },
  {
    title: "Design gráfico",
    body: "Identidade visual, campanha, criativo para tráfego pago e cronograma mensal de conteúdo.",
  },
  {
    title: "Mídia out-of-home",
    body: "Peças para painel de LED, totem de elevador e formatos verticais, adaptadas para leitura à distância.",
  },
  {
    title: "Fotografia",
    body: "Ensaio, evento e produto, com tratamento e seleção entregues prontos para uso.",
  },
  {
    title: "Captação aérea",
    body: "Imagens de drone para institucional, imóvel e evento, integradas ao mesmo acabamento do material em solo.",
  },
];

const CLIENTS = [
  "Drako Academia",
  "Bravino Wine Concept",
  "Instituto Ferrari",
  "Partmed",
  "SynapsOne",
  "ATA Curitiba",
  "Nutrivanza",
  "Fascina",
  "Line Seguros",
  "Moturial",
  "Dog & Cat Company",
  "Prefeitura de Rolândia",
];

const NUMBERS = [
  { value: "15+", label: "anos de estrada" },
  { value: "9", label: "segmentos atendidos" },
  { value: "3", label: "cidades cobertas" },
];

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <span className="mark">
          Cezar Augusto<i>.</i>
        </span>
        <ul className="nav-links">
          <li>
            <a href="#trabalhos">Trabalhos</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
        </ul>
        <a className="pill" href="#contato">
          Fazer um orçamento
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero wrap">
      <p className="eyebrow">Londrina · Paraná</p>
      <h1>
        Design e vídeo para marcas que <b>não passam despercebidas.</b>
      </h1>
      <div className="hero-grid">
        <div className="hero-numbers">
          {NUMBERS.map((n) => (
            <div className="num" key={n.label}>
              <strong>{n.value}</strong>
              <span>{n.label}</span>
            </div>
          ))}
        </div>
        <div className="hero-side">
          <p>
            Sou videomaker e designer gráfico. Faço captação, edição, motion e
            identidade visual — do reels de quinze segundos ao painel de LED na
            rua. Quinze anos atendendo cliente direto e agência.
          </p>
          <a className="pill solid" href="#trabalhos">
            Ver os trabalhos
          </a>
        </div>
      </div>
    </header>
  );
}

function Works() {
  return (
    <section id="trabalhos" className="wrap">
      <p className="eyebrow">Trabalhos</p>
      <h2>
        Peças que <b>foram para a rua</b>.
      </h2>
      <div className="works">
        {WORKS.map((w) => (
          <figure className="work" key={w.img}>
            <a href={w.img} target="_blank" rel="noreferrer">
              <span className="work-frame">
                <img src={w.img} alt={`${w.client} — ${w.kind}`} loading="lazy" />
              </span>
            </a>
            <figcaption>
              <span className="work-kind">{w.kind}</span>
              <span className="work-client">{w.client}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="wrap">
      <p className="eyebrow">Serviços</p>
      <h2>
        Da câmera ao <b>arquivo final</b>.
      </h2>
      <div className="services">
        {SERVICES.map((s) => (
          <article className="service" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="wrap">
      <p className="eyebrow">Sobre</p>
      <div className="two">
        <h2>
          Quem atende é quem <b>edita</b>.
        </h2>
        <div>
          <p className="lede">
            Comecei captando vídeo de evento em 2008 e nunca saí da ilha de
            edição. Passei por prefeitura, por agência e por cliente direto, e
            hoje produzo o audiovisual de uma rede de academias com unidades em
            Londrina, Maringá e Cambé.
          </p>
          <p className="lede">
            Também sou formado em Análise e Desenvolvimento de Sistemas, e uso
            isso a favor do trabalho: construo minhas próprias ferramentas de
            automação para entregar mais rápido sem abrir mão do acabamento.
          </p>
          <a className="pill" href="https://cezar-dev.vercel.app" target="_blank" rel="noreferrer">
            Ver o lado desenvolvedor
          </a>
        </div>
      </div>
      <div className="clients">
        <p className="eyebrow small">Marcas atendidas</p>
        <ul>
          {CLIENTS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="wrap contato">
      <p className="eyebrow">Contato</p>
      <h2>
        Me conta o que você <b>precisa gravar</b>.
      </h2>
      <div className="acoes">
        <a className="pill solid" href="https://wa.me/5543999859044" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a className="pill" href="mailto:cezaraugustofelix90@gmail.com">
          E-mail
        </a>
        <a className="pill" href="https://behance.net/cezaraugustofelix" target="_blank" rel="noreferrer">
          Behance
        </a>
        <a className="pill" href="https://linkedin.com/in/cezaraugustofelix" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <div className="glow a" aria-hidden="true" />
      <div className="glow b" aria-hidden="true" />
      <div className="shell">
        <Nav />
        <main>
          <Hero />
          <Works />
          <Services />
          <About />
          <Contact />
        </main>
        <div className="wrap">
          <footer>
            <span>Cezar Augusto Felix · Londrina, Paraná</span>
            <span>
              <a href="mailto:cezaraugustofelix90@gmail.com">
                cezaraugustofelix90@gmail.com
              </a>
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
