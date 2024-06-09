import{_ as m,o as n,c as a,a as s,r as c,h as x,i as h,w as g,n as f,j as i,v as u,d as p,k as b}from"./entry.CSw4CiPN.js";import{_ as v}from"./nuxt-link.CPxmBT0I.js";const w={},y={class:"font-fugaz-one uppercase font-bold text-[1.4em] sm:text-[1.6em] md:text-[2em]"},F={key:0,class:"font-semibold text-[1.1em] sm:text-[1.2em] md:text-[1.5em] opacity-50 mb-4"};function $(e,t){return n(),a("div",null,[s("h2",y,[c(e.$slots,"default")]),e.$slots.sub?(n(),a("p",F,[c(e.$slots,"sub")])):x("",!0)])}const j=m(w,[["render",$]]),B={name:"Gruenig",props:{short:{type:Boolean,default:!1}}},k={key:0,class:"font-fugaz-one"},S={key:1,class:"font-fugaz-one"};function C(e,t,r,d,o,_){return r.short?(n(),a("strong",k,"GRÜNIG")):(n(),a("strong",S,"GRÜNIG PROFESSIONAL ADHESIVES"))}const D=m(B,[["render",C]]),V={};function z(e,t){const r=v;return n(),h(r,{class:"font-fugaz-one max-w-sm mx-auto mt-6 w-full px-3 sm:px-6 py-2 sm:py-3 text-lg sm:text-xl text-center cursor-pointer border-2 uppercase border-grunig-400 text-grunig-500 rounded-full font-bold bg-transparent hover:bg-grunig-500 hover:text-white transition-colors duration-100 flex items-center justify-center"},{default:g(()=>[c(e.$slots,"default")]),_:3})}const O=m(V,[["render",z]]),E={class:"bg-white w-full p-8 md:p-16 md:px-24 md:pb-24 2xl:p-32 2xl:px-32 overflow-hidden"},N={__name:"Panel",props:{right:Boolean,left:Boolean},setup(e){return(t,r)=>(n(),a("section",E,[s("div",{class:f(["h-full max-w-3xl md:mx-auto flex flex-col gap-4",{"md:max-w-[60vw] xl:max-w-[50vw] 3xl:max-w-[40vw]":e.right||e.left,"md:ml-auto":e.right,"md:mr-auto":e.left}])},[c(t.$slots,"default")],2)]))}},H=N,A={__name:"Spacer",props:{sm:Boolean,md:Boolean,lg:Boolean,xl:Boolean,xxl:Boolean,screen:Boolean,"screen-50":Boolean},setup(e){return(t,r)=>(n(),a("div",{class:f({"h-48":e.sm,"h-60":e.md,"h-72":e.lg,"h-96":e.xl,"h-[548px]":e.xxl,"h-screen":e.screen,"h-[50vh]":t.screen50}),"aria-hidden":"true"},null,2))}},M=A,G={name:"ParallaxSectionContainer",props:{correctionFactor:{default:-.5,required:!1},parallaxFactor:{default:-.25,required:!1},nodebug:{type:Boolean,default:!0}},data(){return{transform:"",correctionFactor2:this.correctionFactor,parallaxFactor2:this.parallaxFactor}},mounted(){window.addEventListener("scroll",this.handleScroll),requestAnimationFrame(()=>this.calibrate())},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{calibrate(){var o;const e=(o=this.$refs.container)==null?void 0:o.getBoundingClientRect(),t=this.correctionFactor2*e.height,d=((e.top+e.bottom)/2+t)*this.parallaxFactor2;this.transform=`background-position-y: ${d}px`},handleScroll(){requestAnimationFrame(()=>this.calibrate())}}},U={key:0,class:"flex items-center text-center group"},q={class:"text-xs opacity-0 group-hover:opacity-100 group-hover:static w-fit h-fit transition-all bg-white rounded px-2 py-1"},I={key:1,class:"flex items-center text-center group"},P={class:"text-xs opacity-0 group-hover:opacity-100 group-hover:static w-fit h-fit transition-all bg-white rounded px-2 py-1"};function R(e,t,r,d,o,_){return n(),a("div",{class:"overflow-hidden bg-no-repeat bg-center bg-cover",ref:"container",style:b(o.transform)},[c(e.$slots,"default"),r.nodebug?x("",!0):(n(),a("div",U,[i(s("input",{type:"range","onUpdate:modelValue":t[0]||(t[0]=l=>o.correctionFactor2=l),min:"-0.5",max:"0.5",step:"0.05"},null,512),[[u,o.correctionFactor2,void 0,{number:!0}]]),s("span",q,[p(" Correction: "),i(s("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>o.correctionFactor2=l),min:"-0.5",max:"0.5",step:"0.05",class:"bg-transparent w-12 text-center"},null,512),[[u,o.correctionFactor2,void 0,{number:!0}]])])])),r.nodebug?x("",!0):(n(),a("div",I,[i(s("input",{type:"range","onUpdate:modelValue":t[2]||(t[2]=l=>o.parallaxFactor2=l),min:"-0.5",max:"0.5",step:"0.05"},null,512),[[u,o.parallaxFactor2,void 0,{number:!0}]]),s("span",P,[p(" Parallax: "),i(s("input",{"onUpdate:modelValue":t[3]||(t[3]=l=>o.parallaxFactor2=l),min:"-0.5",max:"0.5",step:"0.05",class:"bg-transparent w-12 text-center"},null,512),[[u,o.parallaxFactor2,void 0,{number:!0}]])])]))],4)}const J=m(G,[["render",R]]);export{j as _,D as a,O as b,H as c,M as d,J as e};
