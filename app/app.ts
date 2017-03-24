import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {SearchBox} from "./components/search-box-component";

@Component({
    selector:'my-app',
    template: `<h1>Hello World !</h1>
                <search-box></search-box>`
})
export class HelloWorld {
}

 
@NgModule({
    declarations: [HelloWorld, SearchBox],
    imports: [BrowserModule],
    bootstrap: [HelloWorld]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


