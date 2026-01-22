<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';


  const projectDetails = {
    '01': {
      title: 'Match Made Mod',
      heroImage: '/Matchbox.jpeg',
      label: 'Print development',
      description: '"Match Made Mod" sparks a visual love affair between the fiery kitsch of Indian matchbox art and the clean, graphic allure of 1960s Mod culture. This print development celebrates bold contrasts; where the saturated palettes and folk illustrations of everyday Indian ephemera meet the sharp lines, mini silhouettes, and pop cool of Twiggy\'s era.',
      additionalImages: [
        { 
          src: '/Match1.jpeg', 
          // Split your caption into Title and Body
          captionTitle: 'The moodboard.', 
          captionBody: 'The contrast between both the pre dominant themes is displayed in the mood board through -a collage of Twiggy ,but her iconic eye make up being replaced with a matchbox artwork of a set of very expressive eyes. Striking typography ignite with geometric precision, creating a world that is both nostalgic and electric. "Match Made Mod" is about attitude: a fusion of East and West, street and studio, spark and sophistication.'
        },
        { 
          src: '/Match2.jpeg', 
          captionTitle: 'The color board.'
        },
        {
            src: '/Match3.jpeg',
            captionTitle: 'Print Developed.'
        }
      ]
    },
    '02': {
      title: 'Alien Fairytale',
      heroImage: '/alien.jpg',
      label: 'Character Design',
      description: 'A fairytale that feels familiar at first glance but slowly reveals something uncanny. The look is designed as a character costume from a parallel world.',
      additionalImages: [
        {
          src: '/alienflat.jpg',
          captionTitle: 'The making of the garment, Technical flat sketches',
          captionBody: 'This ensemble asks what happens when fairytales evolve beyond their original moral frameworks and enter a future or alien landscape. There combination of silk organza and denim is not usually associated together in ensembles. But here,it works together to express the clash between softness and structure ,which reinforces the idea of a being that is part human, part constructed.'
        },
        {
          src: '/SHOOT.jpg',
          captionBody: 'The pleated peg skirt grounds the look in tradition, referencing classic school-uniform silhouettes , yet its weight and precision contrast with the dreamlike rounded sleeves on the dolman top above, anchoring fantasy in control. Layers of opacity and transparency mirror dual identities—seen and unseen, human and otherworldly.'
        },
        {
          src: '/alienfinal.jpg'
        }
      ]
    },
    '03': {
      title: 'The Making Of Chai',
      heroImage: '/CHAI.jpg',
      label: 'a fashion design project',
      description: 'This project draws inspiration from the intimate, love-filled ritual of making chai—a process steeped in patience and care. From the first boil of water to the slow simmer of tea leaves, milk, sugar, and spice, chai is not just a beverage in India but an act of affection, often made for others. This ensemble translates this ritual into clothing that honours chai as a language of love—shared across kitchens, street corners, and conversations.',
      additionalImages: [
        {
          src: '/Makingofchai.jpg',
          captionBody: 'My garment represents the the milk boiling and rising slowly,while the brewing  tea gradually achieves its desired ‘chai’ shade with the infusion of milk-flowing gently.\n There is tucks manipulation on the top and light embroidery of beads amongst them to represent the spices.I tried envisioning the literal cup of tea,its making,pouring and consumption while trying to brainstorm the silhoutte of the ensemble.'
        },
        {
          src: '/Untitled-4.jpg',
          captionBody: 'Silhouettes flow between soft structure and gentle ease,mirroring the rhythm of stirring, boiling, and pouring. Layering reflects the gradual building of flavour, while textures reference steam, froth, and spice,and tactile surfaces suggesting comfort and familiarity. The colour palette is drawn from chai itself: milky beiges, deep tea browns, ginger ochres, and hints of cinnamon and clove. Handcrafted details like tucks and embroidery, symbolise the personal touch that makes every cup unique.'
        },
        {
          src: '/2.jpg',
          captionBody: 'Model- me \n Photography Credits- Ishita Mishra'
        }
      ]

    },
    '04': {
      title: 'Into the woods',
      heroImage: '/project4cov.jpg',
      label: 'Experimental Visual Identity',
      description: [
        /* This first string becomes your INTRO-LEAD */
        "A contemporary reimagining inspired by alexander mcqueen in this visual ode to alexander mcqueen’s fall 2008 collection—‘A tale of a girl who lives in an ancient elm and emerges to become a queen’.",
        
        /* Add this second string to appear as the secondary body text */
        "The styling pays tribute to mcqueen’s motifs: lacework, rich red tones, and silhouette drama, while consciously re-rooting them in south asian textiles and drapery. No military frogging or diamond diadems here, but oxidized silver, gathered pleats, and androgynous softness. Instead of a prince, the girl meets a companion who is equally erotic, fluid, and ornate. For it is not a coronation, but a reclamation."
      ],
      additionalImages: [
        {
          src: '/MoodBoard.jpeg', // Ensure this matches your filename
          captionBody: "This was a co-styling project. I worked on look 2, while look 1 was styled and draped by my peer Ishita Mishra.\n\nLook 1 channels a ghostlike restiveness and the lingering presence of someone who never left, someone whose life is woven into the forest’s very breath. He is the old friend: still here, still remembering, his silhouette evokes a soft melancholy and a quiet contrast to the queen’s return."
        },
        {
          src: '/ideation.jpeg',
          captionBody: 'Draped in layered lace slips, his torso becomes a poetic layering of fragility and devotion. the lace - sheer yet covering, evokes vulnerability without nudity.\n The sheet dhoti, flowing and unstitched, anchors him in tradition - timeless, loose, and unstructured. It evokes the organic flow of the forest and the unchanging rhythm of someone who has lived among the trees too long to be anything else.'
        },
        {
          src: '/hmm.jpeg'
        }
      ]
    },
    '05':{
      title: 'Sweet Home',
      heroImage: '/sweethome.jpeg',
      label: 'Garment \n design and \n sewing project',
      description: 'Sweet Home explores the emotional geography of a domestic space, celebrating home as a feeling rather than a place.',
      additionalImages: [
        {
          src: '/concept board.jpg',
          captionBody: "It is re-imagined through a child’s colourful imagination where the floor is bright blue,and the flower pot stands the same height as the couch.The vest becomes a soft architectural surface where windows,doors,couches,and plants are represented through patchwork and appliqué",

        },
        {
          src:'/3.jpg',
          captionBody: "It is how a child would perceive a domestic space that feels safe,comforting and warm to him-in his world of endless imagination.\n This vest was actually my first sewing project ever, and it was inspired by Lirika Matoshi’s ‘Apartment Coat’.\n \nIt is styled together with a red A-line skirt also designed and sewn by me."
        }
      ]
      
    },
    '06':{
      title: 'Noir',
      heroImage: '/Untitled-3.jpg',
      label: 'Fashion Illustration',
      description: 'NOIR is a fashion collection that reimagines the glamour and restraint of the 1920s through a contemporary lens, drawing from the cinematic shadows of classic noir and the refined American elegance of Bill Blass.',
      additionalImages: [
        {
          src: '/Untitled-6.jpg',
          captionBody: 'The final ensembles.\nOrnate textures, subtle embellishments, and plush fabrics are juxtaposed with sharp cuts and clear silhouettes to ensure that the designs feel timeless rather than nostalgic.'
        },
        {
          src: '/versailles.jpg',
          captionBody: 'The moodboard,fabric swatches,ideation,thumbnail and draft sketches.'
        },
        {
          src: '/Untitled-7.jpg',
          captionBody: 'Technical flat sketches of illustrated garments , fabric board.'
        }
      ]
    }
  };

  $: id = $page.params.id;
  $: project = projectDetails[id];
