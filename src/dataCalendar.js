const events = [
    {
      id: 1,
      date: '29 janvier 2024',
      subevents: [
        { time: '9 AM to 5 PM', title: 'Vente pour le petit-déjeuner et le repas',  description: 'Vente de nourritures et de boissons pour le petit-déjeuner et le déjeuner.', location: 'Bar à eau', members: 'Kelly, Jean-Baptiste', id: '1' },
        { time: '9 AM to 11.30 AM', title: 'Petit-déjeuner & annonce de candidature',  description: 'Les membres de la liste seront présents afin d’échanger avec les étudiants sur le programme de la liste, et celui de la semaine de campagne.', location: 'Cantina', members: 'tous', id: '2' },
        { time: '2 PM to 2.30 PM', title: 'Annonce du programme et lancement du jeu de la semaine ', description: 'Lancement du jeu de la semaine et annonce du programme.', members: 'tous', location: 'Bifrost, Hyrule', id: '2' },
      ]
    },
    {
      id: 2,
      date: '30 janvier 2024',
      subevents: [
        { time: '12 AM to 2 PM', title: 'vente de pokebowls',  description: 'vente de pokebowls appétissants', location: 'Bar à eau', members: 'Jean-Baptiste, Thomas T., Thomas R.', id: '4'},
        { time: '2 PM to 3.30 PM', title: 'Lancement du tutorat “Clean Code : coder rapidement et proprement”',  description: 'Une présentation du concept des tutorats. Ensuite, un retex par jedurand de sa lecture du livre “Clean Code” par Robert C. Martin. Finalement, une présentation par Truello de trucs et astuces (raccourcis, attitudes) à adopter pour coder plus propre et plus rapidement.', location: 'Holodeck', members: 'Jean-Baptiste, Thomas T., Thomas R.', id: '4'} 
      ]
    },
    {
      id: 3,
      date: '31 janvier 2024',
      subevents: [
        { time: '2 PM to 4 PM', title: 'Tournoi Smash Bros Ultimate',  description: '16 participants, se rendent à l’Arena Bar, où quatre écrans sont disponibles. Les étudiants qui souhaiteront s’ajouter à ces activités pourront regarder les matchs, et prendre des paris sur ces derniers. À la clé : des consommations offertes par le bar, des goodies etc.', location: 'Arena Bar', members: 'Antoine, Florent, Théo', id: '6' },
        { time: '4.30 PM to 5 PM', title: 'Couronnement du Phantom MLG',  description: 'Couronnement solennel du Phantom MLG de l’école 42 Perpignan, le vainqueur du tournoi Smash de l’après-midi. Celui-ci marchera sur le Bifrost afin de recevoir sa couronne de Laurier, son trophée et sa médaille. Sa traîne sera portée par le second et le troisième du tournoi, qui recevront une médaille chacun.', location: 'Bifrost', members: 'tous', id: '6' }
      ]
    },
    {
      id: 4,
      date: '01 février 2024',
      subevents: [
        { time: '10 AM to 12 AM', title: 'Atelier CV et lettre de motivation',  description: 'Un atelier pour partager l’expérience des deux intervenants en matière de CV et de candidature. Destiné aux étudiants qui sont en recherche de stage, d’emploi, ou aux étudiants qui souhaites commencer préparer leur entrée sur le marché du travail.', location: 'Atlantide', members: 'Jezabel, Florent, Kelly', id: '3' },
        { time: '4 PM to 6 PM', title: 'Café-discussion à la Botiga', description: 'Apéritif avec tarifs réduit à Sa Botiga, pour discuter des retours de la conférence ou simplement prendre du bon temps.', members: 'tous', location: 'Sa Botiga', id: '6' }
      ]
    },
    {
      id: 5,
      date: '02 février 2024',
      subevents: [
        { time: '2 PM to 3 PM', title: 'Retour sur le jeu de la semaine & récompense',  description: 'Retour et récompense du jeu de la semaine.', members: 'Antoine', location: 'Holodeck', id: '6' },
        { time: '7 PM to 11 PM', title: 'Soirée de clôture de la campagne',  description: 'Soirée de clôture de la campagne.', members: 'tous', location: 'Hyrule, Cantina, Bifrost', id: '6' },
        { time: '11 PM to 2 AM', title: 'After à l’Arena-Bar', description: 'After de la soirée de 42 à l’Arena Bar.', members: 'tous', location: 'Arena Bar', id: '6' }

      ]
    }
  ];
  
  export default events;
  