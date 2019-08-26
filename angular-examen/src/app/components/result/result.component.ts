import { Component, OnInit } from '@angular/core';
import { OvertredingenService } from 'src/app/services/overtredingen.service';
import { filter } from 'minimatch';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {

  query:string;
  overtredingen:any[];

  constructor(private route:ActivatedRoute,private overtredingenService:OvertredingenService) { }

  ngOnInit() 
  {
    this.query = this.route.snapshot.paramMap.get('title'); 

    
  }
}
