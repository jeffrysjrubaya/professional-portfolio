import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class Ripple {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Ensure the parent has relative positioning so the ripple stays inside
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    const target = this.el.nativeElement;
    const ripple = this.renderer.createElement('span');
    
    // Calculate size (diameter should cover the whole element)
    const size = Math.max(target.offsetWidth, target.offsetHeight);
    const x = event.pageX - target.getBoundingClientRect().left - size / 2;
    const y = event.pageY - target.getBoundingClientRect().top - size / 2;

    // Apply styles to the ripple span
    this.renderer.setStyle(ripple, 'width', `${size}px`);
    this.renderer.setStyle(ripple, 'height', `${size}px`);
    this.renderer.setStyle(ripple, 'top', `${y}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);
    this.renderer.addClass(ripple, 'ripple-span');

    this.renderer.appendChild(target, ripple);

    // Remove the span after animation completes to keep DOM clean
    setTimeout(() => {
      this.renderer.removeChild(target, ripple);
    }, 600);
  }
}
