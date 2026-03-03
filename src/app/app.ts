import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Projects, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('professional-portfolio');
}
