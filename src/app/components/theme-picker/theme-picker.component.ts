import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent {

private themeWrapper = document.querySelector('body');

  onSubmit(form) {
    this.global(form.value);
  }

  global(stylesheet) {
    console.log(stylesheet);
    
    // Navigation Styles
    if (stylesheet.globalNavColor) {
      this.themeWrapper.style.setProperty('--navColor', stylesheet.globalNavColor);
    }
    if (stylesheet.globalNavBackground) {
      this.themeWrapper.style.setProperty('--navBackground', stylesheet.globalNavBackground);
    }

    // Card Styles
    if (stylesheet.globalCardColor) {
      this.themeWrapper.style.setProperty('--cardColor', stylesheet.globalCardColor);
    }
    if (stylesheet.globalCardBackground) {
      this.themeWrapper.style.setProperty('--cardBackground', stylesheet.globalCardBackground);
    }
    if (stylesheet.globalCardHeight) {
      this.themeWrapper.style.setProperty('--cardHeight', stylesheet.globalCardHeight);
    }
    if (stylesheet.globalCardWidth) {
      this.themeWrapper.style.setProperty('--cardWidth', stylesheet.globalCardWidth);
    }
    if (stylesheet.globalCardBorderWidth) {
      this.themeWrapper.style.setProperty('--cardBorderWidth', stylesheet.globalCardBorderWidth);
    }
    if (stylesheet.globalCardBorderStyle) {
      this.themeWrapper.style.setProperty('--cardBorderStyle', stylesheet.globalCardBorderStyle);
    }
    if (stylesheet.globalCardBorderColor) {
      this.themeWrapper.style.setProperty('--cardBorderColor', stylesheet.globalCardBorderColor);
    }
    if (stylesheet.globalCardMargin) {
      this.themeWrapper.style.setProperty('--cardMargin', stylesheet.globalCardMargin);
    }
    if (stylesheet.globalCardPadding) {
      this.themeWrapper.style.setProperty('--cardPadding', stylesheet.globalCardPadding);
    }
    

    // Footer Styles
    if (stylesheet.globalFooterColor) {
      this.themeWrapper.style.setProperty('--footerColor', stylesheet.globalFooterColor);
    }
    if (stylesheet.globalFooterBackground) {
      this.themeWrapper.style.setProperty('--footerBackground', stylesheet.globalFooterBackground);
    }
    if (stylesheet.globalFooterAlignment) {
      this.themeWrapper.style.setProperty('--footerAlignment', stylesheet.globalFooterAlignment);
    }

    // Button Styles
    if (stylesheet.globalButtonColor) {
      this.themeWrapper.style.setProperty('--buttonColor', stylesheet.globalButtonColor);
    }
    if (stylesheet.globalButtonBorderWidth) {
      this.themeWrapper.style.setProperty('--buttonBorderWidth', stylesheet.globalButtonBorderWidth);
    }
    if (stylesheet.globalButtonBorderStyle) {
      this.themeWrapper.style.setProperty('--buttonBorderStyle', stylesheet.globalButtonBorderStyle);
    }
    if (stylesheet.globalButtonBorderColor) {
      this.themeWrapper.style.setProperty('--buttonBorderColor', stylesheet.globalButtonBorderColor);
    }
    if (stylesheet.globalButtonBackground) {
      this.themeWrapper.style.setProperty('--buttonBackground', stylesheet.globalButtonBackground);
    }
  }

}