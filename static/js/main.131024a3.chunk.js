(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/correct sound effect.ecf83eac.mp3"},,,,,function(e){e.exports=JSON.parse('[{"id":1,"count":0,"name":"Ant Man","image":"../images/ant-man.jpg"},{"id":2,"count":0,"name":"Black Widow","image":"./images/blk-widow.jpg"},{"id":3,"count":0,"name":"Captain Marvel","image":"./images/captain-marvel.jpg"},{"id":4,"count":0,"name":"Captain America","image":"./images/captam-america.jpg"},{"id":5,"count":0,"name":"Hawkeye","image":"./images/hawkeye.jpg"},{"id":6,"count":0,"name":"Hulk","image":"./images/hulk.jpg"},{"id":7,"count":0,"name":"Iron Man","image":"./images/iron-man.jpg"},{"id":8,"count":0,"name":"Nebula","image":"./images/nebula.jpg"},{"id":9,"count":0,"name":"Pepper Potts","image":"./images/pepper-potts.jpg"},{"id":10,"count":0,"name":"Rocket","image":"./images/rocket.jpg"},{"id":11,"count":0,"name":"Thor","image":"./images/thor.jpg"},{"id":12,"count":0,"name":"War Machine","image":"./images/war-machine.jpg"}]')},function(e,t,a){e.exports=a.p+"static/media/You Lose - Sound Effect - 2017.1765eddf.mp3"},function(e,t,a){e.exports=a.p+"static/media/You Win (Voice) - Sound Effect [HD].c7551b05.mp3"},,,function(e,t,a){e.exports=a(28)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(5),o=a.n(c),i=a(6),r=a(7),m=a(2),u=a(12),l=a(11),p=a(1),d=a.n(p),g=(a(23),function(e){return s.a.createElement("div",{className:"navbar "},s.a.createElement("div",null,"Clicky Game"),s.a.createElement("h3",null,s.a.createElement("div",{className:e.message1},e.message2)))}),f=(a(24),function(e){return s.a.createElement("div",{className:"banner text-center d-flex align-items-center justify-content-center"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("button",{id:e.shake,className:"btn btn-block btn-score btn-".concat(e.alertType)},s.a.createElement("h3",null,"Score ",s.a.createElement("span",{className:"badge"},e.score))),s.a.createElement("button",{className:"btn btn-block btn-score btn-".concat(e.topScoreType)},s.a.createElement("h3",null,"Top Score ",s.a.createElement("span",{className:"badge"},e.topScore)))))}),h=(a(25),function(e){return s.a.createElement("main",{className:"".concat(e.shake)},s.a.createElement("p",{className:"flicker-1 header-font"},s.a.createElement("strong",null,"Click on an image to earn points, But don't click on any more than once!!")),s.a.createElement("div",{className:"container-fulid"},e.children))}),S=(a(26),function(e){return s.a.createElement("div",{className:"click-item neutral",onClick:function(){e.increment(e.id),e.shuffle(e.id)}},s.a.createElement("img",{className:"card-image",src:e.image,alt:e.name}))}),y=(a(27),function(){return s.a.createElement("div",{className:"footer text-center fixed-bottom "},"\xa9 2020 Copyright : Kanyarut Pornamnuay")}),k=a(8),E=a(3),b=a.n(E),v=a(9),N=a.n(v),T=a(10),j=a.n(T),P=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={cards:k,score:0,topScore:0,selected:[],soundPosition:0,soundStatus:d.a.status.PLAYING,shake:"",message1:"",message2:"Select an image to begin!",alertType:"info",topScoreType:"info",volume:"on"},e.shuffle=function(t){e.setState({cards:e.state.cards.sort((function(e,t){return.5-Math.random()}))})},e.incrementClick=function(t){if(e.state.selected.includes(t))e.setState({score:0,selected:[],shake:"incorrect",message1:"incorrect",message2:"WRONG!! Start over and try again!",alertType:"danger",topScoreType:"info"}),"on"===e.state.volume&&e.setState({soundStatus:d.a.status.PLAYING,soundPosition:0,soundURL:N.a}),setTimeout(function(){this.setState({shake:""})}.bind(Object(m.a)(e)),1e3);else{e.state.selected.push(t);var a=e.state.score+1;e.setState({score:a}),12===a?(e.setState({score:0,selected:[],topScore:a,message1:"correctly",message2:"You Win!!!",alertType:"success"}),"on"===e.state.volume&&e.setState({soundStatus:d.a.status.PLAYING,soundPosition:0,soundURL:j.a})):a>e.state.topScore?(e.setState({topScore:a,message1:"correctly",message2:"YES!! You guessed correctly!",alertType:"success",topScoreType:"success"}),"on"===e.state.volume&&e.setState({soundStatus:d.a.status.PLAYING,soundPosition:0,soundURL:b.a})):(e.setState({message1:"correctly",message2:"YES!! You guessed correctly!",alertType:"success",topScoreType:"info"}),"on"===e.state.volume&&e.setState({soundStatus:d.a.status.PLAYING,soundPosition:0,soundURL:b.a}))}},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"app"},s.a.createElement(g,{message1:this.state.message1,message2:this.state.message2,alertType:this.state.alertType}),s.a.createElement(f,{shake:this.state.shake,score:this.state.score,topScore:this.state.topScore,alertType:this.state.alertType,topScoreType:this.state.topScoreType}),s.a.createElement(h,{shake:this.state.shake},this.state.cards.map((function(t,a){return s.a.createElement(S,{id:t.id,name:t.name,image:t.image,key:a,increment:e.incrementClick,shuffle:e.shuffle})}))),s.a.createElement(d.a,{autoLoad:!0,url:this.state.soundURL,playStatus:this.state.soundStatus,playPosition:this.state.soundPosition}),s.a.createElement(y,null))}}]),a}(n.Component);o.a.render(s.a.createElement(P,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.131024a3.chunk.js.map