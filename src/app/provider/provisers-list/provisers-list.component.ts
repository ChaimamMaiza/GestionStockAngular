import { Component, OnInit, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/Services/provider.service';
@Component({
  selector: 'app-provisers-list',
  templateUrl: './provisers-list.component.html',
  styleUrls: ['./provisers-list.component.scss']
})
export class ProvisersListComponent implements OnInit {

  products: Observable<Provider[]>;
  constructor(private providertService: ProviderService , private router: Router) { }


  ngOnInit() {
  }




}
