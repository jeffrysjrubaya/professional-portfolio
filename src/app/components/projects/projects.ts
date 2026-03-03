import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: 'Financial Dashboard',
      description:
        'High-performance Angular dashboard featuring real-time SQL data visualization and custom state management.',
      image: 'assets/projects/finance.jpg',
      tags: ['Angular', 'C#', 'SQL', 'Bootstrap'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      title: 'Infra-as-Code Automation',
      description:
        'A DevOps pipeline utilizing Terraform and Kubernetes for automated Azure resource provisioning.',
      image: 'assets/projects/devops.jpg',
      tags: ['Terraform', 'Kubernetes', 'Azure', 'GitHub Actions'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      title: 'CLR Internal Explorer',
      description:
        'An educational tool visualizing .NET memory management and Garbage Collection cycles.',
      image: 'assets/projects/clr.jpg',
      tags: ['C#', '.NET', 'CLR', 'WPF'],
      liveLink: '#',
      repoLink: '#',
    },
  ];
}
