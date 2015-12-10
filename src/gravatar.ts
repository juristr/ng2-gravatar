import { Directive, Input, HostBinding } from 'angular2/angular2';
import { get_gravatar } from './md5';

@Directive({
	selector: '[gravatar]'
})
export class GravatarCmp {
  @Input() email: string;
  @HostBinding() src: string;

  constructor() {
  }

  ngOnInit() {
    this.src = get_gravatar(this.email, 48);
  }

}