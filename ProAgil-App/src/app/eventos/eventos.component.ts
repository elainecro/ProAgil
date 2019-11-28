import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../_services/evento.service';
import { Evento } from '../_models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventosFiltrados: Evento[] = [];
  eventos: Evento[] = [];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;
  modalRef: BsModalRef;
  registerForm: FormGroup;

  _filtroLista: string;

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService
  ) { }

  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEvento(this.filtroLista) : this.eventos;
  }

  openModal(template: TemplateRef<any>)
  {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.validation();
    this.getEventos();
  }

  filtrarEvento(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  validation() {
    this.registerForm = new FormGroup({
      tema: new FormControl('', 
        [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      local: new FormControl('', Validators.required),
      dataEvento: new FormControl('', Validators.required),
      qtdPessoas: new FormControl('', 
        [Validators.required, Validators.max(120000)]),
      imagemURL: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', 
        [Validators.required, Validators.email])
    });
  }

  salvarAlteracao() {

  }

  getEventos() {
    this.eventoService.getAllEventos().subscribe(
      (_eventos: Evento[]) => {
      this.eventos = _eventos;
      this.eventosFiltrados = this.eventos;
    }, error => {
      console.log(error);
    });
  }

}
