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
        I’m Annalisa (Anna) Colarusso, a creative programme lead and digital practitioner working across
        <strong>higher education, community-led cultural projects, and artist support</strong>.
      </p>

      <p>
        I specialise in translating complex ideas into clear, accessible systems — whether that’s a curriculum,
        a digital platform, or a co-created exhibition. My practice sits where digital culture, UX,
        and community arts overlap.
      </p>

      <div class="cards">
        <article class="card">
          <h3>What I bring</h3>
          <p>
            Creative project and programme coordination, digital strategy and design, and artist support
            with a focus on long-term cultural development and access to space.
          </p>
        </article>

        <article class="card">
          <h3>Where I sit</h3>
          <p>
            Between UX and participatory design, cultural archives, photography, and
            research-led digital storytelling.
          </p>
        </article>
      </div>

      <h3>Interests</h3>
      <ul>
        <li>Digital culture and UX &amp; participatory design</li>
        <li>Community arts and artist support</li>
        <li>Photography and cultural archives</li>
        <li>Writing and creative technology</li>
      </ul>
    `
  },

  work: {
    kicker: "EXPERIENCE",
    title: "Work & Roles",
    html: `
      <p>
        My work moves across <strong>creative development, digital projects, and education</strong>,
        often acting as a bridge between practitioners, students, and organisations.
      </p>

      <div class="cards">
        <article class="card">
          <h3>Creative Programme / Digital Lead</h3>
          <p>
            Creative programme lead and digital specialist supporting artists, cultural practitioners,
            and small organisations to build meaningful digital presences.
          </p>
          <p>
            Responsibilities include web development, UX and branding, copy and narrative development,
            and end-to-end project delivery from discovery and structure to content and build.
          </p>
        </article>

        <article class="card">
          <h3>Freelance digital practice</h3>
          <p>
            Freelance UX and digital content work for artists and small organisations, designing brand identities,
            digital content, and websites that clarify their voice and values.
          </p>
          <p>
            Selected projects include Romina Key Photography (Squarespace redesign focused on emotional clarity),
            Konj Persian Cuisine (content and UX for a creative food business),
            and Legacy of Grandmothers (ongoing digital storytelling and heritage).
          </p>
        </article>

        <article class="card">
          <h3>Community & third-sector work</h3>
          <p>
            Experience across community-led and third-sector projects, including creative campaign work and
            trauma-informed, co-created exhibitions with Crisis UK and Children 1st.
          </p>
          <p>
            Skilled in stakeholder liaison, artist support, safeguarding-aware content creation, and
            holding space for participants through creative processes.
          </p>
        </article>
      </div>

      <p>
        Across all roles, I bring together organisation, empathy, and creative direction, with a strong track record
        of delivering meaningful, values-led projects with artists, students, and cultural organisations.
      </p>
    `
  },

  projects: {
    kicker: "SELECTED WORK",
    title: "Projects",
    html: `
      <p>
        A few projects that capture how I like to work: community-rooted, visually thoughtful,
        and grounded in care.
      </p>

      <div class="cards">
        <article class="card">
          <h3>Legacy of Grandmothers</h3>
          <p>
            Ongoing cultural storytelling project exploring memory, identity, and intergenerational heritage.
            I support digital presence, UX and branding, and content strategy so the project can grow sustainably online.
          </p>
        </article>

        <article class="card">
          <h3>Crisis UK — Photography Exhibition</h3>
          <p>
            Tutor and facilitator for a trauma-informed, co-created photography exhibition, supporting participants
            to use lens-based media to tell their own stories and engage the public.
          </p>
        </article>

        <article class="card">
          <h3>Our Hearings, Our Voices</h3>
          <p>
            Creative and digital support around the launch of a guide for care experienced children and young people
            in Scotland, aligning content and design with accessibility and safeguarding needs.
          </p>
        </article>

        <article class="card">
          <h3>Romina Key Photography</h3>
          <p>
            Full website rebrand and Squarespace build with a focus on emotional clarity and intuitive navigation
            for a photography practice.
          </p>
        </article>

        <article class="card">
          <h3>Konj Persian Cuisine</h3>
          <p>
            Content restructuring and UX flow for a creative food business, helping articulate cultural identity
            and offerings in a clear, welcoming way.
          </p>
        </article>
      </div>

      <h3>How I approach projects</h3>
      <ul>
        <li>Community-led and values-aligned decision making</li>
        <li>Careful documentation and research to support future growth</li>
        <li>Accessible, emotionally intelligent digital touchpoints</li>
      </ul>
    `
  },

  skills: {
    kicker: "TOOLKIT",
    title: "Skills & Tools",
    html: `
      <div class="cards">
        <article class="card">
          <h3>Programme & project</h3>
          <p>
            Creative project and programme coordination, artist support, stakeholder liaison,
            curriculum and workshop development, and cross-team communication.
          </p>
        </article>

        <article class="card">
          <h3>Digital & UX</h3>
          <p>
            UX and digital content design, information architecture, research documentation,
            and copywriting / narrative development for web and campaigns.
          </p>
        </article>

        <article class="card">
          <h3>Tools</h3>
          <p>
            Figma, Adobe Creative Suite, Squarespace, HTML, CSS, and JavaScript —
            used to build accessible, flexible digital experiences.
          </p>
        </article>

        <article class="card">
          <h3>Art & cultural practice</h3>
          <p>
            Community arts, photography and lens-based media, cultural archives, and writing, often combined
            with creative technology and participatory methods.
          </p>
        </article>
      </div>

      <p>
        I’m as comfortable in a design tool as I am in a community workshop — the through-line is an emphasis
        on clarity, care, and collaboration.
      </p>
    `
  },

  teaching: {
    kicker: "ACADEMIC PRACTICE",
    title: "Teaching & Research",
    html: `
      <p>
        I teach digital design, creative technology, and interaction as interconnected systems —
        combining conceptual design thinking with technical fluency and inclusive pedagogy to empower students
        as reflective practitioners.
      </p>

      <div class="cards">
        <article class="card">
          <h3>Course leadership</h3>
          <p>
            Course Leader for UX Design and Creative Programming (Level 11 MA) at Heriot-Watt University’s
            School of Textiles and Design.
          </p>
          <p>
            Designed and delivered curricula aligned with industry standards and creative practice,
            led assessment design, marking, and moderation with Course Boards,
            and supported students through project development, research, and portfolio building.
          </p>
        </article>

        <article class="card">
          <h3>University tutoring</h3>
          <p>
            University Tutor at Edinburgh Napier University’s School of Arts &amp; Creative Industries,
            teaching across Digital Design, HCI, Creative Practice, and Motion Design.
          </p>
          <p>
            Designed and led a Creative Direction course aligned with D&amp;AD standards (with students
            progressing to win D&amp;AD Pencils) and achieved 100% student satisfaction across taught modules.
          </p>
        </article>

        <article class="card">
          <h3>Research & public engagement</h3>
          <p>
            Research Assistant on UX and heritage, working with Dr Ian Donald and Dr John Morrison on
            research-through-design projects exploring how UX, games, and lens-based media can support
            heritage engagement and social change.
          </p>
          <p>
            Facilitator and tutor for trauma-informed, co-created exhibitions with Crisis UK,
            and creative lead for Children 1st campaigns and learning materials aligned with
            safeguarding and accessibility needs.
          </p>
        </article>

        <article class="card">
          <h3>Care experienced young people</h3>
          <p>
            Supported the development of creative activities for care experienced young people with CELCIS,
            Children 1st, and Our Hearings Our Voices, informing practice-based research on lens-based
            technologies, identity, and agency.
          </p>
        </article>

        <article class="card">
          <h3>Pedagogical focus</h3>
          <p>
            Focus areas include UX and interaction, design systems, creative coding, critique, and project development.
            I emphasise human-centred and participatory design methods, inclusive curriculum design, and
            critique cultures that build confidence and reflective practice.
          </p>
        </article>
      </div>

      <p>
        My goal is to raise designers who don’t just create — they question, iterate, and impact:
        understanding the systems, technologies, and communities their work touches.
      </p>
    `
  },

  contact: {
    kicker: "CONNECT",
    title: "Contact",
    html: `
      <p>
        For collaborations, programme development, teaching, or digital projects rooted in culture and community,
        I’d love to hear from you.
      </p>

      <div class="cta-row">
        <a class="inline-cta" href="mailto:annalisacolarusso@gmail.com">Email me</a>
        <a class="inline-cta" href="https://www.linkedin.com/in/annalisa-colarusso/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="inline-cta" href="https://itsannadesigns.substack.com/" target="_blank" rel="noopener noreferrer">Substack</a>
      </div>

      <p class="fineprint">
        I’m especially interested in work that supports creative communities, access to space,
        and long-term cultural development.
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
