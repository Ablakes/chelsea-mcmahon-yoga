webpackJsonp([53569954864128],{132:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function d(e,n){return e.raw=n,e}n.__esModule=!0;var o=d(["\n  display: flex;\n  justify-content: center;\n  margin: 25px 40px;\n  min-width: 580px;\n  position: relative;\n  @media (max-width: 1250px) {\n    min-width: 500px;\n    margin: 25px 10px 25px 40px;\n  }\n  @media (max-width: 1000px) {\n    margin: 25px 0;\n    min-height: 430;\n  }\n  @media (max-width: 480px) {\n    min-width: 0;\n  }\n"],["\n  display: flex;\n  justify-content: center;\n  margin: 25px 40px;\n  min-width: 580px;\n  position: relative;\n  @media (max-width: 1250px) {\n    min-width: 500px;\n    margin: 25px 10px 25px 40px;\n  }\n  @media (max-width: 1000px) {\n    margin: 25px 0;\n    min-height: 430;\n  }\n  @media (max-width: 480px) {\n    min-width: 0;\n  }\n"]),m=d(["\n  width: 100%;\n  position: absolute;\n  @media (max-width: 1000px) {\n    width: 472px;\n  @media (max-width: 480px) {\n    width: 80vw;\n  }\n"],["\n  width: 100%;\n  position: absolute;\n  @media (max-width: 1000px) {\n    width: 472px;\n  @media (max-width: 480px) {\n    width: 80vw;\n  }\n"]),p=d(["\n  display: flex;\n  width: 100px;\n  height: 70px;\n  position: absolute;\n  align-items: center;\n  left: 60px;\n  @media (max-width: 1200px) {\n    left: 45px;\n  }\n  @media (max-width: 480px) {\n    left: -10px;\n  }\n"],["\n  display: flex;\n  width: 100px;\n  height: 70px;\n  position: absolute;\n  align-items: center;\n  left: 60px;\n  @media (max-width: 1200px) {\n    left: 45px;\n  }\n  @media (max-width: 480px) {\n    left: -10px;\n  }\n"]),u=d(["\n  font-size: 60px;\n  height: 70px;\n  transition: all 0.2s;\n  background-color: rgba(0, 0, 0, 0);\n  color: ",";\n  border: none;\n  top: 0;\n  z-index: 100;\n  outline: none;\n  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.308);\n  @media (max-width: 480px) {\n    padding: 0;\n    padding-right: 10px;\n  }\n  &:hover {\n    font-size: 66px;\n    transform: translateY(-1px);\n  }\n  &:active {\n    transform: translateY(0);\n  }\n  &:disabled {\n    color: #b4b4b4;\n  }\n  &:disabled:hover {\n    font-size: 60px;\n    transform: translateY(0);\n  }\n"],["\n  font-size: 60px;\n  height: 70px;\n  transition: all 0.2s;\n  background-color: rgba(0, 0, 0, 0);\n  color: ",";\n  border: none;\n  top: 0;\n  z-index: 100;\n  outline: none;\n  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.308);\n  @media (max-width: 480px) {\n    padding: 0;\n    padding-right: 10px;\n  }\n  &:hover {\n    font-size: 66px;\n    transform: translateY(-1px);\n  }\n  &:active {\n    transform: translateY(0);\n  }\n  &:disabled {\n    color: #b4b4b4;\n  }\n  &:disabled:hover {\n    font-size: 60px;\n    transform: translateY(0);\n  }\n"]),x=d(["\n  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.2);\n  height: 430px;\n  text-align: center;\n  width: 490px;\n  border-radius: 7px;\n  color: $primary-color;\n  background-image: linear-gradient(166deg, #dff1ff 5%, #8cbce4 100%);\n  text-align: center;\n  @media (max-width: 1200px) {\n    width: 450px;\n  }\n  @media (max-width: 620px) {\n    width: 90vw;\n    height: 410px;\n  }\n"],["\n  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.2);\n  height: 430px;\n  text-align: center;\n  width: 490px;\n  border-radius: 7px;\n  color: $primary-color;\n  background-image: linear-gradient(166deg, #dff1ff 5%, #8cbce4 100%);\n  text-align: center;\n  @media (max-width: 1200px) {\n    width: 450px;\n  }\n  @media (max-width: 620px) {\n    width: 90vw;\n    height: 410px;\n  }\n"]),c=d(["\n  animation: slide-in-bottom 0.5s forwards;\n  padding-top: 40%;\n"],["\n  animation: slide-in-bottom 0.5s forwards;\n  padding-top: 40%;\n"]),f=t(1),s=a(f),h=t(133),g=a(h),w=t(6),b=a(w),y=(new Date).getMonth()+1,E=b.default.div(o),v=b.default.div(m),k=b.default.div(p),z=b.default.button(u,function(e){return e.theme.secondaryColor}),C=b.default.div(x),S=b.default.h3(c),_=function(e){function n(){i(this,n);var t=l(this,e.call(this));return t.state={currentScheduleIndex:0,schedule:[{date:[9,2018],classDates:[4,6,11,13,17,20,24,27]},{date:[10,2018],classDates:[1,4,9,11,15,18,22,25,29]},{date:[11,2018],classDates:[1,5,8,13,15,19,21,26,29]}]},t.handleLeftClick=t.handleLeftClick.bind(t),t.handleRightClick=t.handleRightClick.bind(t),t}return r(n,e),n.prototype.componentDidMount=function(){var e=this.state.schedule.filter(function(e){return e.date[0]===y});this.setState({currentScheduleIndex:this.state.schedule.indexOf(e[0]),currentMonth:e[0].date[0],totalMonths:this.state.schedule.length+1})},n.prototype.handleLeftClick=function(){this.setState(function(e){return{currentScheduleIndex:e.currentScheduleIndex-=1}})},n.prototype.handleRightClick=function(){this.setState(function(e){return{currentScheduleIndex:e.currentScheduleIndex+=1}})},n.prototype.render=function(){var e=this,n=this.state,t=n.currentScheduleIndex,a=n.schedule;return s.default.createElement("div",null,s.default.createElement(E,null,s.default.createElement(v,null,s.default.createElement(k,null,s.default.createElement(z,{disabled:0===t,onClick:this.handleLeftClick},"<"),s.default.createElement(z,{disabled:t===a.length,onClick:this.handleRightClick},">"))),a.map(function(n,t){return s.default.createElement("div",{key:t},a.indexOf(n)===e.state.currentScheduleIndex&&s.default.createElement(g.default,{date:[n.date[0],n.date[1]],classDates:n.classDates}))}),t===a.length&&s.default.createElement(C,null,s.default.createElement(S,null,"Coming Soon!"))))},n}(f.Component);n.default=_,e.exports=n.default},133:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0;var l=i(["\n  background-image: linear-gradient(-180deg, #cbe3f7 0%, #b5d8f5 99%);\n  border-radius: 5px;\n  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.2);\n"],["\n  background-image: linear-gradient(-180deg, #cbe3f7 0%, #b5d8f5 99%);\n  border-radius: 5px;\n  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.2);\n"]),r=i(["\n  background-image: linear-gradient(-180deg, #002e4f 0%, #00243e 100%);\n  margin: 0;\n  border-radius: 7px 7px 0 0;\n  padding: 22px 15px 22px 0;\n  text-align: right;\n  width: 100%;\n  color: ",";\n  height: 78px;\n"],["\n  background-image: linear-gradient(-180deg, #002e4f 0%, #00243e 100%);\n  margin: 0;\n  border-radius: 7px 7px 0 0;\n  padding: 22px 15px 22px 0;\n  text-align: right;\n  width: 100%;\n  color: ",";\n  height: 78px;\n"]),d=i(["\n  border-top: 1px solid rgba(255, 246, 230, 0.363);\n  background-image: linear-gradient(-180deg, #00233d 0%, #001527 100%);\n  color: ",";\n  font-size: 1.2rem;\n  padding: 15px 0;\n  font-weight: 400;\n"],["\n  border-top: 1px solid rgba(255, 246, 230, 0.363);\n  background-image: linear-gradient(-180deg, #00233d 0%, #001527 100%);\n  color: ",";\n  font-size: 1.2rem;\n  padding: 15px 0;\n  font-weight: 400;\n"]),o=i(["\n  text-align: center;\n  width: 70px;\n  height: 60px;\n  font-weight: 700;\n  @media (max-width: 1250px) {\n    width: 65px;\n  }\n  @media (max-width: 620px) {\n    width: 60px;\n  }\n  @media (max-width: 450px) {\n    font-size: 0.9rem;\n    height: 55px;\n    width: 55px;\n  }\n  @media (max-width: 390px) {\n    width: 50px;\n  }\n"],["\n  text-align: center;\n  width: 70px;\n  height: 60px;\n  font-weight: 700;\n  @media (max-width: 1250px) {\n    width: 65px;\n  }\n  @media (max-width: 620px) {\n    width: 60px;\n  }\n  @media (max-width: 450px) {\n    font-size: 0.9rem;\n    height: 55px;\n    width: 55px;\n  }\n  @media (max-width: 390px) {\n    width: 50px;\n  }\n"]),m=i(["\n  color: #f2fcfe;\n  font-weight: 700;\n  text-align: center;\n  @media (max-width: 450px) {\n    font-size: 0.9rem;\n    height: 55px;\n    width: 55px;\n  }\n  @media (max-width: 390px) {\n    width: 50px;\n  }\n"],["\n  color: #f2fcfe;\n  font-weight: 700;\n  text-align: center;\n  @media (max-width: 450px) {\n    font-size: 0.9rem;\n    height: 55px;\n    width: 55px;\n  }\n  @media (max-width: 390px) {\n    width: 50px;\n  }\n"]),p=i(["\n  background-image: linear-gradient(-180deg, #00233d 0%, #001527 100%);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n"],["\n  background-image: linear-gradient(-180deg, #00233d 0%, #001527 100%);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n"]),u=i(["\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  height: 60px;\n  width: 70px;\n  font-weight: 700;\n  position: relative;\n  &::after {\n    content: '';\n    font-weight: 400;\n    display: block;\n    border: 4px solid rgba(255, 255, 255, 0.7);\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n  }\n  @media (max-width: 1250px) {\n    width: 65px;\n  }\n  @media (max-width: 620px) {\n    width: 60px;\n  }\n  @media (max-width: 450px) {\n    font-size: 0.9rem;\n    height: 55px;\n    width: 55px;\n  }\n  @media (max-width: 390px) {\n    width: 50px;\n  }\n"],["\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  height: 60px;\n  width: 70px;\n  font-weight: 700;\n  position: relative;\n  &::after {\n    content: '';\n    font-weight: 400;\n    display: block;\n    border: 4px solid rgba(255, 255, 255, 0.7);\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n  }\n  @media (max-width: 1250px) {\n    width: 65px;\n  }\n  @media (max-width: 620px) {\n    width: 60px;\n  }\n  @media (max-width: 450px) {\n    font-size: 0.9rem;\n    height: 55px;\n    width: 55px;\n  }\n  @media (max-width: 390px) {\n    width: 50px;\n  }\n"]),x=t(1),c=a(x),f=t(6),s=a(f),h=s.default.div(l),g=s.default.h3(r,function(e){return e.theme.secondaryColor}),w=s.default.th(d,function(e){return e.theme.secondaryColor}),b=s.default.td(o),y=s.default.td(m),E=s.default.div(p),v=s.default.div(u);n.default=function(e){var n=e.date,t=e.classDates,a=new Date(n[1]+"/"+n[0]+"/1"),i=a.toLocaleString("en-us",{month:"long"})+" "+n[1],l=a.getDay(),r=new Date(n[1],n[0],0).getDate(),d=(new Date).getDate(),o=(new Date).getMonth()+1,m=[],p=r+l;p>28&&p<35?p=35:p>35&&(p=42);for(var u=0;u<l;u++)m.push("");for(var x=1;x<r+1;x++)m.push(x);for(;m.length<p;)m.push("");var f=function(e,a){return t.includes(e)&&e===d&&n[0]===o?c.default.createElement(y,{className:"current-day",key:a},c.default.createElement(v,{key:a,className:"current-day"},c.default.createElement(E,null,e))):t.includes(e)?c.default.createElement(y,{key:a},c.default.createElement(E,null,e)):e===d&&n[0]===o?c.default.createElement(b,{key:a},c.default.createElement(v,{className:"current-day"},e)):c.default.createElement(b,{key:a},e)},s=function(e,n){return m.slice(e,n).map(function(e,n){return f(e,n)})};return c.default.createElement("div",null,c.default.createElement(g,null,i),c.default.createElement(h,null,c.default.createElement("table",{cellSpacing:"0",cellPadding:"0"},c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement(w,null,"S"),c.default.createElement(w,null,"M"),c.default.createElement(w,null,"T"),c.default.createElement(w,null,"W"),c.default.createElement(w,null,"Th"),c.default.createElement(w,null,"F"),c.default.createElement(w,null,"S")),c.default.createElement("tr",null,s(0,7)),c.default.createElement("tr",null,s(7,14)),c.default.createElement("tr",null,s(14,21)),c.default.createElement("tr",null,s(21,28)),m.length>28?c.default.createElement("tr",null,s(28,35)):null,m.length>35?c.default.createElement("tr",null,s(35,42)):null))))},e.exports=n.default},136:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0;var l=i(["\n  margin: 35px 50px 0 0;\n  @media (max-width: 1000px) {\n    margin-right: 20px;\n  }\n  @media (max-width: 830px) {\n    margin-right: 0;\n    max-width: 95vw;\n  }\n"],["\n  margin: 35px 50px 0 0;\n  @media (max-width: 1000px) {\n    margin-right: 20px;\n  }\n  @media (max-width: 830px) {\n    margin-right: 0;\n    max-width: 95vw;\n  }\n"]),r=i(["\n  height: 400px;\n  width: 400px;\n  @media (max-width: 450px) {\n    width: 90vw;\n  }\n"],["\n  height: 400px;\n  width: 400px;\n  @media (max-width: 450px) {\n    width: 90vw;\n  }\n"]),d=t(1),o=a(d),m=t(6),p=a(m),u=p.default.div(l),x=p.default.iframe(r);n.default=function(){return o.default.createElement(u,null,o.default.createElement("div",{className:"gmap_canvas"},o.default.createElement(x,{id:"gmap_canvas",src:"https://maps.google.com/maps?q=52%20Main%20Street.%20Delaware%20Water%20Gap%2C%20PA.%2018327&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"})),o.default.createElement("style",null,".mapouter","text-align:right;height:500px;width:600px;",".gmap_canvas"," ","overflow:hidden;background:none!important;height:500px;width:600px;"))},e.exports=n.default},85:function(e,n,t){e.exports=t.p+"static/paint-bg-mobile.1a15f0fb.jpg"},32:function(e,n,t){e.exports=t.p+"static/paint-bg-portrait.5223b078.jpg"},143:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0;var l=i(["\n  margin-top: 8rem;\n  font-family: 'Lato', sans-serif;\n  font-weight: 400;\n  color: ",";\n  align-self: center;\n"],["\n  margin-top: 8rem;\n  font-family: 'Lato', sans-serif;\n  font-weight: 400;\n  color: ",";\n  align-self: center;\n"]),r=i(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: no-repeat url(",");\n  background-size: cover;\n  margin-top: -4.4rem;\n  padding-bottom: 4.4rem;\n  @media (max-width: 1000px) {\n    background: no-repeat url(",");\n    background-size: cover;\n  }\n  @media (max-width: 450px) {\n    background: no-repeat url(",");\n    background-size: cover;\n  }\n"],["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: no-repeat url(",");\n  background-size: cover;\n  margin-top: -4.4rem;\n  padding-bottom: 4.4rem;\n  @media (max-width: 1000px) {\n    background: no-repeat url(",");\n    background-size: cover;\n  }\n  @media (max-width: 450px) {\n    background: no-repeat url(",");\n    background-size: cover;\n  }\n"]),d=i(["\n  display: flex;\n  @media (max-width: 1000px) {\n    flex-direction: column-reverse;\n  }\n"],["\n  display: flex;\n  @media (max-width: 1000px) {\n    flex-direction: column-reverse;\n  }\n"]),o=i(["\n  width: 60%;\n  margin: 0 auto;\n  text-align: center;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  font-family: 'Lato';\n  @media (max-width: 550px) {\n    width: 85%;\n  }\n"],["\n  width: 60%;\n  margin: 0 auto;\n  text-align: center;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  font-family: 'Lato';\n  @media (max-width: 550px) {\n    width: 85%;\n  }\n"]),m=i(["\n  color: ",";\n  padding: 1rem 0 3rem 5rem;\n  font-size: 1.1rem;\n  @media (max-width: 1250px) {\n    font-size: 1rem;\n  }\n  @media (max-width: 1000px) {\n    padding: 2rem 4rem 2rem 4rem;\n  }\n  @media (max-width: 480px) {\n    padding: 2rem 2rem 2rem 2rem;\n  }\n"],["\n  color: ",";\n  padding: 1rem 0 3rem 5rem;\n  font-size: 1.1rem;\n  @media (max-width: 1250px) {\n    font-size: 1rem;\n  }\n  @media (max-width: 1000px) {\n    padding: 2rem 4rem 2rem 4rem;\n  }\n  @media (max-width: 480px) {\n    padding: 2rem 2rem 2rem 2rem;\n  }\n"]),p=i(["\n  font-weight: 900;\n  @media (max-width: 1000px) {\n    text-align: center;\n  }\n"],["\n  font-weight: 900;\n  @media (max-width: 1000px) {\n    text-align: center;\n  }\n"]),u=i(["\n  @media (min-width: 1000px) {\n    display: flex;\n    flex-direction: column;\n  }\n"],["\n  @media (min-width: 1000px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]),x=i(["\n  font-weight: 900;\n  font-size: 1.3rem;\n  letter-spacing: 1.1px;\n  @media (max-width: 1000px) {\n    text-align: center;\n  }\n"],["\n  font-weight: 900;\n  font-size: 1.3rem;\n  letter-spacing: 1.1px;\n  @media (max-width: 1000px) {\n    text-align: center;\n  }\n"]),c=i(["\n  @media (max-width: 1000px) {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n"],["\n  @media (max-width: 1000px) {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n"]),f=i(["\n  height: 35px;\n  width: 35px;\n  transition: transform 0.3s ease;\n  &:hover {\n    transform: scale(1.07);\n  }\n"],["\n  height: 35px;\n  width: 35px;\n  transition: transform 0.3s ease;\n  &:hover {\n    transform: scale(1.07);\n  }\n"]),s=i(["\n  display: flex;\n  justify-content: center;\n  @media (max-width: 830px) {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n"],["\n  display: flex;\n  justify-content: center;\n  @media (max-width: 830px) {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n"]),h=i(["\n  margin: 120px 0 0 50px;\n  @media (max-width: 1000px) {\n    margin-left: 20px;\n    font-size: 1rem;\n  }\n  @media (max-width: 830px) {\n    margin: 20px 0 0 0;\n"],["\n  margin: 120px 0 0 50px;\n  @media (max-width: 1000px) {\n    margin-left: 20px;\n    font-size: 1rem;\n  }\n  @media (max-width: 830px) {\n    margin: 20px 0 0 0;\n"]),g=t(1),w=a(g),b=t(6),y=a(b),E=t(9),v=a(E),k=t(48),z=a(k),C=t(32),S=a(C),_=t(85),j=a(_),D=t(136),M=a(D),A=t(132),I=a(A),L=y.default.h3(l,function(e){return e.theme.primaryColor}),$=y.default.div(r,z.default,S.default,j.default),N=y.default.section(d),O=y.default.div(o),P=y.default.article(m,function(e){return e.theme.primaryColor}),T=y.default.p(p),W=y.default.div(u),Y=y.default.p(x),H=y.default.div(c),R=y.default.svg(f),F=y.default.section(s),U=y.default.div(h),Z=function(){return w.default.createElement(b.ThemeProvider,{theme:v.default},w.default.createElement("div",null,w.default.createElement($,null,w.default.createElement(L,null,"Schedule"),w.default.createElement("hr",{style:{width:"70vw",alignSelf:"center"}}),w.default.createElement(N,null,w.default.createElement(P,null,w.default.createElement("p",null,"Everyone is welcome! Classes are designed to be useful to all yogis with any type of experience."," ",w.default.createElement("span",{style:{fontWeight:900}},"First time you attend class here it’s $5"),". We have class cards that you can use up during the rest of the scheduled season’s offerings. Class offerings are marked on the calendar and class generally lasts about 60-70 minutes starting promptly at 7pm. Come a few minutes early to set up and settle in. Feel free to bring your own stuff, or I have a few mats and props available in the space."),w.default.createElement(T,null,"5 Classes $70 ",w.default.createElement("br",null),"10 Classes $125 ",w.default.createElement("br",null),"15 Classes $180 ",w.default.createElement("br",null),"20 Classes $220 ",w.default.createElement("br",null),"Season Unlimited $260 ",w.default.createElement("br",null),"Drop-In $15 ",w.default.createElement("br",null)),w.default.createElement("p",null,"*If anything is going on personally or financially, just talk to me. I’d rather see you continue than miss out or disappear! or email to pre-register or ask questions. Space is limited (I’d call)."),w.default.createElement(W,null,w.default.createElement(Y,null,"(570)856-7788"),w.default.createElement(H,null,w.default.createElement("a",{href:"mailto:chelseamcmahon820@yahoo.com"},w.default.createElement(R,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 23.5 20.625",x:"0px",y:"0px"},w.default.createElement("g",{"data-name":"Слой 2"},w.default.createElement("g",{"data-name":"Слой 1"},w.default.createElement("path",{d:"M20.75,16.5h-18A2.75,2.75,0,0,1,0,13.75v-11A2.75,2.75,0,0,1,2.75,0h18A2.75,2.75,0,0,1,23.5,2.75v11A2.75,2.75,0,0,1,20.75,16.5Zm-18-15A1.25,1.25,0,0,0,1.5,2.75v11A1.25,1.25,0,0,0,2.75,15h18A1.25,1.25,0,0,0,22,13.75v-11A1.25,1.25,0,0,0,20.75,1.5Z"}),w.default.createElement("path",{d:"M11.75,11.67a2.74,2.74,0,0,1-1.94-.8l-9-9,1-1.1,9.07,9.07a1.25,1.25,0,0,0,1.77,0L21.46,1,22.52,2l-8.83,8.83A2.74,2.74,0,0,1,11.75,11.67Z"}),w.default.createElement("polygon",{points:"1.83 15.41 1.26 14.92 0.73 14.38 7.5 7.62 8.56 8.68 1.83 15.41"}),w.default.createElement("rect",{x:"17.97",y:"6.78",width:"1.5",height:"9.24",transform:"translate(-2.58 16.58) rotate(-45)"}))),w.default.createElement("text",{x:"0",y:"31.5",fill:"#000000","font-size":"5px","font-weight":"bold","font-family":"'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"},"Created by Evgenii Likhachov"),w.default.createElement("text",{x:"0",y:"36.5",fill:"#000000","font-size":"5px","font-weight":"bold","font-family":"'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"},"from the Noun Project")))))),w.default.createElement("div",null,w.default.createElement(O,null,"Dates marked with a circle indicate class at 7pm at"," ",w.default.createElement("a",{href:"#directions"},"Chateau 52")),w.default.createElement(I.default,null))),w.default.createElement("hr",{style:{width:"70vw",alignSelf:"center"}}),w.default.createElement(L,{style:{marginTop:0}},"Directions"),w.default.createElement("hr",{style:{width:"70vw",alignSelf:"center"}}),w.default.createElement(F,{id:"directions"},w.default.createElement(M.default,{className:"google-map"}),w.default.createElement(U,null,w.default.createElement("p",null,"All Classes are held at Chateau 52:"),w.default.createElement("p",{style:{fontWeight:900}},"52 Main St,",w.default.createElement("br",null)," Delaware Water Gap, PA 18327"))))))};n.default=Z,e.exports=n.default}});
//# sourceMappingURL=component---src-pages-schedule-js-bdba585c9e80483d35cd.js.map