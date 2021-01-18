<template>
    <div class="avatar">
        <div class="wrap-photo"></div>
        <h2 class="name">Aleksandr Pavlenko</h2>
        <h3 class="prof">Frontend developer</h3>
        <div class="links">
            <a href="https://www.linkedin.com/in/aleksandr-pavlenko-72a5a0188/" target="_blank">
                <img src="../../img/linkedin.svg" alt="icon linkedin" class="icon">
            </a>            
            <a href="https://t.me/p_sashko" target="_blank">
                <img src="../../img/telegram.svg" alt="icon telegram" class="icon">
            </a>
            <a href="https://www.instagram.com/pavlenko_aleksandrushka/" target="_blank">
                <img src="../../img/instagram.svg" alt="icon instagram" class="icon">
            </a>
        </div>
        <div class="mail">
            <font-awesome-icon :icon="['far', 'envelope']" class="icon-mail"/>
            <span>pavlenuch@yandex.ru</span>
        </div>
    </div>
</template>

<style scoped src='./Avatar.module.css'></style>

