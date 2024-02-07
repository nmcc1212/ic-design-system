"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[5130],{5130:function(t,e,i){i.r(e),i.d(e,{ic_toggle_button:function(){return c}});var a=i(2815),o=i(338);i(4581);const c=class{constructor(t){(0,a.r)(this,t),this.icToggleChecked=(0,a.c)(this,"icToggleChecked",7),this.handleClick=()=>{!this.loading&&!this.disabled&&this.icToggleChecked.emit({checked:this.toggleChecked})},this.accessibleLabel=void 0,this.appearance="default",this.disabled=!1,this.fullWidth=!1,this.iconPlacement=void 0,this.label=void 0,this.loading=!1,this.size="default",this.toggleChecked=!1,this.variant="default"}componentWillLoad(){(0,o.j)(this.disabled,this.el)}componentDidLoad(){(0,o.a)([{prop:"icon"===this.variant?this.accessibleLabel:this.label,propName:"icon"===this.variant?"accessible-label":"label"}],"Toggle button")}handleHostClick(t){this.disabled?t.stopImmediatePropagation():this.loading||(this.toggleChecked=!this.toggleChecked)}render(){return(0,a.h)(a.H,{class:{disabled:this.disabled,checked:this.toggleChecked,[`${this.appearance}`]:!0,icon:"icon"===this.variant,[`${this.size}`]:!0,loading:this.loading}},(0,a.h)("ic-button",{role:"checkbox","aria-checked":this.toggleChecked?"true":"false",variant:"icon"===this.variant?"icon":"secondary",onClick:this.handleClick,title:this.accessibleLabel,"aria-label":`${this.accessibleLabel?this.accessibleLabel:this.label}, ${this.toggleChecked?"ticked":"unticked"}`,disabled:this.disabled,appearance:this.appearance,size:this.size,fullWidth:this.fullWidth,loading:this.loading,"aria-disabled":`${this.disabled}`},"icon"!==this.variant&&this.label,(0,a.h)("slot",null),(0,o.i)(this.el,"icon")&&(0,a.h)("slot",{name:"icon",slot:""+(this.iconPlacement?`${this.iconPlacement}-icon`:"icon")}),(0,o.i)(this.el,"badge")&&(0,a.h)("slot",{name:"badge",slot:"badge"})))}static get delegatesFocus(){return!0}get el(){return(0,a.g)(this)}};c.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.checked) ::part(button){background-color:var(--ic-action-default);color:var(--ic-architectural-white);box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-white)}:host(.checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-white),\n    var(--ic-border-focus)}:host(.checked) ::part(button):hover{background-color:var(--button-default-hover)}:host(.checked) ::part(button):active,:host(.icon.checked) ::part(button):active{background-color:var(--ic-action-default-active)}:host(.dark.checked) ::part(button){background-color:var(--ic-action-dark)}:host(.dark.checked) ::part(button):hover{background-color:var(--ic-action-dark-hover)}:host(.dark.checked) ::part(button):active,:host(.icon.dark.checked) ::part(button):active{background-color:var(--ic-action-dark-active)}:host(.light.checked) ::part(button){background-color:var(--ic-action-light);color:var(--ic-color-primary-text);box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-black)}:host(.light.checked) ::part(button):hover{background-color:var(--ic-action-light-hover)}:host(.light.checked) ::part(button):active,:host(.icon.light.checked) ::part(button):active{background-color:var(--ic-action-light-active)}:host(.light.checked) ::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-black),\n    var(--ic-border-focus)}:host(.disabled) ::part(button),:host(.icon.disabled) ::part(button){border:var(--ic-border-disabled)}:host(.disabled.checked) ::part(button),:host(.icon.disabled.checked) ::part(button){background-color:transparent}:host(.disabled.checked) ::part(button),:host(.icon.disabled.checked) ::part(button)::before{background-image:radial-gradient(var(--ic-architectural-400) 95%, white 20%);background-repeat:no-repeat}:host(.icon) ::part(button){border:var(--ic-border-width) solid var(--button-default);height:calc(var(--ic-space-xl) + var(--ic-space-xs));width:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.icon) ::part(button):active{background-color:var(--ic-action-default-bg-active)}:host(.icon.dark) ::part(button):active{background-color:var(--ic-action-dark-bg-active)}:host(.icon.light) ::part(button):active{background-color:var(--ic-action-light-bg-active)}:host(.icon.small) ::part(button){height:var(--ic-space-xl);width:var(--ic-space-xl)}:host(.icon.large) ::part(button){height:var(--ic-space-xxl);width:var(--ic-space-xxl)}:host(.checked.loading) ::part(button){background-color:var(--button-default-active)}:host(.loading) ::part(ic-loading-container){--inner-color:var(--ic-architectural-white)}:host(.checked.loading.light) ::part(button){background-color:var(--ic-action-light-active)}:host(.checked.loading.dark) ::part(button){background-color:var(--ic-action-dark-active)}'}}]);