(this["webpackJsonppapa-tabla-timer"]=this["webpackJsonppapa-tabla-timer"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(9),c=n.n(r),s=(n(20),n(2)),i=n(3),h=n(6),u=n(5),l=n(4),p=(n(21),n(22),n(0)),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)("button",{onClick:function(){return t.props.changeMode(t.props.myMode)},className:this.props.myMode===this.props.mode?"btn sel":"btn",children:this.props.text})}}]),n}(o.a.Component),j=d,b=(n(24),n(25),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:this.props.count===this.props.myCount?"text show":"text",style:{width:this.props.width},children:this.props.text})}}]),n}(o.a.Component)),f=b,m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)("div",{className:"textWrapper",children:this.props.words.map((function(e,n){return Object(p.jsx)(f,{count:t.props.count,myCount:t.props.offset+n,text:e,width:Math.floor(100/t.props.maxLength).toString()+"%"},n)}))})}}]),n}(o.a.Component),v=m,x=(n(26),n(15)),O=n.n(x),g=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).textArea=o.a.createRef(),a.handleCloseModal=a.handleCloseModal.bind(Object(h.a)(a)),a}return Object(i.a)(n,[{key:"handleCloseModal",value:function(){var t=this.textArea.current.value;this.props.changeText(t)}},{key:"render",value:function(){var t=this;return Object(p.jsx)(O.a,{isOpen:this.props.isOpen,appElement:document.getElementById("root"),children:Object(p.jsxs)("div",{className:"modalWrapper",children:[Object(p.jsx)("h1",{children:"Papa enter your taal here \ud83d\ude0a"}),Object(p.jsx)("textarea",{rows:"6",cols:"50",defaultValue:this.props.prevTextAreaVal,ref:this.textArea,autocomplete:"off",autocorrect:"off",autofocus:!0}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"ok",onClick:this.handleCloseModal,children:"Ok"}),Object(p.jsx)("button",{className:"cancel",onClick:function(){return t.props.changeMode(t.props.prevMode)},children:"Cancel"})]})]})})}}]),n}(o.a.Component),M=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={mode:-1,count:1,sentences:[],totalCount:0,maxLength:0},a.changeMode=a.changeMode.bind(Object(h.a)(a)),a.changeText=a.changeText.bind(Object(h.a)(a)),a.buttons=[["1s",1],["0.5s",2],["0.25s",4],["Stop",0],["Edit",-1]],a.prevMode=1,a.prevTextAreaVal="Ta Dhin Dhin Da",a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.changeText("Ta Dhin Dhin Da")}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"changeMode",value:function(t){var e=this;if(this.timerID&&clearInterval(this.timerID),this.prevMode=this.state.mode,this.setState({mode:t}),t>0){var n=1e3/t;this.timerID=setInterval((function(){return e.tick()}),n)}}},{key:"changeText",value:function(t){var e=t.replace(/\r\n/g,"\n").split("\n").filter((function(t){return t})),n=[],a=0,o=0;e.forEach((function(t){var e=t.split(" ").filter((function(t){return t}));n.push([a,e]),a+=e.length,o=Math.max(o,e.length)})),0!==a?(this.prevTextAreaVal=t,this.setState({sentences:n,totalCount:a,maxLength:o,count:0}),this.changeMode(this.prevMode)):alert("Papa add some text :)")}},{key:"tick",value:function(){console.log("tick"),this.setState({count:(this.state.count+1)%this.state.totalCount})}},{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{children:this.buttons.map((function(e,n){return Object(p.jsx)(j,{mode:t.state.mode,changeMode:t.changeMode,myMode:e[1],text:e[0]},n)}))}),this.state.sentences.map((function(e,n){return Object(p.jsx)(v,{count:t.state.count,words:e[1],offset:e[0],maxLength:t.state.maxLength},n)})),Object(p.jsx)(g,{isOpen:-1===this.state.mode,prevTextAreaVal:this.prevTextAreaVal,prevMode:this.prevMode,changeText:this.changeText,changeMode:this.changeMode})]})}}]),n}(o.a.Component);c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.4a1d0d20.chunk.js.map