import FlorentImage from './images/leaders/icone_fbelotti.webp';
import KellyImage from './images/leaders/icone_kbrenner.webp';
import JezaImage from './images/leaders/icone_jeguerin.webp';
import TheoImage from './images/leaders/icone_tgirardi.webp'
import JBImage from './images/leaders/icone_jedurand.webp';
import ThomasImage from './images/leaders/icone_thomas.webp';
import ThoribalImage from './images/leaders/icone_thoribal.webp';
import AntoineImage from './images/leaders/icone_anporced.webp';
import AgnesImage from './images/leaders/icone_agnes.webp';
import KellyIllustration from './images/leaders/web_hov_pasteur_fullwidth.webp';
import FlorentIllustration from './images/leaders/Bio_-_fbelotti.webp';
import TheoIllustration from './images/leaders/Bio_-_Theo.webp';
import JbIllustration from './images/leaders/Bio_-_Jedurand.webp';
import JezaIllustration from './images/leaders/Bio_-_Jeguerin.webp';
import ThomasIllustration from './images/leaders/bio_-_thomas.webp';
import AgnesIllustration from './images/leaders/Bio_-_Agnes.webp';
import ThoribalIllustration from './images/leaders/Bio_-_Thoribal.webp';
import AntoineIllustration from './images/leaders/Bio_-_Anporced.webp';

