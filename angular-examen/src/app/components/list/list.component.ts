import { Component, OnInit } from '@angular/core';
import { OvertredingenService } from 'src/app/services/overtredingen.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  overtredingen:any[];

  constructor(private overtredingenService:OvertredingenService) { }

  ngOnInit() 
  {
    this.overtredingenService.getOvertredingen().subscribe(data => {
      this.overtredingen = data;
    });
  }
}
