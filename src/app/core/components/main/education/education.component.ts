import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateSpanComponent } from '@app/shared/components/date-span/date-span.component';
import { NavigationLinkComponent } from '@app/shared/components/navigation-link/navigation-link.component';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';

interface Education {
  institution: {
    name: string;
    url: string;
  };
  startDate: string;
  endDate: string;
  degree: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeadingComponent,
    DateSpanComponent,
    NavigationLinkComponent,
  ],
  templateUrl: './education.component.html',
})
export class EducationComponent {
  public educations: Education[] = [
    {
      institution: {
        name: 'FIAP',
        url: 'https://www.fiap.com.br/',
      },
      startDate: '2021',
      endDate: '2022',
      degree: " Associate's Degree in Systems Analysis and Development",
    },
  ];
}
