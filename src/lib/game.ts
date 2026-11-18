import heroImg from "@/assets/hero-pixel.jpg";
import eliseImg from "@/assets/elise-pixel.jpg";
import seraphinaImg from "@/assets/seraphina-pixel.jpg";
import carmillaImg from "@/assets/carmilla-pixel.jpg";
import beatriceImg from "@/assets/beatrice-pixel.jpg";

export const GAME = {
  title: "PURGATORIUM",
  subtitle: "Requiem of the Pale Soul",
  genre: "Bullet Hell / Danmaku de sobrevivência",
  file: "/game/purgatorium.html",
  downloadName: "purgatorium_requiem_of_the_pale_soul.html",
  heroImg,
};

export const CREATOR = {
  name: "Lucy Thurman",
  instagram: "@Laswell.elk",
  instagramUrl: "https://instagram.com/Laswell.elk",
};

export const gameUrl = (tab: "trailer" | "game" | "grimoire" | "gdd") =>
  `${GAME.file}?embed=1&tab=${tab}`;

export type Character = {
  id: string;
  role: string;
  name: string;
  epithet: string;
  act?: string;
  spellCard?: string;
  image: string;
  tone: "ethereal" | "violet" | "crimson" | "gold";
  summary: string;
  lore: string;
};

export const CHARACTERS: Character[] = [
  {
    id: "elise",
    role: "Protagonista",
    name: "Elise",
    epithet: "a Criança do Véu Branco",
    image: eliseImg,
    tone: "ethereal",
    summary:
      "Garota de pele pálida, cabelos loiros, olhos castanhos e vestido branco que purifica maldições.",
    lore: "Elise despertou entre as cinzas sem lembrar do próprio nome. Não carrega armas: sua única defesa é o Véu Branco, um pulso espiritual capaz de devolver a dor a quem a lançou. Para deixar o Purgatório, ela precisa resistir — não vencer.",
  },
  {
    id: "seraphina",
    role: "Guardiã I",
    name: "Seraphina",
    epithet: "Tecelã de Cinzas",
    act: "Ato I • Catedral das Cinzas",
    spellCard: "「Anéis Concêntricos do Purgatório」",
    image: seraphinaImg,
    tone: "violet",
    summary: "Guarda o primeiro portão com anéis circulares hipnóticos e chuvas aleatórias.",
    lore: "Outrora uma freira que tecia mortalhas para os esquecidos, Seraphina agora tece anéis de luz violeta que aprisionam almas em círculos sem fim. Ela acredita que toda alma deve permanecer — para sempre lembrada, para sempre presa.",
  },
  {
    id: "carmilla",
    role: "Guardiã II",
    name: "Carmilla",
    epithet: "Dama do Relicário",
    act: "Ato II • Relicário Carmesim",
    spellCard: "「Feixes de Laser Carmesim & Orbes」",
    image: carmillaImg,
    tone: "crimson",
    summary: "Invoca feixes de laser cortantes e esferas vampíricas perseguidoras.",
    lore: "Aristocrata que trocou a eternidade por um relicário de sangue, Carmilla coleciona os últimos suspiros de quem tenta atravessar seu salão. Seus feixes carmesins cortam o ar; suas orbes caçam o calor das almas vivas.",
  },
  {
    id: "beatrice",
    role: "Guardiã Final",
    name: "Beatrice",
    epithet: "Juíza do Abismo",
    act: "Ato III • Abismo Branco",
    spellCard: "「Sinfonia Final Danmaku & Absolução」",
    image: beatriceImg,
    tone: "gold",
    summary: "Serafim caída que domina todos os tipos de projéteis e padrões de Danmaku.",
    lore: "Serafim caída que julga cada alma no limiar do Abismo Branco. Beatrice conhece todos os padrões das guardiãs anteriores e os executa em uma única sinfonia. Sobreviver à sua sentença é a única absolvição possível.",
  },
];

export const ACTS = [
  {
    numeral: "I",
    name: "Catedral das Cinzas",
    guardian: "Seraphina",
    text: "Vitrais estilhaçados, velas que nunca se apagam e cinzas que caem como neve. O primeiro portão testa a calma de quem chega.",
  },
  {
    numeral: "II",
    name: "Relicário Carmesim",
    guardian: "Carmilla",
    text: "Um salão de veludo e ouro onde cada relíquia guarda um coração. Aqui, a luz corta e as sombras perseguem.",
  },
  {
    numeral: "III",
    name: "Abismo Branco",
    guardian: "Beatrice",
    text: "Um vazio radiante onde não há chão nem céu. O julgamento final da Alma Pálida acontece sob asas douradas.",
  },
];

export const DIFFICULTIES = [
  { name: "Fácil", desc: "Projéteis mais lentos e menos densos.", mult: "×1.0" },
  { name: "Médio", desc: "A experiência pensada pela criadora.", mult: "×1.5" },
  { name: "Difícil", desc: "Mais velocidade, mais densidade, menos respiro.", mult: "×2.2" },
  { name: "Lunático", desc: "Para quem já memorizou cada padrão.", mult: "×3.5" },
];
