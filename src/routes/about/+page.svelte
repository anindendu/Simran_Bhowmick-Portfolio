<script>
  import { base } from '$app/paths';

  let copied = false;
  const email = "Simran_bhowmick@fitnyc.edu";

  function copyEmail() {
    navigator.clipboard.writeText(email).then(() => {
      copied = true;
      // Reset the "copied!" message after 2 seconds
      setTimeout(() => {
        copied = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
</script>
<!-- HERO -->
<section class="about-hero">
  <nav class="navbar">
    <a href="/" class="nav-link">Home</a>
    <a href="{base}/projects" class="nav-link work-link">Work</a> 
    <a href="/about" class="nav-link about-link">About</a>
  </nav>
  <h1 class="about-title">About</h1>

  <img 
    src="{base}/Simran.jpeg"
    alt="Simran Bhowmick"
    class="about-portrait"
  />
</section>

<!-- CONTENT -->
<section class="about-content">
  <div class="about-text">
    <p>
      Hi, I am Simran Bhowmick, a 21 year old fashion design
      student from FIT, New York and I believe in giving my best
      in everything I do. I am also deeply passionate about my
      Indian heritage which has shaped my identity and worldview.
    </p>

    <p>
      I like creating designs that narrate stories and are
      visually engaging. My work reflects my curiosity for
      everyday rituals, nostalgia, and alternate worlds.
    </p>
  </div>

  <div class="about-skills">
    <h3>SKILLS</h3>
    <ul>
      <li>Fashion illustration</li>
      <li>Garment construction & sewing</li>
      <li>Fashion styling</li>
      <li>Adobe Photoshop</li>
      <li>Adobe Illustrator</li>
      <li>Concept development</li>
    </ul>
  </div>

  <div class="about-contact">
    <h3>CONTACT</h3>
    <ul>
      <li><a href="https://www.instagram.com/calicocowls?igsh=cWRxY3A5cWdjcGgx&utm_source=qr">Instagram</a></li>
      <li><a href="https://www.linkedin.com/in/simran-bhowmick-a586552b6/">Linkedin</a></li>
      <li>
        <button class="copy-email-btn" on:click={copyEmail}>
          copy email
        </button>

        {#if copied}
          <span class="status-msg">copied!</span>
        {/if}
    </li>
    </ul>
  </div>
</section>
<style>
.about-hero {
  position: relative;
  background: #FFC107;
  height: 70vh;
  padding: 80px;
}

.about-title {
  position: absolute;
  bottom: -55px;
  left: 40px;
  font-size: clamp(6rem, 18vw, 14rem);
  font-weight: 600;
  color: white;
  margin: 0;
  font-family: Poppins;
}

.about-portrait {
  position: absolute;
  right: 80px;
  bottom: 25px;
  width: 260px;
  object-fit: cover;
  z-index: 2;
}

/* CONTENT */
.about-content {
  background: #FBF6E8;
  padding: 180px 80px 120px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 80px;

}

.about-text p {
  font-size: 1.4rem;
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 520px;
  font-family: RAG123;
}

.about-skills h3,
.about-contact h3 {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  margin-bottom: 20px;
  font-family: RAG123;
}

.about-skills ul,
.about-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: RAG123;
}

.about-skills li,
.about-contact li {
  margin-bottom: 10px;
  font-size: 1rem;
  font-family: RAG123;
}

.about-contact a {
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid currentColor;
  font-family: RAG123;
  
  /* Add these two lines */
  word-break: break-all; 
  display: inline-block;
}
/* NAVBAR STYLES */
.navbar {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  font-family: RAG123;
}

.nav-link {
  text-decoration: none;
  color: #333; /* Dark text for Home */
  font-weight: 600;
  font-size: 1rem;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px; /* Matching the height of the blue box */
  font-family: RAG123;
}

/* The Blue Work Square */
.work-link {
  background-color: #1A47D8; /* Royal Blue */
  color: white;
  width: 100px;
  font-family: RAG123;
}

/* The Orange About Circle */
.about-link {
  background-color: #FF3D00; /* Bright Orange/Red */
  color: white;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 10px 20px; /* Adds spacing from the edge and the blue box */
  padding: 0; /* Resets padding to keep circle perfect */
  font-family: RAG123;
}

/* Adjusting hero padding to ensure nav doesn't overlap content */
.about-hero {
  position: relative;
  background: #FFC107;
  height: 70vh;
  padding: 80px;
  overflow: hidden; /* Keeps the circle from spilling out if necessary */
  font-family: RAG123;
}
.copy-email-btn {
  background: none;
  border: none;
  padding: 0;
  font-family: RAG123;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
  color: inherit;
  margin-bottom: 10px;
}

.copy-email-btn:hover {
  color: #1A47D8; /* Matches your blue 'Work' button */
}

.status-msg {
  font-size: 0.8rem;
  color: #1A47D8;
  margin-left: 8px;
  font-family: RAG123;
  font-weight: bold;
}

/* IMPORTANT: Ensure the hero doesn't cut off your portrait */
.about-hero {
  position: relative;
  background: #FFC107;
  height: 70vh;
  padding: 80px;
  overflow: visible; /* Changed from hidden so the portrait can overlap */
}
/* --- NAV HOVER ANIMATIONS (ABOUT PAGE) --- */
.nav-link {
  position: relative;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background-color 0.25s ease;
}

/* subtle lift for all */
.nav-link:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* HOME (plain text link) */
.nav-link:not(.work-link):not(.about-link):hover {
  text-decoration: underline;
}

/* WORK – blue square softens */
.work-link:hover {
  border-radius: 14px;
  background-color: #143bb5; /* slightly darker blue */
}

/* ABOUT – orange circle pulse */
.about-link:hover {
  transform: translateY(-3px) scale(1.1);
}



</style>