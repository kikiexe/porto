<script lang="ts">
  const skillGroups = [
    {
      title: 'Blockchain & Web3',
      skills: ['Solidity', 'Foundry', 'Ethers.js', 'Rust', 'Move', 'ZK-proofs']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Laravel', 'Python', 'Go', 'FastAPI', 'Express']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Svelte', 'Next.js', 'Inertia.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'Postman', 'Figma', 'VS Code']
    },
    {
      title: 'Other',
      skills: ['Unity', 'C#', 'Aseprite', 'Video Editing']
    }
  ];
</script>

<section id="skills" class="section">
  <div class="container">
    <span class="section-label">03 — Stack</span>

    <h2 class="skills-title">Technologies I work with</h2>

    <div class="skills-grid">
      {#each skillGroups as group}
        <div class="skill-group">
          <h4 class="mono group-label">{group.title}</h4>
          <ul class="skill-list">
            {#each group.skills as skill}
              <li>{skill}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .skills-title {
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: -0.02em;
    margin-bottom: var(--space-lg);
    max-width: 500px;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-top: 1px solid var(--color-rule);
  }

  .skill-group {
    padding: var(--space-md);
    border-bottom: 1px solid var(--color-rule);
    border-right: 1px solid var(--color-rule);
  }

  .skill-group:nth-child(3n) {
    border-right: none;
  }

  .group-label {
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.68rem;
    color: var(--color-text-muted);
    margin-bottom: var(--space-sm);
    font-family: var(--font-mono);
    font-weight: 500;
  }

  .skill-list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .skill-list li {
    font-size: 0.95rem;
    color: var(--color-text);
    transition: var(--transition);
    padding: 0.2rem 0;
  }

  .skill-list li:hover {
    padding-left: 0.5rem;
    color: var(--color-highlight);
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .skill-group:nth-child(3n) {
      border-right: 1px solid var(--color-rule);
    }
    .skill-group:nth-child(2n) {
      border-right: none;
    }
  }

  @media (max-width: 480px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }
    .skill-group {
      border-right: none;
    }
  }
</style>
