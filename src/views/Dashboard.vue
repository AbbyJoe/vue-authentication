<template>
  <div>
      <Navbar/>
      <div style="margin: 0 auto">
        <h1 class="title">Social Media Dashboard</h1>
        <h3 class="subtitle">Total Followers: 23,004</h3>    
        <div class="container">
            <div class="card">
                <p class="card__name"><i class="icon fa fa-facebook-official" aria-hidden="true"></i><span>@RamosDev</span></p>
                <p class="card__number">1987</p>
                <p class="card__followers">followers</p>
                <div class="card__change">
                    <div class="card__triangle-up"></div>
                    <span>12 Today</span>
                </div>
            </div><!-- CARD-->    
            <div class="card">
                <p class="card__name"><i class="icon fa fa-twitter" aria-hidden="true"></i><span>@RamosDev</span></p>
                <p class="card__number">1044</p>
                <p class="card__followers">followers</p>
                <div class="card__change">
                    <div class="card__triangle-up"></div>
                    <span>99 Today</span>
                </div>
            </div><!-- CARD-->
            <div class="card__ig">
                <p class="card__name"><i class="icon fa fa-instagram" aria-hidden="true"></i><span>@RamosDev</span></p>
                <p class="card__number">11k</p>
                <p class="card__followers">followers</p>
                <div class="card__change">
                    <div class="card__triangle-up"></div>
                    <span>1099 Today</span>
                </div>
            </div><!-- CARD-->
            <div class="card card__yt">
                <p class="card__name"><i class="icon fa fa-youtube-play" aria-hidden="true"></i><span>@RamosDev</span></p>
                <p class="card__number">8239</p>
                <p class="card__followers">followers</p>
                <div class="card__change-down">
                    <div class="card__triangle-down"></div>
                    <span>1443 Today</span>
                </div>
            </div><!-- CARD-->
    <!-- SMALL CARDS -->
        </div><!-- CONTAINER -->  
        <h1 class="title">Overview - Today</h1>
        <div class="container"> 
            <div class="card-small">
                <p class="card__name">
                    <span>Page Views</span>
                </p>
                <i class="icon fa fa-facebook-official" aria-hidden="true"></i>
                <p class="card__number">87</p>
                <div class="card__change">
                    <div class="card__triangle-up"></div>
                    <span>13%</span>
                </div>
            </div><!-- CARD small-->
            <div class="card-small">
                <p class="card__name">
                    <span>Page Views</span>
                </p>
                <i class="icon fa fa-facebook-official" aria-hidden="true"></i>
                <p class="card__number">52</p>
                <div class="card__change-down">
                    <div class="card__triangle-down"></div>
                    <span>8%</span>
                </div>
            </div><!-- CARD small-->
            <div class="card-small">
                <p class="card__name">
                    <span>Likes</span>
                </p>
                <i class="icon fa fa-instagram" aria-hidden="true"></i>
                <p class="card__number">5462</p>
                <div class="card__change">
                    <div class="card__triangle-up"></div>
                    <span>1250%</span>
                </div>
            </div><!-- CARD small-->
            <div class="card-small">
                <p class="card__name">
                    <span>Profile Views</span>
                </p>
                <i class="icon fa fa-instagram" aria-hidden="true"></i>
                <p class="card__number">52K</p>
                <div class="card__change">
                    <div class="card__triangle-up"></div>
                    <span>1850%</span>
                </div>
            </div><!-- CARD small-->
            <div class="card-small">
                <p class="card__name">
                    <span>Retweets</span>
                </p>
                <i class="icon fa fa-twitter" aria-hidden="true"></i>
                <p class="card__number">117</p>
                <div class="card__change">
                    <div class="card__triangle-up"></div>
                    <span>25%</span>
                </div>
            </div><!-- CARD small-->
            <div class="card-small">
                <p class="card__name">
                    <span>Likes</span>
                </p>
                <i class="icon fa fa-twitter" aria-hidden="true"></i>
                <p class="card__number">507</p>
                <div class="card__change">
                    <div class="card__triangle-up"></div>
                    <span>180%</span>
                </div>
            </div><!-- CARD small-->
            <div class="card-small">
                <p class="card__name">
                    <span>Likes</span>
                </p>
                <i class="icon fa fa-youtube-play" aria-hidden="true"></i>
                <p class="card__number">107</p>
                <div class="card__change-down">
                    <div class="card__triangle-down"></div>
                    <span>19%</span>
                </div>
            </div><!-- CARD small-->
            <div class="card-small">
                <p class="card__name">
                    <span>Total Views</span>
                </p>
                <i class="icon fa fa-youtube-play" aria-hidden="true"></i>
                <p class="card__number">1407</p>

                <div class="card__change-down">
                    <div class="card__triangle-down"></div>
                    <span>12%</span>
                </div>
            </div><!-- CARD small-->
        </div><!-- CONTAINER -->
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    components: {
        Navbar
    }
}
</script>

