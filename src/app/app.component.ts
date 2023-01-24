import {Component} from '@angular/core';
import {MenuService} from "./services/menu.service";
import {KnowService} from "./services/know.service";
import {TranslateService} from "@ngx-translate/core";
import {LangUtilsService} from "./services/lang-utils.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giovanniemanuelelongo';

  public lang = this.langUtilsService.langSelected;

  constructor(public menuService: MenuService, public knowService: KnowService, private langUtilsService: LangUtilsService) {
  }

  setSelectedMenu(link: string): void {
    console.log(link);
    this.menuService.selectedMenu.next(link);
  }

  changeRef(link: string): void {
    this.setSelectedMenu(link);
    const element = document.querySelector(link)
    if (element) element.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  changeLang(lang: 'it' | 'en'): void {
    this.langUtilsService.changeLang(lang);
  }
}
