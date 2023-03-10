'use strict';
import { BgFix } from './_bgFix';
import { modalFocus } from './_modalFocus';
/**
 * @param {Object} obj
 * @param {Object} obj.hamburger hamburger btn id
 * @param {Object} obj.menu navigation class
 * @param {Object} obj.CLASS class name you wanna add,
 *
 */

export class Drawer {
  constructor(obj) {
    this.DOM = {};
    this.DOM.hamburger = document.getElementById(obj.hamburger);
    this.DOM.menu = document.querySelector(`.${obj.menu}`);
    this.CLASS = obj.CLASS;
    this.flg = false;
    this.bgFix = new BgFix();
    this.focusHandle = (event) => modalFocus(event, this.DOM.menu);
    this._addEvent();
  }

  _addEvent() {
    this.DOM.hamburger.addEventListener('click', () => {
      //ハンバーガーボタンが選択されたら
      this.flg ? this._close() : this._open();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this._close();
      }
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 768px)').matches && this.flg) this._close();
    });
  }

  _open() {
    this.flg = true;
    this.bgFix.on();
    this.DOM.menu.classList.add(this.CLASS);
    this.DOM.hamburger.classList.add(this.CLASS);
    this.DOM.hamburger.setAttribute('aria-expanded', 'true');
    this.DOM.hamburger.setAttribute('aria-label', 'メニューを閉じる');
    this.DOM.menu.setAttribute('aria-hidden', 'false');
    this.DOM.hamburger.focus();
    window.addEventListener('keydown', this.focusHandle);
  }

  _close() {
    this.flg = false;
    this.bgFix.off();
    this.DOM.menu.classList.remove(this.CLASS);
    this.DOM.hamburger.classList.remove(this.CLASS);
    this.DOM.hamburger.setAttribute('aria-label', 'メニューを開く');
    this.DOM.hamburger.setAttribute('aria-expanded', 'false');
    this.DOM.menu.setAttribute('aria-hidden', 'true');
    window.removeEventListener('keydown', this.focusHandle);
  }
}
