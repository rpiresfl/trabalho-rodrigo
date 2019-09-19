import { Component, ViewChild } from '@angular/core';
import { Veiculo } from './veiculo';
import { NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabalho-rodrigo';

  @ViewChild('veiculoForm', {static: true})
  veiculoForm: NgForm;

  veiculos: Veiculo[] = [];
  newVeiculo = new Veiculo();

  salvarVeiculo() {
    if (!this.newVeiculo.id) {
      this.newVeiculo.id = (new Date()).getTime();
      this.veiculos.push(this.newVeiculo);
    } else {
      let oldVeiculo = this.veiculos.find(v => v.id === this.newVeiculo.id);
      oldVeiculo.tipo = this.newVeiculo.tipo;
      oldVeiculo.marca = this.newVeiculo.marca;
      oldVeiculo.modelo = this.newVeiculo.modelo;
      oldVeiculo.cor = this.newVeiculo.cor;
      oldVeiculo.ano = this.newVeiculo.ano;
    }

    this.newVeiculo = new Veiculo();
    
    this.veiculoForm.reset();
  }

  editarVeiculo(vei: Veiculo) {
    this.newVeiculo = new Veiculo(vei.id, vei.tipo, vei.marca, vei.modelo, vei.cor, vei.ano);
  }

  removerVeiculo(vei: Veiculo) {
    let index = this.veiculos.findIndex(v => v.id === vei.id);
    this.veiculos.splice(index, 1);
  }
}
