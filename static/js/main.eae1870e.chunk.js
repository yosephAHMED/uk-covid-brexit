(this["webpackJsonpuk-covid-brexit"]=this["webpackJsonpuk-covid-brexit"]||[]).push([[0],{196:function(e,t,s){},197:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s(1),n=s.n(a),c=s(70),o=s.n(c),r=(s(79),s(80),s(2)),l=s(4),h=s(15),d=s(16),j=s(18),b=s(17),u=s.p+"static/media/logo.6ce24c58.svg",m=(s(81),s(73)),x=s(6),p=function(e){var t=e.delay,s=e.replace,n=e.to,c=e.onUserClick,o=Object(m.a)(e,["delay","replace","to","onUserClick"]),h=null,d=Object(r.f)(),j=Object(r.g)();Object(a.useEffect)((function(){return function(){h&&clearTimeout(h)}}),[h]);return Object(i.jsx)(x.b,Object(l.a)(Object(l.a)({},o),{},{to:n,onClick:function(e){(null===j||void 0===j?void 0:j.pathname)!==n&&(e.preventDefault(),c(),h=setTimeout((function(){s?d.replace(n):d.push(n)}),t))}}))};p.defaultProps={replace:!1,delay:0};var O=p,w={transition:"all 1s ease-out"},v=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={covidOpacity:1,covidScale:1,brexitOpacity:1,brexitScale:1},e}return Object(d.a)(s,[{key:"onUserClickCovid",value:function(){this.setState({covidOpacity:0,covidScale:10})}},{key:"onUserClickBrexit",value:function(){this.setState({brexitOpacity:0,brexitScale:10})}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"Home",children:Object(i.jsxs)("header",{className:"Home-header",children:[Object(i.jsx)("div",{className:"Covid",style:Object(l.a)(Object(l.a)({},w),{},{opacity:this.state.covidOpacity,transform:"scale("+this.state.covidScale+")"}),children:Object(i.jsx)("h1",{children:Object(i.jsx)(O,{delay:1e3,replace:!1,to:"/Covid",onUserClick:this.onUserClickCovid.bind(this),children:"UK: The Covid Crisis"})})}),Object(i.jsx)("img",{src:u,className:"Home-logo",alt:"logo"}),Object(i.jsx)("div",{className:"Brexit",style:Object(l.a)(Object(l.a)({},w),{},{opacity:this.state.brexitOpacity,transform:"scale("+this.state.brexitScale+")"}),children:Object(i.jsx)("h1",{children:Object(i.jsx)(O,{delay:1e3,replace:!1,to:"/Brexit",onUserClick:this.onUserClickBrexit.bind(this),children:"Brexit: UK and the EU"})})})]})})}}]),s}(a.Component),f=s(72),g=s.n(f),y=(s(52),s(53),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAJL0lEQVRoge1Za2xcxRX+5j7W+7B3/Vx7vYnjd2KT0LglTUgoIamgISWoAQEtNAW1qoSoVFQKVX+QFqlqBS2VIErzA1qJSjwitRWBRFVJaRoDabADhsZxnNTxc7Pr3azjXd+79+59zvSHY9ck63jv2olUiU+6v875zpxPZ2bOzFzgc3yO/xsUXfqWFGQJYjRe+ho4jmsAEGaMVQOoBRC89M0dJw0gDmCUENJNKe0EcBSAXcjghQpo5Tjux4yxewghxB8IRIOhkFxXV2c2tbTwzStXempqa33llZW+QCBQ7C8tLREEQTRN05IlSRo5d+7Cvz/9NNX57rtGT3d3s23bBmPsCQAHroeAhziO23Pr1q0nf/jUU8tXrV7dlA9JkWVl5+239yUvXKhqbG6O/uXw4VtmbIfefLPnp48/Xkdt+0cAXnWSjOAw+Q2EkH2/379/dMOmTbc5IUYikYQsyx7Lsny6rnNzbdWhkJcAlBDybcaYIwFOK/ATQsgvCSFqsLp64Ivr12c2bNrkXbN2bWVDc/Myl8sl5htISqeVvx08ePqPL79sj42MtH5p/fq+E8ePgzF2q5OEnFaAdKxbd/w3e/eufO/IEfufhw+TF557TsxIkmiaps1xXFoQBFV0ubJut1udJRFCGGPMtm3RNAxB07Qy27YDpWVlRdt27Jh6/e23+f7e3soTx49TAB4A2WsigOM4v8fjYaFwOPjArl3BB3btmrUxxpCIx6XxaFTLyDJURQEAKIrC+3y+mR3GLHK7WV19vbV8xQpBFMUbZ/g93d39ANYQQiYIIXsppU8DMJdSgMgY2zwnmc+AEIKaUChYEwoFHcQEAPz1rbe69734YtMvnn++t2PduvCDd999pyxJ1ZTSRxbi5r0GOI7byxj7viiK462rVo1u3LyZ7bj33uVNLS2NThO+BNZ17NjJX+3eLQ2dO9fywksvjX9127YOAFAyGWVDe7ti2/YtAAauFiTfCtzncrm+dujo0eTH3d3J/r4+HHnnHfEP+/b5AIxXBoOR6poazev1Gm6PRxRcLtMyjCsWdFZVaTKZFKZSKW9qcrJOFMXAHXfdlXr1wAFfid/fMePnKy72BWtqTo9Ho60LCcirAoSQE8/u2UN33HPPly+3DQ8Ojn3c1TXe39enaaoK0zSRkeVZu9vjYR6PhwAA4TjU1dcLK9vailvb2qpD4XBNrvFkSZI3rl6dtW17I4DBq+WWbwUEgeOsXIaGpqa6hqamujzjLIjo2Fjsvu3bJxhj72GB5AGAW8gBABhjLz795JOBZCJxYdEZzoN0KpV+4tFHO+/YuDEwlU5fpJQ+ng8vLwEAXslms69tuekm4bGHHz7a19s7wBhji8gXAKDruv7OoUM992/f/sEtN97IHTna7fIG13QRQsYB0HxiOOnERYSQrLu0/n19aqweYH6vzxcNBAJKsKZGC5SWsuKSEiaKIimvqiICx5GKYHB2ik4kk6Yqy+zi5CQbHRwUIpFIaUaSWohQNOSpbE8G6jc3Cd6KsDTS2SkN/2Mkny0UcNYHdACpsvadbYK7vIqa6kVDijJFjpoDcQksEmfUGibMNjjb0nlQm2e2LhLeRQHeBCByvGAL7oDNucupe8UO6i+tN3jR3QagbWYQ2zYo8mhghQgAgLippojgLq/iRG+Fu6Klwl3R4jDE1cEMhQJQF3S8hHzXwAzGzExCXtitcNj6FCileW8WjgQQQnqNqRHDeVr5gxqyiOkbW15wNIUopb2mHNvqhKNeON2jxLpkKyu5isrqjbKWO28ivMs3n79tqh4A16YCAE5aulybjyM11YuxY7/+aPLUG83a5ND6LbWa5kl/6o1+8GyMWfq8c5xaWgDXqgIAzoLRKmppGie43fM5MdtQYv/67cTaoKDynO8TmzH8fEt4CwA88ubo++dP7Y9VrX14cy4ms80w8ujAM3BaAQ3AsCGNj13NabL/QHdFEc3s+fryr4ykdN+W+mLXjO1nt9Us01KD7cjRCC1dimF6C53MNyGnAgDgtC6NXnWAbLK/cfdtNW4CkJIi3ohnzNlzVGNZUQMBI5YhJy/nmVL8AoBzTpJxLIAQctqQIvM2GiMTHwIsX0fI1wYAm+uLaedIxjXXR+TJFDWUzBVcOSYTQq6tAEppv5VJeOezm1IsGfSJwxyZjr2zrWxVVDLXKAZVZnwsm3k5XnRdzrWUcRsO5j9Q4BSy9Uz1fEZdimSX+V2zu0yFl68sdvHDR4flPgDQTZqlDJW8u+yKGJaadFFKr7mAM4zZIWaZORuapSS4pnLxM4fEUImYHpzUNAA4EVPOEt41RDj+ihubqUuluA4VUACcN5R4NJfRUidKV1Z4ZhsVZbAjklnRXu3xAsBrJ9OSp7wxkYvLLDOE6yAAAM7oUmQid0TezFq2CQAmZcb3DoweK+KJtrXB35HImInehNoRaN52xXMks/WLACsGEHOSSEECCCFnjPR5PZetqCQsfxBRNQB47ODYh0nVKvnT/Q1NlDH63QOjcW/lqh7BUxG+nGdkEjEAQwAcXZQKEkApPWtlEzmfEQMtdzZ2RZS2/b2Tx/qT2rpXvrGiVjWptvONoT4Ffr1izbc25eKZcmwK0wIcwelRYgZnLG2qLGdAT0Vd5Re+0/u7j14PAvA8+OeRUdW0w+7gDVM17fdtBOFyjmnIMZ0QMuT0plqwAGbpy8EYQK68lbrLm9csu3U3NeXYgGVmjFL/CvCiO8fZ53+w1AmOUjrsNJFCBYwD0C09pQju8sqcHoRwoj/cku9ztaWligE4FlDoLgQA/zGlWN7H3oVgG2oVClgDBQsghAxoUnRprpeMmWA0hOspgFJ61pJjeb3dLARLT8cwfQtTFvK9HIuZQifMTNy/CP4stMnBKIAzhXAXI+BD21TbqCmnFxEDzDYUafDvRYyxg4Xw+UWMrXEcVyufP1HtqVyZ4V3FpY4jMGrEu/Z8Qo3MKcbYM8jzOXEuluJH9w8IIc+IvqqB4vDNvLf6hlZO9M4rhlq6rE2eO5uNf5JRLw60gtFextg3Mf0D3DGWQgAAlAJ4iBCyE8DNIETmeXeSiB4F4CgAMDtbRM1sJWM0CKCHENJJKX0dwKnFDLxUAuZCALAMQAOAuU1Ow/RReRDT76xLgv8CvFooC0Az9+wAAAAASUVORK5CYII="),A=function(){return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)("div",{className:"navbar--logo-holder",children:Object(i.jsx)("img",{src:y,alt:"logo",className:"navbar--logo"})}),Object(i.jsxs)("ul",{className:"navbar--link",children:[Object(i.jsx)("li",{className:"navbar--link-item",children:Object(i.jsx)(x.b,{to:"/",children:"Hub"})}),Object(i.jsx)("li",{className:"navbar--link-item",children:Object(i.jsx)(x.b,{to:"/Covid",children:"Home"})}),Object(i.jsx)("li",{className:"navbar--link-item",children:Object(i.jsx)(x.b,{to:"/Covid/about",children:"About"})}),Object(i.jsx)("li",{className:"navbar--link-item",children:Object(i.jsx)("a",{href:"https://www.redcross.org.uk/get-involved/donate",title:"BritishRedCross",children:"Donate"})})]})]})},N=s(40);s(196);var k=function(e){var t=e.json,s=[],a=[],n=[];void 0!==t&&t.slice().reverse().forEach((function(e,t,i){s.push(e.date),a.push(e.newCasesByPublishDate),n.push(e.newDeathsByDeathDate)}));var c={labels:s,datasets:[{label:"newCasesByPublishDate",data:a}]},o={labels:s,datasets:[{label:"newDeathsByDeathDate",data:n}]};return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"chart",children:Object(i.jsx)(N.Line,{data:c,height:400,width:600,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}),Object(i.jsx)("div",{className:"chart",children:Object(i.jsx)(N.Line,{data:o,height:400,width:600,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})})]})},D=s.p+"static/media/2_LU.e8886849.jpg",C=s.p+"static/media/corona.26142b89.jpg",U={transition:"all 1s ease-in"},B=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={opacity:0,scale:10,color:"#61dafb",data:{}},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({opacity:1,scale:1,color:"white"})}),500),g.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}').then((function(t){e.setState({data:t.data.data})}))}},{key:"render",value:function(){return void 0===this.state.data[0]?Object(i.jsx)("div",{children:"Fetching data from API..."}):Object(i.jsxs)("div",{className:"covid-container",children:[Object(i.jsx)(A,{}),Object(i.jsx)("h1",{className:"covid-title",style:Object(l.a)(Object(l.a)({},U),{},{opacity:this.state.opacity,transform:"scale("+this.state.scale+")",color:this.state.color,animationName:"changeColor",animationDelay:"1s",animationDuration:"5s"}),children:"UK: The Covid Crisis"}),Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("h2",{children:"London Reveals New Transport Rules"}),Object(i.jsx)("a",{href:"https://www.mylondon.news/news/zone-1-news/transport-london-reveals-new-rules-18362065",title:"Transport for London reveals new rules about travel for over 60s using London Underground and buses",children:Object(i.jsx)("img",{src:D,alt:"logo"})}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:Object(i.jsx)("b",{children:this.state.data[0].date})}),Object(i.jsxs)("p",{children:["Area: ",this.state.data[0].areaName]}),Object(i.jsxs)("p",{children:["Today New Cases: ",this.state.data[0].newCasesByPublishDate]}),Object(i.jsx)("p",{children:"Today New Deaths: NYD"}),Object(i.jsxs)("p",{children:["Total Cases: ",this.state.data[0].cumCasesByPublishDate]}),Object(i.jsx)("p",{children:"Total Deaths: NYD"})]})]}),Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("h2",{children:"'New variant' of Coronavirus Identified in England"}),Object(i.jsx)("a",{href:"https://www.bbc.com/news/health-55308211",title:"A new variant of coronavirus has been found which is growing faster in some parts of England, MPs have been told",children:Object(i.jsx)("img",{src:C,alt:"logo",width:"615",height:"409"})}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:Object(i.jsx)("b",{children:this.state.data[1].date})}),Object(i.jsxs)("p",{children:["Area: ",this.state.data[1].areaName]}),Object(i.jsxs)("p",{children:["Today New Cases: ",this.state.data[1].newCasesByPublishDate]}),Object(i.jsxs)("p",{children:["Today New Deaths: ",this.state.data[1].newDeathsByDeathDate]}),Object(i.jsxs)("p",{children:["Total Cases: ",this.state.data[1].cumCasesByPublishDate]}),Object(i.jsxs)("p",{children:["Total Deaths: ",this.state.data[1].cumDeathsByDeathDate]})]})]}),Object(i.jsx)(k,{json:this.state.data}),Object(i.jsx)("h4",{children:"https://github.com/publichealthengland/coronavirus-dashboard-api-python-sdk"})]})}}]),s}(a.Component),E=(s(69),function(){return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)("div",{className:"navbar--logo-holder",children:Object(i.jsx)("img",{src:y,alt:"logo",className:"navbar--logo"})}),Object(i.jsxs)("ul",{className:"navbar--link",children:[Object(i.jsx)("li",{className:"navbar--link-item",children:Object(i.jsx)(x.b,{to:"/",children:"Hub"})}),Object(i.jsx)("li",{className:"navbar--link-item",children:Object(i.jsx)(x.b,{to:"/Brexit",children:"Home"})}),Object(i.jsx)("li",{className:"navbar--link-item",children:Object(i.jsx)(x.b,{to:"/Brexit/about",children:"About"})}),Object(i.jsx)("li",{className:"navbar--link-item",children:Object(i.jsx)("a",{href:"https://www.facebook.com/GreatBrexitDebate/",title:"Facebook forums",children:"Discuss"})})]})]})}),T=s.p+"static/media/brexit1.ba71910f.jpg",I=s.p+"static/media/brexit2.7953c09f.jpg",K={transition:"all 1s ease-in"},L=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={opacity:0,scale:10,color:"#61dafb"},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({opacity:1,scale:1,color:"white"})}),500)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"covid-container",children:[Object(i.jsx)(E,{}),Object(i.jsx)("h1",{className:"covid-title",style:Object(l.a)(Object(l.a)({},K),{},{opacity:this.state.opacity,transform:"scale("+this.state.scale+")",color:this.state.color,animationName:"changeColor",animationDelay:"1s",animationDuration:"5s"}),children:"Brexit: UK and the EU"}),Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("h2",{children:"Brexit, the day after"}),Object(i.jsx)("a",{href:"https://www.france24.com/en/20200201-brexit-the-day-after-a-divided-britain-grapples-with-leaving-the-eu",title:"Brexit, the day after: A divided Britain grapples with leaving the EU",children:Object(i.jsx)("img",{src:T,alt:"logo",width:"615",height:"409"})}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:Object(i.jsx)("b",{children:"What is Brexit?"})}),Object(i.jsx)("p",{children:"The United Kingdom(UK) voted to leave the European Union(EU) which occurred on January 31, 2020."}),Object(i.jsx)("p",{children:"Br(itish) + Exit = Brexit"}),Object(i.jsx)("p",{children:"Both sides agreed that life would remain the same until December 31, 2020 meaning the UK would still follow the EU rules"}),Object(i.jsx)("p",{children:"During this transition period, a deal between the leaders of the UK and the EU was meant to be made"}),Object(i.jsx)("p",{children:"Luckily, if a deal isn\u2019t agreed upon by December 31, 2020 that doesn't mean a deal will never be made. However, the problems that may arise will make that necessary deal agreement take place sooner."})]})]}),Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("h2",{children:"Brexit: Fraying Union"}),Object(i.jsx)("a",{href:"https://www.ft.com/content/8710df70-d49d-11e5-8887-98e7feb46f27",title:"Without Britain, countries such as Denmark will find it harder to keep voters on the EU path",children:Object(i.jsx)("img",{src:I,alt:"logo",width:"615",height:"409"})}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:Object(i.jsx)("b",{children:"Why did Brexit occur?"})}),Object(i.jsx)("p",{children:"The Uk joined the European Economic Community (the precursor of the EU) on January 1, 1973."}),Object(i.jsx)("p",{children:"The UK would remain a member for 47 years, a very long relationship. So why leave? Three factors came into play:"}),Object(i.jsx)("p",{children:"Economics - The EU is thought to be a dysfunctional Economic Entity"}),Object(i.jsx)("p",{children:"Sovereignty - Due to the rise of nationalism across the world"}),Object(i.jsx)("p",{children:"Political Elitism - The vote to leave, was a vote against the British Elite."})]})]})]})}}]),s}(a.Component),Q=s.p+"static/media/coronaAbout1.016ecdc8.jpg";function R(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"covid-container",children:[Object(i.jsx)(A,{}),Object(i.jsx)("h1",{className:"covid-title",style:{color:"white"},children:"UK: The Covid Crisis"}),Object(i.jsx)("img",{src:Q,style:{padding:"20px"}}),Object(i.jsxs)("body",{children:[Object(i.jsx)("h4",{children:"A Quick Overview of COVID-19 in the UK"}),Object(i.jsx)("div",{className:"lines",style:{height:"900px"}}),Object(i.jsxs)("ul",{className:"list",children:[Object(i.jsx)("li",{children:"The United Kingdom is home to approximately 67 million people."}),Object(i.jsx)("li",{children:"Of that 67 million people about 1.85 million people have been infected with Covid-19."}),Object(i.jsx)("li",{children:"As of 12/13/2020, there have been over 67,000 deaths."}),Object(i.jsx)("li",{children:"Just liked in the United States we saw two spikes in the UK."}),Object(i.jsx)("li",{children:"The United Kingdom has had two national lockdowns."}),Object(i.jsx)("li",{children:"It\u2019s first lockdown began March 23 and would remain that way until about May 28th, where restrictions would begin to start being uplifted. This is very similar to what we saw in New York, where we as well faced a tiered system post lockdown. Each tier would proceed as long as covid cases stayed at or decreased below a preferred percentage."}),Object(i.jsx)("li",{children:"Unfortunately, the second one was unavoidable as data showed the second wave could be way more severe than the first wave."}),Object(i.jsx)("li",{children:"It seems New York may be on the verge of another strict lockdown as well. We are starting to see places being forced to close down due to the increase in covid cases."}),Object(i.jsx)("li",{children:"Data showed that the second wave could possibly have several thousand deaths per day and a peak of mortality greater than the first wave."}),Object(i.jsx)("li",{children:"This second lockdown would begin Thursday, November 5th and would remain in effect until December 2nd, 2020."})]})]}),Object(i.jsx)("img",{src:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/04/13/uk-coronavirus-response-charts.jpg?width=990",style:{padding:"20px"}}),Object(i.jsxs)("body",{children:[Object(i.jsx)("h4",{children:"Lockdowns... A Necessary Evil?"}),Object(i.jsx)("div",{className:"lines",style:{height:"500px"}}),Object(i.jsxs)("ul",{className:"list",children:[Object(i.jsx)("li",{children:"However, another 4 week lockdown would hit the economy hard. Some would even say the country couldn\u2019t survive another lockdown as the country is already over \xa32 trillion in debt."}),Object(i.jsx)("li",{children:"Businesses who barely survived the first look down were likely to sink after a second, which is sad. The businesses people built would not only be destroyed but the mental health of many as well."}),Object(i.jsx)("li",{children:"Compared to 2019 where 22 suicides averaged a day, during the COVID-19 pandemic 37 averaged a day which is quite a jump, that\u2019s 15 more people taking their lives a day."}),Object(i.jsx)("li",{children:"Luckily, the furlough system would still be in effect throughout November. It paid 80% of employees. At least something is better than nothing."})]})]}),Object(i.jsx)("img",{src:"https://images.mktw.net/im-267208?width=620&size=1.4988290398126465",style:{padding:"20px"}}),Object(i.jsxs)("body",{children:[Object(i.jsx)("h4",{children:"Poor Administration"}),Object(i.jsx)("div",{className:"lines",style:{height:"370px"}}),Object(i.jsxs)("ul",{className:"list",children:[Object(i.jsx)("li",{children:"The government and Prime Minister Boris Johnson have let their people down. This harsh second lockdown of 4 weeks could have been avoided. Talk about a second lockdown was discussed in the second half of september. The government delayed the second lockdown with hopes of not destroying the economy that was just beginning again."}),Object(i.jsx)("li",{children:"On the other hand, that decision to wait would prove to be worse for the people because the lockdown would be longer and harder which would only hurt the economy more and ruin lives of more people. If there was no delay, a shorter lockdown could have been enacted."})]})]}),Object(i.jsx)("img",{src:"https://foreignpolicy.com/wp-content/uploads/2020/06/dominic-cummings-loses-popularity-in-britain.jpg?w=1500",style:{padding:"20px"}}),Object(i.jsxs)("body",{children:[Object(i.jsx)("h4",{children:"Dominic Cummings... The Rules Don't Apply to Everyone"}),Object(i.jsx)("div",{className:"lines",style:{height:"1000px"}}),Object(i.jsxs)("ul",{className:"list",children:[Object(i.jsx)("li",{children:"However this isn\u2019t the first time this has happened. During the first COVID-19 lockdown, Dominic Cummings disobeyed the lockdown orders. If you are unaware of who Dominic Cummings is\u2026"}),Object(i.jsx)("li",{children:"he was the former chief advisor to the Prime Minister Boris Johnson. During the first lockdown, Cummings would leave his home in London and travel to his second home in Durham while displaying symptoms of the virus. The public really frowned upon this as it showed the government can do whatever they want."}),Object(i.jsx)("li",{children:"The public felt this rule breaking undermined compliance of Lockdown rules. They were right to feel this way because why should their livelihoods such as losing jobs be under attack to follow strict lockdown orders but a government official who has job security can break the orders."}),Object(i.jsx)("li",{children:"Life during Lockdown was pretty similar to over here in New York. The following is what occurred\u2026."}),Object(i.jsx)("li",{children:"Pubs and restaurants were closed but takeout was allowed."}),Object(i.jsx)("li",{children:"Non-essential businesses along with leisure and entertainment venues would be closed."}),Object(i.jsx)("li",{children:"No households mixing for gatherings indoors or in private gardens."}),Object(i.jsx)("li",{children:"People sre to stay home with exception to going to school, work or medical: Schools, Universities, and colleges would remain open which is different than the first lockdown."}),Object(i.jsx)("li",{children:"The UK is currently in a tiered system which replaced the national Lockdown on December 2nd, 2020."})]})]}),Object(i.jsx)("img",{src:"https://i0.wp.com/metro.co.uk/wp-content/uploads/2020/11/PRI_173873482-1.jpg?quality=90&strip=all&zoom=1&resize=964%2C1069&ssl=1",style:{padding:"20px"}})]})})}var F=s.p+"static/media/brexitAbout1.cd4a48aa.jpg",W=s.p+"static/media/brexitAbout2.deeb28d1.jpg",S=s.p+"static/media/brexitAbout3.75e192cc.jpg";function M(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"covid-container",children:[Object(i.jsx)(E,{}),Object(i.jsx)("h1",{className:"covid-title",style:{color:"white"},children:"Brexit: UK and the EU"}),Object(i.jsx)("img",{src:F,className:"image"}),Object(i.jsxs)("body",{children:[Object(i.jsx)("h4",{children:"What is the need for a Brexit Deal?"}),Object(i.jsx)("div",{className:"lines",style:{height:"550px"}}),Object(i.jsxs)("ul",{className:"list",children:[Object(i.jsx)("li",{children:"Inorder for the UK and EU to coexist there have always been rules which layout how the two can live, work and trade together."}),Object(i.jsx)("li",{children:"If there is no deal life can drastically change."}),Object(i.jsx)("li",{children:"For example, the cost of living will increase if there is no trade deal agreed upon. This is because buy and selling across EU borders was previously tariff free( no tax) but if there is no trade deal tariffs will be placed on the UK for buying and selling across EU borders. Therefore, the cost of living will increase because companies will most likely end up charging more for products to offset the losses they will face from the possible new tariffs."}),Object(i.jsx)("li",{children:"Other areas of interest relate to airline safety, medicine, and the sharing of information about security threats; all of which are important aspects of life where agreements upon are needed"})]})]}),Object(i.jsx)("img",{src:W,className:"image",width:"700",height:"394"}),Object(i.jsxs)("body",{children:[Object(i.jsx)("h4",{children:"What if no deal is agreed upon?"}),Object(i.jsx)("div",{className:"lines",style:{height:"550px"}}),Object(i.jsxs)("ul",{className:"list",children:[Object(i.jsx)("li",{children:"No trade deal = higher prices in UK shops due to possible tariffs."}),Object(i.jsx)("li",{children:"No free-trade agreements means operate under WTO (World Trade Organization) where countries set their own tariffs."}),Object(i.jsx)("li",{children:"Long queues for lorries(large trucks) due to increased border checks, in other words product delay."}),Object(i.jsx)("li",{children:"Less choices of food specifically fresh food due to the increased cost of new replacements."}),Object(i.jsx)("li",{children:"The supply of medicines can be jeopardized."}),Object(i.jsx)("li",{children:"No health care arrangement for UK people in the EU."}),Object(i.jsx)("li",{children:"Education could be affected such as Erasmus. It previously helped students study in other countries but that may end."})]})]}),Object(i.jsx)("img",{src:S,className:"image",width:"700",height:"394"}),Object(i.jsxs)("body",{children:[Object(i.jsx)("h4",{children:"What will life be like on January 1, 2021 and there after?"}),Object(i.jsx)("div",{className:"lines",style:{height:"550px"}}),Object(i.jsxs)("ul",{className:"list",children:[Object(i.jsx)("li",{children:"Regardless of deal or no deal...LIFE WILL CHANGE!"}),Object(i.jsx)("li",{children:"The big annual payments to the EU will end."}),Object(i.jsx)("li",{children:"People will no longer have the ease of moving between the UK and the EU to live, work or retire as you will no longer be automatically allowed to do so."}),Object(i.jsx)("li",{children:"Travel rules will change... So you will need to ensure your passport is still valid, that you have health insurance, as well as the right driving documents"}),Object(i.jsx)("li",{children:"Businesses trading with the EU will face a lot more paperwork."}),Object(i.jsx)("li",{children:"The Uk will apply a points based immigration system to the EU citizens."}),Object(i.jsx)("li",{children:"People from the UK will stand in a different queue at passport control when arriving in EU countries."})]})]})]})})}var z=function(){return Object(i.jsx)("main",{children:Object(i.jsxs)(r.c,{children:[Object(i.jsx)(r.a,{path:"/",component:v,exact:!0}),Object(i.jsx)(r.a,{path:"/Covid",component:B,exact:!0}),Object(i.jsx)(r.a,{path:"/Covid/about",component:R}),Object(i.jsx)(r.a,{path:"/Brexit",component:L,exact:!0}),Object(i.jsx)(r.a,{path:"/Brexit/about",component:M})]})})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,198)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),i(e),a(e),n(e),c(e)}))};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(x.a,{children:Object(i.jsx)(z,{})})}),document.getElementById("root")),X()},52:function(e,t,s){},53:function(e,t,s){},69:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){}},[[197,1,2]]]);
//# sourceMappingURL=main.eae1870e.chunk.js.map