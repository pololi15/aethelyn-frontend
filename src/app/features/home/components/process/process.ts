import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="process" class="py-section-gap bg-surface">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="flex flex-col gap-4 mb-16">
          <span class="font-label-caps text-label-caps text-secondary dark:text-on-secondary-fixed-variant uppercase">
            // Agile Methodology
          </span>
          <h2 class="font-headline-lg text-headline-lg font-bold text-primary dark:text-on-primary">
            Human-Centric Engineering Workflow
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div *ngFor="let step of steps" class="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant relative">
            <span class="font-label-caps text-xs text-outline block mb-4">{{ step.number }}</span>
            <h3 class="font-headline-md text-headline-md font-semibold text-primary dark:text-on-primary mb-2">{{ step.title }}</h3>
            <p class="font-body-md text-body-md text-on-surface-variant text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProcessComponent {
  steps = [
    { number: 'PHASE // 01', title: 'Discovery', description: 'Domain modeling, architectural blueprints, and scope boundary mapping.' },
    { number: 'PHASE // 02', title: 'Architecture', description: 'Database schema design, API contracts, and infrastructure selection.' },
    { number: 'PHASE // 03', title: 'Sprint Coding', description: 'Iterative development cycles with continuous integration and unit testing.' },
    { number: 'PHASE // 04', title: 'QA & Deploy', description: 'Rigorous load testing, security audits, and zero-downtime deployment.' }
  ];
}