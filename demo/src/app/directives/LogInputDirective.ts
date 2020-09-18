import { Directive} from '@angular/core';

@Directive({
    selector: 'input[log-input-directive]',
    host: {
        '(input)': 'onInput($event)'
    }
})

export class LogInputDirective {
    onInput(event) {
        console.log(event.target.value);
    }
}