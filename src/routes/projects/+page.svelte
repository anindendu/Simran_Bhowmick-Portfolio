<script>
  import { base } from '$app/paths';

  // Comprehensive list of all projects
  const allProjects = [
    { 
      id: '01', 
      title: 'Match Made Mod', 
      image: '/Matchbox.jpeg',
      desc: '"Match Made Mod" sparks a visual love affair between the fiery kitsch of Indian matchbox art and the clean, graphic allure of 1960s Mod culture. This print development celebrates bold contrasts ; where the saturated palettes and folk illustrations of everyday Indian ephemera meet the sharp lines, mini silhouettes, and pop cool of Twiggy’s era..'
    },
    {
      id: '02',
      title: 'Alien Fairytale',
      image: '/alien.jpg',
      desc: 'A  fairytale that feels familiar at first glance but slowly reveals something uncanny. The look is designed as a character costume from a parallel world, where traditional narratives of femininity are preserved yet subtly mutated.'
    },
    {
      id: '03',
      title: 'The Making of Chai',
      image: '/CHAI.jpg',
      desc: 'This project draws inspiration from the intimate, love-filled ritual of making chai—a process steeped in patience and care. From the first boil of water to the slow simmer of tea leaves, milk, sugar, and spice, chai is not just a beverage in India but an act of affection, often made for others. This ensemble translates this ritual into clothing that honours chai as a language of love—shared across kitchens, street corners, and conversations.'
    },
    {
      id: '04',
      title: 'Into the woods',
      image: '/Proj4.jpg',
      desc: 'A contemporary reimagining inspired by alexander mcqueen in this visual ode to alexander mcqueen’s fall 2008 collection—‘A tale of a girl who lives in an ancient elm and emerges to become a queen.’'
    },
    {
      id: '05',
      title: 'Sweet home',
      image: '/sweethome.jpeg',
      desc: 'Sweet Home explores the emotional geography of a domestic space, celebrating home as a feeling rather than a place.'
    },
    {
      id: '06',
      title: 'Noir',
      image: '/noir.jpg',
      desc: 'NOIR is a fashion collection that reimagines the glamour and restraint of the 1920s through a contemporary lens, drawing from the cinematic shadows of classic noir and the refined American elegance of Bill Blass..'
    }
  ];
</script>

<div class="projects-page">
  <nav class="main-nav">
    <a href="/" class="nav-item home-blob">Home</a>
    <div class="nav-item work-rect active">Work</div>
    <a href="{base}/about" class="nav-item about-circle">About</a>
  </nav>

  <header class="portfolio-header">
    <h1 class="header-text">Portfolio<sup>06</sup></h1>
  </header>

  <main class="projects-list">
    {#each allProjects as project}
      <section class="project-entry">
        <div class="project-details">
          <div class="detail-top">
            <span class="proj-id">PROJECT {project.id}</span>
            <h2 class="proj-name">{project.title}</h2>
          </div>
          
          <div class="detail-bottom">
            <p class="proj-desc">{project.desc}</p>
            <a href="{base}/projects/{project.id}" class="case-study-link">View case study &rarr;</a>
          </div>
        </div>

        <div class="project-visual">
          <a href="{base}/projects/{project.id}">
            <img src={base}{project.image} alt={project.title} />
          </a>
        </div>
      </section>
    {/each}
  </main>
</div>

<style>
  /* Keep your existing CSS from the prompt here */
  .projects-page { background-color: #FDFBF0; min-height: 100vh; font-family: 'Inter', sans-serif; }
  .main-nav { position: absolute; top: 0; right: 0; padding: 20px; display: flex; gap: 8px; z-index: 10; }
  .nav-item { padding: 12px 24px; font-weight: 600; font-size: 14px; text-decoration: none; color: inherit; }
  .home-blob { background-color: #FFC107; border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
  .work-rect { background-color: #3366FF; color: white; } 
  .about-circle { background-color: #FF3300; color: white; border-radius: 50%; aspect-ratio: 1/1; }
  .portfolio-header { padding: 100px 50px 20px; position: relative; }
  .header-text { font-size: clamp(5rem, 15vw, 15rem); font-weight: 900; color: #FF3300; margin: 0; line-height: 0.9; font-family: RAG123; margin-left: -36px; }
  .header-text sup { font-size: 0.35em; vertical-align: top; margin-left: -10px; }
  .project-entry { display: grid; grid-template-columns: 25% 75%; border-top: 1px solid #ddd; }
  .project-details { padding: 30px; display: flex; flex-direction: column; justify-content: space-between; background-color: #FDFBF0; }
  .proj-id { font-size: 1.5rem; font-family: serif; text-transform: uppercase;font-family: RAG123; }
  .proj-name { font-size: 1.5rem; margin: 5px 0 0; font-family: serif;font-family: RAG123; }
  .proj-desc { font-size: 1.5rem; line-height: 1.4; color: #000; margin-bottom: 20px; font-weight: 600; font-family: RAG123; }
  .case-study-link { color: #FFC107; text-decoration: none; font-weight: 700; font-size: 12px; }
  .project-visual img { width: 100%; height: auto; display: block; object-fit: cover; cursor: pointer; }
  /* --- NAV HOVER ANIMATIONS (PORTFOLIO PAGE) --- */
.nav-item {
  position: relative;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background-color 0.25s ease,
    border-radius 0.25s ease;
}

/* lift on hover (only for clickable items) */
.nav-item:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* HOME – blob morph */
.home-blob:hover {
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
}

/* ABOUT – circle pulse */
.about-circle:hover {
  transform: translateY(-3px) scale(1.1);
}

/* WORK – active state (no hover motion) */
.work-rect.active {
  cursor: default;
  box-shadow: none;
  transform: none;
}

</style>