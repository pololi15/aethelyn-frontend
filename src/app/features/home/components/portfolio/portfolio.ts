import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../core/models/project.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="py-section-gap bg-surface">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="flex flex-col gap-4 mb-16">
          <span class="font-label-caps text-label-caps text-secondary dark:text-on-secondary-fixed-variant uppercase">
            // Selected Architecture
          </span>
          <h2 class="font-headline-lg text-headline-lg font-bold text-primary dark:text-on-primary">
            Featured Custom Engineering
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let project of projects" class="bg-surface-container-lowest border border-outline-variant p-8 rounded-lg hover:border-outline transition-all duration-300 flex flex-col justify-between">
            <div>
              <span class="font-label-caps text-xs text-outline uppercase tracking-wider block mb-2">{{ project.category }}</span>
              <h3 class="font-headline-md text-headline-md font-semibold text-primary dark:text-on-primary mb-3">{{ project.title }}</h3>
              <p class="font-body-md text-body-md text-on-surface-variant mb-6">{{ project.description }}</p>
              
              <div class="bg-surface-container p-4 rounded mb-6 border border-outline-variant">
                <span class="font-label-caps text-xs text-outline block mb-1">KEY IMPACT</span>
                <span class="font-headline-md text-sm font-bold text-primary dark:text-on-primary">{{ project.metrics }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 pt-4 border-t border-outline-variant">
              <span *ngFor="let tag of project.tags" class="font-label-caps text-xs bg-surface-container-high px-2.5 py-1 rounded text-on-surface-variant">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: '1',
      title: 'Enterprise ERP & Logistics',
      category: 'Data Architecture',
      description: 'Real-time telemetry and supply chain routing engine handling high-throughput operations.',
      tags: ['Angular', 'Go', 'Microservices'],
      metrics: '+40% operational efficiency',
      imageUrl: ''
    },
    {
      id: '2',
      title: 'Bespoke Fintech Platform',
      category: 'Web Application',
      description: 'Bank-grade transaction orchestration system built with sub-millisecond response guarantees.',
      tags: ['TypeScript', 'Node.js', 'PostgreSQL'],
      metrics: 'Zero-downtime migration',
      imageUrl: ''
    },
    {
      id: '3',
      title: 'Automated Workflow Engine',
      category: 'Cloud Architecture',
      description: 'Event-driven automation platform for complex enterprise document pipelines.',
      tags: ['Python', 'Kafka', 'Docker'],
      metrics: '10M+ events processed/day',
      imageUrl: ''
    }
  ];
}