import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-red-black',
  templateUrl: './red-black.component.html',
  styleUrls: ['./red-black.component.sass']
})
export class RedBlackComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() red: string = '';
  @Input() black: string = '';

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigateByUrl('/faculty-dashboard');
  }


}
