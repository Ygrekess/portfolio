const data = [
  {
    _id: 1,
    name: "Festival des films de plein air",
    slug: "festival-films-plein-air",
    detail: "Création d'un site web pour la promotion d'un festival de cinéma",
    github:
      "https://github.com/Ygrekess/Projet-Openclassroom-LesFIlmsDePleinAir",
    resume:
      "L'idée de ce projet était de réaliser un blog pour un festival de cinéma fictif. Ce projet a été réalisé initialement lors de ma formation puis retravaillé afin de pouvoir le mettre en avant dans ce portfolio.",
    languages: [
      "/images-site/language/html.jpg",
      "/images-site/language/css.jpg",
      "/images-site/language/php.jpg",
      "/images-site/language/mysql.jpg",
    ],
    videos: [
      {
        _id: 1,
        path: "/videos-site/festival/homepage.mp4",
        title: "Page d'accueil.",
        description:
          "La page d'accueil rassemble les dernières actualités du festival ainsi que certains films. Elle offre la possibilité aux visiteurs de consulter le programme ainsi que de s'inscrire à la newsletter.",
      },
      {
        _id: 2,
        path: "/videos-site/festival/news.mp4",
        title: "Rubrique actualités.",
        description:
          "Cette page rassemble l'ensemble des actualités du festival. Le visiteur peut séléctionner l'article qui l'intéresse et le consulter.",
      },
      {
        _id: 3,
        path: "/videos-site/festival/movies.mp4",
        title: "Rubrique films.",
        description:
          "Cette page rassemble l'ensemble des films du festival. Le visiteur peut séléctionner le film qui l'intéresse et lire sa fiche. Depuis cette fiche, il peut voir la bande annonce ou même réserver sa place.",
      },
      {
        _id: 4,
        path: "/videos-site/festival/admin-connexion.mp4",
        title: "Page de connexion administrateur.",
        description:
          "Afin d'administrer le site, un espace administrateur a été créé où l'authentification est nécessaire.",
      },
      {
        _id: 5,
        path: "/videos-site/festival/espace-admin.mp4",
        title: "Espace administrateur.",
        description:
          "Depuis son compte, l'administrateur peut modifier ses informations de compte. Il peut également modifier ce qu'il souhaite voir apparaitre sur la page d'accueil.",
      },
      {
        _id: 6,
        path: "/videos-site/festival/add-news.mp4",
        title: "Modification des articles/films.",
        description:
          "Depuis son compte, l'administrateur peut ajouter/modifier des articles/films.",
      },
      {
        _id: 7,
        path: "/videos-site/festival/responsive.mp4",
        title: "Site entièrement responsive.",
        description:
          "Le site entier s'adapte à la taille de l'écran du visiteur, qu'il soit sur tablette, mobile ou ordinateur.",
      },
    ],
    photo: "/images-site/festival/photo.jpg",
  },
  {
    _id: 2,
    name: "Uploader de fichiers.",
    slug: "uploader-de-fichiers",
    detail: "Création d'une application web de partage de fichiers.",
    github: "https://github.com/Ygrekess/Projet-perso-Uploader",
    resume:
      "L'idée de ce projet était de réaliser une application web de partage de fichiers. Je souhaitais m'entrainer au développement backend sous Node tout en veillant à ce que le visuel soit plaisant.",
    languages: [
      "/images-site/language/node.jpg",
      "/images-site/language/react.jpg",
      "/images-site/language/css.jpg",
      "/images-site/language/mongodb.jpg",
    ],
    videos: [
      {
        _id: 1,
        path: "/videos-site/uploader/send-files.mp4",
        title: "Envoi de fichier",
        description:
          "L'expéditeur importe son/ses fichier(s), indique son adresse email ainsi que celle du destinataire puis valide l'envoi. Il peut également, s'il le souhaite, ajouter un message personnel.",
      },
      {
        _id: 2,
        path: "/videos-site/uploader/download-files.mp4",
        title: "Réception de fichier",
        description:
          "Le destinataire reçoit un email avec un lien de téléchargement. En cliquant dessus, il est redirigé vers la page de téléchargement.",
      },
      {
        _id: 3,
        path: "/videos-site/uploader/responsive.mp4",
        title: "Application responsive",
        description:
          "L'application s'adapte à la taille de l'écran du visiteur, qu'il soit sur tablette, mobile ou ordinateur.",
      },
    ],
    photo: "/images-site/uploader/photo.jpg",
  },
  {
    _id: 3,
    name: "Site e-commerce de création de portraits.",
    slug: "mon-portrait-design",
    detail: "Création d'un site e-commerce de portraits sur mesure.",
    github: "https://github.com/Ygrekess/Projet-ecommerce-portrait",
    resume:
      "L'idée du projet était de proposer des portraits sur mesure. Le client choisit son portrait, valide sa commande, transmet ses photos, et celles-ci sont ensuite retravaillées sous Photoshop avant d'être envoyées au client selon le support qu'il aura choisit.",
    languages: [
      "/images-site/language/node.jpg",
      "/images-site/language/react.jpg",
      "/images-site/language/css.jpg",
      "/images-site/language/mongodb.jpg",
    ],
    videos: [
      {
        _id: 1,
        path: "/videos-site/portrait/homepage.mp4",
        title: "Page d'accueil",
        description:
          "La page d'accueil met en avant les différents produits présents sur le site. Il y a également une section réservée aux avis reçus ainsi qu'une autre dont le but est de présenter rapidement la société.",
      },
      {
        _id: 2,
        path: "/videos-site/portrait/page-produits.mp4",
        title: "Page produits",
        description:
          "Cette page rassemble l'ensemble des produits proposés sur le site. Un outil de filtrage permet d'affiner les recherches. Une fois un produit séléctionné, le client a accés à sa fiche et peut ainsi l'ajouter au panier.",
      },
      {
        _id: 3,
        path: "/videos-site/portrait/commander.mp4",
        title: "Passer une commande",
        description:
          "Une fois le panier validé, l'authentification sera vérifiée puis le client sera redirigé vers la page 'Commande' afin de procéder au réglement. Dès que le réglement est validé, le client est transféré vers une page où il pourra transmettre ses photos.",
      },
      {
        _id: 4,
        path: "/videos-site/portrait/espace-client.mp4",
        title: "Espace client",
        description:
          "Depuis son espace client, l'utilisateur pourra modifier ses informations (de connexion ou personnelles) ainsi qu'accéder à ses commandes.",
      },
      {
        _id: 5,
        path: "/videos-site/portrait/espace-admin.mp4",
        title: "Espace administrateur",
        description:
          "Depuis l'espace administrateur, l'admin pourra ajouter/modifier des produits, consulter les commandes et visualiser la liste des utilisateurs.",
      },
    ],
    photo: "/images-site/portrait/photo.jpg",
  },
  {
    _id: 4,
    name: "Application web de gestion de données comptables.",
    slug: "gestion-donnees-comptables",
    detail:
      "Création d'une application web pour le traitement et la gestion de données comptables.",
    github: "https://github.com/Ygrekess/Projet-aurelie-comptable-2.0",
    resume:
      "L'idée du projet était de rendre plus simple la récupération, l'analyse et le traitement de données comptables pour une amie. Elle travaille pour un cabinet d'expertise comptable qui gère des pôles santé et doit convaincre des professionnels indépendants de se lier à un pôle. Pour cela, elle doit déterminer s'il est plus intéressant pour eux, en fonction de leurs charges, d'en rejoindre un ou non. (Toutes les données ci-dessous sont bien évidemment fictives)",
    languages: [
      "/images-site/language/node.jpg",
      "/images-site/language/react.jpg",
      "/images-site/language/css.jpg",
      "/images-site/language/mongodb.jpg",
    ],
    videos: [
      {
        _id: 1,
        path: "/videos-site/comptable/comptable-1.mp4",
        title: "Espace utilisateur",
        description:
          "Depuis son espace, l'administrateur peut consulter ses infos personnelles ou les modifier, accéder à la liste de l'ensemble des utilisateurs ainsi qu'aux données globales nécessaires aux calculs et aux données relatives à la CNIL.",
      },
      {
        _id: 2,
        path: "/videos-site/comptable/comptable-2.mp4",
        title: "Onglet 'Pôles Santé'",
        description:
          "Depuis l'onglet 'Pôles Santé', on accède aux informations relatives au pôle. On peut saisir une déclaration, ajouter les spécialités qui composeront le pôle, récupérer les déclarations saisies par les professionnels de santé en vu, ensuite, de les analyser.",
      },
      {
        _id: 3,
        path: "/videos-site/comptable/comptable-3.mp4",
        title: "Analyse globale",
        description:
          "Depuis l'onglet 'Analyse', on séléctionne la déclaration que l'on souhaite analyser et automatiquement les calculs sont effectués. Certaines cases sont modifiables afin d'accorder plus de flexibilité à l'utilisateur.",
      },
      {
        _id: 4,
        path: "/videos-site/comptable/comptable-4.mp4",
        title: "Analyse au cas par cas",
        description:
          "Depuis l'onglet 'Analyse', on peut également comparer une déclaration du pôle avec une déclaration saisie par un professionnel afin de déterminer s'il est intéressant pour lui de s'intégrer à un pôle ou s'il doit conserver son indépendance. Un PDF est téléchargeable afin de rendre l'analyse plus visuelle pour le professionnel.",
      },
    ],
    photo: "/images-site/comptable/comptable.jpg",
  },
];
export default data;
