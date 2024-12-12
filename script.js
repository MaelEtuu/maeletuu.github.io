function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.querySelector('.menu-btn');
  const aboutSection = document.getElementById('about');

  sidebar.classList.toggle('active');
  
  if (menuBtn.textContent === "☰") {
      menuBtn.textContent = "✖";
  } else {
      menuBtn.textContent = "☰";
  }

  aboutSection.classList.toggle('sidebar-active');
}

function openContactModal() {
  const overlay = document.querySelector('.modal_overlay');
  if (!overlay) {
    console.error("L'élément '.modal_overlay' n'existe pas.");
    return;
  }
  overlay.removeAttribute('hidden');
  overlay.classList.add('is-visible');
  overlay.setAttribute('tabindex', '-1');
  overlay.focus();
  console.log("La modal de contact est maintenant ouverte.");

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeContactModal();
    }
  });
}

function closeContactModal() {
  const overlay = document.querySelector('.modal_overlay');
  if (!overlay) {
    console.error("L'élément '.modal_overlay' n'existe pas.");
    return;
  }
  overlay.classList.remove('is-visible');
  overlay.setAttribute('hidden', true);
}

function closeContactModalSubmit() {
  const overlay = document.querySelector('.modal_overlay');
  if (!overlay) {
    console.error("L'élément '.modal_overlay' n'existe pas.");
    return;
  }

  overlay.classList.remove('is-visible');
  overlay.setAttribute('hidden', true);
  const inputsubject = document.getElementById('subject-contact')
  const inputcontent = document.getElementById('content-contact')
  inputsubject.value = '';
  inputcontent.value = '';
  showToast("L'element a été envoyer avec succès.");
  const submitButton = document.getElementById('submit-btn');
  submitButton.disabled = true;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) {
    console.error("L'élément '#toast' n'existe pas.");
    return;
  }

  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
    toast.classList.add('hidden');
  }, 3000);
}

function checkFormCompletion() {
  const subject = document.getElementById('subject-contact').value.trim();
  const email = document.getElementById('email-contact').value.trim();
  const content = document.getElementById('content-contact').value.trim();
  const submitButton = document.getElementById('submit-btn');

  if (subject !== "" && content !== "" && email !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}


const projects = {
  "Miliboo redesign": {
    date: "October 2024 - January 2024",
    context: "Development of an e-Commerce website",
    team: "In a team (5 people)",
    tech: "Laravel",
    image: "../../Asset/imageProjets/Site.png",
    description: "As part of a university project, we were asked to redesign the Miliboo website, from conception to development.",
    github: "https://github.com/username/project5"
  },
  "Raytracing": {
      date: "October 2024",
      context: "RayTracing",
      team: "Alone",
      tech: "C++, Cmake",
      image: "../../Asset/imageProjets/Ray.png",
      description: "In my quest to discover new algorithms, I decided to follow a tutorial on programming raytracing / pathtracing (Ray Tracing in One Weekend Series).",
      github: "https://github.com/MaelEtuu/Raytracing.git"
  },
  "Hunter Game": {
      date: "June 2024",
      context: "Development of a 3D video game",
      team: "In a team (3 people)",
      tech: "C#, Unity",
      image: "../../Asset/imageProjets/Hunter.png",
      description: "As a class project, we had to code a video game using the Unity game engine, so my classmates and I decided to make a game of survival and discovery to eliminate a boss.",
      github: "https://github.com/ethann-ol/hunterGame.git"
  },
  "Java Bot": {
      date: "March 2022",
      context: "Development of a bot",
      team: "Alone",
      tech: "Java",
      image: "../../Asset/imageProjets/Bot.jpg",
      description: "In my early days I wanted to find out what a bot was and how to code it, so I decided to do it in Java for Discord.",
      github: "https://github.com/MaelEtuu/JavaBot.git"
  },
  "Survival": {
      date: "January 2023",
      context: "Development of a 2D video game",
      team: "In a team (3 people)",
      tech: "C#, WPF",
      image: "../../Asset/imageProjets/Survival.png",
      description: "As part of an end-of-subject assessment, my classmates and I produced a 2d game using the WPF framework. We focused on a survival game with items to help the game survive longer and longer.",
      github: "https://github.com/MaelEtuu/Game.git"
  }
};

function openProjectModal(projectTitle) {
  const modal = document.getElementById("project-modal");
  const project = projects[projectTitle];

  if (project) {
      document.getElementById("project-title").textContent = projectTitle;
      document.getElementById("project-date").textContent = project.date;
      document.getElementById("project-context").textContent = project.context;
      document.getElementById("project-team").textContent = project.team;
      document.getElementById("project-tech").textContent = project.tech;
      document.getElementById("project-image").src = project.image;
      document.getElementById("project-description").textContent = project.description;

      const githubLink = document.getElementById("project-github");
      if (project.github) {
          githubLink.textContent = "View on GitHub";
          githubLink.href = project.github;
          githubLink.classList.remove("hidden");
      } else {
          githubLink.classList.add("hidden");
      }

      modal.classList.remove("hidden");
  }
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
}

document.querySelectorAll(".project-circle").forEach(circle => {
  circle.addEventListener("click", () => {
      const projectTitle = circle.getAttribute("data-title");
      openProjectModal(projectTitle);
  });
});