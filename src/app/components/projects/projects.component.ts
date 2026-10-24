import { Component } from '@angular/core';

export interface ProjectItem {
  num: string;
  title: string;
  tech: string;
  summary: string;
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: ProjectItem[] = [
    {
      num: '01',
      title: 'Interactive Learning System',
      tech: 'Angular • Node.js • Express • MongoDB',
      summary: 'Interactive educational platform supporting structured programming tutorials, hands-on code sandboxes, and progression milestone tracking.',
      liveUrl: 'https://ils-interactive-learning-system.netlify.app/'
    },
    {
      num: '02',
      title: 'MediVault',
      tech: 'Angular • Node.js • Express • MongoDB',
      summary: 'Full-stack medical records management system engineered to securely store, retrieve, and organize patient health histories with role-based access.',
      liveUrl: 'https://medivaultapp.netlify.app/home',
      githubUrl: 'https://github.com/nikitajaiswal13/MediVault'
    },
    {
      num: '03',
      title: 'EMCAD Fraud Detection',
      tech: 'Python • scikit-learn • TF-IDF • pandas',
      summary: 'Machine-learning classification experiment evaluating text-based features and supervised classification models under class imbalance.',
      githubUrl: 'https://github.com/nikitajaiswal13/EMCAD-Fraud-Detection'
    },
    {
      num: '04',
      title: 'DevLens',
      tech: 'React • TypeScript • Node.js • Babel AST',
      summary: 'Developer platform frontend that parses client-side source code into Abstract Syntax Trees, extracts cyclomatic metrics, and visualizes architectural anti-patterns.'
    }
  ];
}
