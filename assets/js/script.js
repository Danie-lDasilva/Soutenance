const slides = [
    {
      img: 'assets/img/Analyse.jpg',
      img2: 'assets/img/Analyse 2.jpg',
      title: 'Analyse Concurrentielle',
      subtitle1: 'Démarche',
      text1: "Étude des sites concurrents pour comprendre les codes graphiques et ergonomiques des événements similaires.",
      subtitle2: 'Utilité',
      text2: "Elle a permis de définir des axes de différenciation et de poser des bases solides pour la direction artistique."
    },
    {
      img: 'assets/img/Maquette illustration.jpg',
      img2: 'assets/img/Maquette sobre.jpg',
      title: 'Maquettage',
      subtitle1: 'Démarche',
      text1: "Réalisation de plusieurs propositions sur XD, déclinées autour des couleurs, typos et éléments festifs du festival.",
      subtitle2: 'Utilité',
      text2: "Les maquettes ont servi de base aux retours de l’équipe pour ajuster le design avant intégration."
    },
    {
      img: 'assets/img/Code php.jpg',
        img2: 'assets/img/Code css.jpg',
      title: 'Développement',
      subtitle1: 'Démarche',
      text1: "Codage complet du site en PHP natif, structuration modulaire, intégration responsive et système dynamique.",
      subtitle2: 'Utilité',
      text2: "Création d’un site stable, esthétique et administrable, en phase avec l’ambiance du festival."
    }
  ];

  let current = 0;

  function changeSlide(step) {
    current = (current + step + slides.length) % slides.length;
    const s = slides[current];
    document.getElementById('slideShow').innerHTML = `
      <h3>${s.title}</h3>
      <h4>${s.subtitle1}</h4>
      <p>${s.text1}</p>
      <h4>${s.subtitle2}</h4>
      <p>${s.text2}</p>
      <div class="images-contain">
      <img src="${s.img}" alt="${s.title}">
      <img src="${s.img2}" alt="${s.title}">
      </div>
    `;
  }