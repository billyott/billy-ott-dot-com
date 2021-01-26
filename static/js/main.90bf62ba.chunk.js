(this["webpackJsonpbilly-ott-dot-com"]=this["webpackJsonpbilly-ott-dot-com"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":1,"title":"12MONTHS","prevImg":"./assets/twelvemonths-preview.png","stack":"React.js, Ruby on Rails, React Redux","desc":"A minimalist journaling app that allows users to jot down notes, track habits, and monitor mood and sleep trends.","github":"https://github.com/billyott/twelve-months-client","youtube":"https://www.youtube.com/watch?v=Pwc1hHV852g"},{"id":2,"title":"Flash Flip","prevImg":"./assets/flashflip-preview.png","stack":"React.js, Ruby on Rails","desc":"A flash card application to help with studying any topic. Includes a \'game\' feature to help with testing.","github":"https://github.com/billyott/flash-flip-client","youtube":"https://www.youtube.com/watch?v=KvWOtRugWLg"},{"id":3,"title":"Completionist","prevImg":"./assets/completionist-preview.png","stack":"JavaScript, Ruby on Rails","desc":"A basic task tracker.","github":"https://github.com/bfeldman/completionist-frontend","youtube":"https://www.youtube.com/watch?v=hXr_y20hb7g"},{"id":4,"title":"Scrambled","prevImg":"./assets/scrambled-preview.png","stack":"Ruby","desc":"A CLI word scramble game written completely in Ruby.","github":"https://github.com/billyott/scrambled","youtube":"https://www.youtube.com/watch?v=K8k6POBPFfU"}]')},32:function(e,t,s){},33:function(e,t,s){},42:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),o=s.n(n),c=s(24),i=s.n(c),l=(s(32),s(2)),r=s(3),d=s(13),b=s(14),u=s(16),h=s(15),m=(s(33),function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"homepage",style:{backgroundImage:"url('./assets/homepage-background.png')"},children:[Object(a.jsx)("div",{className:"homepage__top-area"}),Object(a.jsxs)("div",{className:"homepage__center-area",children:[Object(a.jsxs)("div",{className:"homepage__headers-container",children:[Object(a.jsxs)("div",{className:"homepage__header-container",children:[Object(a.jsx)("div",{className:"homepage__header",children:"FULL-STACK"}),Object(a.jsx)("div",{className:"homepage__header",children:"WEB DEVELOPER"})]}),Object(a.jsx)("div",{className:"homepage__sub-header",children:"BILLY OTT"})]}),Object(a.jsxs)("div",{className:"homepage__start-container",children:[Object(a.jsx)("div",{className:"homepage__start-icon"}),Object(a.jsx)(l.b,{to:"/main-menu",className:"homepage__start-text",children:"PRESS START"})]})]}),Object(a.jsx)("div",{className:"homepage__bottom-area",children:Object(a.jsx)("div",{className:"homepage__footer",children:Object(a.jsxs)("div",{className:"homepage__footer-link-container",children:[Object(a.jsx)(l.b,{to:"/main-menu",className:"homepage__footer-link",children:"main menu"}),"/",Object(a.jsx)(l.b,{to:"/portfolio",className:"homepage__footer-link",children:"portfolio"}),"/",Object(a.jsx)(l.b,{to:"/about",className:"homepage__footer-link",children:"about"}),"/",Object(a.jsx)(l.b,{to:"/blog",className:"homepage__footer-link",children:"blog"}),"/",Object(a.jsx)(l.b,{to:"/contact",className:"homepage__footer-link",children:"contact"})]})})})]})}}]),s}(o.a.Component)),j=(s(42),function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selected:"none"},e.generatePrevVisual=function(){return"portfolio"===e.state.selected?"./assets/portfolio-preview.png":"about"===e.state.selected?"./assets/about-preview.png":"blog"===e.state.selected?"./assets/blog-preview.png":"contact"===e.state.selected?"./assets/contact-preview.png":"./assets/homepage-background.png"},e.generatePrevText=function(){return"portfolio"===e.state.selected?"Dev projects!":"about"===e.state.selected?"Current stats!":"blog"===e.state.selected?"Some thoughts!":"contact"===e.state.selected?"Comms methods!":"Make a selection!"},e.updateBorderColor=function(){return"portfolio"===e.state.selected?"--opt1":"about"===e.state.selected?"--opt2":"blog"===e.state.selected?"--opt3":"contact"===e.state.selected?"--opt4":"--default"},e.updateSeletedPortfolio=function(){e.setState({selected:"portfolio"})},e.updateSeletedAbout=function(){e.setState({selected:"about"})},e.updateSeletedBlog=function(){e.setState({selected:"blog"})},e.updateSeletedContact=function(){e.setState({selected:"contact"})},e.resetSelected=function(){e.setState({selected:"none"})},e}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"main-menu",style:{backgroundImage:"url('./assets/mainmenu-background.png')"},children:[Object(a.jsx)("div",{className:"main-menu__header",children:"MAIN MENU"}),Object(a.jsxs)("div",{className:"main-menu__menu-content main-menu__menu-content".concat(this.updateBorderColor()),children:[Object(a.jsx)("div",{className:"main-menu__links-container",children:Object(a.jsxs)("div",{className:"main-menu__links",children:[Object(a.jsx)(l.b,{to:"/portfolio",className:"main-menu__link main-menu__link--opt1",onMouseEnter:this.updateSeletedPortfolio,onFocus:this.updateSeletedPortfolio,onMouseLeave:this.resetSelected,onBlur:this.resetSelected,children:"Portfolio"}),Object(a.jsx)(l.b,{to:"/about",className:"main-menu__link main-menu__link--opt2",onMouseEnter:this.updateSeletedAbout,onFocus:this.updateSeletedAbout,onMouseLeave:this.resetSelected,onBlur:this.resetSelected,children:"About"}),Object(a.jsx)(l.b,{to:"/blog",className:"main-menu__link main-menu__link--opt3",onMouseEnter:this.updateSeletedBlog,onFocus:this.updateSeletedBlog,onMouseLeave:this.resetSelected,onBlur:this.resetSelected,children:"Blog"}),Object(a.jsx)(l.b,{to:"/contact",className:"main-menu__link main-menu__link--opt4",onMouseEnter:this.updateSeletedContact,onFocus:this.updateSeletedContact,onMouseLeave:this.resetSelected,onBlur:this.resetSelected,children:"Contact"})]})}),Object(a.jsx)("img",{className:"main-menu__prev-visual",src:this.generatePrevVisual(),alt:"link preview"})]}),Object(a.jsx)("div",{className:"main-menu__prev-text",children:this.generatePrevText()})]})}}]),s}(o.a.Component)),p=s(26),g=s.n(p),_=(s(60),s(10)),f=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={selectedProject:_[0]},e.updateSelectedProject=function(t){e.setState({selectedProject:t})},e.generatePreviewIcons=function(){return _.map((function(t){return Object(a.jsx)("div",{className:"portfolio__project",style:{backgroundImage:"url('".concat(t.prevImg,"')")},children:Object(a.jsx)("button",{className:"portfolio__project-title",onFocus:function(){return e.updateSelectedProject(t)},children:t.title})},t.id)}))},e.findIndexOfSelectedProject=function(){return _.findIndex((function(t){return t===e.state.selectedProject}))},e.toggleNext=function(){e.findIndexOfSelectedProject()+1===_.length?e.setState({selectedProject:_[0]}):e.setState({selectedProject:_[e.findIndexOfSelectedProject()+1]})},e.toggleBack=function(){e.findIndexOfSelectedProject()-1===-1?e.setState({selectedProject:_[_.length-1]}):e.setState({selectedProject:_[e.findIndexOfSelectedProject()-1]})},e}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"portfolio",style:{backgroundImage:"url('./assets/about-background.png')"},children:[Object(a.jsxs)("div",{className:"portfolio__header-container",children:[Object(a.jsx)("div",{className:"portfolio__header",children:"PORTFOLIO"}),Object(a.jsx)(l.b,{to:"/main-menu",className:"portfolio__back-button",children:"GO BACK"})]}),Object(a.jsx)("div",{className:"portfolio__projects-container",children:this.generatePreviewIcons()}),Object(a.jsxs)("div",{className:"portfolio__prev-container",children:[Object(a.jsx)("button",{className:"portfolio__mobile-toggle portfolio__mobile-toggle--prev",onClick:this.toggleBack,children:"\xab"}),Object(a.jsxs)("div",{className:"portfolio__prev-container-content",children:[Object(a.jsxs)("div",{className:"portfolio__prev-details",children:[Object(a.jsx)("div",{className:"portfolio__prev-title",children:this.state.selectedProject.title}),Object(a.jsxs)("div",{className:"portfolio__prev-desc",children:["\u26ac ",this.state.selectedProject.desc]}),Object(a.jsxs)("div",{className:"portfolio__prev-stack",children:["\u26ac built in ",this.state.selectedProject.stack]}),Object(a.jsx)("div",{className:"portfolio__prev-github-container",children:Object(a.jsx)("a",{className:"portfolio__prev-github",href:this.state.selectedProject.github,target:"_blank",rel:"noreferrer",children:"GitHub Repo"})})]}),Object(a.jsx)("div",{className:"portfolio__player-container",children:Object(a.jsx)(g.a,{className:"portfolio__react-player",url:this.state.selectedProject.youtube,width:"100%",height:"100%"})})]}),Object(a.jsx)("button",{className:"portfolio__mobile-toggle portfolio__mobile-toggle--next",onClick:this.toggleNext,children:"\xbb"})]})]})}}]),s}(o.a.Component);s(61);var O=function(){return Object(a.jsxs)("div",{className:"about",style:{backgroundImage:"url('./assets/about-background.png')"},children:[Object(a.jsx)("div",{className:"about__header",children:"ABOUT"}),Object(a.jsx)("div",{className:"about__content-outer",children:Object(a.jsxs)("div",{className:"about__content-inner",children:[Object(a.jsx)("img",{className:"about__image",src:"./assets/self-portrait.png",alt:"cartoon version of Billy Ott"}),Object(a.jsxs)("div",{className:"about__text-container",children:[Object(a.jsx)("div",{className:"about__subheader",children:"Billy Ott"}),Object(a.jsxs)("div",{className:"about__bio",children:[Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"LOCATION: New York City, NY, USA"}),Object(a.jsx)("li",{children:"BIRTHDAY: 05.18.19XX"}),Object(a.jsx)("li",{children:"BLOOD TYPE: A+"}),Object(a.jsx)("li",{children:"MB: ISFJ"})]}),Object(a.jsx)("p",{children:"bio: Hi! I'm a Full-stack Software Developer with a focus in React.js and Ruby on Rails. I'm also a former digital marketer who dabbled in data analysis, data visualization, team-management, and building things from scratch. In my spare time, I'm usually playing video games, cooking, or learning something new."})]})]})]})}),Object(a.jsx)(l.b,{to:"/main-menu",className:"about__back-button",children:"GO BACK"})]})};s(62);var x=function(){return Object(a.jsxs)("div",{className:"blog",style:{backgroundImage:"url('./assets/about-background.png')"},children:[Object(a.jsx)("div",{className:"blog__header",children:"blog"}),Object(a.jsx)("div",{className:"blog__content-outer",children:Object(a.jsx)("div",{className:"blog__content-inner",children:Object(a.jsxs)("ul",{className:"blog__items",children:[Object(a.jsxs)("li",{className:"blog__item",children:[Object(a.jsx)("a",{className:"blog__link",href:"https://heybillyott.wordpress.com/2020/12/03/css-units/",target:"_blank",rel:"noreferrer",children:"CSS Units"}),Object(a.jsx)("p",{className:"blog__prev-text",children:"Confession: I haven\u2019t taken time to formally learn CSS. Styling my projects has been a force-it-and-see-what-happens situation each time. Unsurprisingly, this has led to some..."})]}),Object(a.jsxs)("li",{className:"blog__item",children:[Object(a.jsx)("a",{className:"blog__link",href:"https://heybillyott.wordpress.com/2020/11/08/im-kinda-into-brutalist-web-design/",target:"_blank",rel:"noreferrer",children:"I\u2019m Kinda Into Brutalist Web Design"}),Object(a.jsx)("p",{className:"blog__prev-text",children:"I recently stumbled upon an extremely polarizing web design aesthetic \u2013 brutalism \u2013 and subsequently fell into a medium-deep internet rabbit hole to learn more. Gotta say, I\u2019m kinda into it..."})]}),Object(a.jsxs)("li",{className:"blog__item",children:[Object(a.jsx)("a",{className:"blog__link",href:"https://heybillyott.wordpress.com/2020/10/18/creating-nested-structures-in-rails/",target:"_blank",rel:"noreferrer",children:"Creating Nested Structures in Rails"}),Object(a.jsx)("p",{className:"blog__prev-text",children:"In true Millennial fashion, I have a mild addiction to houseplants. In fact, I just counted over 20 of them in my immediate vicinity. While it used to be I couldn\u2019t pass a plant shop without buying a new pilea or money tree, additions in recent years come from propagations, which has been a super good way to..."})]}),Object(a.jsxs)("li",{className:"blog__item",children:[Object(a.jsx)("a",{className:"blog__link",href:"https://heybillyott.wordpress.com/2020/09/25/deconstructing-an-advertising-bid-request/",target:"_blank",rel:"noreferrer",children:"Deconstructing an advertising bid request"}),Object(a.jsx)("p",{className:"blog__prev-text",children:"There\u2019s a list of reasons I\u2019m exploring software engineering as a profession; its wide application \u2013 both professional and personal \u2013 is high up there. Curious to see if I could apply my humble 1.5 weeks\u2019 worth of skill-building (ok, we actually fit a lot in that time), I revisited a concept from my previous life..."})]}),Object(a.jsxs)("li",{className:"blog__item",children:[Object(a.jsx)("a",{className:"blog__link",href:"https://heybillyott.wordpress.com/2020/09/11/lets-do-our-best/",target:"_blank",rel:"noreferrer",children:"let\u2019s do our best"}),Object(a.jsx)("p",{className:"blog__prev-text",children:"Many of the self-improvement books I\u2019ve read have told me to share my goals with others. The accountability associated with a public declaration, they say, is a big motivator to achieve them. But putting yourself out there is awkward and scary. No one wants to be a flake or worse \u2013 a failure..."})]})]})})}),Object(a.jsx)(l.b,{to:"/main-menu",className:"blog__back-button",children:"GO BACK"})]})};s(63);var v=function(){return Object(a.jsxs)("div",{className:"contact",style:{backgroundImage:"url('./assets/about-background.png')"},children:[Object(a.jsx)("div",{className:"contact__header",children:"CONTACT"}),Object(a.jsx)("div",{className:"contact__content-outer",children:Object(a.jsx)("div",{className:"contact__content-inner",children:Object(a.jsxs)("div",{className:"contact__items",children:[Object(a.jsx)("a",{className:"contact__item",href:"https://github.com/billyott",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(a.jsx)("a",{className:"contact__item",href:"https://www.linkedin.com/in/billyott",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),Object(a.jsx)("a",{className:"contact__item",href:"https://my.playstation.com/profile/zomgbill",target:"_blank",rel:"noreferrer",children:"PSN"})]})})}),Object(a.jsx)(l.b,{to:"/main-menu",className:"contact__back-button",children:"GO BACK"})]})};s(64);var N=function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsx)(l.a,{basename:"/",children:Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{path:"/main-menu",children:Object(a.jsx)(j,{})}),Object(a.jsx)(r.a,{path:"/portfolio",children:Object(a.jsx)(f,{})}),Object(a.jsx)(r.a,{path:"/about",children:Object(a.jsx)(O,{})}),Object(a.jsx)(r.a,{path:"/blog",children:Object(a.jsx)(x,{})}),Object(a.jsx)(r.a,{path:"/contact",children:Object(a.jsx)(v,{})}),Object(a.jsx)(r.a,{path:"/",children:Object(a.jsx)(m,{})})]})})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),o(e),c(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),y()}},[[65,1,2]]]);