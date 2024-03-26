"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[2725],{2725:function(e,t,i){i.r(t),i.d(t,{ic_toggle_button_group:function(){return n}});var o=i(2815);const s="IC-TOGGLE-BUTTON-GROUP",n=class{constructor(e){(0,o.r)(this,e),this.icChange=(0,o.c)(this,"icChange",7),this.keyListener=e=>{this.lastKeyPressed={key:e.key,shift:e.shiftKey}},this.setSlottedAria=e=>{const t=e.shadowRoot.querySelector("ic-button").shadowRoot.querySelector("button");let i=t.getAttribute("aria-label");i+=", ",i+=this.accessibleLabel,t.setAttribute("aria-label",i)},this.handleHostFocus=e=>{if(this.loading||this.disabled)return null;const t=e.target,i=e.relatedTarget,o=Array.from(t.querySelectorAll("ic-toggle-button"));if((o.every((e=>!e.toggleChecked))||"single"!==this.selectType)&&!1===this.lastKeyPressed.shift||o.every((e=>!e.toggleChecked))&&!0===this.lastKeyPressed.shift&&i.tagName==s)o[0].focus();else if(!1===this.lastKeyPressed.shift||!0===this.lastKeyPressed.shift&&i.tagName==s){const e=o.filter((e=>e.toggleChecked));e[0].focus()}},this.handleKeyDown=e=>{const t=this.getAllToggleButtons(),i=t.indexOf(t.filter((e=>e===document.activeElement))[0]);switch(e.key){case"ArrowDown":case"ArrowRight":"auto"===this.selectMethod?this.proxySelectHandler(t[this.getNextItemToSelect(i,!0)]):t[this.getNextItemToSelect(i,!0)].focus();break;case"ArrowUp":case"ArrowLeft":"auto"===this.selectMethod?this.proxySelectHandler(t[this.getNextItemToSelect(i,!1)]):t[this.getNextItemToSelect(i,!1)].focus()}},this.getNextItemToSelect=(e,t)=>{const i=this.getAllToggleButtons(),o=i.length-1;e<1&&(e=0);let s=t?e+1:e-1;return s<0?s=o:s>o&&(s=0),i[s].disabled&&(s=this.getNextItemToSelect(s,t)),s},this.lastKeyPressed={key:null,shift:!1},this.accessibleLabel="Toggle button group",this.appearance="default",this.disabled=!1,this.fullWidth=!1,this.iconPlacement=void 0,this.loading=!1,this.selectMethod="manual",this.selectType="single",this.size="default",this.variant="default"}selectHandler(e,t){const i=this.getAllToggleButtons();let o=e.target;if(t&&t.focus(),"single"===this.selectType)o||(o=t),i.forEach((e=>{e.id!==o.id&&e.toggleChecked&&(e.toggleChecked=!1)})),this.icChange.emit({toggleChecked:e.detail.toggleChecked,selectedOption:o});else{const e=this.getAllToggleButtons().filter((e=>e.toggleChecked&&!e.disabled));this.icChange.emit({toggleChecked:e.map((e=>e.toggleChecked)),toggledOptions:e.map((e=>({toggleButton:e}))),selectedOption:o})}}componentWillLoad(){"multi"===this.selectType&&(this.selectMethod="manual"),document.addEventListener("keydown",this.keyListener)}componentDidLoad(){this.getAllToggleButtons().forEach(((e,t)=>{this.setSlottedAria(e),e.size=this.size,e.loading=this.loading,e.iconPlacement=this.iconPlacement,!e.disabled&&(e.disabled=this.disabled),e.appearance=this.appearance,e.variant=this.variant,e.fullWidth=this.fullWidth,e.id=t.toString(),e.tabIndex=-1,e.addEventListener("keydown",(e=>{this.handleKeyDown(e)})),e.classList.add("expand-toggle-group-child")}))}disconnectedCallback(){document.removeEventListener("keydown",this.keyListener)}proxySelectHandler(e){e.toggleChecked=!0;const t=new CustomEvent("icToggleChecked",{detail:{toggleChecked:e.toggleChecked}});this.selectHandler(t,e)}getAllToggleButtons(){return Array.from(this.el.querySelectorAll("ic-toggle-button"))}render(){return(0,o.h)(o.H,{role:"group","aria-label":this.accessibleLabel,"aria-disabled":this.disabled?"true":"false",tabindex:0,class:{"full-width":this.fullWidth,loading:this.loading,disabled:this.disabled,[`${this.appearance}`]:!0},onFocus:this.handleHostFocus},(0,o.h)("slot",null))}get el(){return(0,o.g)(this)}};n.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:root{display:block}:host{display:flex;flex-direction:row;width:-moz-fit-content;width:fit-content;min-width:-moz-min-content;min-width:min-content;border:var(--ic-border-width) solid var(--ic-action-default);border-radius:var(--ic-border-radius)}:host(.full-width){width:100%;max-width:100%}:host(.loading){min-width:-moz-max-content;min-width:max-content}:host(:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast);outline:none}::slotted(ic-toggle-button){flex-grow:1;--toggle-button-border:none;width:-moz-min-content;width:min-content}::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid var(--ic-action-default)}:host(.disabled){border:var(--ic-border-disabled);pointer-events:none}:host(.disabled) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-disabled)}:host(.dark){border:var(--ic-border-width) solid var(--ic-action-dark)}:host(.dark) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid var(--ic-action-dark)}:host(.light) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid var(--ic-action-light)}:host(.light){border:var(--ic-border-width) solid var(--ic-action-light)}'}}]);