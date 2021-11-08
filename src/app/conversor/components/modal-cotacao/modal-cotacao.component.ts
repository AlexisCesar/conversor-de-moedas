import { 
	Component, Input, Output, EventEmitter 
} from '@angular/core';

import { Conversao, ConversaoResponse } from '../../models/';
import { ConversorService } from '../../services';

@Component({
	selector: 'modal-cotacao',
	templateUrl: './modal-cotacao.component.html'
})
export class ModalCotacaoComponent {

	@Input() id: string;
	@Input() conversaoResponse: ConversaoResponse;
	@Input() conversao: Conversao = new Conversao();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

	constructor(private conversorService: ConversorService) {}

	novaConsulta() {
		this.onConfirm.emit();
	}

	get valorConvertido(): string {
	  	if (this.conversaoResponse === undefined) {
	  		return '0';
	  	}
	  	
	  	return (this.conversao.valor * 
	  		this.conversaoResponse.rates[this.conversao.moedaDestino])
	  			.toFixed(2);
	}

	get cotacaoPara(): number {
	  	return this.conversorService.cotacaoDestino(
	  		this.conversaoResponse, this.conversao);
	}

	get cotacaoDe(): string {
	  	return this.conversorService.cotacaoOrigem(
	  		this.conversaoResponse, this.conversao);
	}

	get dataCotacao(): string {
		return this.conversorService.dataCotacao(
	  		this.conversaoResponse);
	}
}
