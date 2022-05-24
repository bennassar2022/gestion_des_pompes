import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css'],
})
export class DefaultLayoutComponent implements OnInit{
public  role = (localStorage.getItem('@pmp:user:data'));
  IsOpened: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  toggleOC() {
    this.IsOpened = !this.IsOpened;
  }
  constructor(private breakpointObserver: BreakpointObserver) {}
ngOnInit(): void {
console.log(this.role);
}
}
