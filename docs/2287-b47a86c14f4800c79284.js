"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[2287],{2287:function(t,e,s){s.r(e),s.d(e,{ic_step:function(){return r}});var i=s(2815),a=s(6719),c=s(4056);s(4581);const r=class{constructor(t){(0,i.r)(this,t),this.compactStepStyling=void 0,this.current=!1,this.lastStep=void 0,this.lastStepNum=void 0,this.nextStepTitle=void 0,this.progress=void 0,this.stepNum=void 0,this.stepStatus=void 0,this.stepSubtitle=void 0,this.stepTitle=void 0,this.variant=void 0,this.stepType="active"}stepTypeChangeHandler(){"compact"===this.variant&&"current"===this.stepType?this.current=!0:this.current=!1}render(){var t;let e,s,r,o="";"completed"===this.stepType?o=". Completed step":"disabled"===this.stepType?o=". Non-required step":"required"===this.stepStatus?o=". Required step":"optional"===this.stepStatus&&(o=". Optional step"),(0,c.d)(this.stepStatus)&&(e=this.stepStatus[0].toUpperCase()+this.stepStatus.slice(1)),"disabled"===this.stepType||"disabled"===this.compactStepStyling?s="Not required":"completed"===this.compactStepStyling&&(s="Completed"),"completed"===this.stepType||"completed"===this.compactStepStyling?r=(0,i.h)("span",{class:"check-icon step-icon","aria-hidden":"true",innerHTML:a.C}):"disabled"!==this.stepType&&"disabled"!==this.compactStepStyling||(r=(0,i.h)("span",{class:"warning-icon step-icon","aria-hidden":"true",innerHTML:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.99935 4.32666L13.0193 13H2.97935L7.99935 4.32666ZM7.99935 1.66666L0.666016 14.3333H15.3327L7.99935 1.66666ZM8.66602 11H7.33268V12.3333H8.66602V11ZM8.66602 6.99999H7.33268V9.66666H8.66602V6.99999Z" fill="currentColor"/>\n</svg>'}));const l=(0,i.h)("div",{class:{step:!0,current:this.current,[`compact-step-${this.compactStepStyling}`]:!!this.compactStepStyling}},(0,i.h)("ic-loading-indicator",{class:{"compact-step-progress-indicator":!0,"not-required":"disabled"===this.stepType||"disabled"===this.compactStepStyling},"aria-hidden":"true",size:"small","inner-label":this.stepNum,progress:this.progress}),(0,i.h)("div",{class:"step-title-area"},(0,i.h)("ic-typography",{variant:"h4",class:"step-title"},this.stepTitle),(0,i.h)("div",{class:"info-line"},(0,i.h)("ic-typography",{variant:"caption",class:"step-num"},`${this.stepNum} of ${this.lastStepNum}`,(0,i.h)("span",{class:"visually-hidden"}," steps")),(this.stepSubtitle||"completed"===this.stepType||"disabled"===this.stepType||"compact"===this.variant&&!!this.compactStepStyling&&"active"!==this.compactStepStyling||!!this.stepStatus)&&(0,i.h)("div",{class:"step-status"},void 0!==r&&r,(this.stepSubtitle||s)&&(0,i.h)("ic-typography",{variant:"caption"},null!==this.stepSubtitle&&(0,c.d)(this.stepSubtitle)?this.stepSubtitle:"disabled"===this.stepType||"compact"===this.variant&&"disabled"===this.compactStepStyling||"completed"===this.stepType||"compact"===this.variant&&"completed"===this.compactStepStyling?s:this.stepStatus&&e))),this.lastStep?(0,i.h)("ic-typography",{variant:"subtitle-small",class:"next-step"},"Last step"):(0,c.d)(this.nextStepTitle)&&(0,i.h)("ic-typography",{variant:"subtitle-small",class:"next-step"},"Next",(0,i.h)("span",{class:"visually-hidden"}," step is"),":"," ",this.nextStepTitle)));let p;p="completed"!==this.stepType?(0,i.h)("ic-typography",{variant:"subtitle-small"},(0,i.h)("span",{class:"step-icon-inner","aria-hidden":"true"},this.stepNum)):(0,i.h)("div",{class:"step-icon-inner","aria-hidden":"true"},(0,i.h)("span",{class:"check-icon",innerHTML:a.C}));const n="current"===this.stepType&&(0,i.h)("div",{class:"step-connect-inner"}),h=!this.lastStep&&(0,i.h)("div",{class:{"step-connect":!0,"aligned-full-width":this.el.parentElement.classList.contains("default")&&!this.el.parentElement.classList.contains("aligned-left")}},n),d=(0,i.h)("div",{class:{step:!0,[`${this.stepType}`]:!0}},(0,i.h)("div",{class:"step-top"},(0,i.h)("div",{class:"step-icon"},p),h),(this.stepTitle||this.stepSubtitle||this.stepStatus)&&(0,i.h)("div",{class:"step-title-area"},this.stepTitle&&(0,i.h)("ic-typography",{variant:"subtitle-large",class:"step-title"},this.stepTitle),this.stepTitle&&(this.stepSubtitle||this.stepStatus)&&(0,i.h)("ic-typography",{variant:"caption",class:"step-subtitle"},null!==this.stepSubtitle&&(0,c.d)(this.stepSubtitle)?this.stepSubtitle:e)));return(0,i.h)(i.H,{role:"listitem","aria-label":`Step ${this.stepNum}${o}`,"aria-current":(this.current||"current"===this.stepType)&&"step",class:{"aligned-full-width":this.el.parentElement.classList.contains("default")&&!this.el.parentElement.classList.contains("aligned-left"),[`${this.variant}`]:!0,light:"light"===(null===(t=this.el.parentElement)||void 0===t?void 0:t.appearance)}},"compact"===this.variant?l:d)}get el(){return(0,i.g)(this)}static get watchers(){return{stepType:["stepTypeChangeHandler"]}}};r.style=":host{display:flex;flex:auto}.step{display:flex;flex:1 1 0}.step-icon{display:flex;justify-content:center}.step-title,.step-subtitle,.step-status,.next-step{white-space:pre-line}.visually-hidden{position:absolute;left:-625rem;top:auto;width:1px;height:1px;overflow:hidden}:host(.compact){-moz-column-gap:var(--ic-space-sm);column-gap:var(--ic-space-sm);--compact-step-inner-color:var(--ic-status-info);--compact-step-circular-line-width:var(--ic-space-xxs)}:host(.compact.light){--compact-step-inner-color:var(--ic-status-info-contrast);--compact-step-outer-color:var(--ic-architectural-600)}:host(.compact) .step{-moz-column-gap:var(--ic-space-sm);column-gap:var(--ic-space-sm)}:host(.compact) .step:not(.current){display:none;opacity:0;visibility:hidden}.compact-step-progress-indicator{margin:var(--ic-space-xs) 0 0}:host ic-loading-indicator::part(ic-loading-container){border-radius:50%}:host(:not(.light)) ic-loading-indicator::part(ic-loading-container){background-color:var(--ic-architectural-white)}:host(.compact) .step-title-area{display:flex;flex-direction:column;width:14.25rem}:host(.compact.light) .disabled .step-title-area{color:var(--ic-architectural-400)}.info-line{display:flex;-moz-column-gap:var(--ic-space-xs);column-gap:var(--ic-space-xs)}.step-status{display:flex;color:var(--ic-color-secondary-text);-moz-column-gap:var(--ic-space-xxxs);column-gap:var(--ic-space-xxxs)}.compact-step-completed .step-status{color:var(--ic-status-success)}:host(.light) .compact-step-completed .step-status{color:var(--ic-status-success-contrast)}.compact-step-disabled :is(.step-title,.step-status){color:var(--ic-color-tertiary-text)}:host(.light) .compact-step-disabled :is(.step-status){color:var(--ic-architectural-white)}.step-num{color:var(--ic-color-secondary-text);white-space:nowrap}:host(.light) .step-num{color:var(--ic-architectural-white)}:host(.compact) .step-icon{margin:var(--ic-space-xxxs)}:host(.compact) .step-icon svg{width:var(--ic-space-md);height:var(--ic-space-md)}:host(.default) .step{flex-direction:column}:host(.default.last-step){flex-grow:initial}.step-top{display:flex;width:100%;align-items:center;align-self:flex-start;height:2.5rem}:host(.default) .step-icon{border-radius:50%}:host(.default:not(.light)) .step-icon{background-color:var(--ic-architectural-white)}.step-icon-inner{width:var(--ic-space-xl);height:var(--ic-space-xl);display:flex;justify-content:center;align-items:center;border-radius:50%}:host(.default) .current{color:var(--ic-status-info)}:host(.default.light) .current,:host(.default.light) .current .step-title-area{color:var(--ic-status-info-contrast)}:host(.default) .step-title-area{margin:var(--ic-space-xs) 0;padding-right:var(--ic-space-xs);width:100%}:host(.light) .step-title-area{color:var(--ic-architectural-200)}:host(.compact.light) .step-title-area{color:var(--ic-architectural-white)}:host(.default) .step-title,.step-subtitle{width:-moz-fit-content;width:fit-content}.step-subtitle{color:var(--ic-color-tertiary-text)}:host(.light) .step-subtitle{color:var(--ic-architectural-white)}.current .step-subtitle{color:var(--ic-color-primary-text)}:host(.default) .completed{color:var(--ic-status-success)}:host(.default.light) .completed,:host(.default.light) .completed .step-title-area{color:var(--ic-status-success-contrast)}.active .step-icon-inner{box-shadow:inset var(--ic-architectural-200) 0 0 0 0.125rem}:host(.light) .active .step-icon-inner{color:var(--ic-architectural-white)}.current .step-icon-inner{background-color:var(--ic-status-info);color:white}:host(.light) .current .step-icon-inner{background-color:var(--ic-status-info-contrast)}.disabled{color:var(--ic-architectural-200)}:host(.default.light) .disabled,:host(.default.light) .disabled .step-title-area{color:var(--ic-architectural-400)}.disabled .step-icon-inner{border:var(--ic-border-width) dashed var(--ic-architectural-200);width:calc(var(--ic-space-xl) - var(--ic-space-xxxs));height:calc(var(--ic-space-xl) - var(--ic-space-xxxs))}:host(.light) .disabled .step-icon-inner{border:var(--ic-border-width) dashed var(--ic-architectural-400)}.disabled .step-title-area,:host(.default.light) .disabled .step-subtitle{color:var(--ic-color-tertiary-text)}.completed .step-icon-inner{background:var(--ic-status-success);box-shadow:inset var(--ic-status-success) 0 0 0 var(--ic-space-xxxs);border-radius:100%}:host(.light) .completed .step-icon-inner{background:var(--ic-status-success-contrast);box-shadow:inset var(--ic-status-success-contrast) 0 0 0 var(--ic-space-xxxs)}:host(.default) .current .step-icon{border:var(--ic-space-xxxs) solid var(--ic-status-info);padding:var(--ic-space-xxxs);margin:0 calc(-1 * var(--ic-space-xxxs));}:host(.default.light) .current .step-icon{border:var(--ic-space-xxxs) solid var(--ic-status-info-contrast)}.step-connect{height:var(--ic-space-xxxs);background-color:var(--ic-architectural-200);margin:0 var(--ic-space-xs);border-radius:var(--ic-space-xxs);width:100%}:host(.light) .step-connect{background-color:var(--ic-architectural-600)}.aligned-full-width.step-connect{min-width:6.25rem;width:100%}.disabled .step-connect{height:0;background-color:rgb(0 0 0 / 0%);border-top:0.125rem dashed var(--ic-architectural-200);border-radius:0}:host(.light) .disabled .step-connect{border-top:0.125rem dashed var(--ic-architectural-600)}.completed .step-connect{background-color:var(--ic-status-success)}:host(.light) .completed .step-connect{background-color:var(--ic-status-success-contrast)}.step-connect-inner{width:70%;display:flex;flex:auto;height:var(--ic-space-xxxs);border-radius:var(--ic-space-xxs);background-color:var(--ic-status-info)}:host(.light) .step-connect-inner{background-color:var(--ic-status-info-contrast)}.step-icon-inner .check-icon{padding-top:var(--ic-space-xxs)}.step-icon-inner .check-icon svg{width:var(--ic-space-md);height:auto}.step-icon-inner .check-icon>svg>path{fill:var(--ic-color-white-text)}@media (forced-colors: active){.compact-step-disabled :is(.step-title,.step-status){color:GrayText}.step-connect:not(.disabled .step-connect){border:var(--ic-hc-border)}.active .step-icon-inner,.completed .step-icon-inner,.current .step-icon-inner{forced-color-adjust:none;box-shadow:inset canvastext 0 0 0 0.125rem;background-color:transparent;color:canvastext}:host(.default) .current .step-icon{padding:0;border:none}.disabled,.disabled .step-title-area{color:GrayText}.step-connect-inner,.completed .step-connect{background-color:canvastext}.step-icon-inner .check-icon>svg>path{fill:canvastext}}"}}]);