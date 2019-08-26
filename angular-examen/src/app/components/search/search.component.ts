import { Component, OnInit } from '@angular/core';
import { OvertredingenService } from 'src/app/services/overtredingen.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  search:string;
  overtredingen:any;

  constructor(private route: ActivatedRoute, private overtredingenService:OvertredingenService) { }

  ngOnInit() 
  {
    this.search = this.route.snapshot.paramMap.get('query');
    this.overtredingenService.getOvertredingen().subscribe(data => {
      this.overtredingen = data;
    });
  }
}
