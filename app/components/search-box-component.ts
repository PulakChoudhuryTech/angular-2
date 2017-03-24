import {Component, Input} from "@angular/core";

@Component({
    selector : 'search-box',
    templateUrl : 'app/views/search-box.html',
    styleUrls : ['app/styles/styles.css']
})
export class SearchBox {
    @Input('placeholder')
    text = "search";

    clear(input: any) {
        input.value = '';
    }
}