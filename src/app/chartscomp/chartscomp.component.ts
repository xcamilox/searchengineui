import { Component, AfterViewInit, Input } from '@angular/core';

import { Chart, ChartData, Point } from 'chart.js';

@Component({
  selector: 'chartscomp',
  templateUrl: './chartscomp.component.html',
  styleUrls: ['./chartscomp.component.css'],
  inputs:['dataset']
})
export class ChartscompComponent implements AfterViewInit {


	@Input() dataset: object;
	canvas: any;
 	ctx: any;

	constructor() { }

	ngAfterViewInit() {
		this.canvas = document.getElementById('chart');
	    this.ctx = this.canvas.getContext('2d');
	    console.log(this.dataset)
	    let myChart = new Chart(this.ctx, {
	      type: 'scatter',
		   data: {
		      datasets: [{
		      	label: this.dataset["labels"],
		      	data:this.dataset["data"]
		      }]
		   },
		   options: {
		      responsive: false	
		   }
	    });
	}

}
