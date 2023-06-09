const {createApp} = Vue
  
createApp({
    data() {
      return {
        play: null,
        active: 0,
        card:[
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, 
            {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, 
            {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            },
            {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ],
        
      }
    },
    methods: {
        //agiamo con il this.quello che ci serve
        //active come indice mi cambia indice sia testi che slide in un unico metodo
        proxSlide(){
            if(this.active==4){
                this.active=0
            }else{
                this.active++
            }
        },
        
        prevSlide(){
            if(this.active==0){
                this.active= 4
            }else{
               this.active-- 
            }
        },
        //cambio slide al click img selezionata
        changeSlide(indice){
            this.active= indice;
        },
        //auto play interval con chiusura di riporto valori iniziale
        autoPlay(){
            if(this.play==null){
                this.play = setInterval(()=> {
                    this.proxSlide();
                }, 600);
            }else{
                clearInterval(this.play);
                this.play=null;
            }

        }
    }

}).mount('#app')

