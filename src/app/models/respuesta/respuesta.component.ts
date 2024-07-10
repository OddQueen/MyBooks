import { Component } from '@angular/core';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent {

}

import { Book } from '../../pages/books/books';

export class Respuesta {
    constructor(
        public error: boolean,
        public code: number,
        public message: string,
        public data: Book []
    ) {}
}
