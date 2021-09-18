import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pageTitle = 'Dashboard';

  constructor() { }

  ngOnInit(): void {
  }

  students: any = [
    {
      id: 'IMS12345',
      name: 'Satyam Ganta',
      email: 'satyamganta@gmail.com',
      mobile: '9652544441',
      date: '28 Dec 2020',
      referred: 'Kumar'
    },
    {
      id: 'IMS32346',
      name: 'Santhosh Sikolla',
      email: 'santhosh.s@gmail.com',
      mobile: '9848245458',
      date: '28 Dec 2020',
      referred: 'Vamsee'
    },
    {
      id: 'IMS42376',
      name: 'Praveen Guptha',
      email: 'praveen.g@gmail.com',
      mobile: '9848518190',
      date: '28 Dec 2020',
      referred: 'Rajesh'
    },
    {
      id: 'IMS12345',
      name: 'Satyam Ganta',
      email: 'satyamganta@gmail.com',
      mobile: '9652544441',
      date: '28 Dec 2020',
      referred: 'Kumar'
    },
    {
      id: 'IMS25345',
      name: 'Sravan Kumar',
      email: 'sravan.k@gmail.com',
      mobile: '9848518190',
      date: '28 Dec 2020',
      referred: 'Rajesh'
    },
    {
      id: 'IMS42376',
      name: 'Santhosh Sikolla',
      email: 'santhosh.s@gmail.com',
      mobile: '9848245458',
      date: '28 Dec 2020',
      referred: 'Vamsee'
    },
    {
      id: 'IMS25345',
      name: 'Praveen Guptha',
      email: 'praveen.g@gmail.com',
      mobile: '9848518190',
      date: '28 Dec 2020',
      referred: 'Rajesh'
    },
  ]

}
