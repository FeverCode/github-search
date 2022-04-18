import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appLinkHighlighter]'
})
export class LinkHighlighterDirective {

  constructor(private elem:ElementRef) { }

  
  	@HostListener('mouseenter') onMouseEnter() {
  		this.highlight('aqua'); 
  	}

  	@HostListener('mouseleave') onMouseLeave() {
  		this.highlight(null!); 
  	}

  	private highlight(color: string) {
  		this.elem.nativeElement.style.backgroundColor = color;
  	}

}
