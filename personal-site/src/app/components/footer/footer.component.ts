import { Component, OnInit } from '@angular/core';
import {SocialEnum} from '../../model/social-enum';
import {socialProfileUrl} from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public socialEnum = SocialEnum;
  constructor() { }

  ngOnInit(): void {
  }

  goToLink(socialEnumChose: SocialEnum): void{
    switch (socialEnumChose) {
      case SocialEnum.LINKEDIN:
        window.open(socialProfileUrl.linkedin, "_blank");
    }
  }
}
