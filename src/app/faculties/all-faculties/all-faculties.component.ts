import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-faculties',
  templateUrl: './all-faculties.component.html',
  styleUrls: ['./all-faculties.component.scss']
})
export class AllFacultiesComponent implements OnInit {

  constructor() { }

  pageTitle = 'Faculty Management';

  ngOnInit(): void {
  }
  faculties: any = [
    {
      id: 'IMS12345',
      name: 'Vinod Kumar',
      email: 'vinod.k@gmail.com',
      mobile: '9652544441',
      experience: '12+ years',
      referred: 'Kumar'
    },
    {
      id: 'IMS32346',
      name: 'Santhosh Sikolla',
      email: 'santhosh.s@gmail.com',
      mobile: '9848245458',
      experience: '10+ years',
      referred: 'Vamsee'
    },
    {
      id: 'IMS42376',
      name: 'Varun Teja',
      email: 'varun.teja@gmail.com',
      mobile: '9848518190',
      experience: '7+ years',
      referred: 'Rajesh'
    },
    {
      id: 'IMS12345',
      name: 'Vinod Kumar',
      email: 'vinod.k@gmail.com',
      mobile: '9652544441',
      experience: '5+ years',
      referred: 'Kumar'
    },
    {
      id: 'IMS25345',
      name: 'Sravan Kumar',
      email: 'sravan.k@gmail.com',
      mobile: '9848518190',
      experience: '9+ years',
      referred: 'Rajesh'
    },
    {
      id: 'IMS42376',
      name: 'Santhosh Sikolla',
      email: 'santhosh.s@gmail.com',
      mobile: '9848245458',
      experience: '12+ years',
      referred: 'Vamsee'
    },
    {
      id: 'IMS25345',
      name: 'Varun Teja',
      email: 'varun.teja@gmail.com',
      mobile: '9848518190',
      experience: '12+ years',
      referred: 'Rajesh'
    },
    {
      id: 'IMS12345',
      name: 'Vinod Kumar',
      email: 'vinod.k@gmail.com',
      mobile: '9652544441',
      experience: '5+ years',
      referred: 'Kumar'
    },
  ]
}