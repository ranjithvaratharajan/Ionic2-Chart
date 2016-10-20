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

  ionViewDidLoad() {
    console.log('Hello SalesGraph Page');
  }

  labels: string[] = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  data: Chart.Dataset[] = [
    {
      label: '# of Votes1',
      data: [1, 9, 13, 15, 12, 13],
      backgroundColor: ['rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgba(54, 162, 235, 1)'],
      borderWidth: 1
    },
    {
      label: '# of Votes2',
      data: [11, 19, 3, 5, 2, 3],
      backgroundColor: ['rgba(255, 206, 86, 0.2)'],
      borderColor: ['rgba(54, 162, 235, 1)'],
      borderWidth: 1
    }
  ];
}
