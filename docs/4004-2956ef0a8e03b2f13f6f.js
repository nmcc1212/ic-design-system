"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[4004],{4004:function(t,a,i){i.r(a),i.d(a,{ic_navigation_menu:function(){return e}});var s=i(2815),o=i(338);i(4581);const e=class{constructor(t){(0,s.r)(this,t),this.icNavigationMenuClose=(0,s.c)(this,"icNavigationMenuClose",7),this.closeButton=null,this.hasButtons=!1,this.hasNavigation=!1,this.lastTabStop=null,this.navGroupFirst=!1,this.navItemAboveButtons=!1,this.closeMenu=()=>{this.icNavigationMenuClose.emit()},this.focusCloseButton=()=>{this.closeButton.focus&&this.closeButton.focus()},this.focusLastTabStop=()=>{let t;if(null!==this.lastTabStop)switch(this.lastTabStop.tagName){case"IC-NAVIGATION-BUTTON":case"IC-NAVIGATION-ITEM":case"IC-NAVIGATION-GROUP":t=this.lastTabStop,t.focus();break;case"A":this.lastTabStop.focus()}},this.status="",this.version=""}componentWillLoad(){this.navBarEl=document.querySelector("ic-top-navigation");const t=(0,o.A)(this.el,"navigation");if(t){this.hasNavigation=!0;"IC-NAVIGATION-ITEM"===t[t.length-1].tagName&&(this.navItemAboveButtons=!0);"IC-NAVIGATION-GROUP"===t[0].tagName&&(this.navGroupFirst=!0)}const a=(0,o.A)(this.el,"buttons");if(null!==a)this.hasButtons=!0,this.lastTabStop=a[a.length-1];else if(this.hasNavigation){const a=t[t.length-1],i=(0,o.L)(a,"navigation-item");this.lastTabStop=null!==i?i:a}}componentDidLoad(){this.focusCloseButton()}componentWillRender(){this.hasNavigation=(0,o.i)(this.el,"navigation"),this.hasButtons=(0,o.i)(this.el,"buttons")}navItemClickHandler(){this.closeMenu()}handleKeyDown(t){"Tab"===t.key?t.shiftKey?document.activeElement===this.navBarEl&&(t.preventDefault(),this.focusLastTabStop()):document.activeElement!==this.lastTabStop&&null!==this.lastTabStop||(t.preventDefault(),this.focusCloseButton()):"Escape"===t.key&&this.closeMenu()}render(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:"popout-modal",onClick:this.closeMenu}),(0,s.h)("div",{class:"popout-menu",role:"dialog","aria-modal":"true","aria-label":(this.hasNavigation?"Navigation":"App")+" menu"},(0,s.h)("span",{"aria-hidden":"true",id:"navigation-landmark-text",class:"navigation-landmark-text"},"Main navigation"),(0,s.h)("nav",{"aria-labelledby":"navigation-landmark-text","aria-hidden":this.hasNavigation?"false":"true"},(0,s.h)("div",{class:{"menu-close-button-container":!0,"nav-group-first":this.navGroupFirst}},(0,s.h)("ic-button",{ref:t=>this.closeButton=t,id:"menu-close-button",class:"menu-close-button",variant:"icon",size:"large","aria-label":`Close ${this.hasNavigation?"navigation":"app"} menu`,onClick:this.closeMenu},(0,s.h)("svg",{slot:"icon",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,s.h)("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",fill:"#1759BC"})))),this.hasNavigation&&(0,s.h)("slot",{name:"navigation"})),this.hasButtons&&(0,s.h)("div",{class:{"menu-buttons-container":!0,"menu-buttons-container-nav-item-above":this.navItemAboveButtons}},(0,s.h)("slot",{name:"buttons"})),(""!==this.status||""!==this.version)&&(0,s.h)("div",{class:{"menu-status-version-container":!0,"status-version-no-buttons":!this.hasButtons}},""!==this.status&&(0,s.h)("div",{class:"menu-status"},(0,s.h)("ic-typography",{variant:"label-uppercase","aria-label":"app tag",class:"menu-status-text"},this.status)),""!==this.version&&(0,s.h)("div",{class:"menu-version"},(0,s.h)("ic-typography",{variant:"label",class:"menu-version-text","aria-label":"app version"},this.version)))))}get el(){return(0,s.g)(this)}};e.style=":host{display:block;position:fixed;top:0;left:0;width:100%;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-navigation-menu)}.popout-modal{position:absolute;inset:0}.popout-menu{position:fixed;top:0;right:0;width:16rem;bottom:0;background-color:var(--ic-architectural-20);color:var(--ic-color-primary-text);box-shadow:var(--ic-elevation-overlay);overflow-y:auto;overflow-x:hidden}:host(.inline) .popout-menu{position:absolute}.menu-close-button-container{position:relative;left:11.875rem;padding:var(--ic-space-md) 0}.nav-group-first{padding-bottom:0}.menu-buttons-container{padding:var(--ic-space-sm) 0;border-bottom:var(--ic-border-width) solid var(--ic-architectural-200)}.menu-buttons-container-nav-item-above{margin-top:var(--ic-space-md);border-top:var(--ic-border-width) solid var(--ic-architectural-200)}.menu-status-version-container{display:flex;flex-wrap:wrap;gap:var(--ic-space-xs);padding:var(--ic-space-md) var(--ic-space-md) var(--ic-space-xl)}.status-version-no-buttons{border-top:var(--ic-space-1px) solid var(--ic-architectural-200)}.menu-status{background-color:var(--ic-architectural-500);color:var(--ic-color-white-text);border-radius:var(--ic-space-md);width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-version{border-radius:var(--ic-space-md);background-color:var(--ic-architectural-100);padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-status-text,.menu-version-text{overflow-wrap:break-word}.navigation-landmark-text{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}"}}]);