</script>

{#if project}
  <div class="project-view">
    <nav class="main-nav">
      <a href="/" class="nav-item home-blob">Home</a>
      <a href="{base}/projects" class="nav-item work-rect">Work</a>
      <a href="{base}/about" class= "nav-item about-circle">About</a>
    </nav>
    <a href="{base}/projects" class="back-link">← Back to projects</a>


    <header class="detail-header">
      <h1 class="large-title">{project.title}</h1>
    </header>

    <div class="hero-image-wrap">
      <img src={base}{project.heroImage} alt={project.title} />
    </div>

    <section class="description-section">
      <div class="meta-info">
        <span class="label">{project.label}</span>
        {#if project.secondaryImage}
          <div class="secondary-visual">
            <img src={project.secondaryImage} alt="Process work" />
          </div>
        {/if}
      </div>

      <div class="body-text">
        {#if Array.isArray(project.description)}
          {#each project.description as paragraph, i}
              <p class={i === 0 ? "intro-lead" : "secondary-body"}>{paragraph}</p>
          {/each}
        {:else}
            <p class="intro-lead">{project.description}</p>
        {/if}
      </div>
    </section>

    {#if project.additionalImages && project.additionalImages.length > 0}
      <section class="process-gallery">
        {#each project.additionalImages as item}
          <div class="gallery-item">
            <img src={base + item.src} alt={item.captionTitle} />
            <div class="caption-container">
              {#if item.captionTitle}
                <span class="caption-title">{item.captionTitle}</span>
              {/if}
              <div class="line-spacer"></div> 
              {#if item.captionBody}
                <p class="caption-body">{item.captionBody}</p>
              {/if}
            </div>
          </div>
        {/each}
      </section>
    {/if}
  </div>
{:else}
  <div class="error-state">
    <h1>Project Not Found</h1>
    <a href="/projects">Back to Work</a>
  </div>
{/if}

<style>
  .project-view { 
    background-color: #FDFBF0; 
    min-height: 100vh; 
    padding: 60px 5vw; /* Responsive side padding */
    position: relative;
    max-width: 1600px;
    margin: 0 auto;
  }

  /* TITLE: Massive, lowercase, and tight leading as per image */
  .large-title { 
    font-size: clamp(4rem, 12vw, 10rem); 
    font-family: RAG123;
    font-weight: 800; 
    color: #3d2b1f; 
    line-height: 0.85; 
    margin: 40px 0 60px 0; 
    font-family: 'RAG123', sans-serif;
    letter-spacing: -0.05em;
    text-transform: lowercase; /* Critical for the visual style */
  }

  .hero-image-wrap img { 
    width: 100%; 
    height: auto; 
    display: block; 
    margin-bottom: 100px; 
  }

  /* GRID: Asymmetric 1:1.5 ratio to create the offset label look */
  .description-section { 
    display: grid; 
    grid-template-columns: 1fr 1.5fr; 
    gap: 40px; 
    align-items: start;
    margin-bottom: 120px;
  }

  .label { 
    font-size: 1.2rem; 
    font-weight: 700; 
    text-transform: lowercase; 
    color: #3d2b1f; 
    display: block;
    line-height: 1.2;
    max-width: 150px;
    font-family: RAG123;
  }
  .body-text {
  display: contents;
  }


  /* Intro stays narrow & strong */
  .intro-lead {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.1;
    color: #3d2b1f;
    margin-bottom: 35px;
    letter-spacing: -0.02em;
    grid-column: 2;
  }

  /* Secondary paragraph becomes full-width */
 .secondary-body {
  grid-column: 1 / -1;   /* ← THIS IS THE KEY */
  max-width: 1200px;
  font-size: 2rem;
  line-height: 1.6;
  color: #3d2b1f;
  opacity: 0.9;
  margin-top: 20px;
  font-family: RAG123;
 }
  .back-link {
    position: absolute;
    top: 30px;
    left: 30px;

    font-family: RAG123;
    font-size: 1.6rem;
    text-decoration: none;
    color: black;

    opacity: 1;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .back-link:hover {
    opacity: 1;
    transform: translateX(-4px);
  }




  /* GALLERY: The grey frame for the Moodboard image */
  .process-gallery {
    display: flex;
    flex-direction: column;
    gap: 150px; 
  }

  .image-frame {
    background-color: #D9D9D9; /* Grey background from your reference */
    padding: 60px 10%; /* Creates the "inner frame" look */
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .image-frame img {
    width: 100%;
    height: auto;
  }

 .caption-container {
  width: 100%;
  max-width: none;
}


  .caption-title {
    font-size: 2rem;
    font-family: 'RAG123', sans-serif;
    text-transform: uppercase;
    color: #3d2b1f;
    display: block;
    margin-bottom: 20px;
  }

  .caption-body {
    font-size: 2rem;
    line-height: 1.5;
    color: #3d2b1f;
    font-family: RAG123;
    white-space: pre-line; /* Essential for your manual line breaks */
  }

  /* NAVIGATION: Positioned top right */
  .main-nav { position: absolute; top: 20px; right: 20px; display: flex; gap: 8px; z-index: 10; }
  .nav-item { padding: 12px 24px; font-weight: 600; text-decoration: none; color: inherit; display: flex; align-items: center; justify-content: center; font-size: 14px;}
  .home-blob { background-color: #ffc107; border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
  .work-rect { background-color: #3366FF; color: white; }
  .about-circle { background-color: #FF3300; color: white; border-radius: 50%; aspect-ratio: 1/1; }

  @media (max-width: 1024px) {
    .description-section { grid-template-columns: 1fr; gap: 20px; }
    .intro-lead { font-size: 1.8rem; }
    .image-frame { padding: 30px 5%; }
  }
</style>