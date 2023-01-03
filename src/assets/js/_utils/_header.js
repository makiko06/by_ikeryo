'use strict';

import { BgFix, bgFix } from './_bgFix';

export class Header {
  constructor(obj) { //変数　定数を
    this.btn = document.querySelector(obj.btn);
    this.menu = document.querySelector(obj.menu);
    this.ADD_CLASS = obj.ADD_CLASS;
    this.bgFix = new BgFix();

    this._addEvent();
  }

  _addEvent() {
    this.btn.addEventListener('click', this._toggle.bind(this));
    window.addEventListener('resize', this._resize.bind(this));
  }

  _toggle() {
    const hasIsActive = this.menu.classList.contains('is-active');
    if (!hasIsActive) {
      this._open();
      return;
    }
    this._close();
  }
  _resize() {
    const isPC = window.innerWidth > 768;
    if(isPC) {
      this._close();
    }
  }

  _open() {
    this.menu.classList.add(this.ADD_CLASS);
    this.btn.classList.add(this.ADD_CLASS);
    this.btn.setAttribute('aria-expanded', 'true');
    this.btn.setAttribute('aria-label', 'メニューを閉じる');
    this.menu.setAttribute('aria-hidden', 'false');
    this.bgFix.on();
  }
  _close() {
    this.menu.classList.remove(this.ADD_CLASS);
    this.btn.classList.remove(this.ADD_CLASS);
    this.btn.setAttribute('aria-expanded', 'false');
    this.btn.setAttribute('aria-label', 'メニューを開く');
    this.menu.setAttribute('aria-hidden', 'true');
    this.bgFix.off();
  }
}