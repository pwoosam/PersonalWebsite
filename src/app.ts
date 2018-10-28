import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  message = 'Hello World!';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Patrick Woo-Sam';
    config.map([
      {
        route: [
          '',
          'home'
        ],
        name: 'home',
        moduleId: 'pages/home/home',
        nav: true,
        title: 'Home'
      },
      {
        route: 'portfolio',
        name: 'portfolio',
        moduleId: 'pages/portfolio/portfolio',
        nav: true,
        title: 'Portfolio'
      },
      {
        route: 'contact',
        name: 'contact',
        moduleId: 'pages/contact/contact',
        nav: true,
        title: 'Contact'
      }
    ]);
  }
}
