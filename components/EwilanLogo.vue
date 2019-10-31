<template>
    <div
        class="d-flex justify-content-center"
        data-toggle="tooltip"
        data-placement="top"
        title="Portfolio"
    >
        <a href="" class="logo-initial-anim animation"></a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .logo-initial-anim {
        border: 0.3em solid black;
        border-radius: 75%;
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: center;
        -webkit-transition: -webkit-transform .8s ease-in-out, background-image .8s ease-in-out;
        transition: transform .8s ease-in-out, background-image .8s ease-in-out;
        background-image: url('../static/images/ewilan_logo.png');
        cursor: pointer;
    }
    .animation {
        animation: rotate 5s infinite;
    }

    @keyframes rotate {
        0% {}

        50% {
            background-image: url('../static/images/ewilan.png');
            background-color: rgba(206, 206, 206, 0.397);
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }

        100% {
            background-image: url('../static/images/ewilan_logo.png');
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
        }
    }
</style>