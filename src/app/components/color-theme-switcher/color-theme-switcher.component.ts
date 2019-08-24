import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppearanceService } from '../../services/appearance/appearance.service';
import { ColorTheme } from '../../core/colorTheme';

@Component({
  selector: 'app-color-theme-switcher',
  templateUrl: './color-theme-switcher.component.html',
  styleUrls: ['./color-theme-switcher.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorThemeSwitcherComponent implements OnInit {

  constructor(public appearance: AppearanceService) { }

  ngOnInit() {
  }

  public setColorTheme(colorTheme: ColorTheme): void {
    this.appearance.selectedColorTheme = colorTheme;
  }
}