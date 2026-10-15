import { Component } from '@angular/core';

export interface SkillItem {
  name: string;
  icon: string;
  adaptive?: boolean;
  isPandas?: boolean;
}

export interface SkillCategoryGroup {
  category: string;
  skills: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories: SkillCategoryGroup[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'assets/skills/angular.svg' },
        { name: 'React', icon: 'assets/skills/react.svg' },
        { name: 'Tailwind CSS', icon: 'assets/skills/tailwindcss.svg' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'assets/skills/nodejs.svg' },
        { name: 'Express.js', icon: 'assets/skills/express.svg', adaptive: true },
        { name: 'REST APIs', icon: 'assets/skills/restapi.svg' },
        { name: 'JWT', icon: 'assets/skills/jwt.svg' },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: 'assets/skills/mongodb.svg' },
        { name: 'MySQL', icon: 'assets/skills/mysql.svg' },
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: 'assets/skills/git.svg' },
        { name: 'GitHub', icon: 'assets/skills/github.svg', adaptive: true },
        { name: 'Postman', icon: 'assets/skills/postman.svg' },
        { name: 'Antigravity', icon: 'assets/skills/antigravity.svg' },
        { name: 'Cursor', icon: 'assets/skills/cursor.svg', adaptive: true },
      ]
    }
  ];
}
