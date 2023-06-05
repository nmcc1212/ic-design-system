"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[758],{758:function(t,e,i){i.r(e),i.d(e,{ic_text_field:function(){return l}});var a=i(3795),n=i(9455),s=i(7719);let o=0;const l=class{constructor(t){(0,a.r)(this,t),this.icKeydown=(0,a.c)(this,"icKeydown",7),this.icInput=(0,a.c)(this,"icInput",7),this.icBlur=(0,a.c)(this,"icBlur",7),this.icFocus=(0,a.c)(this,"icFocus",7),this.icChange=(0,a.c)(this,"icChange",7),this.getValidationText=(0,a.c)(this,"getValidationText",7),this.inheritedAttributes={},this.showLeftIcon=this.hasLeftIconSlot(),this.onInput=t=>{this.value=t.target.value,this.icInput.emit({value:this.value})},this.onBlur=t=>{const e=t.target.value;this.icBlur.emit({value:e})},this.onFocus=t=>{const e=t.target.value;this.icFocus.emit({value:e})},this.isTextArea=()=>this.rows>1,this.getInlineValidationText=()=>{this.getValidationText.emit({value:this.validationText})},this.hasStatus=t=>""!==t&&!this.disabled,this.showStatusText=t=>this.hasStatus(t)&&!(t==n.a.Success&&this.validationInline)&&!this.validationInlineInternal,this.handleFormReset=()=>{this.value=this.initialValue},this.inputId="ic-text-field-input-".concat(o++),this.label=void 0,this.required=!1,this.disabled=!1,this.readonly=!1,this.placeholder="",this.fullWidth=!1,this.hideLabel=!1,this.helperText="",this.rows=1,this.resize=!1,this.small=!1,this.value="",this.min=void 0,this.max=void 0,this.maxLength=0,this.validationStatus="",this.validationText="",this.validationInline=!1,this.validationInlineInternal=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autoFocus=!1,this.debounce=0,this.type="text",this.inputmode="text",this.name=this.inputId,this.spellcheck=!1,this.ariaActiveDescendant=void 0,this.truncateValue=void 0,this.ariaExpanded=void 0,this.ariaOwns=void 0,this.ariaAutocomplete=void 0,this.role=void 0,this.hiddenInput=!0,this.numChars=0,this.maxLengthExceeded=!1,this.minValueUnattained=!1,this.maxValueExceeded=!1,this.initialValue=this.value}debounceChanged(){this.icChange=(0,s.J)(this.icChange,this.debounce)}watchValueHandler(t){this.inputEl&&this.inputEl.value!==t&&(this.inputEl.value=t),this.numChars=t.length,"number"===this.type&&(t&&Number(t)<Number(this.min)?this.minValueUnattained=!0:this.minValueUnattained=!1,Number(t)>Number(this.max)?this.maxValueExceeded=!0:this.maxValueExceeded=!1),this.maxLength>0&&(t.length>this.maxLength?this.maxLengthExceeded=!0:this.maxLengthExceeded=!1),this.icChange.emit({value:t})}async setFocus(){this.inputEl&&this.inputEl.focus()}handleKeyDown(t){this.icKeydown.emit({event:t}),t.cancelBubble=!0}hasLeftIconSlot(){return null!==this.el.querySelector('[slot="icon"]')}connectedCallback(){this.debounceChanged()}componentWillLoad(){this.watchValueHandler(this.value),this.inheritedAttributes=(0,s.m)(this.el,[...s.n,"title","aria-autocomplete","aria-haspopup"]),this.readonly&&(this.maxLengthExceeded=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1),(0,s.d)(this.el,this.handleFormReset)}componentDidLoad(){(0,s.a)([{prop:this.label,propName:"label"}],"Text Field"),this.validationInlineInternal&&this.getInlineValidationText()}disconnectedCallback(){(0,s.r)(this.el,this.handleFormReset)}render(){const{inputId:t,name:e,label:i,required:o,small:l,placeholder:r,helperText:h,rows:c,resize:d,disabled:u,value:p,min:m,max:b,maxLength:x,numChars:v,readonly:g,maxLengthExceeded:f,minValueUnattained:y,maxValueExceeded:w,validationStatus:k,validationText:I,validationInline:z,validationInlineInternal:L,spellcheck:E,inputmode:V,fullWidth:F,truncateValue:T,hiddenInput:C}=this,S=!!g||u,B=u?"":r,A=f||w||y?n.a.Error:k,q=f?"Maximum length exceeded":w?"Maximum value of ".concat(b," exceeded"):y?"Minimum value of ".concat(m," not met"):I,K=g?0:x,_=f||w||y||0===x&&A===n.a.Error?"assertive":"polite",M=this.showStatusText(A),N=this.isTextArea(),U=x>0?t+"-charcount-desc":"",W=(U+" "+(0,s.h)(t,""!==h,M)).trim();this.showLeftIcon&&!g&&S&&(this.showLeftIcon=!1);const j=A===n.a.Error?"true":"false",D=S&&!g;return C&&(0,s.e)(!0,this.el,e,p,S),(0,a.h)(a.H,{class:{fullwidth:F}},(0,a.h)("ic-input-container",{readonly:g,disabled:S},!this.hideLabel&&(0,a.h)("ic-input-label",{for:t,label:i,helperText:h,required:o,disabled:D,readonly:g}),(0,a.h)("ic-input-component-container",{small:l,validationStatus:A,multiLine:N,disabled:S,readonly:g,validationInline:z,fullWidth:F},this.showLeftIcon&&(0,a.h)("span",{class:{readonly:g,"has-value":p.length>0},slot:"left-icon"},(0,a.h)("slot",{name:"icon"})),!N&&(0,a.h)("input",Object.assign({id:t,name:e,ref:t=>this.inputEl=t,type:this.type,min:m,max:b,value:p,class:{"no-left-pad":!this.showLeftIcon&&g,readonly:g,"truncate-value":T},placeholder:B,required:o,disabled:S,readonly:g,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":i,"aria-describedby":W,"aria-invalid":j,"aria-activedescendant":this.ariaActiveDescendant,"aria-expanded":this.ariaExpanded,"aria-owns":this.ariaOwns,autocomplete:this.autocomplete,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck:E,inputmode:V,role:this.role},this.inheritedAttributes)),N&&(0,a.h)("textarea",Object.assign({id:t,class:{"no-resize":!1===d||g,"no-left-pad":!this.showLeftIcon&&g,readonly:g},name:e,ref:t=>this.inputEl=t,value:p,rows:c,required:o,disabled:S,placeholder:B,readonly:g,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":i,"aria-describedby":W,"aria-invalid":j,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck:E,inputmode:V},this.inheritedAttributes)),(0,s.i)(this.el,"clear-button")&&(0,a.h)("slot",{name:"clear-button"}),(0,s.i)(this.el,"search-submit-button")&&(0,a.h)("slot",{name:"search-submit-button"})),(0,s.i)(this.el,"menu")&&(0,a.h)("slot",{name:"menu"}),(!(0,s.K)(k)||!(0,s.K)(I)||K>0||w||y)&&!L&&(0,a.h)("ic-input-validation",{status:!1===this.hasStatus(A)||A===n.a.Success&&z||L?"":A,message:M?q:"",ariaLiveMode:_,for:t,fullWidth:F},!g&&K>0&&(0,a.h)("div",{slot:"validation-message-adornment"},(0,a.h)("ic-typography",{variant:"caption",class:{maxlengthtext:!0,error:f,disabled:D}},(0,a.h)("span",{"aria-live":"polite",id:"".concat(t,"-charcount"),class:"charcount"},v,"/",K),(0,a.h)("span",{hidden:!0,id:U},"Field can contain a maximum of ",K," characters."))))))}get el(){return(0,a.g)(this)}static get watchers(){return{debounce:["debounceChanged"],value:["watchValueHandler"]}}};l.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(.fullwidth){width:100%}::-moz-placeholder{color:var(--ic-color-tertiary-text);opacity:1}::placeholder{color:var(--ic-color-tertiary-text);opacity:1}input,textarea{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs)}textarea{min-height:var(--ic-space-lg);resize:vertical;padding-top:0.375rem}input:focus,textarea:focus{border:0;outline:0}input:disabled,textarea:disabled{color:var(--ic-architectural-200)}input.readonly,textarea.readonly{color:var(--ic-color-primary-text)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"]{-moz-appearance:textfield}textarea.no-resize{resize:none}.maxlengthtext{color:var(--ic-color-secondary-text)}.error{color:var(--ic-status-error)}.disabled{color:var(--ic-architectural-200)}.no-left-pad{padding-left:0}::slotted([slot="icon"]){fill:var(--ic-color-tertiary-text)}.has-value ::slotted([slot="icon"]){fill:var(--ic-color-primary-text)}.charcount{margin-right:calc(-1 * var(--ic-space-xxxs))}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}input[type="search"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (forced-colors: active){input.readonly,textarea.readonly{color:canvastext}.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);
//# sourceMappingURL=758-32fc39d774fbe4ddcea5.js.map