<style scoped>
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    background: #20222f;
    color: #fffffd;
    font-family: 'Lato', sans-serif;
}
.title{
    font-size: 24px;
    margin-top: 30px;
    margin-left: 30px;
}
.subtitle{
    font-size: 14px;
    color: #8a91bd;
    margin-top: 5px;
    margin-left: 30px;

}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px 30px;
}
.card{
    display: flex;
    flex-direction: column;
    background-color: #252b43;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-radius: 3px;
    position: relative;
    margin-bottom: 30px;
}
.card::after{
    content: "";
    border-top: 5px solid #1ba2f4;
    border-radius: 3px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.card__ig{
    display: flex;
    flex-direction: column;
    background-color: #252b43;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    position: relative;
    margin-bottom: 30px;
    margin-top: 5px;
}
.card__ig::after {
    content: "";
    border-top: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: absolute;
    width: 100%;
    height: 5px;
    top: 0;
    left: 0;
    background: linear-gradient(90deg,#fac06c,#db4e93);
}
.card__yt::after{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-top: 5px solid #c2042a;
}
.fa-facebook-official, .fa-twitter{
    color: #1ba2f4;
}
.fa-youtube-play{
    color: #c2042a;
}
.icon{
    font-size: 22px !important;
}
.fa-instagram{
color: red;
display: block;
background: linear-gradient(0deg,#fac06c,#db4e93);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
.card__name{
    padding: 15px 0;
    color: #8a91bd;
    display: flex;
}
.card__number{
    font-size: 56px;
    font-weight: 700;
    color: #fff !important;
}
.card__followers{
    font-size: 12px;
    text-transform: uppercase;
    color: #8a91bd;
    letter-spacing: 5px;
}
.card__change{
    padding: 15px 0;
    color: #079076;
    display: flex;
}
span{
    margin-left: 5px;
}
.card__triangle-up {
    width: 0;
    height: 0;
    position: relative;
    top: 3px;
    border-right: 5px solid transparent;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    border-bottom: 5px solid #079076;
}
.card__change-down{
    padding: 15px 0;
    color: #da4e5b;
    display: flex;
}
.card__triangle-down {
    width: 0;
    height: 0;
    position: relative;
    top: 9px;
    border-right: 5px solid transparent;
    border-top: 5px solid #da4e5b;
    border-left: 5px solid transparent;
    border-bottom: 5px solid transparent;
}
.card-small{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #252b43;
    flex: 1;
    align-items: stretch;
    justify-content: space-between;
    padding: 30px 30px;
    border-radius: 3px;
    position: relative;
    margin-bottom: 30px;
}
.card-small .card__name{
    flex:0 50%;
}
.card-small .fa{
    flex:0 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.card-small .card__number{
    flex:0 50%;
    font-size: 36px;
}
.card-small .card__change{
    flex:0 50%;
    position: relative;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.card-small .card__triangle-up {
    width: 0;
    height: 0;
    position: relative;
    top: -3px;
}
@media only screen and (min-width: 600px) {
    body{
        max-width: 600px;
        margin: 0 auto;
    }
    .container{
        margin: 0;
        flex-direction: row;
    }
    .card, .card__ig, .card__yt{
        margin:15px;
        flex: 0 41% ;
    } 
    .card-small{
        margin:15px;
        flex: 0 41%;
        padding: 15px 30px;
    }
    .title, .subtitle{
        padding-left: 10px;
    }
}
@media only screen and (min-width: 900px) {
    body{
        max-width: 900px;
        margin: 0 auto;
    }
    .container{
        margin: 0;
        flex-direction: row;
    }
    .card, .card__ig, .card__yt{
        margin:15px;
        flex: 0 21%;
    } 
    .card-small{
        margin:15px;
        flex: 0 21%;
        padding: 5px 15px;
    }
    .title, .subtitle{
        padding-left: 0px;
    }
}
@media only screen and (min-width: 1200px) {
    body{
        max-width: 100%;
        margin: 0 auto;
    }
    .container{
        margin: 0;
        flex-direction: row;
        max-width: 100%;
    }
    .card, .card__ig, .card__yt{
        margin:15px;
        flex: 0 21%;
    } 
    .card-small{
        margin:15px;
        flex: 0 21%;
    }
    .title, .subtitle{
        padding-left: 20px;
    }
}
</style>