<template>
  <div id="bg__left__zone" class="col-lg-3 bg__left__zone" style="padding: 0px;" >
                <div  id="content__left__zones" class="content__left__zone" style="padding: 10px 0px;">
                    <div id="buttons__content" class="row">
                        <div class="col-7"><button @click="blockSearch()" class="btn shadow-lg button__cnt btn-sm" type="button" title="search...">Search for Places<br></button></div>
                        <div class="col-3 d-flex justify-content-end"><button class="btn border rounded-0 shadow-lg button__cnt btn-sm" type="button" style="border-radius: 23px;"><i class="fa fa-location-arrow"></i></button></div>
                    </div>
                    <div id="bg__clouds" class="d-flex flex-column align-items-center justify-content-center mt-4"><img class="position-absolute img-fluid" src="../assets/img/iconClima_sol_nube.png"><img id="nubes__img" class="mt-4 img-fluid" src="../assets/img/iconClima__nubes.png"></div>
                    <div id="bg__num__grade" class="mt-4">
                        <p id="p__num__grade">0°C</p>
                    </div>
                    <div id="bg__text__clime">
                        <p>Shower</p>
                    </div>
                    <div id="bg__info__today">
                        <p>Today-Fri, 5 Jun<br><i class="fa fa-location-arrow"></i>&nbsp; &nbsp;Colombia</p>
                    </div>
                </div>
                <div id="search__left__zone" class="" style="padding: 10px 0px; display:none; transform:translatex(-70px);">
                    <div id="buttons__content" class="row">
                        <div class="col-3 d-flex justify-content-end w-100"><button @click="unBlockSearch()" class="btn shadow-lg text-white" type="button" style="border-radius: 0px;"><i  class="far fa-times"></i></button></div>
                    </div>
                    <form class="w-100 d-flex"><input class="form-control bg-transparent border-secondary" type="text" id="inp__search" style="border-radius: 0px;" placeholder="Search location"><button class="btn btn-outline-light" id="btn__search" type="button" style="border-radius: 0px;">search</button></form>
                    <div id="select__bg" class="w-100"><select class="bg-transparent text-secondary border-secondary p-2 px-5 mt-2 selectpicker">
                            <option value="1" selected="" class="text-secondary">Colombia</option>
                            <option value="2">Argentina</option>
                        </select></div>
                </div>
   </div>


</template>

<script>
//import Swal from "sweetalert2";
//import axios from "axios";
import {gsap} from "gsap";

export default {
  name: "sidebar",
  data(){
        return {
            //informacion:[]
            }
    },
    mounted(){
        this.tlanimation();
    },
    methods:{
        tlanimation(){
            gsap.from('#content__left__zones',{
                opacity:0,
                x:-50,
                duration:1
            })

            gsap.from('#content__right__zone',{
                opacity:0,
                x:50,
                duration:1
            })
        },
        blockSearch(){
            const tl = gsap.timeline();
            tl.to('#content__left__zones', {
                x:-50,
                opacity:0,
                duration:0.8,
                display:'none'
            }),
             tl.to('#search__left__zone', {
                display:'block',
                x:0,
                opacity:1,
                duration:1
            })
        },
        unBlockSearch(){
            const tl = gsap.timeline();
            
             tl.to('#search__left__zone', {
                display:'none',
                x:-50,
                opacity:0,
                duration:1
            }),
            tl.to('#content__left__zones', {
                x:0,
                opacity:1,
                duration:0.8,
                display:'flex'
            })
        }
    }/*,
    created() {
    axios.get("https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02").then((result) => {
      console.log(result.data);
    })
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,600;0,700;0,800;0,900;1,700&display=swap');



</style>
