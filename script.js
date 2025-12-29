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
        I’m a designer and creative technologist working at the intersection of
        <strong>culture, education, and digital systems</strong>.
      </p>

      <p>
        My work focuses on how people make sense of information — and how interfaces,
        narratives, and structures shape understanding, behaviour, and trust.
      </p>

      <p>
        I’m drawn to projects that require both clarity and sensitivity:
        work that is conceptually rigorous, visually intentional, and grounded in
        real human use.
      </p>

      <p>
        I care less about trends, and more about building things that hold up over time.
      </p>

      <h3>What I care about</h3>
      <ul>
        <li>Design systems</li>
        <li>Interactive storytelling</li>
        <li>Culture & education</li>
        <li>UX & visual identity</li>
      </ul>
    `
  },

  work: {
    kicker: "EXPERIENCE",
    title: "Work",
    html: `
      <p>
        My practice moves between design, technology, and teaching — often translating
        complex ideas into clear, usable systems.
      </p>

      <ul>
        <li><strong>Approved Tutor</strong> — University-level teaching in digital design and creative technology</li>
        <li><strong>Freelance Designer</strong> — Brand systems, web design, and digital experiences</li>
        <li><strong>Creative Technologist</strong> — Interactive prototypes and narrative-driven interfaces</li>
      </ul>

      <p>
        I’ve worked across independent projects, education, and client commissions,
        often in roles that sit between disciplines rather than neatly inside one.
      </p>
    `
  },

  projects: {
    kicker: "SELECTED",
    title: "Projects",
    html: `
      <ul>
        <li><strong>Legacy of Grandmothers</strong> — A storytelling and archival project exploring memory, lineage, and voice</li>
        <li><strong>Interactive CV</strong> — A bento-style navigable system designed as both interface and narrative</li>
        <li><strong>Client work</strong> — Brand identities and digital builds across culture and independent practice</li>
      </ul>

      <h3>What makes a project “mine”</h3>
      <ul>
        <li>Clarity over excess</li>
        <li>Bold, deliberate composition</li>
        <li>Systems thinking</li>
        <li>Playable, readable UX</li>
      </ul>
    `
  },

  skills: {
    kicker: "TOOLKIT",
    title: "Skills",
    html: `
      <h3>Design</h3>
      <ul>
        <li>Brand systems</li>
        <li>Web & UI design</li>
        <li>Typography</li>
        <li>Motion principles</li>
      </ul>

      <h3>Technology</h3>
      <ul>
        <li>HTML · CSS · JavaScript</li>
        <li>Figma</li>
        <li>Prototyping</li>
        <li>Creative coding</li>
      </ul>

      <p>
        Tools matter — but how they’re used matters more.
        I focus on choosing the right level of complexity for the problem at hand.
      </p>
    `
  },

  teaching: {
    kicker: "EDUCATION",
    title: "Teaching",
    html: `
      <p>
        I teach and mentor around digital design, creative technology, and making
        interactive work readable and intentional.
      </p>

      <p>
        My approach emphasises critical thinking, iteration, and understanding the
        systems behind the surface.
      </p>

      <ul>
        <li>UX & interaction</li>
        <li>Design systems</li>
        <li>Creative coding</li>
        <li>Critique & iteration</li>
      </ul>
    `
  },

  contact: {
    kicker: "CONNECT",
    title: "Contact",
    html: `
      <p>
        For collaborations, teaching opportunities, or project enquiries,
        you can reach me via the links below.
      </p>

      <ul>
        <li>annalisacolarusso@gmail.com</li>
        <li>Instagram: @annacandesign</li>
        <li>Substack: itsannadesigns.substack.com </li>
        <li>Linkedin: https://www.linkedin.com/in/annalisa-colarusso/ </li>
      </ul>

      <p>
        I’m especially interested in work that sits between design, culture, and education.
      </p>
    `
  }
};

document.querySelectorAll(".tile").forEach(tile => {
  tile.addEventListener("click", () => {
    const key = tile.dataset.section;
    const s = sections[key];
    if (!s) return;

    kicker.textContent = s.kicker;
    title.textContent = s.title;
    content.innerHTML = s.html;

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

window.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
