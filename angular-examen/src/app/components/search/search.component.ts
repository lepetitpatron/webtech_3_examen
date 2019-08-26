import { Component, OnInit } from '@angular/core';
import { OvertredingenService } from 'src/app/services/overtredingen.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  search:string;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() 
  {
    this.search = this.route.snapshot.paramMap.get('query');
  }

  onSubmit(value: any)
  {
    this.router.navigateByUrl('/result/'+value.straat);
  }
}