const people = [
    {
      id: 1,
      image: FlorentImage,
      login: 'fbelotti',
      fonction: 'président',
      membername: 'Florent',
      illustration: FlorentIllustration,
      bio: 'Penser que le camarade Belotti est né durant le XIVe siècle est une erreur commune qu’il nous faut corriger. Son époque est 1999, et son lieu est Avignon ; mais il est normal d’être trompé : le Président du Comité est un homme d’allure, du veston jusqu’aux mocassins, et sa langue est si habile qu’on pourrait croire que c’est elle qui fait ses lacets. Sa réputation de beauté légendaire s’accole à son nom. Il est, il restera Belo. Avant de tomber de Paris en Perpignan, le camarade Belotti fit de son habileté à parler sa première activité, cette dernière cumulant deux avantages pour lui : être facile et être plaisant. Assoiffé de concret et d’euros, il rejoint l’école 42 de Perpignan, où il convainc, et ses plus proches camarades, et les plus éloignés, de se joindre à lui au sein d’un comité pour une vivre une grande aventure électorale.  Au sein de sa liste, aucune richesse n’échappe à sa main : le github du camarade Durand, le repas de la vice-présidente, ou le temps libre du jeune Thoribal. Tout doit s’incliner, plier ou rompre devant sa plaintive autorité. Mais l’idée d’un WEI de légende loge dans l’esprit de cet homme fantasque et mesquin, pour qui la raison du Comité domine toutes les autres.'
    },
    {
      id: 2,
      image: TheoImage,
      membername: 'Theo',
      login: 'Tgerardi',
      fonction: 'chargé de communication',
      illustration: TheoIllustration,
      bio: "Le 15 août 2000, la ville de Montpellier fut le théâtre d'un événement des plus mystérieux avec la naissance de Théo Gerardin. C’est un être entouré d'un halo de mystère, particulièrement concernant ses activités (ou plutôt, son absence d'activités) durant la période de 1933 à 1945. Le camarade Théo insiste, d’une manière presque troublante, pour que l'on certifie qu'il n'a absolument rien fait, absolument aucune action à signaler durant cette période. Un point sur lequel il demeure étonnamment ferme. Mais la véritable énigme de Théo Gerardin ne réside pas seulement dans ce passé qu'il s'efforce de nier, mais également dans son apparition à l'école 42. Personne ne sait vraiment comment il a émergé dans les clusters. Il est toujours présent et pourtant insaisissable, comme flottant entre les dimensions de l'espace et du temps. Le camarade Gerardin manie l'art de la parole et de l'image avec une dextérité qui confine à la magie. Ses compétences en communication sont telles qu’il semble toucher nos esprits de manière"
    },
    {
      id: 3,
      image: KellyImage,
      membername: 'Kelly',
      login: 'Kbrener',
      fonction: 'chargé de relation avec les stagiaires',
      illustration: KellyIllustration,
      bio: "C’est le 12 août 1987 à Villecresnes, qu’un long processus de morphogenèse embryonnaire, conduisit à la formation d’un organisme complexe et fonctionnel : la camarade Kelly Brener. Notre camarade dit être docteure, et avoir écrit une thèse intitulée 'Dynamique de l’holobionte corallien et plasticité transcriptomique : variabilité interindividuelle, interpopulationnelle et interspécifique'. Cependant, lorsqu'elle l’explique, personne n’en comprend le sujet, donc nous devons la croire sur parole. On dit également qu’elle aurait inventé le vaccin. L'histoire raconte que, alors que Kelly cherchait désespérément une éprouvette, Pasteur s'empara de l'occasion pour s'attribuer le mérite de sa recherche, posant ainsi pour la célèbre peinture qui immortalisa son 'travail'. Dégoutée par le milieu scientifique et limité par son trop haut niveau de qualification, elle décida de se consacrer à l’éducation des jeunes esprits afin que peut-être, un jour, l’un d’entre eux accepte de l’embaucher. Elle devint ainsi conseillère d’éducation au prestigieux lycée BeauSoleil de Céret. Soucieuse de battre le record de reconversion dans une vie, elle a intégré 42 et est à présent chargée de relation au sein de notre honorable comité. Nul doute que sa grande expérience dans (presque) tous les milieux sera mise au bénéfice de tous, contrairement aux vaccins qu’elle aurait souhaité payant."
    },
    {
      id: 4,
      image: JBImage,
      login: 'jedurand',
      fonction: 'trésorier',
      illustration: JbIllustration,
      membername: 'Jean Baptiste',
      bio: "Il est dit que, le jour de sa naissance le 02 novembre 2000 à Metz, le camarade Durand sortit de sa mère tout en armes, un clavier à la main, déjà fort de sa stature d’adulte, prêt à coder et à briser les chaînes de l’ignorance, pour lui-même et pour tous ses camarades.Très vite, son génie lui valut d’être reconnu par ses paires. Au cœur de la Seconde Guerre Mondiale, il fut l'artisan clé dans le décodage de la machine Enigma, soufflant la plupart des réponses à Turing afin qu’il parvienne à passer l’examen de la postérité. Dans son élan pour nourrir le corps et l'esprit de toute l’humanité, Jean-Baptiste a ensuite embrassé une entreprise populaire, tenant une honorable sandwicherie. Elle devait cependant être fermée par une cabale, effrayée par l’avant-gardisme culinaire du camarade Durand. Aujourd’hui encore, le camarade Durand continue de forger les outils du futur, en mettant sa force de travail au service du projet visionnaire “Frui” et en assumant la charge de trésorier au sein de notre noble Comité."
    },
    {
      id: 5,
      image: JezaImage,
      login: 'Jeguerin',
      fonction: 'vice-présidente',
      membername: 'Jézabel',
      illustration: JezaIllustration,
      bio: "C’est le 15 avril 1997 à Perpignan que Jézabel Guérin organisa sa propre naissance. Dotée d’un esprit aussi vif que son caractère est tranché, elle décida dans la foulée de réformer l’armée rouge, jouant ainsi un rôle crucial dans la Révolution Russe. C’était là une tâche herculéenne qui aurait découragé les âmes les moins vaillantes. Cependant, détermination et ferveur ne font jamais défaut à la camarade Jézabel, sauf à partir de la seconde semaine de travail sur un projet de l’école 42. Profitant de son expérience acquise en organisation, elle prit la décision de consacrer sa vie à organiser et à parler pour les autres, en entreprise comme en université, en commençant par tous ceux qui gravitent autour d’elle. Mais la camarade Jézabel devait faire face à une réalité bien cruelle : les gens sont des chèvres. Face à ce funeste constat, elle décida de diriger des programmes à défaut des gens. La camarade Jézabel, c’est une main de fer dans un gant de velours, dont la gifle ne laisse à celui qui la reçoit que la sensation que, dans un sens, il l’avait mérité. Avec elle pour vice-présidente du Comité, il ne fait aucun doute que les membres seront obligés de travailler sur des projets toujours plus ambitieux, et que le président de notre illustre liste poursuivra son régime. "
    },
    {
      id: 6,
      image: ThomasImage,
      membername: 'Thomas Tr.',
      login: 'Truello',
      illustration: ThomasIllustration,
      fonction: 'chargé des tutorats',
      bio: "Le 11 juin 2002, dans la ville de Villepinte, marque la naissance de Thomas Ruello, un esprit destiné à soulever les masses et la fonte. On peut le voir ici, dans un geste de défiance, porter un short lors de la remise de sa récompense pour sa participation controversée au développement de la bombe atomique. Ce short devait devenir un symbole de la lutte pour le désarmement nucléaire, à l’origine du slogan pacifiste “Les genoux au frais, la tête froide” scandé par les mouvements pacifistes durant la guerre froide. Accablé par sa honte face à sa participation dans ce funeste projet, le camarade Ruello se consacrera corps et âme à la salle de sport, loin des ombres de la guerre et des arsenaux nucléaires. Il y trouva non seulement la paix intérieure, mais aussi une nouvelle vocation : aider les autres à canaliser leur force pour le bien commun, loin des erreurs du passé. Au sein du Comité Constitué des Camarades Codeurs, Thomas Ruello occupe le pôle tutorat, une position qu'il a choisie non par hasard, mais par dévouement. Son objectif est clair : empêcher les jeunes camarades de commettre les mêmes erreurs qu'il a faites. Il guide les étudiants avec sagesse et prudence, leur enseignant que le vrai pouvoir réside non pas dans la domination ou la destruction, mais dans la capacité de construire, d'éduquer et de fortifier l'esprit et le corps."
    },
    {
      id: 7,
      image: AgnesImage,
      membername: 'Agnes',
      login: 'Agtshiba',
      fonction: 'support aux activités',
      illustration: AgnesIllustration,
      bio: "Dans les annales de notre épopée moderne, il est une figure dont l'entrée en scène défie l'entendement commun. En effet, c’est au terme de la mission spatiale Apollo 13 que l’on découvrit la camarade Agnès dans l’équipage du vaisseau, comme s’il elle eut toujours été là. D'une nature stoïque, elle incarne la résilience et la sérénité face aux tempêtes de la vie. Sa présence, bien que silencieuse, est assourdissante de sagesse et de stabilité. Dans un monde où les mots sont souvent gaspillés, chaque geste, chaque regard d'Agnès porte en lui une profondeur et une intention qui transcendent le besoin des paroles. Au sein du Comité, Agnès est la pierre angulaire du pôle support, chargée de la communication et de l'élaboration du site de la liste. Sa capacité à transmettre des messages puissants par la télékinésie, ou via des supports de communication est sans égal. Aujourd'hui, Agnès continue d'œuvrer dans l'ombre, son modeste génie guidant notre liste vers le succès."
    },
    {
      id: 8,
      image: ThoribalImage,
      membername: 'Thomas Th.',
      login: 'Thoribal',
      illustration: ThoribalIllustration,
      fonction: 'chargé du tutorat',
      bio:  "C’est le 20 novembre 2005 que devait naître le camarade Thomas Ribalta, à Perpignan. Influencé toute son enfance par ce haut-lieu de culture, il fit montre d’une telle avance intellectuelle par rapport à ses paires de la génération Z que l'on choisit unanimement de dater le début de la génération Alpha à sa naissance. Avec une précocité stupéfiante, Thomas, alors même qu’il n’était pas encore né, prit part à l'une des aventures les plus audacieuses de l'époque moderne : l'élaboration du premier Macintosh. Cependant, l'histoire officielle n'a jamais reconnu son importante contribution. La société Apple, craignant d'associer son image à celle du travail des enfants, choisit de ne pas créditer le jeune fœtus. Ironiquement, cette expérience marqua un tournant, poussant l'entreprise à s'ouvrir de plus en plus à l'exploitation des enfants, une pratique qu'elle finit par accepter totalement. Bien que le plus jeune de notre liste, le camarade Ribalta détient la sagesse des anciens. Chargé des tutorats au sein de notre liste, il se dévoue corps et âme à l'éducation et à l'élévation de ses camarades, les aidant quand il peut, et traduisant des tutoriels turcs entre-temps pour se détendre. "
    },
    {
      id: 9,
      image: AntoineImage,
      membername: 'Antoine',
      login : 'Anporced',
      fonction: 'support aux activités',
      illustration: AntoineIllustration,
      bio: "Le 02 mai 2000 à Aix-en-Provence naissait le camarade Porceddu. Né dans une famille de grande noblesse aux origines chevaleresque, Antoine se détournera cependant de l’équitation et des études littéraires pour se dédier à sa véritable passion : sur-analyser l’univers de Pokemon.  À terme, il réalisera son rêve et rejoindra l’équipe de Game Freaks, qu’il quittera instantanément après la création du pokemon “nymphalie” sous prétexte que “rien ne va avec ce truc”. Il rejoindra ensuite Masahiro Sakurai au sein de l’équipe de développement de Smash Bros, dans laquelle il militera afin d’interdire toute forme de compétition pour respecter la nature de party game du titre. Aujourd’hui, comme il en a l’habitude, le camarade Porcedu passe de cluster en cluster, aidant de temps à autre, mais faisant une démonstration de son so_long la plupart du temps. Au sein de notre liste, il fait pratiquement la même chose : il passe, et il aide de temps à autre.  "
    }
  ];
  
  export default people;