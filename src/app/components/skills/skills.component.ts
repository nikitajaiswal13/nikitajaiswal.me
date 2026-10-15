import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  activeSkillDomain: 'all' | 'languages' | 'frontend' | 'backend' | 'ml' | 'database' = 'all';

  setSkillDomain(domain: 'all' | 'languages' | 'frontend' | 'backend' | 'ml' | 'database') {
    this.activeSkillDomain = domain;
  }
}
