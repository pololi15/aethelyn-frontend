import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="py-section-gap bg-surface-container-low border-t border-outline-variant">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span class="font-label-caps text-label-caps text-secondary dark:text-on-secondary-fixed-variant uppercase block mb-4">
                 Initiate Engineering
              </span>
              <div id="about" class="eyebrow mb-4">Built for ownership, not lock-in</div>
              <h2 class="font-headline-lg text-headline-lg font-bold text-primary  mb-6">
                Ready to build software tailored to your exact needs?
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant mb-8">
                Schedule an architectural consultation with our technical leads. No sales fluff—just engineering discussions.
              </p>
            </div>

            <div class="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant">
              <span class="font-label-caps text-xs text-outline uppercase block mb-2">Direct Contact</span>
              <a href="mailto:aethelyn.solutions@gmail.com" class="font-headline-md text-headline-md font-bold text-primary  hover:underline">
                aethelyn.solutions@gmail.com
              </a>
            </div>
          </div>

          <div class="lg:col-span-7 bg-surface-container-lowest p-8 rounded-lg border border-outline-variant">
            <form class="space-y-6" (submit)="$event.preventDefault()">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="font-label-caps text-xs text-on-surface-variant uppercase block mb-2">Your Name</label>
                  <input id="name" type="text" autocomplete="name" placeholder="John Doe" class="w-full bg-surface border border-outline-variant p-3 rounded text-primary focus:border-primary focus:outline-none font-body-md"/>
                </div>
                <div>
                  <label for="email" class="font-label-caps text-xs text-on-surface-variant uppercase block mb-2">Work Email</label>
                  <input id="email" type="email" autocomplete="email" placeholder="john@company.com" class="w-full bg-surface border border-outline-variant p-3 rounded text-primary focus:border-primary focus:outline-none font-body-md"/>
                </div>
              </div>

              <div>
                <label for="budget" class="font-label-caps text-xs text-on-surface-variant uppercase block mb-2">Estimated Budget Range</label>
                <select id="budget" class="w-full bg-surface border border-outline-variant p-3 rounded text-primary focus:border-primary focus:outline-none font-body-md">
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k+</option>
                </select>
              </div>

              <div>
                <label for="brief" class="font-label-caps text-xs text-on-surface-variant uppercase block mb-2">Project Brief</label>
                <textarea id="brief" rows="4" placeholder="Describe the core problem or requirements..." class="w-full bg-surface border border-outline-variant p-3 rounded text-primary focus:border-primary focus:outline-none font-body-md"></textarea>
              </div>

              <button type="submit" class="w-full bg-primary text-on-primary py-4 rounded font-label-caps uppercase text-label-caps tracking-wider hover:bg-opacity-90 transition-all active:scale-98">
                Submit Architecture Brief
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}
