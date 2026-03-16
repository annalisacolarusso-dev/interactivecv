const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const kicker = document.getElementById("modal-kicker");
const content = document.getElementById("modal-content");
const closeBtn = document.getElementById("close");

const sections = {
  about: {
    kicker: "PROFILE",
    title: "About",
    html: `
      <p>
        I’m an Italian designer and creative technologist working at the intersection of
        <strong>culture, education, and tech</strong>.
      </p>

      <p>
        My work is shaped by a strong interest in clarity: how interfaces, narratives,
        and structures help people make sense of complexity.
      </p>

      <div class="cards">
        <article class="card">
          <h3>What defines my approach</h3>
          <p>
            Human-centred and participatory design, accessibility, and inclusion
            to produce work that drives change and innovation.
          </p>
        </article>

        <article class="card">
          <h3>Where I work best</h3>
          <p>
            Projects involving education, heritage, storytelling, digital identity,
            and design thinking.
          </p>
        </article>
      </div>

      <h3>What I care about</h3>
      <ul>
        <li>Design research</li>
        <li>Interactive storytelling</li>
        <li>Culture and education</li>
        <li>UX, AR, and participatory design</li>
      </ul>
    `
  },

  work: {
    kicker: "EXPERIENCE",
    title: "Work",
    html: `
      <p>
        My practice moves between <strong>design, technology, and teaching</strong>,
        translating complex ideas into clear and usable systems.
      </p>

      <div class="cards">
        <article class="card">
          <h3>University teaching</h3>
          <p>
            Supporting MA students in Digital Design and Innovation at Heriot-Watt University
            across digital design, UX, interaction, and creative technology.
          </p>
        </article>

        <article class="card">
          <h3>Freelance design</h3>
          <p>
            Building brands, websites, and digital experiences for the third sector,
            independent clients, and cultural projects across Edinburgh.
          </p>
        </article>

        <article class="card">
          <h3>Creative technology</h3>
          <p>
            Developing AR experiences where narrative, interface, and experimentation meet.
          </p>
        </article>
      </div>

      <p>
        I work particularly well in interdisciplinary roles where strategic thinking,
        leadership, design craft, and communication all matter.
      </p>
    `
  },

  projects: {
    kicker: "SELECTED WORK",
    title: "Projects",
    html: `
      <p>
        I’m interested in projects that combine strong visual thinking with structure,
        usefulness, and a clear point of view.
      </p>

      <div class="cards">
        <article class="card">
          <h3>Legacy of Grandmothers</h3>
          <p>
            A storytelling and archival project exploring memory, lineage,
            and intergenerational voice.
          </p>
        </article>

        <article class="card">
          <h3>Interactive CV</h3>
          <p>
            A navigable portfolio system designed as both interface and self-authored narrative.
          </p>
        </article>

        <article class="card">
          <h3>Client work</h3>
          <p>
            Brand identities, website builds, and digital experiences for independent practice
            and culture-led work.
          </p>
        </article>
      </div>

      <h3>What makes a project feel like mine</h3>
      <ul>
        <li>Accessibility and empathy at the heart of my design</li>
        <li>Community-engagement-driven projects</li>
        <li>Human, intuitive interaction between the user and the interface</li>
      </ul>
    `
  },

  skills: {
    kicker: "TOOLKIT",
    title: "Skills",
    html: `
      <div class="cards">
        <article class="card">
          <h3>Design</h3>
          <p>
            Brand systems, front-end web development, UX design, typography, layout,
            and art direction.
          </p>
        </article>

        <article class="card">
          <h3>Technology</h3>
          <p>
            HTML, CSS, JavaScript, Figma, Adobe Suite, prototyping, and creative coding.
          </p>
        </article>

        <article class="card">
          <h3>Leadership</h3>
          <p>
            Systems thinking, narrative design, critique, and iteration,
            with a focus on community engagement and participation.
          </p>
        </article>
      </div>

      <p>
        I care about tools, but I care even more about <strong>judgement</strong> —
        choosing the right level of complexity for the problem.
      </p>
    `
  },

  teaching: {
    kicker: "EDUCATION",
    title: "Teaching",
    html: `
      <p>
        I teach and mentor around digital design, creative technology, and the relationship
        between concept, interface, and execution.
      </p>

      <p>
        I believe in building a world where everyone has access to compassionate,
        accessible, and inclusive education. I want to help shape a generation of
        thoughtful innovators who can break through barriers with confidence and care.
      </p>

      <p>
        My approach emphasises critical thinking, iteration, and understanding
        the systems behind the surface.
      </p>

      <div class="cards">
        <article class="card">
          <h3>Focus areas</h3>
          <p>
            UX and interaction, design systems, creative coding, critique,
            and project development.
          </p>
        </article>

        <article class="card">
          <h3>How I teach</h3>
          <p>
            By helping students make strong, informed decisions — not just pretty outcomes.
          </p>
          <p>
            By fostering a culture of globally minded specialists who approach
            the industry with competence and confidence.
          </p>
        </article>
      </div>
    `
  },

  contact: {
    kicker: "CONNECT",
    title: "Contact",
    html: `
      <p>
        For collaborations, teaching opportunities, freelance work,
        or thoughtful digital projects, I’d love to hear from you.
      </p>

      <div class="cta-row">
        <a class="inline-cta" href="mailto:annalisacolarusso@gmail.com">Email me</a>
        <a class="inline-cta" href="https://www.linkedin.com/in/annalisa-colarusso/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="inline-cta" href="https://itsannadesigns.substack.com/" target="_blank" rel="noopener noreferrer">Substack</a>
        <a class="inline-cta" href="https://www.instagram.com/annacandesign/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      <p class="fineprint">
        I’m especially interested in work that sits between design, culture,
        and digital storytelling.
      </p>
    `
  }
};

let lastFocusedElement = null;

function openModal(sectionKey) {
  const section = sections[sectionKey];
  if (!section) return;

  lastFocusedElement = document.activeElement;

  kicker.textContent = section.kicker;
  title.textContent = section.title;
  content.innerHTML = section.html;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeBtn.focus();
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll("[data-section]").forEach((element) => {
  element.addEventListener("click", () => {
    openModal(element.dataset.section);
  });
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/* subtle pointer tilt for desktop */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  document.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("mousemove", (event) => {
      if (window.innerWidth <= 900) return;

      const rect = tile.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = ((y / rect.height) - 0.5) * -10;

      tile.style.transform = `
        translateY(-5px)
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    });

    tile.addEventListener("mouseleave", () => {
      tile.style.transform = "";
    });
  });
}
