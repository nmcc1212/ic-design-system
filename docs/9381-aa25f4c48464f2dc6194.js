"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[9381],{9381:function(e,t,n){n.r(t),n.d(t,{ic_hero:function(){return r}});var i=n(2815),o=n(4581),a=n(338);const r=class{constructor(e){(0,i.r)(this,e),this.foregroundColor=(0,a.u)(),this.rightContent=!1,this.leftContentFullWidth=!this.rightContent&&void 0===this.secondaryHeading,this.scrollFactor="right -100px",this.aligned="left",this.backgroundImage=void 0,this.contentAligned="left",this.disableBackgroundParallax=!1,this.heading=void 0,this.secondaryHeading=void 0,this.secondarySubheading=void 0,this.size="default",this.small=!1,this.subheading=void 0}componentWillLoad(){this.rightContent=(0,a.t)(this.el,"secondary")}componentDidLoad(){(0,a.a)([{prop:this.heading,propName:"heading"}],"Hero")}componentWillRender(){this.rightContent=(0,a.t)(this.el,"secondary")}themeChangeHandler(e){const t=e.detail;this.foregroundColor=t.mode}doScroll(){if(this.disableBackgroundParallax)return;const e=.4*document.scrollingElement.scrollTop-100;this.scrollFactor="right "+e+"px"}render(){const{aligned:e,small:t,size:n,heading:r,subheading:s,secondaryHeading:c,secondarySubheading:h,foregroundColor:d,backgroundImage:l,scrollFactor:m}=this;let g={};return(0,a.d)(l)&&(g={"background-image":"url("+l+")","background-position":m}),(0,i.h)(i.H,{class:{[o.I.Dark]:d===o.I.Dark,"has-background-image":void 0!==l,small:t||"small"===n,"secondary-heading":!!c},style:g},(0,i.h)("ic-section-container",{aligned:e,fullHeight:!0,class:"section-container"},(0,i.h)("div",{class:{"left-container":!0,"left-container-full-width":this.leftContentFullWidth}},(0,i.h)("div",{class:"heading"},(0,i.h)("slot",{name:"heading"},(0,i.h)("ic-typography",{variant:t||"small"===n?"h2":"h1",class:{"heading-bottom-spacing":!t&&"small"!==n}},r))),(0,i.h)("div",{class:"subheading"},(0,i.h)("slot",{name:"subheading"},(0,i.h)("ic-typography",{variant:"body"},s))),(0,i.h)("div",{class:"interaction-container"},(0,i.h)("slot",{name:"interaction"}))),((0,a.d)(c)||this.rightContent)&&(0,i.h)("div",{class:"right-container"},(0,i.h)("slot",{name:"secondary"},c&&(0,i.h)("div",{class:"secondary-container"},(0,i.h)("div",{class:"secondary-heading"},(0,i.h)("ic-typography",{variant:"h4"},c)),(0,i.h)("div",{class:"secondary-subheading"},(0,i.h)("ic-typography",{variant:"subtitle-small"},h)))))))}get el(){return(0,i.g)(this)}};r.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;background-color:var(--ic-theme-tertiary);color:var(--ic-theme-text);--hero-heading-bottom-margin:var(--ic-space-md)}:host(.dark){background-color:var(--ic-theme-secondary)}:host(.has-background-image){background-repeat:no-repeat;background-position:right -6.25rem;background-size:auto calc(100% + 6.25rem);box-shadow:var(--ic-elevation-inset)}@media (prefers-reduced-motion){:host(.has-background-image){background-position:right -6.25rem !important}}ic-typography.heading-bottom-spacing{margin-bottom:var(--hero-heading-bottom-margin)}.section-container{display:flex;align-items:center;height:100%}.left-container{padding:var(--ic-space-xl) 0}.left-container:not(.left-container-full-width){flex-basis:50%}.left-container-full-width{width:100%}.right-container{flex-basis:50%}.interaction-container{display:flex;gap:var(--ic-space-md);margin-top:var(--ic-space-lg);flex-wrap:wrap}.secondary-container{display:flex;flex-direction:column;justify-content:center;border-left:var(--ic-space-xxxs) solid var(--ic-theme-text)}.secondary-subheading{margin-top:var(--ic-space-xxs)}:host([content-aligned="left"]) .left-container,:host([content-aligned="left"]) .interaction-container{justify-content:flex-start;text-align:left}:host([content-aligned="center"]) .left-container,:host([content-aligned="center"]) .interaction-container{justify-content:center;text-align:center}@media (min-width: 992px){.left-container-full-width{width:66.6%}}@media (min-width: 1044px){:host,.section-container{min-height:13rem}:host(.small),:host(.small) .section-container{min-height:10.813rem}.left-container:not(.left-container-full-width){flex-basis:66.6%}.left-container{min-height:9rem}.right-container{flex-basis:33.3%;margin-left:3.125rem}.secondary-container{min-height:9rem}.secondary-heading,.secondary-subheading{margin-left:3.938rem}}@media (min-width: 801px) and (max-width: 1043px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:16rem}:host(.small),:host(.small) .section-container{min-height:15rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:14rem}.left-container{min-height:10rem}.secondary-container{min-height:10rem}.secondary-heading,.secondary-subheading{margin-left:5.922rem}.right-container{margin-left:3.125rem}}@media (min-width: 641px) and (max-width: 800px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:16rem}:host(.small),:host(.small) .section-container{min-height:15rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:14rem}.left-container{min-height:10rem}.secondary-container{min-height:10rem}.secondary-heading,.secondary-subheading{margin-left:2.125rem}.right-container{margin-left:3.125rem}}@media (min-width: 481px) and (max-width: 640px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:13rem}:host(.small),:host(.small) .section-container{min-height:10.813rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:17.5rem}:host(.secondary-heading) .section-container,:host(.small) .section-container,.section-container{flex-direction:column;align-items:flex-start}.left-container{height:-moz-fit-content;height:fit-content}.secondary-container{height:-moz-fit-content;height:fit-content;border:none}.right-container{margin-bottom:2.5rem}}@media (max-width: 480px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:12rem}:host,.right-container{margin-bottom:var(--ic-space-md)}:host(.small),:host(.small) .section-container{min-height:10.813rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:16.5rem}:host(.secondary-heading) .section-container,:host(.small) .section-container,.section-container{flex-direction:column;align-items:flex-start}.left-container{height:-moz-fit-content;height:fit-content}.secondary-container{height:-moz-fit-content;height:fit-content;border:none}}'}}]);