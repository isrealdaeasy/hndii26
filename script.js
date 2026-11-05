const projects = [
  {
    title: 'Portfolio Website',
    category: 'web',
    description: 'A responsive personal portfolio that highlights creative work and professional strengths.',
    icon: 'PW',
    tag: 'Branding'
  },
  {
    title: 'Task Manager App',
    category: 'app',
    description: 'A productivity-focused app for adding, tracking, and completing daily tasks with clarity.',
    icon: 'TM',
    tag: 'Productivity'
  },
  {
    title: 'Weather Dashboard',
    category: 'web',
    description: 'A clean dashboard for checking local conditions using real-time weather data patterns.',
    icon: 'WD',
    tag: 'Data'
  }
];

const projectList = document.getElementById('projectList');
const filterButtons = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('themeToggle');

function renderProjects(filter = 'all') {
  projectList.innerHTML = '';

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  filteredProjects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-visual">${project.icon}</div>
      <div class="project-content">
        <div class="project-meta">
          <span class="tag">${project.tag}</span>
          <span>${project.category.toUpperCase()}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;
    projectList.appendChild(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

renderProjects();
