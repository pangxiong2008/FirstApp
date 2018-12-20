import {Component, Input} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: `./title.template.html`
})

export class TitleComponent {
    @Input() appTitle = '';
}
