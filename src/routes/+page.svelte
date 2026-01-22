<script>
  import { base } from '$app/paths';
  // Project grid data
  const projects = [
    { id: '01', title: 'Match Made Mod', image: '/Matchbox.jpeg' },
    { id: '02', title: 'Alien Fairytale', image: '/alien.jpg' },
    { id: '03', title: 'The Making Of Chai', image: '/CHAI.jpg' },
    { id: '04', title: 'Into the woods', image: '/Proj4.jpg' }
  ];
</script>

<div class="page-container">
  <nav class="main-nav">
    <a href="/" class="nav-item home-blob">Home</a>
    <a href="{base}/projects" class="nav-item work-rect">Work</a>
    <a href="{base}/about" class="nav-item about-circle">About</a>
  </nav>

  <header class="hero-header">
    <h1 class="hero-title">simran<br />bhowmick</h1>
  </header>

  <div class="cover-image-container">
    <img src="{base}/cover_Denoise.jpg" alt="Portfolio Cover" class="cover-image" />
  </div>
  <section class="project-grid">
    {#each projects as project}
     <a href={`${base}/projects/${project.id}`} class="project-link">
        <div class="project-card">
          <div class="project-image-wrapper">
            <img src="{base}{project.image}" alt={project.title} />
          </div>  
          <div class="project-info">
            <span class="project-number">PROJECT {project.id}</span>
            <h2 class="project-title">{project.title}</h2>
          </div>
        </div>
      </a>
    {/each}
  </section>

  <a href="/projects" class="banner-link">
    <section class="view-all-banner">
      <h2 class="view-all-text">View All Projects</h2>
      <div class="dotted-line"></div>
    </section>
  </a>
  <section class="about-preview">
    <p class="about-text">
      I am a 21 year old Fashion student at FIT, New York trying to create designs
      that explores memory, identity, and imagination as wearable narratives.
    </p>

    <a href="{base}/about" class="more-link">More about me →</a>
  </section>
</div>

<style>
  /* Your existing CSS for the yellow title and navigation */
  .hero-title { font-size: clamp(4rem, 16vw, 12rem); color: #ffd200; font-weight: 900; padding: 50px; font-family: RAG123; }
  .view-all-banner { background-color: #FFC107; padding: 100px 20px; text-align: center; }
  .view-all-text { font-size: 5rem; font-weight: 600; color: #FF3300; margin: 0; font-family: RAG123;}
  .banner-link { text-decoration: none; display: block; }
  /* Navigation Blobs */
  .main-nav { position: absolute; top: 0; right: 0; padding: 20px; display: flex; gap: 8px; z-index: 10; }
  .nav-item { padding: 12px 24px; font-weight: 600; text-decoration: none; color: inherit; }
  .home-blob { background-color: #ffc107; border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
  .project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 Column Grid */
    width: 100%;
    border-top: 1px solid #eee;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
  }

  /* Adds vertical border between columns */
  .project-card:nth-child(odd) {
    border-right: 1px solid #eee;
  }

  .project-image-wrapper {
    aspect-ratio: 1/1;
    overflow: hidden;
  }

  .project-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit:fill;
    transition: transform 0.5s ease;
    line-height: 0;
  }

  .project-image-wrapper img:hover {
    transform: scale(1.05);
  }

  .project-info {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
  }

  .project-number {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #888;
  }

  .project-title {
    font-size: 16px;
    font-style: italic;
    font-family: serif; /* Matches the contrast in the screenshot */
    margin: 0;
  }
  .project-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }
  .project-card {
    position: relative;
    cursor: none; /* hide default cursor */
  }

.project-card::after {
    content: "VIEW";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    background: #FFC107;
    color: #fff;
    font-family: RAG123;
    font-size: 1rem;
    padding: 18px 22px;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

.project-card:hover::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
.about-preview {
    padding: 80px 20px;
    max-width: 600px;
    margin: 0 auto;          /* centers horizontally */
    text-align: left;        /* matches screenshot */
  }

  .about-text {
    font-size: 1.5rem;
    font-family: RAG123;
    line-height: 1.7;
    color: #000;
    margin-bottom: 12px;
  }

  .more-link {
    font-size: 1rem;
    font-family: RAG123;
    color: #2a5bff;
    text-decoration: none;
  }

  .more-link:hover {
    text-decoration: underline;
  }


  .nav-item { padding: 12px 24px; font-weight: 600; font-family: RAG123; font-size: 14px; text-decoration: none; color: inherit; }
  .home-blob { background-color: #FFC107; border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
  .work-rect { background-color: #3366FF; color: white; } 
  .about-circle { background-color: #FF3300; color: white; border-radius: 50%; aspect-ratio: 1/1; }
  /* --- NAV HOVER ANIMATIONS --- */
.nav-item {
  position: relative;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background-color 0.25s ease;
}

/* subtle lift */
.nav-item:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* blob morph on hover */
.home-blob:hover {
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
}

/* rectangle gets softer */
.work-rect:hover {
  border-radius: 12px;
  background-color: #254fe3;
}

/* circle pulse */
.about-circle:hover {
  transform: translateY(-3px) scale(1.08);
}

</style>