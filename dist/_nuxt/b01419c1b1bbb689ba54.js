(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{208:function(t,e,o){t.exports=o.p+"img/303bb31.png"},209:function(t,e,o){t.exports=o.p+"img/38010b5.svg"},210:function(t,e,o){t.exports=o.p+"img/2a2c5cd.svg"},211:function(t,e,o){t.exports=o.p+"img/e6d4891.svg"},212:function(t,e,o){t.exports=o.p+"img/a6ebe51.svg"},217:function(t,e,o){},218:function(t,e,o){},219:function(t,e,o){},220:function(t,e,o){},221:function(t,e,o){},222:function(t,e,o){"use strict";var r=o(6),n=o.n(r),l={props:{fullScreenMobile:{type:Boolean,default:!0},triggerID:{type:String},monthsToShow:{type:String},showInput:{type:Boolean},cardBorder:{type:Boolean},showActionButtons:{type:Boolean},mode:{type:String},label:{type:String,default:"Check-in > Checkout"}},data:function(){return{dateFormat:"D MMM",dateOne:"",dateTwo:"",inlineDateOne:""}},methods:{formatDates:function(t,e){var o="";return t&&(o=n()(t,this.dateFormat)),e&&(o+=" - "+n()(e,this.dateFormat)),o}}},c=o(8),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",["range"===t.mode?o("div",[t.showInput?o("v-text-field",{attrs:{solo:"",flat:"","hide-details":"",label:t.label,"append-icon":"calendar_today",id:t.triggerID,value:t.formatDates(t.dateOne,t.dateTwo)}}):o("div",{attrs:{id:t.triggerID}}),t._v(" "),o("AirbnbStyleDatepicker",{staticClass:"airBnBDatePicker",class:t.cardBorder?"":"borderHiddin",attrs:{"trigger-element-id":t.triggerID,mode:"range",inline:!t.showInput,"months-to-show":t.monthsToShow,"fullscreen-mobile":t.fullScreenMobile,"date-one":t.dateOne,"date-two":t.dateTwo,showActionButtons:t.showActionButtons},on:{"date-one-selected":function(e){t.dateOne=e},"date-two-selected":function(e){t.dateTwo=e}}})],1):o("div",[t.showInput?o("v-text-field",{attrs:{solo:"",flat:"","hide-details":"",label:t.label,"append-icon":"calendar_today",id:t.triggerID,value:t.formatDates(t.inlineDateOne)}}):o("div",{attrs:{id:t.triggerID}}),t._v(" "),o("AirbnbStyleDatepicker",{staticClass:"airBnBDatePicker",class:t.cardBorder?"":"borderHiddin",attrs:{"trigger-element-id":t.triggerID,mode:"single",inline:!t.showInput,"months-to-show":1,"fullscreen-mobile":t.fullScreenMobile,"date-one":t.inlineDateOne,"close-icon":"close",showActionButtons:t.showActionButtons},on:{"date-one-selected":function(e){t.inlineDateOne=e}}})],1)])},[],!1,null,null,null);e.a=component.exports},237:function(t,e,o){"use strict";var r=o(217);o.n(r).a},238:function(t,e,o){"use strict";var r=o(218);o.n(r).a},239:function(t,e,o){"use strict";var r=o(219);o.n(r).a},240:function(t,e,o){"use strict";var r=o(220);o.n(r).a},241:function(t,e,o){"use strict";var r=o(221);o.n(r).a},242:function(t,e,o){"use strict";o.r(e);o(69);var r={props:["title"]},n=o(8),l=Object(n.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("v-flex",{staticClass:"pb-2 px-0",attrs:{xs12:""}},[e("p",{staticClass:"headline font-weight-bold py-3 mr-2"},[this._v(this._s(this.title))]),this._v(" "),e("v-layout",{attrs:{row:"",wrap:""}},[this._t("content")],2)],1)},[],!1,null,null,null).exports,c={components:{Calendar:o(222).a},props:["visibleID"],data:function(){return{guest_menu:!1,guest_categories:[{title:"Adults",amount:0},{title:"Children",subtitle:"Ages 2-12",amount:0},{title:"Infants",subtitle:"Under 2",amount:0}],guests_text:""}},methods:{addGuest:function(t){this.guest_categories[t].amount+=1,1!==t&&2!==t||0!==this.guest_categories[t-1].amount||(this.guest_categories[t-1].amount+=1)},removeGuest:function(t){this.guest_categories[t].amount&&(this.guest_categories[t].amount-=1)},renderGuestNumber:function(){this.guests_text=this.guest_categories[0].amount+this.guest_categories[1].amount+" guest(s)",this.guest_categories[2].amount>0&&(this.guests_text=this.guests_text+", "+this.guest_categories[2].amount+" infant(s)"),this.guest_menu=!1}}},d=(o(237),Object(n.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"bookForm"}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("p",{staticClass:"font-weight-bold title mb-3 hidden-sm-and-down"},[t._v("Book accommodation and activities")]),t._v(" "),o("p",{staticClass:"font-weight-bold subheading mb-3 hidden-md-and-up"},[t._v("What can we help you to find?")]),t._v(" "),o("v-text-field",{staticClass:"search mb-3",attrs:{"prepend-inner-icon":"search",solo:"",flat:"","hide-details":"",clearable:"",label:"Meeting at vKirirom Resort"}})],1),t._v(" "),o("v-flex",{attrs:{xs6:""}},[o("p",{staticClass:"font-weight-bold subheading mb-1"},[t._v("Check in")]),t._v(" "),o("Calendar",{attrs:{mode:"single",label:"mm/dd/yy",triggerID:t.visibleID+"CheckIn",monthsToShow:"2",showInput:!0,cardBorder:!0,showActionButtons:!0}})],1),t._v(" "),o("v-flex",{attrs:{xs6:""}},[o("p",{staticClass:"font-weight-bold subheading mb-1"},[t._v("Check out")]),t._v(" "),o("Calendar",{attrs:{mode:"single",label:"mm/dd/yy",triggerID:t.visibleID+"CheckOut",monthsToShow:"2",showInput:!0,cardBorder:!0,showActionButtons:!0}})],1),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("p",{staticClass:"font-weight-bold subheading mb-1"},[t._v("Guest")]),t._v(" "),o("v-menu",{attrs:{"close-on-content-click":!1,transition:"slide-y-transition",bottom:"","full-width":"","offset-y":""},model:{value:t.guest_menu,callback:function(e){t.guest_menu=e},expression:"guest_menu"}},[o("v-text-field",{staticClass:"input-text-field-slim",attrs:{slot:"activator",placeholder:"Guests","single-line":"","hide-details":"",solo:"",flat:"","append-icon":"keyboard_arrow_down"},slot:"activator",model:{value:t.guests_text,callback:function(e){t.guests_text=e},expression:"guests_text"}}),t._v(" "),o("v-list",[t._l(t.guest_categories,function(e,i){return o("v-list-tile",{key:i,staticClass:"my-2"},[o("v-list-tile-content",[o("v-list-tile-title",{staticClass:"font-weight-bold",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),o("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.subtitle)}})],1),t._v(" "),o("v-spacer"),t._v(" "),o("v-list-tile-action",[o("v-layout",{attrs:{row:"","align-center":"","justify-space-around":""}},[o("v-flex",[o("v-btn",{staticClass:"calculateBtn",attrs:{outline:"",fab:"",small:"",disabled:0===e.amount,color:"teal darken-4"},on:{click:function(e){return t.removeGuest(i)}}},[o("v-icon",[t._v("remove")])],1)],1),t._v(" "),o("v-flex",{staticClass:"amount"},[o("div",{staticClass:"px-3 font-weight-bold"},[t._v(t._s(e.amount))])]),t._v(" "),o("v-flex",[o("v-btn",{staticClass:"calculateBtn",attrs:{outline:"",fab:"",small:"",color:"teal darken-4"},on:{click:function(e){return t.addGuest(i)}}},[o("v-icon",[t._v("add")])],1)],1)],1)],1)],1)}),t._v(" "),o("v-list-tile",[o("v-spacer"),t._v(" "),o("v-list-tile-action",[o("v-btn",{staticClass:"text-capitalize font-weight-bold subheading",attrs:{flat:"",color:"teal darken-4",ripple:!1},on:{click:t.renderGuestNumber}},[t._v("Apply")])],1)],1)],2)],1)],1),t._v(" "),o("v-flex",{staticClass:"text-xs-right mt-3",attrs:{xs12:""}},[o("v-btn",{staticClass:"text-capitalize font-weight-bold mx-0 searchBtn hidden-sm-and-down",attrs:{color:"cyan darken-4",ripple:!1,dark:""}},[t._v("\n        Search\n      ")]),t._v(" "),o("v-btn",{staticClass:"text-capitalize font-weight-bold mx-0 hidden-md-and-up",attrs:{color:"cyan darken-4",ripple:!1,dark:"",block:""}},[t._v("\n        Search\n      ")])],1)],1)],1)},[],!1,null,"0fb26dc4",null).exports),m={name:"FindCard",props:{category:{type:String,default:"category"},image:{type:String,default:"/default_image.png"},href:{type:String,default:"#"}},computed:{width:function(){return this.$vuetify.breakpoint.xs||this.$vuetify.breakpoint.sm?"150px":"250px"}}},v=(o(238),Object(n.a)(m,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return o("v-card",{staticClass:"card ma-0 rounded-card",class:"elevation-"+(r?8:2),attrs:{"min-width":t.width,href:t.href}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:"",md4:""}},[o("v-img",{attrs:{src:t.image,height:"75px"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-0",attrs:{xs12:"",md8:""}},[o("v-card-title",{staticClass:"pl-3",attrs:{"primary-title":""}},[o("div",{staticClass:"blue-grey--text text--darken-3"},[o("div",{staticClass:"subheading font-weight-bold text-xs-center text-capitalize"},[t._v(t._s(t.category))])])])],1)],1)],1)}}])})},[],!1,null,"13a69160",null).exports),h={props:["place"]},f=(o(239),Object(n.a)(h,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-img",{staticClass:"py-0",attrs:{src:t.place.image,height:"271px","min-width":"218px"}},[o("v-layout",{staticClass:"pa-0 ma-0 descriptionWraptop",attrs:{"align-end":"","fill-height":""}},[o("v-flex",{staticClass:"pa-0"},[o("v-card",{staticClass:"descriptionWrap"},[o("v-card-text",{staticClass:"px-2 description pt-2",attrs:{color:"white"}},[o("div",{staticClass:"body-2 font-weight-thin text-capitalize pt-0"},[t._v(t._s(t.place.category))]),t._v(" "),o("div",{staticClass:"title font-weight-bold text-capitalize py-2"},[t._v(t._s(t.place.title))]),t._v(" "),o("div",{staticClass:"subheading font-weight-thin text-lowercase"},[t._v("$"+t._s(t.place.price)+" "+t._s(t.place.per))])])],1)],1)],1)],1)},[],!1,null,"ad477f7e",null).exports),_={props:{place:{type:Object,default:function(){}},width:{type:String,default:"284px"}}},w=Object(n.a)(_,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{flat:"","min-width":t.width}},[o("v-img",{attrs:{src:t.place.image,"aspect-ratio":"1.5"}}),t._v(" "),o("v-card-text",{staticClass:"pl-0 pr-3 description pt-2",attrs:{color:"white"}},[o("div",{staticClass:"body-2 font-weight-thin text-capitalize pt-0"},[t._v(t._s(t.place.category))]),t._v(" "),o("div",{staticClass:"title font-weight-bold text-capitalize py-2"},[t._v(t._s(t.place.title))]),t._v(" "),o("div",{staticClass:"subheading font-weight-thin text-lowercase"},[t._v("$"+t._s(t.place.price)+" "+t._s(t.place.per))])])],1)},[],!1,null,null,null).exports,x={props:["title"]},y=(o(240),Object(n.a)(x,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"btnMore my-1 title hidden-sm-and-down"},[this._v("Show all"),e("v-icon",[this._v("keyboard_arrow_right")])],1),this._v(" "),e("div",{staticClass:"hidden-md-and-up hiddenMd"},[e("a",{staticClass:"btnMore my-1 subheading pa-2"},[this._v("Show all "+this._s(this.title))])])])},[],!1,null,"50c2162f",null).exports),k=o(208),C=o.n(k),A=o(209),B=o.n(A),S=o(210),O=o.n(S),D=o(211),I=o.n(D),P=o(212),j=o.n(P),G={layout:"home",components:{BookForm:d,FindCard:v,ListCover:l,TopRatedCard:f,IntroCard:w,ShowAllBtn:y},data:function(){return{slickComp:"",images:[C.a,B.a,O.a,I.a,j.a],slickOptions:{dots:!1,infinite:!1,slidesToScroll:1,variableWidth:!0,lazyLoad:"onedemand"},posts:[{category:"Accommodation",image:"https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg",href:"#accommodation",title:"Auto Camping",price:"45",per:"night"},{category:"Restaurants",image:"https://www.healthline.com/hlcmsresource/images/News/food-fads/070615_restaurants_THUMB_LARGE.jpg",href:"#restaurant",title:"Auto Camping",price:"40",per:"night"},{category:"Activities",image:"https://www.vkirirom.com/images/Activity/BubbleSoccer.jpg",href:"#activities",title:"Auto Camping",price:"55",per:"person"}],places:[{category:"Accomnodation",title:"Luxury Tent",image:"https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg",price:"80",href:"#",per:"night"},{category:"Accommodation",title:"Khmer Cottage",image:"https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG",price:"50",href:"#",per:"night"},{category:"Accommodation",title:"Auto Camping",image:"https://www.vkirirom.com/images/detailsimage/camping/camping4.JPG",price:"30",href:"#",per:"night"},{category:"Accommodation",title:"Pipe Room",image:"https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG",price:"30",href:"#",per:"night"},{category:"Accommodation",title:"Pipe Room",image:"https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG",price:"30",href:"#",per:"night"},{category:"Accommodation",title:"Pipe Room",image:"https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG",price:"30",href:"#",per:"night"},{category:"Accommodation",title:"Pipe Room",image:"https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG",price:"30",href:"#",per:"night"},{category:"Accommodation",title:"Pipe Room",image:"https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG",price:"30",href:"#",per:"night"},{category:"Accommodation",title:"Pipe Room",image:"https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG",price:"30",href:"#",per:"night"},{category:"Accommodation",title:"Pipe Room",image:"https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG",price:"30",href:"#",per:"night"}]}},computed:{carouselHeight:function(){var t=this.$vuetify.breakpoint.name,e="100vh";return"xs"!==t&&"sm"!==t||(e="40vh"),e}}},T=(o(241),Object(n.a)(G,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{staticClass:"pa-0 homeWrap"},[o("v-container",{staticClass:"pa-0 container1",class:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?"container1Md":"",attrs:{fluid:""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{staticClass:"homeCarousel",attrs:{xs12:""}},[o("v-carousel",{attrs:{"hide-controls":"","hide-delimiters":"",height:t.carouselHeight}},t._l(t.images,function(t,i){return o("v-carousel-item",{key:i,attrs:{src:t}})}),1)],1),t._v(" "),o("div",{staticClass:"hidden-md-and-up carouselText"},[o("p",{staticClass:"headline font-weight-bold px-4",attrs:{color:"white"}},[t._v("Book accommodation and activities.")])]),t._v(" "),o("v-flex",{staticClass:"hidden-md-and-up px-4 bookFormWrapper",attrs:{xs12:""}},[o("BookForm",{attrs:{visibleID:"bookFormMD"}})],1),t._v(" "),o("div",{staticClass:"homeTop mt-3 ml-5 hidden-sm-and-down"},[o("v-card",{staticClass:"pa-4"},[o("v-card-text",[o("BookForm",{attrs:{visibleID:"bookFormSM"}})],1)],1)],1)],1)],1),t._v(" "),o("v-container",{staticClass:"container2 pl-4 mt-3"},[o("v-layout",{attrs:{row:"",wrap:""}},[o("ListCover",{attrs:{title:"Explore vKirirom Pine Resort"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-flex",{staticClass:"pr-2",attrs:{xs12:""}},[o("slick",{attrs:{options:Object.assign({},t.slickOptions,{arrows:!1,draggable:!0})}},t._l(t.posts,function(t){return o("find-card",{key:t.id,attrs:{category:t.category,image:t.image,href:t.href}})}),1)],1)]},proxy:!0}])}),t._v(" "),o("ListCover",{attrs:{title:"Top-rated"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-flex",{attrs:{xs12:""}},[o("slick",{attrs:{options:t.slickOptions}},t._l(t.places,function(t,e){return o("top-rated-card",{key:e,attrs:{place:t}})}),1)],1)]},proxy:!0}])}),t._v(" "),o("ListCover",{attrs:{title:"Accomodation"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-flex",{attrs:{xs12:""}},[o("slick",{attrs:{options:Object.assign({},t.slickOptions,{arrows:!1,draggable:!0})}},t._l(t.places,function(t,e){return o("IntroCard",{key:e,attrs:{place:t}})}),1)],1),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("ShowAllBtn",{attrs:{title:"accomodation"}})],1)]},proxy:!0}])}),t._v(" "),o("ListCover",{attrs:{title:"Food & Drinks"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-flex",{attrs:{xs12:""}},[o("slick",{attrs:{options:Object.assign({},t.slickOptions,{arrows:!1,draggable:!0})}},t._l(t.places,function(t,e){return o("IntroCard",{key:e,attrs:{place:t}})}),1)],1),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("ShowAllBtn",{attrs:{title:"food & drinks"}})],1)]},proxy:!0}])}),t._v(" "),o("ListCover",{attrs:{title:"Experiences"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-flex",{attrs:{xs12:""}},[o("slick",{attrs:{options:Object.assign({},t.slickOptions,{arrows:!1,draggable:!0})}},t._l(t.places,function(t,e){return o("IntroCard",{key:e,attrs:{place:t}})}),1)],1),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("ShowAllBtn",{attrs:{title:"Activities"}})],1)]},proxy:!0}])}),t._v(" "),o("ListCover",{attrs:{title:"Rental Building"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-flex",{attrs:{xs12:""}},[o("slick",{attrs:{options:Object.assign({},t.slickOptions,{arrows:!1,draggable:!0})}},t._l(t.places,function(t,e){return o("IntroCard",{key:e,attrs:{place:t,width:"430px"}})}),1)],1)]},proxy:!0}])})],1)],1)],1)},[],!1,null,"d22856a4",null));e.default=T.exports}}]);
