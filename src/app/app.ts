import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { Hero } from './features/home/components/hero/hero';
import { Proof } from './features/home/components/proof/proof';
import { PortfolioComponent } from './features/home/components/portfolio/portfolio';
import { ServicesComponent } from './features/home/components/services/services';
import { ProcessComponent } from './features/home/components/process/process';
import { ContactComponent } from './features/home/components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Proof,
    ServicesComponent,
    PortfolioComponent,
    ProcessComponent,
    ContactComponent,
    Footer
  ],
  template: `<app-navbar /><main id="top"><app-hero /><app-proof /><app-services /><app-portfolio /><app-process /><app-contact /></main><app-footer />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
