import{b as I,c as A}from"./ContactForm.fFgBpv8e.js";import{c as V,e as y,_ as U,a as B,d as $}from"./ParallaxSectionContainer.B6RDvaq_.js";import{_ as m,o as d,c as _,r as z,n as F,b as n,w as t,d as e,a as i,f as E,T as P,i as g,h as x,K,p as L,e as M}from"./entry.BOBQ-mhU.js";import{_ as N}from"./FloatingSection.vue.CN185YHP.js";import{u as T}from"./index.DpZZgO66.js";import"./nuxt-link.wbv2dqMN.js";import"./vue.f36acd1f.CfDuICyx.js";const C={name:"SwitchButton",props:{pressed:{type:Boolean,default:!1}}};function W(r,u,a,p,o,l){return d(),_("button",{type:"button",class:F([{"bg-grunig-500 text-white":a.pressed,"bg-transparent":!a.pressed},"font-fugaz-one w-full max-w-md px-6 py-3 text-xl md:text-2xl xl:text-5xl text-center cursor-pointer border-4 uppercase border-grunig-400 text-grunig-500 rounded-full font-bold hover:bg-grunig-500 hover:text-white transition-colors duration-100 flex items-center justify-center"])},[z(r.$slots,"default")],2)}const j=m(C,[["render",W]]),Q={props:{modelValue:{type:String,required:!0}},methods:{updateValue(r){this.$emit("update:modelValue",r)}}},D={class:"w-full flex flex-col sm:flex-row justify-center px-[20%] gap-4 sm:gap-8 py-8 sm:py-12"};function G(r,u,a,p,o,l){const f=j;return d(),_("div",D,[n(f,{onClick:u[0]||(u[0]=w=>l.updateValue("Holz")),pressed:a.modelValue==="Holz"},{default:t(()=>[e(" Holz ")]),_:1},8,["pressed"]),n(f,{onClick:u[1]||(u[1]=w=>l.updateValue("Papier")),pressed:a.modelValue==="Papier"},{default:t(()=>[e(" Papier ")]),_:1},8,["pressed"])])}const q=m(Q,[["render",G]]),J={},O={class:"cursor-pointer"},Z={class:"mt-2 animate-fadein"};function R(r,u){return d(),_("li",null,[i("details",null,[i("summary",O,[z(r.$slots,"summary")]),i("p",Z,[z(r.$slots,"details")])])])}const X=m(J,[["render",R]]),s=r=>(L("data-v-576dda0f"),r=r(),M(),r),Y={class:"flex flex-col mx-auto"},ee=s(()=>i("br",null,null,-1)),ne=s(()=>i("br",null,null,-1)),te={class:"flex w-screen max-w-full overflow-hidden"},ie=s(()=>i("br",null,null,-1)),se=s(()=>i("br",null,null,-1)),le=s(()=>i("br",null,null,-1)),re=s(()=>i("br",null,null,-1)),ue=s(()=>i("br",null,null,-1)),oe=s(()=>i("br",null,null,-1)),ae=s(()=>i("br",null,null,-1)),de=s(()=>i("br",null,null,-1)),fe=s(()=>i("br",null,null,-1)),ce=s(()=>i("br",null,null,-1)),he=s(()=>i("br",null,null,-1)),ge=s(()=>i("br",null,null,-1)),be=s(()=>i("br",null,null,-1)),me=s(()=>i("br",null,null,-1)),_e=s(()=>i("br",null,null,-1)),pe=s(()=>i("br",null,null,-1)),we=s(()=>i("p",null,[e(" Als Teil unserer Verpflichtung zur Nachhaltigkeit bieten wir umweltfreundliche Klebstoffe an."),i("br"),i("br"),e(" Unsere umweltfreundlichen Klebstoffe sind ein wesentlicher Bestandteil unserer Bemühungen, die Umweltauswirkungen unserer Produkte zu minimieren. Diese Klebstoffe sind speziell so formuliert, dass sie eine hohe Leistung und Qualität bieten, während sie gleichzeitig umweltschonende Inhaltsstoffe verwenden."),i("br"),i("br"),e(" Unsere umweltfreundlichen Lösungen reduzieren die Emission von schädlichen Stoffen und sind oft biologisch abbaubar, was sie zu einer idealen Wahl für Unternehmen macht, die Wert auf Nachhaltigkeit legen. "),i("br"),i("br"),e(" Mit diesen Produkten demonstrieren wir, dass effektive Klebelösungen und ökologische Verantwortung Hand in Hand gehen können. ")],-1)),ke={class:"space-y-6"},ze=s(()=>i("p",null," Haben Sie Fragen zu unseren Produkten? Wir stehen Ihnen mit fachkundiger Beratung zur Verfügung. Kontaktieren Sie uns, um mehr über unsere Klebstofflösungen für die Holz- und Papierverarbeitungsindustrie zu erfahren. Unser Team steht bereit, um Ihnen detaillierte Informationen zu unseren Produkten, deren Anwendungsbereichen und individuellen Lösungen zu bieten. Wir freuen uns darauf, Ihnen weiterzuhelfen. ",-1));let b={Holz:{slug:"holz"},Papier:{slug:"papier"}};const ve={name:"Loesungen",data(){return{activePanel:"Holz"}},mounted(){switch(window.location.hash){case"#"+b.Holz.slug:this.activePanel="Holz";break;case"#"+b.Papier.slug:this.activePanel="Papier";break;default:this.activePanel="Holz"}},computed:{holzActive(){return this.activePanel==="Holz"},papierActive(){return this.activePanel==="Papier"}},watch:{activePanel(){switch(this.activePanel){case"Holz":window.location.hash="#"+b.Holz.slug;break;case"Papier":window.location.hash="#"+b.Papier.slug;break;default:window.location.hash=""}}}},Pe=E({...ve,setup(r){return T({title:"Hochwertige Klebstofftechnologien für Industrie und Umwelt",ogTitle:"Hochwertige Klebstofftechnologien für Industrie und Umwelt",twitterTitle:"Hochwertige Klebstofftechnologien für Industrie und Umwelt",description:"Entdecken Sie bei Grünig eine Vielfalt an Klebstofflösungen für Holz, Papier und Industrieanwendungen. Unsere umweltfreundlichen Produkte stehen für Innovation, Qualität und Nachhaltigkeit.",ogDescription:"Entdecken Sie bei Grünig eine Vielfalt an Klebstofflösungen für Holz, Papier und Industrieanwendungen. Unsere umweltfreundlichen Produkte stehen für Innovation, Qualität und Nachhaltigkeit.",twitterDescription:"Entdecken Sie bei Grünig eine Vielfalt an Klebstofflösungen für Holz, Papier und Industrieanwendungen. Unsere umweltfreundlichen Produkte stehen für Innovation, Qualität und Nachhaltigkeit.",ogImage:"/loesungen/1.webp",twitterImage:"/loesungen/1.webp",twitterCard:"summary"}),(u,a)=>{const p=I,o=U,l=B,f=V,w=q,k=N,h=y,v=$,c=X,H=A;return d(),_("div",Y,[n(p,{class:"bg-[url(/loesungen/1.webp)]"},{default:t(()=>[e("LÖSUNGEN")]),_:1}),n(f,{left:""},{default:t(()=>[n(o,null,{sub:t(()=>[e(" — Maßgeschneiderte Klebstofflösungen für Industrie und Handwerk ")]),default:t(()=>[e(" Unsere Lösungen: Innovative Klebstofftechnologien für jede Anwendung ")]),_:1}),i("p",null,[n(l),e(" bietet ein breites Spektrum an innovativen Klebstofflösungen, das von Holzklebstoffen über Papierklebstoffe bis hin zu Spezial- und Industrieklebstoffen reicht. Wir legen einen besonderen Fokus auf umweltfreundliche Klebstoffe, um nachhaltige Produktionsprozesse voranzutreiben."),ee,ne,e(" Unser Produktportfolio ist darauf ausgerichtet, höchste Qualitätsstandards zu erfüllen und vielfältige Anwendungsanforderungen zu adressieren. ")])]),_:1}),n(w,{modelValue:u.activePanel,"onUpdate:modelValue":a[0]||(a[0]=S=>u.activePanel=S)},null,8,["modelValue"]),i("div",te,[n(P,{key:"transition-holz",name:"left-fade"},{default:t(()=>[(d(),g(K,null,[u.holzActive?(d(),g(h,{key:0,class:"bg-[url(/loesungen/holz.webp)] p-12 w-full flex flex-shrink-0 justify-center items-center",nodebug:""},{default:t(()=>[n(k,{right:""},{default:t(()=>[n(o,null,{sub:t(()=>[e(" — Starke Verbindungen für die Holzindustrie ")]),default:t(()=>[e(" Holzklebstoffe ")]),_:1}),i("p",null,[e(" Von der Möbelherstellung über den Innenausbau bis hin zu Holzkonstruktionen bieten unsere Klebstoffe die erforderliche Festigkeit, Flexibilität und Beständigkeit."),ie,se,e(" Egal, ob es um die Herausforderungen des traditionellen Holzhandwerks oder die Anforderungen moderner Holzverarbeitung geht – wir bieten Lösungen, die halten."),le,re,e(" Unsere Holzklebstoffe zeichnen sich nicht nur durch ihre außergewöhnliche Festigkeit und Flexibilität aus, sondern auch durch ihre Anpassungsfähigkeit an unterschiedliche Holzarten und Anwendungen. Ob Sie Möbel herstellen, Holzkonstruktionen bauen oder im Innenausbau tätig sind, unsere Klebstoffe bieten nicht nur herausragende Haftung, sondern gewährleisten auch eine hohe Beständigkeit gegenüber den natürlichen Einflüssen, denen Holz ausgesetzt ist."),ue,oe,e(" Mit "),n(l),e(" Holzklebstoffen schaffen Sie Verbindungen, die nicht nur halten, sondern auch die Schönheit und Natürlichkeit des Holzes bewahren. ")])]),_:1})]),_:1})):x("",!0)],1024))]),_:1}),n(P,{key:"transition-papier",name:"right-fade"},{default:t(()=>[(d(),g(K,null,[u.papierActive?(d(),g(h,{key:0,class:"bg-[url(/loesungen/papier.webp)] p-12 w-full flex flex-shrink-0 justify-center items-center",nodebug:""},{default:t(()=>[n(k,{left:""},{default:t(()=>[n(o,null,{sub:t(()=>[e(" — Zuverlässige Lösungen für die Papierverarbeitung ")]),default:t(()=>[e(" Papierklebstoffe ")]),_:1}),i("p",null,[e(" Unsere Papierklebstoffe stellen eine revolutionäre Lösung für die Verpackungsindustrie und Buchbindereien dar, indem sie außergewöhnliche Adhäsionskraft mit schneller Trocknungszeit kombinieren. Diese speziell entwickelten Klebstoffe sind für eine breite Palette von Papier- und Kartonmaterialien geeignet, von leichten Papieren bis zu schweren Kartonagen, und bieten eine zuverlässige, dauerhafte Bindung, die essentiell für die Haltbarkeit und Präsentation der Endprodukte ist."),ae,de,e(" Egal ob in der Verpackung, die Schutz und Ästhetik vereint, oder in der Buchbinderei, wo Langlebigkeit im Vordergrund steht - unsere Klebstoffe setzen neue Maßstäbe in Sachen Leistung und Effizienz."),fe,ce,e(" Mit "),n(l),e(" Klebstofflösungen entscheiden Sie sich für eine Zukunft, in der Qualität und Umweltbewusstsein Hand in Hand gehen. ")])]),_:1})]),_:1})):x("",!0)],1024))]),_:1})]),n(h,{class:"bg-[url(/loesungen/2.webp)]"},{default:t(()=>[n(f,{left:""},{default:t(()=>[n(o,null,{sub:t(()=>[e(" — Vielseitige Anwendungen in der Industrie ")]),default:t(()=>[e(" Industrieklebstoffe ")]),_:1}),i("p",null,[e(" Unsere Industrieklebstoffe sind für ihre Vielseitigkeit und Leistungsstärke in einer breiten Palette von Anwendungen und Materialien konzipiert. Sie erfüllen die komplexen Anforderungen industrieller Fertigungsprozesse, indem sie eine zuverlässige, dauerhafte Verbindung zwischen unterschiedlichsten Materialien wie Metall, Kunststoff, Keramik und mehr bieten."),he,ge,n(l),e(" Klebstoffe sind das Ergebnis fortgeschrittener Forschung, um eine optimale Performance unter den spezifischen Bedingungen industrieller Anwendungen zu gewährleisten, einschließlich hoher Temperaturbeständigkeit, chemischer Beständigkeit und mechanischer Festigkeit. ")])]),_:1}),n(v,{xl:""})]),_:1}),n(f,null,{default:t(()=>[n(o,null,{sub:t(()=>[e(" — Innovative Formulierungen für spezifische Herausforderungen ")]),default:t(()=>[e(" Spezialklebstoffe ")]),_:1}),i("p",null,[e(" Ob es um extrem hohe Temperaturen, besondere Haftungseigenschaften oder andere spezifische Anforderungen geht – für besondere Anwendungen entwickeln wir Spezialklebstoffe, die exakt auf die Bedürfnisse unserer Kunden zugeschnitten sind."),be,me,e(" Durch unsere langjährige Erfahrung können wir die meisten Anforderungen mit hoher Präzision und Effizienz erfüllen. Unser umfassendes Know-how bei "),n(l),e(" ermöglicht es uns, auch sehr individuelle Lösungen anzubieten."),_e,pe,e(" Wir freuen uns auf Ihre Anfrage und sind bereit, gemeinsam mit Ihnen die optimale Klebstofflösung für Ihr Unternehmen zu entwickeln. ")])]),_:1}),n(h,{class:"bg-[url(/loesungen/3.webp)] h-content md:h-screen py-12 flex justify-center items-center",nodebug:""},{default:t(()=>[n(k,{left:""},{default:t(()=>[n(o,null,{sub:t(()=>[e("— Nachhaltigkeit im Fokus")]),default:t(()=>[e(" Umweltfreundliche Klebstoffe ")]),_:1}),we]),_:1}),n(v,{xl:""})]),_:1}),n(f,null,{default:t(()=>[n(o,null,{default:t(()=>[e(" Häufig gestellte Fragen (FAQ): ")]),_:1}),i("ul",ke,[n(c,null,{summary:t(()=>[e(" Was unterscheidet "),n(l,{short:""}),e(" Klebstoffe von anderen Produkten am Markt? ")]),details:t(()=>[n(l,{short:""}),e(" Produkte bieten überlegene Festigkeit und Dauerhaftigkeit, ideal für Ihre Anforderungen. ")]),_:1}),n(c,null,{summary:t(()=>[e(" Sind "),n(l,{short:""}),e(" Klebstoffe umweltfreundlich? ")]),details:t(()=>[e(" Ja, wir legen großen Wert auf umweltfreundliche Produktionsprozesse und Produkte, die die Umweltbelastung minimieren. ")]),_:1}),n(c,null,{summary:t(()=>[e(" Kann ich Spezialklebstoffe für einzigartige Anwendungen erhalten? ")]),details:t(()=>[n(l,{short:""}),e(" entwickelt maßgeschneiderte Spezialklebstoffe, die genau auf Ihre spezifischen Bedürfnisse abgestimmt sind. ")]),_:1}),n(c,null,{summary:t(()=>[e(" Wie wähle ich den richtigen Klebstoff für mein Projekt aus? ")]),details:t(()=>[n(l,{short:""}),e(" berät Sie umfassend, um den idealen Klebstoff basierend auf Material, Anwendung und spezifischen Anforderungen zu identifizieren. ")]),_:1}),n(c,null,{summary:t(()=>[e(" Können "),n(l,{short:""}),e(" Klebstoffe unter extremen Bedingungen eingesetzt werden? ")]),details:t(()=>[e(" Ja, viele unserer Produkte sind speziell für den Einsatz unter extremen Temperatur- oder Feuchtigkeitsbedingungen entwickelt worden. ")]),_:1}),n(c,null,{summary:t(()=>[e(" Bietet "),n(l,{short:""}),e(" auch Lösungen für schnelltrocknende Klebstoffe? ")]),details:t(()=>[e(" Absolut, wir bieten eine Reihe von schnell aushärtenden Klebstoffen, die für zeitsensitive Anwendungen optimiert sind. ")]),_:1}),n(c,null,{summary:t(()=>[e(" Sind die umweltfreundlichen Klebstoffe von "),n(l,{short:""}),e(" genauso leistungsstark wie traditionelle Klebstoffe? ")]),details:t(()=>[e(" Unsere umweltfreundlichen Klebstoffe bieten ohne Kompromisse bei der Leistung eine nachhaltige Alternative zu traditionellen Produkten. ")]),_:1})])]),_:1}),n(H,null,{default:t(()=>[n(o,null,{default:t(()=>[e(" Kontaktieren Sie uns: Ihr Partner für Klebstofflösungen ")]),_:1}),ze]),_:1})])}}}),ye=m(Pe,[["__scopeId","data-v-576dda0f"]]);export{ye as default};