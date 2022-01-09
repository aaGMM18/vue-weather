<template>

    <div id="bg__right__zone" class="col-lg-9" style="padding: 10px 0px 0px 0px;">
                <div id="content__right__zone" class="content__right__zone" style="padding: 0px;">
                    <div id="buttons__grades__bg"><button class="btn" id="btn__grades__bg" type="button">°C</button><button class="btn" id="btn__grades__bg" type="button">°F</button></div>
                    <div id="list__days__bg" class="container-fluid m-0 p-0 mt-3">
                        <div class="row gap-1 justify-content-between" style="margin: 0px;">
                            <div id="bg__card__day" class="col-3 col-lg-2">
                                <p>Tomorrow</p><img class="img-fluid" src="../assets/img/iconClima__nube__clean__space.png">
                                <p>16°C - 11°C</p>
                            </div>
                            <div id="bg__card__day" class="col-3 col-lg-2">
                                <p>Sun, 7 jun</p><img class="img-fluid" src="../assets/img/iconClima__nube__clean__space.png">
                                <p>16°C - 11°C</p>
                            </div>
                            <div id="bg__card__day" class="col-3 col-lg-2">
                                <p>Mon, 8 jun</p><img class="img-fluid" src="../assets/img/iconClima__nube__clean__space.png">
                                <p>16°C - 11°C</p>
                            </div>
                            <div id="bg__card__day" class="col-3 col-lg-2">
                                <p>Tue, 9 jun</p><img class="img-fluid" src="../assets/img/iconClima__nube__clean__space.png">
                                <p>16°C - 11°C</p>
                            </div>
                            <div id="bg__card__day" class="col-3 col-lg-2">
                                <p>Wed, 10 jun</p><img class="img-fluid" src="../assets/img/iconClima__nube__clean__space.png">
                                <p>16°C - 11°C</p>
                            </div>
                        </div>
                    </div>
                    <div id="todays__list__bg">
                        <p id="p__tittle__today">Today’s Hightlights<br></p>
                        <div id="row__list__bg" class="container-fluid row justify-content-between p-0 m-0">
                            <div id="bg__content__today" class="col-lg-5">
                                <p>wind Status</p>
                                <p>7 mph</p>
                                <p><i class="fa fa-location-arrow p-2" id="icon__today__1" style="border-radius: 48px;"></i>&nbsp; wsw</p>
                            </div>
                            <div id="bg__content__today" class="col-lg-5">
                                <p>Humidity</p>
                                <p>84 %</p>
                                <div class="progress mt-2" style="height: 15px;color: var(--bs-indigo);font-size: 15px;border-radius: 14px;">
                                    <div class="progress-bar bg-warning" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100" style="width: 84%;">84%</div>
                                </div>
                            </div>
                        </div>
                        <div id="row__list__bg-1" class="container-fluid row justify-content-between p-0 m-0">
                            <div id="bg__content__today" class="col-lg-5 p-0 d-flex justify-content-center flex-column">
                                <p>Visibility</p>
                                <p>6,4 miles</p>
                            </div>
                            <div id="bg__content__today" class="col-lg-5 d-flex justify-content-center flex-column">
                                <p>Air pressure</p>
                                <p>998 mb</p>
                            </div>
                        </div>
                    </div>
                    <div id="footer__credits" class="mt-2">
                        <p id="credits" class="text-center">Created by AAGM - 2022 | inpiration by devChallenge</p>
                    </div>
                </div>
            </div>
  
</template>

<script>
//import { gsap } from "gsap";

export default {
  name: "maincontent"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,600;0,700;0,800;0,900;1,700&display=swap');



</style>
