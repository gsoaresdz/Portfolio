import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';
import { NavigationLinkComponent } from '../../../../shared/components/navigation-link/navigation-link.component';

interface Project {
  name: string;
  url: string;
  description: string;
  stacks: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, NavigationLinkComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Pizzeria Donna',
      url: 'https://github.com/wilsonsouto/pizzeria-donna',
      description:
        'Discreet chatbot assistance for women victims of domestic violence ',
      stacks: [
        'IBM Watson Assistant',
        'Angular',
        'TypeScript',
        'HTML',
        'Tailwind CSS',
      ],
    },
    {
      name: 'Candy Shop',
      url: 'https://github.com/wilsonsouto/candy-shop',
      description: 'Console app for candy inventory management',
      stacks: ['.NET', 'C#', 'MySQL', 'Spectre Console'],
    },
    {
      name: 'File Organizer',
      url: 'https://github.com/wilsonsouto/file-organizer',
      description: 'A script that organizes files based on their extensions',
      stacks: ['.NET', 'C#'],
    },
  ];
}
