# ToFirebaseStorage

Esse projeto tem como objetivo exemplificar a integração do Firebase Cloud Storage com Angular 6.0.

Criamos um formulário que faz o upload de qualquer tipo de arquivo para o Storage, monitorando a porcentagem subida e finalizando com a URL do arquivo.


:us: _This project aims to exemplify the integration of Firebase Cloud Storage with Angular 6.0._
_We have created a form that uploads any type of file to Storage, monitoring the percentage raised and ending with the URL of the file._

## Development server

Baixe o projeto, execute `npm install` para instalar todas as dependências necessárias para rodar o projeto.

Altere os arquivo do diretório `environments/` (`environments.ts`, `environments.prod.ts`) e insira as configurações de sua aplicação Firebase.

```
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  }
```

Execute `ng serve` para um servidor dev. Navegue até `http: // localhost: 4200 /`.


:us: _Download the project, run `npm install` to install all the dependencies required to run the project._
_Change the files in the `environments /` (`environments.ts`,` environments.prod.ts`) directory and enter the settings for your Firebase application._
_Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files._

