"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[5606],{5606:function(e,i,t){t.r(i),t.d(i,{ic_input_component_container:function(){return r},ic_input_container:function(){return l},ic_menu:function(){return h}});var n=t(2815),s=t(4581),o=t(7069),c=t(6719),a=t(6346);const r=class{constructor(e){(0,n.r)(this,e),this.appearance="default",this.dark=!1,this.disabled=!1,this.fullWidth=!1,this.multiLine=!1,this.readonly=!1,this.size="default",this.small=!1,this.validationInline=!1,this.validationStatus=""}render(){const{size:e,small:i,validationStatus:t,disabled:c,readonly:a,multiLine:r,fullWidth:l,dark:h,appearance:u,validationInline:d}=this,p=""!==this.validationStatus&&!this.disabled&&!this.readonly;return(0,n.h)(n.H,{class:{small:i,[`${e}`]:!0,[t]:p,disabled:c,readonly:a,multiline:r,fullwidth:l,dark:h||"dark"===u},"aria-disabled":c&&`${c}`},(0,n.h)("div",{class:{"focus-indicator":!0,dark:h||"dark"===u}},(0,o.i)(this.el,"left-icon")&&(0,n.h)("div",{class:{"icon-container":!0}},(0,n.h)("slot",{name:"left-icon"})),(0,n.h)("slot",null),d&&t===s.a.Success&&(0,n.h)("span",{class:{"inline-success":!0},innerHTML:o.N})))}get el(){return(0,n.g)(this)}};r.style="ic-input-component-container{display:flex;border:var(--ic-border-width) solid\n    var(--border-color, var(--ic-architectural-400));border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-slow);height:2.5rem;width:var(--input-width, 20rem);padding:var(--ic-space-1px);background-color:var(--ic-architectural-white);box-sizing:border-box;fill:var(--ic-architectural-400);outline:none}ic-input-component-container.fullwidth{width:100%}ic-input-component-container.disabled,ic-input-component-container.disabled:hover{border:var(--ic-border-width) dashed var(--ic-architectural-200)}ic-input-component-container.readonly,ic-input-component-container.readonly:hover{border:none;padding:0}ic-input-component-container.error{border:var(--ic-error-border-default);padding:0}ic-input-component-container.error:hover{border:var(--ic-error-border-hover)}ic-input-component-container.error:focus-within{border:var(--ic-error-border-pressed)}ic-input-component-container.warning{border:var(--ic-warning-border-default);padding:0}ic-input-component-container.warning:hover{border:var(--ic-warning-border-hover)}ic-input-component-container.warning:focus-within{border:var(--ic-warning-border-pressed)}ic-input-component-container.success{border:var(--ic-success-border-default);padding:0}ic-input-component-container.success:hover{border:var(--ic-success-border-hover)}ic-input-component-container.success:focus-within{border:var(--ic-success-border-pressed)}ic-input-component-container.small{height:var(--ic-space-xl)}ic-input-component-container.large{height:var(--ic-space-xxl)}ic-input-component-container.multiline{height:auto}ic-input-component-container .icon-container{margin-top:var(--ic-space-xxs);margin-left:0.438rem;display:flex;align-items:center}ic-input-component-container.multiline .icon-container,ic-input-component-container.multiline.small .icon-container{margin-top:0.375rem;display:block}ic-input-component-container.readonly .icon-container{margin-left:-0.313rem}ic-input-component-container.disabled ::-moz-placeholder{display:none}ic-input-component-container.disabled ::placeholder{display:none}ic-input-component-container .inline-success{margin:var(--ic-space-xs) 0.375rem;display:flex;align-items:center}ic-input-component-container.dark:hover{--border-color:var(--ic-architectural-400)}ic-input-component-container .inline-success>svg{fill:var(--ic-status-success);height:1.25rem;width:1.25rem}ic-input-component-container:hover{border:var(--ic-border-hover);color:var(--ic-action-dark-hover)}ic-input-component-container:focus{border:var(--ic-border-pressed)}.focus-indicator{display:flex;width:100%;margin:-0.125rem;padding:0.125rem;border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast)}.focus-indicator:focus-within,.focus-indicator-enabled{box-shadow:var(--ic-border-focus)}.focus-indicator.dark:focus-within{box-shadow:var(--ic-border-focus)}@media (forced-colors: active){ic-input-component-container,.focus-indicator{transition:none}ic-input-component-container:focus-within{border:var(--ic-border-width) solid Highlight;outline:0.125rem solid Highlight}ic-input-component-container.disabled,ic-input-component-container.disabled:hover{border:var(--ic-border-width) dashed GrayText}}";const l=class{constructor(e){(0,n.r)(this,e),this.disabled=!1,this.readonly=!1}render(){return(0,n.h)(n.H,null,(0,n.h)("div",{class:{"component-container":!0,disabled:this.disabled,readonly:this.readonly}},(0,n.h)("slot",null)))}};l.style="ic-input-container .component-container{display:flex;flex-direction:column}";const h=class{constructor(e){(0,n.r)(this,e),this.menuKeyPress=(0,n.c)(this,"menuKeyPress",7),this.menuOptionId=(0,n.c)(this,"menuOptionId",7),this.menuOptionSelect=(0,n.c)(this,"menuOptionSelect",7),this.menuStateChange=(0,n.c)(this,"menuStateChange",7),this.menuValueChange=(0,n.c)(this,"menuValueChange",7),this.retryButtonClicked=(0,n.c)(this,"retryButtonClicked",7),this.timeoutBlur=(0,n.c)(this,"timeoutBlur",7),this.ungroupedOptionsSet=(0,n.c)(this,"ungroupedOptionsSet",7),this.disabledOptionSelected=!1,this.hasPreviouslyBlurred=!1,this.hasTimedOut=!1,this.isLoading=!1,this.isSearchBar=!1,this.isSearchableSelect=!1,this.preventClickOpen=!1,this.ungroupedOptions=[],this.handleClearListener=()=>{this.optionHighlighted=""},this.handleSubmitSearch=()=>{const e=this.options.findIndex((e=>e[this.valueField]===this.optionHighlighted));this.setInputValue(e)},this.handleMenuChange=(e,i)=>{this.menuStateChange.emit({open:e,focusInput:i}),e||!1===i||(this.inputEl.focus(),this.preventClickOpen=!1)},this.setNextOptionValue=e=>{this.ungroupedOptions[e+1]?this.menuOptionSelect.emit({value:this.ungroupedOptions[e+1][this.valueField],optionId:this.getOptionId(this.ungroupedOptions[e+1][this.valueField])}):this.menuOptionSelect.emit({value:this.ungroupedOptions[0][this.valueField],optionId:this.getOptionId(this.ungroupedOptions[0][this.valueField])})},this.setPreviousOptionValue=e=>{this.ungroupedOptions[e-1]?this.menuOptionSelect.emit({value:this.ungroupedOptions[e-1][this.valueField],optionId:this.getOptionId(this.ungroupedOptions[e-1][this.valueField])}):this.menuOptionSelect.emit({value:this.ungroupedOptions[this.ungroupedOptions.length-1][this.valueField],optionId:this.getOptionId(this.ungroupedOptions[this.ungroupedOptions.length-1][this.valueField])})},this.getParentEl=e=>{"IC-SEARCH-BAR"===e.tagName?this.isSearchBar=!0:"IC-SELECT"===e.tagName&&null!==e.getAttribute("searchable")&&void 0!==e.getAttribute("searchable")&&(this.isSearchableSelect=!0)},this.arrowBehaviour=e=>{e.preventDefault(),this.handleMenuChange(!0)},this.setMenuOptions=()=>this.isSearchBar?this.options:this.ungroupedOptions,this.setHighlightedOption=e=>{const i=this.setMenuOptions();i[e]&&!i[e].timedOut&&(this.optionHighlighted=i[e][this.valueField]||void 0)},this.autoSetInputValueKeyboardOpen=e=>{const i=this.ungroupedOptions.findIndex((e=>e[this.valueField]===this.value));switch(this.keyboardNav=!1,e.key){case"ArrowDown":this.keyboardNav=!0,this.arrowBehaviour(e),this.setNextOptionValue(i);break;case"ArrowUp":this.keyboardNav=!0,this.arrowBehaviour(e),this.setPreviousOptionValue(i);break;case" ":case"Enter":"clear-button"!==e.target.id&&this.handleMenuChange(!0)}},this.manSetInputValueKeyboardOpen=e=>{const i=this.setMenuOptions();this.keyboardNav=!1;const t=i.findIndex((e=>e[this.valueField]===this.optionHighlighted)),n=e=>{var i;return null===(i=Array.from(this.host.querySelectorAll("li"))[e])||void 0===i?void 0:i.id},s=this.isSearchBar||this.isSearchableSelect||this.open;switch(e.key){case"ArrowDown":this.keyboardNav=!0,this.arrowBehaviour(e),t<i.length-1?(this.setHighlightedOption(t+1),this.menuOptionId.emit({optionId:n(t+1)})):(this.setHighlightedOption(0),this.menuOptionId.emit({optionId:n(0)})),this.preventIncorrectTabOrder=!1,this.focusFromSearchKeypress=!1;break;case"ArrowUp":this.keyboardNav=!0,this.arrowBehaviour(e),t<=0||t>i.length+1?(this.setHighlightedOption(i.length-1),this.menuOptionId.emit({optionId:n(i.length-1)})):(this.setHighlightedOption(t-1),this.menuOptionId.emit({optionId:n(t-1)})),this.preventIncorrectTabOrder=!1,this.focusFromSearchKeypress=!1;break;case"Home":this.keyboardNav=!0,e.preventDefault(),this.arrowBehaviour(e),this.setHighlightedOption(0),this.menuOptionId.emit({optionId:n(0)});break;case"End":this.keyboardNav=!0,e.preventDefault(),this.arrowBehaviour(e),this.setHighlightedOption(i.length-1),this.menuOptionId.emit({optionId:n(i.length-1)});break;case" ":if(this.isSearchBar||this.isSearchableSelect)break;"clear-button"!==e.target.id&&this.handleMenuChange(!0);break;case"Enter":e.preventDefault(),s?t>=0?void 0!==i[t]&&(this.isSearchBar&&!0===i[t].disabled?this.disabledOptionSelected=!0:(this.setInputValue(t),this.value=i[t][this.valueField])):this.setInputValue(t):this.handleMenuChange(!0);break;case"Escape":this.open&&e.stopImmediatePropagation(),this.handleMenuChange(!1),this.menuOptionId.emit({optionId:void 0});break;case"Shift":case"Tab":this.isSearchBar&&(this.keyboardNav=!0),this.preventIncorrectTabOrder=!0;break;default:this.focusOnSearchOrSelectInput(i,t)}},this.setInputValue=e=>{const i=this.setMenuOptions();void 0!==i[e]&&(this.menuOptionSelect.emit({value:i[e][this.valueField]}),this.optionHighlighted=void 0,this.menuOptionId.emit({optionId:void 0})),this.hasTimedOut?this.parentEl.setFocus():this.handleMenuChange(!1)},this.handleOptionClick=e=>{const{value:i,label:t}=e.target.dataset;this.menuOptionSelect.emit({value:i,label:t}),this.handleMenuChange(!1)},this.handleRetry=()=>{this.retryButtonClicked.emit({value:this.value})},this.handleRetryKeyDown=e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.retryButtonClicked.emit({value:this.value,keyPressed:e.key}))},this.handleBlur=e=>{e.relatedTarget!==this.inputEl?this.menu.contains(e.relatedTarget)||this.handleMenuChange(!1,this.hasPreviouslyBlurred):(this.handleMenuChange(!1),this.preventClickOpen=!0),this.isSearchBar||(this.hasPreviouslyBlurred=!!e.relatedTarget)},this.handleMouseDown=e=>{e.preventDefault()},this.handleMenuKeyDown=e=>{"automatic"===this.activationType?this.autoSetValueOnMenuKeyDown(e):"manual"!==this.activationType||this.isSearchBar||this.manSetInputValueKeyboardOpen(e)},this.emitMenuKeyPress=(e,i)=>{this.menuKeyPress.emit({isNavKey:e,key:i})},this.autoSetValueOnMenuKeyDown=e=>{e.cancelBubble=!0;const i=this.ungroupedOptions.findIndex((e=>e[this.valueField]===this.value)),t="INPUT"===this.inputEl.tagName;switch(this.keyboardNav=!1,e.key){case" ":e.preventDefault();break;case"ArrowUp":this.hasTimedOut||(e.preventDefault(),this.setPreviousOptionValue(i),this.keyboardNav=!0);break;case"ArrowDown":this.hasTimedOut||(e.preventDefault(),this.setNextOptionValue(i),this.keyboardNav=!0);break;case"Home":this.menuOptionSelect.emit({value:this.ungroupedOptions[0][this.valueField]}),this.keyboardNav=!0;break;case"End":this.menuOptionSelect.emit({value:this.ungroupedOptions[this.ungroupedOptions.length-1][this.valueField]}),this.keyboardNav=!0;break;case"Enter":!this.hasTimedOut&&this.handleMenuChange(!1);break;case"Escape":this.handleMenuChange(!1);break;case"Backspace":t&&this.inputEl.focus();break;case"Shift":break;default:t&&"Tab"!==e.key&&!this.hasTimedOut&&this.inputEl.focus(),1===e.key.length&&(this.keyboardNav=!0)}this.emitMenuKeyPress(this.keyboardNav,e.key)},this.handleMenuKeyUp=e=>{"Tab"===e.key&&e.shiftKey&&(this.preventClickOpen=!1),"Enter"===e.key&&this.disabledOptionSelected&&(this.disabledOptionSelected=!1,e.stopImmediatePropagation())},this.getOptionId=e=>`${this.menuId}-${e}`,this.getOptionAriaLabel=(e,i)=>{let t=e[this.labelField];return e.description&&(t=`${t}, ${e.description}`),e.element&&(t=`${t}, ${e.element.ariaLabel}`),i?`${t}, ${i[this.labelField]} group`:t},this.getSortedOptions=e=>{let i=[];return e.sort&&(i=e.sort(((e,i)=>e.recommended&&!i.recommended?-1:0))),i},this.isManualMode="manual"===this.activationType,this.scrollToSelected=e=>{const i=this.selectOnEnter?this.host.querySelector(`li[data-value="${this.optionHighlighted}"]`):e.querySelector(".option[aria-selected]");if(i){const t=i.offsetTop+i.offsetHeight;(t>e.scrollTop+e.offsetHeight||t<e.scrollTop+e.offsetHeight)&&(e.scrollTop=i.offsetTop),i.focus()}},this.loadUngroupedOptions=()=>{this.options.length>0&&this.options.map&&this.options.map((e=>{e.children?e.children.map((e=>!e.disabled&&this.ungroupedOptions.push(e))):e.disabled||this.ungroupedOptions.push(e)})),this.ungroupedOptions=this.getSortedOptions(this.ungroupedOptions),this.ungroupedOptionsSet.emit({options:this.ungroupedOptions})},this.setMenuScrollbar=()=>{let e=0;this.host.querySelectorAll(".option").forEach((i=>e+=i.clientHeight)),e>=320&&this.menu.classList.add("menu-scroll")},this.handleTimeoutBlur=e=>{this.timeoutBlur.emit({ev:e})},this.optionContent=e=>{var i;return(0,n.h)(n.F,null,e.loading&&(0,n.h)("ic-loading-indicator",{size:"icon"}),(0,n.h)("div",{class:"option-text-container"},(0,n.h)("div",{class:"option-label"},e.icon&&(0,n.h)("div",{class:"option-icon",innerHTML:e.icon,"aria-hidden":"true"}),(0,n.h)("ic-typography",{variant:"body","aria-hidden":"true"},(0,n.h)("p",null,e[this.labelField]))),e.description&&(0,n.h)("ic-typography",{id:`${this.getOptionId(e[this.valueField])}-description`,class:"option-description",variant:"caption","aria-hidden":"true"},(0,n.h)("p",null,e.description)),e.element&&(0,n.h)("div",{class:"option-element",innerHTML:e.element.component,"aria-hidden":"true"})),!!e[this.valueField]&&!!this.value&&e[this.valueField].toLowerCase()===(null===(i=this.value)||void 0===i?void 0:i.toLowerCase())&&"IC-SEARCH-BAR"!==this.parentEl.tagName&&(0,n.h)("span",{class:"check-icon",innerHTML:c.C}))},this.displayOption=(e,i,t)=>{const{open:s,value:o,keyboardNav:c,isManualMode:a,initialOptionsListRender:r,optionHighlighted:l,options:h}=this;return(0,n.h)("li",{id:this.getOptionId(e[this.valueField]),class:{option:!0,"focused-option":a?(c||r)&&e[this.valueField]===l:c&&e[this.valueField]===o,"last-recommended-option":e.recommended&&h[i+1]&&!h[i+1].recommended,"disabled-option":e.disabled,"loading-option":e.loading,timeout:e.timedOut},role:"option",tabindex:s&&(e[this.valueField]===o||e[this.valueField]===l)&&c?"0":"-1","aria-label":this.getOptionAriaLabel(e,t),"aria-selected":e[this.valueField]===o,"aria-disabled":e.disabled?"true":"false",onClick:!e.timedOut&&!e.loading&&this.handleOptionClick,onBlur:this.handleBlur,onMouseDown:this.handleMouseDown,"data-value":e[this.valueField],"data-label":e[this.labelField]},e.timedOut?(0,n.h)(n.F,null,(0,n.h)("div",{class:"loading-error-info"},(0,n.h)("svg",{class:"error-icon-svg","aria-labelledby":"error-title",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#000000"},(0,n.h)("title",{id:"error-title"},"Error"),(0,n.h)("g",{id:"close-octagon"},(0,n.h)("path",{id:"Vector",d:"M8.77 3L3.5 8.27V15.73L8.77 21H16.23L21.5 15.73V8.27L16.23 3M8.91 7L12.5 10.59L16.09 7L17.5 8.41L13.91 12L17.5 15.59L16.09 17L12.5 13.41L8.91 17L7.5 15.59L11.09 12L7.5 8.41"}))),(0,n.h)("ic-typography",{variant:"label"},e[this.labelField])),(0,n.h)("ic-button",{size:"small",variant:"tertiary",onClick:this.handleRetry,onKeyDown:this.handleRetryKeyDown,onBlur:this.handleTimeoutBlur,id:"retry-button"},"Retry")):this.optionContent(e))},this.focusFromSearchKeypress=!1,this.initialOptionsListRender=!1,this.keyboardNav=!1,this.optionHighlighted=void 0,this.preventIncorrectTabOrder=!1,this.activationType="automatic",this.anchorEl=void 0,this.autoFocusOnSelected=!0,this.fullWidth=!1,this.inputEl=void 0,this.inputLabel=void 0,this.labelField="label",this.menuId=void 0,this.open=void 0,this.parentEl=void 0,this.searchMode="navigation",this.selectOnEnter=!1,this.size="default",this.small=!1,this.options=void 0,this.value=void 0,this.valueField="value"}watchOpenHandler(){!this.open&&this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}watchOptionsHandler(e){this.hasTimedOut=e.some((e=>e.timedOut)),this.isLoading=e.some((e=>e.loading)),this.ungroupedOptions=[],this.loadUngroupedOptions()}watchValueHandler(){this.menuValueChange.emit({value:this.value})}connectedCallback(){this.getParentEl(this.parentEl),this.isSearchBar&&("navigation"===this.searchMode&&this.setHighlightedOption(0),this.initialOptionsListRender=!0)}disconnectedCallback(){this.popperInstance&&this.popperInstance.destroy(),this.parentEl.removeEventListener("icClear",this.handleClearListener),this.parentEl.removeEventListener("icSubmitSearch",this.handleSubmitSearch)}componentWillLoad(){var e,i;this.loadUngroupedOptions(),this.parentEl.addEventListener("icClear",this.handleClearListener),this.parentEl.addEventListener("icSubmitSearch",this.handleSubmitSearch),this.hasTimedOut=null===(e=this.options)||void 0===e?void 0:e.some((e=>e.timedOut)),this.isLoading=null===(i=this.options)||void 0===i?void 0:i.some((e=>e.loading))}componentDidLoad(){this.isSearchBar&&this.parentEl.disableFilter&&(this.focusFromSearchKeypress=!0),(0,o.a)([{prop:this.open,propName:"open"},{prop:this.options,propName:"options"},{prop:this.menuId,propName:"menu-id"},{prop:this.inputLabel,propName:"input-label"}],"Menu")}componentDidUpdate(){const e=this.options.some((e=>e[this.valueField]===this.value)),i=null!==this.optionHighlighted&&void 0!==this.optionHighlighted&&""!==this.optionHighlighted;if(this.open&&0!==this.options.length)if(this.value&&this.keyboardNav&&e&&this.autoFocusOnSelected&&!this.isSearchableSelect)this.scrollToSelected(this.menu);else if("IC-TEXT-FIELD"!==this.inputEl.tagName&&"INPUT"!==this.inputEl.tagName)this.menu.focus();else if(i&&!this.focusFromSearchKeypress&&!this.preventIncorrectTabOrder){const e=this.host.querySelector(`li[data-value="${this.optionHighlighted}"]`);e&&e.focus()}this.open&&!this.value&&this.selectOnEnter&&this.scrollToSelected(this.menu)}componentDidRender(){this.open&&!this.popperInstance&&this.anchorEl&&this.initPopperJs(this.anchorEl),this.open&&this.options.length&&this.setMenuScrollbar()}async handleClickOpen(){this.preventClickOpen||(this.menuStateChange.emit({open:!this.open}),this.keyboardNav=!1),this.preventClickOpen=!1}async handleKeyboardOpen(e){this.keyboardNav=!1,"automatic"===this.activationType?this.autoSetInputValueKeyboardOpen(e):this.manSetInputValueKeyboardOpen(e)}async handleSetFirstOption(){this.setHighlightedOption(0)}async initPopperJs(e){this.popperInstance=(0,a.c)(e,this.host,{placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,7]}},{name:"flip",options:{fallbackPlacements:["top"],rootBoundary:"viewport"}}]})}focusOnSearchOrSelectInput(e,i){e[i]&&(this.isSearchBar&&(this.parentEl.setFocus(),"navigation"===this.searchMode&&this.setHighlightedOption(0)),this.isSearchableSelect&&this.parentEl.setFocus(),this.focusFromSearchKeypress=!0)}render(){const{inputLabel:e,options:i,menuId:t,value:s,fullWidth:o,hasTimedOut:c,isLoading:a,size:r,small:l,open:h,inputEl:u,keyboardNav:d}=this;return(0,n.h)(n.H,{class:{"full-width":o,"no-focus":"INPUT"===(null==u?void 0:u.tagName)||c||a,small:l,[r]:!0,open:h}},0!==i.length&&(0,n.h)("ul",{id:t,class:"menu",role:"listbox","aria-label":e,"aria-activedescendant":null!=s&&""!==s?this.getOptionId(s):"",tabindex:h&&!d&&"INPUT"!==(null==u?void 0:u.tagName)?"0":"-1",ref:e=>this.menu=e,onKeyDown:this.handleMenuKeyDown,onKeyUp:this.handleMenuKeyUp,onBlur:this.handleBlur},this.getSortedOptions(i).map(((e,i)=>e.children?e.children.length>0?(0,n.h)("div",null,(0,n.h)("ic-typography",{class:"option-group-title",role:"presentation",variant:"subtitle-small"},(0,n.h)("p",null,e[this.labelField])),e.children.map((t=>this.displayOption(t,i,e)))):null:this.displayOption(e,i)))))}get host(){return(0,n.g)(this)}static get watchers(){return{open:["watchOpenHandler"],options:["watchOptionsHandler"],value:["watchValueHandler"]}}};h.style='html.sc-ic-menu{line-height:1.15;-webkit-text-size-adjust:100%}body.sc-ic-menu{margin:0}main.sc-ic-menu{display:block}h1.sc-ic-menu{font-size:2em;margin:0.67em 0}hr.sc-ic-menu{box-sizing:content-box;height:0;overflow:visible}pre.sc-ic-menu{font-family:monospace, monospace;font-size:1em}a.sc-ic-menu{background-color:transparent}abbr[title].sc-ic-menu{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b.sc-ic-menu,strong.sc-ic-menu{font-weight:bolder}code.sc-ic-menu,kbd.sc-ic-menu,samp.sc-ic-menu{font-family:monospace, monospace;font-size:1em}small.sc-ic-menu{font-size:80%}sub.sc-ic-menu,sup.sc-ic-menu{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ic-menu{bottom:-0.25em}sup.sc-ic-menu{top:-0.5em}img.sc-ic-menu{border-style:none}button.sc-ic-menu,input.sc-ic-menu,optgroup.sc-ic-menu,select.sc-ic-menu,textarea.sc-ic-menu{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-ic-menu,input.sc-ic-menu{overflow:visible}button.sc-ic-menu,select.sc-ic-menu{text-transform:none}button.sc-ic-menu,[type="button"].sc-ic-menu,[type="reset"].sc-ic-menu,[type="submit"].sc-ic-menu{-webkit-appearance:button}button.sc-ic-menu::-moz-focus-inner,[type="button"].sc-ic-menu::-moz-focus-inner,[type="reset"].sc-ic-menu::-moz-focus-inner,[type="submit"].sc-ic-menu::-moz-focus-inner{border-style:none;padding:0}button.sc-ic-menu:-moz-focusring,[type="button"].sc-ic-menu:-moz-focusring,[type="reset"].sc-ic-menu:-moz-focusring,[type="submit"].sc-ic-menu:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-ic-menu{padding:0.35em 0.75em 0.625em}legend.sc-ic-menu{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-ic-menu{vertical-align:baseline}textarea.sc-ic-menu{overflow:auto}[type="checkbox"].sc-ic-menu,[type="radio"].sc-ic-menu{box-sizing:border-box;padding:0}[type="number"].sc-ic-menu::-webkit-inner-spin-button,[type="number"].sc-ic-menu::-webkit-outer-spin-button{height:auto}[type="search"].sc-ic-menu{-webkit-appearance:textfield;outline-offset:-2px}[type="search"].sc-ic-menu::-webkit-search-decoration{-webkit-appearance:none}.sc-ic-menu::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details.sc-ic-menu{display:block}summary.sc-ic-menu{display:list-item}template.sc-ic-menu{display:none}[hidden].sc-ic-menu{display:none}html.sc-ic-menu,body.sc-ic-menu,div.sc-ic-menu,span.sc-ic-menu,applet.sc-ic-menu,object.sc-ic-menu,iframe.sc-ic-menu,h1.sc-ic-menu,h2.sc-ic-menu,h3.sc-ic-menu,h4.sc-ic-menu,h5.sc-ic-menu,h6.sc-ic-menu,p.sc-ic-menu,blockquote.sc-ic-menu,pre.sc-ic-menu,a.sc-ic-menu,abbr.sc-ic-menu,acronym.sc-ic-menu,address.sc-ic-menu,big.sc-ic-menu,cite.sc-ic-menu,code.sc-ic-menu,del.sc-ic-menu,dfn.sc-ic-menu,em.sc-ic-menu,img.sc-ic-menu,ins.sc-ic-menu,kbd.sc-ic-menu,q.sc-ic-menu,s.sc-ic-menu,samp.sc-ic-menu,small.sc-ic-menu,strike.sc-ic-menu,strong.sc-ic-menu,sub.sc-ic-menu,sup.sc-ic-menu,tt.sc-ic-menu,var.sc-ic-menu,b.sc-ic-menu,u.sc-ic-menu,i.sc-ic-menu,center.sc-ic-menu,dl.sc-ic-menu,dt.sc-ic-menu,dd.sc-ic-menu,ol.sc-ic-menu,ul.sc-ic-menu,li.sc-ic-menu,fieldset.sc-ic-menu,form.sc-ic-menu,label.sc-ic-menu,legend.sc-ic-menu,table.sc-ic-menu,caption.sc-ic-menu,tbody.sc-ic-menu,tfoot.sc-ic-menu,thead.sc-ic-menu,tr.sc-ic-menu,th.sc-ic-menu,td.sc-ic-menu,article.sc-ic-menu,aside.sc-ic-menu,canvas.sc-ic-menu,details.sc-ic-menu,embed.sc-ic-menu,figure.sc-ic-menu,figcaption.sc-ic-menu,footer.sc-ic-menu,header.sc-ic-menu,hgroup.sc-ic-menu,menu.sc-ic-menu,nav.sc-ic-menu,output.sc-ic-menu,ruby.sc-ic-menu,section.sc-ic-menu,summary.sc-ic-menu,time.sc-ic-menu,mark.sc-ic-menu,audio.sc-ic-menu,video.sc-ic-menu{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){.open.sc-ic-menu-h .menu.sc-ic-menu{transition:max-height var(--ic-transition-duration-slow)}}.sc-ic-menu-h{border-radius:var(--ic-border-radius);max-height:0;width:var(--input-width, 20rem);color:var(--ic-color-primary-text);background-color:var(--ic-architectural-white);position:relative;z-index:var(--ic-z-index-menu);box-sizing:border-box;box-shadow:var(--ic-elevation-overlay)}.sc-ic-menu-h:not(.no-focus):focus-within{box-shadow:var(--ic-border-focus)}#retry-button.sc-ic-menu::part(button){height:var(--ic-space-lg)}.small.sc-ic-menu #retry-button.sc-ic-menu::part(button){height:var(--ic-space-md)}.on-dialog.sc-ic-menu-h{inset:auto !important}.menu.sc-ic-menu{text-decoration:none;list-style-type:none;border:var(--ic-border-width) solid var(--ic-architectural-400);border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);visibility:hidden;max-height:0;overflow-y:hidden}.menu-scroll.sc-ic-menu{overflow-y:auto}.menu.sc-ic-menu:focus-visible{outline:none}.open.sc-ic-menu-h{max-height:none;display:block}.open.sc-ic-menu-h .menu.sc-ic-menu{visibility:visible;max-height:calc(var(--ic-space-xl) * 10 + var(--ic-space-xxxs))}.full-width.sc-ic-menu-h{width:100%}.option.sc-ic-menu{padding:var(--ic-space-xs) calc(var(--ic-space-xs) - var(--ic-space-1px));cursor:pointer;display:flex;align-items:center}.option.sc-ic-menu:not(.loading-option){justify-content:space-between}.small.sc-ic-menu-h .option.sc-ic-menu{padding:var(--ic-space-xxs) calc(var(--ic-space-xs) - var(--ic-space-1px))}.large.sc-ic-menu-h .option.sc-ic-menu{padding:var(--ic-space-sm) calc(var(--ic-space-xs) - var(--ic-space-1px))}.option.sc-ic-menu:last-child{border-radius:0 0 var(--ic-space-1px) var(--ic-space-1px)}.option.sc-ic-menu:first-child{border-radius:var(--ic-space-1px) var(--ic-space-1px) 0 0}.option.sc-ic-menu:not(.disabled-option):hover{background-color:var(--ic-action-dark-bg-hover)}.option.sc-ic-menu:not(.disabled-option):active{background-color:var(--ic-action-dark-bg-active)}.option.sc-ic-menu:focus-visible{outline:var(--ic-hc-focus-outline)}.option.sc-ic-menu:not(.disabled-option) .option-description.sc-ic-menu{color:var(--ic-color-secondary-text)}.option.sc-ic-menu .option-label.sc-ic-menu{display:flex;flex-direction:row;align-items:top}.option.sc-ic-menu .option-element.sc-ic-menu{margin-top:var(--ic-space-xxs)}.option.sc-ic-menu .option-icon.sc-ic-menu{height:var(--ic-space-md);width:var(--ic-space-md);margin-top:var(--ic-space-xxs);margin-right:var(--ic-space-xxxs)}.option-text-container.sc-ic-menu{pointer-events:none}.option.loading-option.sc-ic-menu .option-text-container.sc-ic-menu{margin-left:calc(var(--ic-space-xs) + var(--ic-space-xxxs));color:var(--ic-color-secondary-text)}.error-icon-svg.sc-ic-menu{height:var(--ic-space-md);width:var(--ic-space-md);fill:var(--ic-status-error);align-self:center;display:flex;margin-right:calc(var(--ic-space-xxs) * 1.2)}.loading-error-info.sc-ic-menu{display:flex}.check-icon.sc-ic-menu{height:var(--ic-space-lg);width:var(--ic-space-lg);margin-left:var(--ic-space-xs);pointer-events:none}.focused-option.sc-ic-menu .check-icon.sc-ic-menu *.sc-ic-menu{fill:currentcolor}.option-group-title.sc-ic-menu{padding:var(--ic-space-lg) calc(var(--ic-space-xs) - var(--ic-space-1px))\n    var(--ic-space-xs);color:var(--ic-color-tertiary-text)}.small.sc-ic-menu-h .option-group-title.sc-ic-menu{padding:var(--ic-space-sm) calc(var(--ic-space-xs) - var(--ic-space-1px))\n    var(--ic-space-xxs)}.last-recommended-option.sc-ic-menu{border-bottom:var(--ic-border-default)}.disabled-option.sc-ic-menu{color:var(--ic-architectural-200);cursor:default;pointer-events:none}.focused-option.sc-ic-menu,.focused-option.sc-ic-menu .option-description.sc-ic-menu{background-color:var(--ic-focus-blue) !important;color:var(--ic-color-white-text) !important}.no-results.sc-ic-menu-h li.sc-ic-menu{cursor:no-drop}.no-results.sc-ic-menu-h li.sc-ic-menu:hover{background-color:transparent}@media (forced-colors: active){.focused-option.sc-ic-menu:focus{outline:none;border:0.125rem solid transparent}}'}}]);