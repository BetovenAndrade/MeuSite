//Ponto de partida de uma aplicação Angular

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/** 
 Carregando o módulo principal da aplicação, o módulo app.module.ts.
 Dentro de app existe um arquivo de rotas, arquivos do componente e um arquivo do módulo. 
 Em Angular uma aplicação pode ter mais módulos, a critério dos desenvolvedores. 
*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
