import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened: boolean;

  listTiles = [{
    trailer: 'assets/videos/capitao_america_o_primeiro_vingador_trailer__360p.mp4',
    cover: 'assets/images/capitao-america-o-primeiro-vingador.jpg',
    name: 'Capitão América o Primeiro Vingador',
    relevance: 97,
    age: 14,
    parts: 2,
    categories: ['Épico', 'Fantasia']
  },
  {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galáxia 2',
    relevance: 80,
    age: 16,
    parts: 2,
    categories: ['Épico', 'Fantasia', 'Viagem no espaço']
  },
  {
    trailer: 'assets/videos/homem_de_ferro_3_trailer_oficial_1080p.mp4',
    cover: 'assets/images/homem-de-ferro.jpg',
    name: 'Homem de Ferro 3',
    relevance: 85,
    age: 18,
    parts: 3,
    categories: ['Épico', 'Fantasia']
  }];

  setMenuState(state: boolean) {
    this.menuOpened = state;
  }

  closeMenu() {
    this.menuOpened = false;
  }
}
