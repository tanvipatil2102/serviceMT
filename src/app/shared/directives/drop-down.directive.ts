import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @Input() toggleClass !: string;
  constructor(
    private _eleRef : ElementRef
  ) { }

  @HostListener('click', ['$event'])
  onClickDropDown(eve : Event){
    let x = eve.target;
    let nextSibling = this._eleRef.nativeElement.nextSibling;
    nextSibling.classList.toggle(this.toggleClass);
  }
}
