import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [HomeComponent],
  template: `
    <main>
      <header class="header">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          area-hidden="true"
        />
      </header>
      <section class="main-section">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}
