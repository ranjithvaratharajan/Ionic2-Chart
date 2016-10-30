import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Chart } from 'ng2-chartjs2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // labels: string[] = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  // data: Chart.Dataset[] = [
  //   {
  //     label: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //     borderWidth: 1
  //   }
  // ];

  options: any = {
    type: 'doughnut',
    data: {
      labels: ["Restaurante", "Vestuário", "Lazer", "Eletrônico"],
      datasets: [{
        label: 'Dinheiro',
        borderWidth: 0,
        data: [12, 19, 3, 5],
        backgroundColor: [
          '#FDBC11',
          '#ee4250',
          '#02A4C0',
          '#229f37'
        ],
      }]
    },
    options: {
      responsive: true,
      legend: {
        position: 'left',
        labels: {
          boxWidth: 20
        }
      }
    }
  };
}
