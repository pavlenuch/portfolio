<template>
    <div class="content">
        <div class="gradient-top"></div>
        <div class="header">
            <h3>About <span class="first_letter">Me</span></h3>
        </div>
        <div class="years_city">
            <span>32 years</span> <span class="line">/</span> <span>Minsk (Borovlyany)</span>
        </div>
        <p class="bout_me_text salute">Hello! <br>I`m Aleksandr, front-end developer (React) & QA Engineer.</p>
        <p class="bout_me_text">
            I have the following web-technologies:<br>
            <span class="green">HTML, CSS</span> (SCSS, Flexbox), <span class="green">JavaScript, ReactJS, Git, Figma, Scratch</span>.
        </p>
        <p class="bout_me_text">
            I have basic knowledge in the following technologies: 
            <br><span class="green">Redux, VueJS, SQL, Webix, Jquery, C, Python</span>.
        </p>
        <p class="bout_me_text">
            I also own technologies in test automation:
            <br>- Testing the API with "<span class="green">Postman</span>".
            <br>- Load testing with "<span class="green">Jmeter</span>".
            <br>- Testing web projects with "<span class="green">TestCafe Studio</span>".
        </p>
        <p class="bout_me_text mobile-bout_me_text">
            English - A1 (I study on courses Englishdom).
        </p>
        <p class="bout_me_text mobile-bout_me_text">
            Link to my repository with projects on github:
            <a href="https://github.com/pavlenuch" target="_blank" class="link">Click</a>
            
        </p>
        <p class="bout_me_text mobile-bout_me_text_none">
            English - A1 (I study on courses https://www.englishdom.com/ ).
        </p>
        <p class="bout_me_text mobile-bout_me_text_none">
            Link to my repository with projects on github:<br>
            https://github.com/pavlenuch
        </p>
        <div class="gradient-bottom"></div>
    </div>
</template>

<style scoped>
    .content {
        width: 600px;
        height: calc(100% - 80px);
        margin-top: 40px;
        background-color: #1c1e1f;
        font-family: 'Poppins', sans-serif;
        overflow-y: auto;
        box-sizing: border-box;
        padding-bottom: 30px;
        scrollbar-color: #2B2D2E #1c1e1f;
        scrollbar-width:  thin;
    }
    /* дизайн скролла */
    .content::-webkit-scrollbar {
        width: 7px;
        background-color: #1c1e1f;
    }
    .content::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: #2B2D2E;
    }
    .mobile-bout_me_text {
        display: none;
    }
    .gradient-top {
        width: 100%;
        height: 40px;
        position: sticky;
        top: 0;
        left: 0;
        background-image: linear-gradient(to bottom, #1c1e1f 45%, #1c1e1f 23%, transparent 100%);
    }
    .gradient-bottom {
        width: 100%;
        height: 40px;
        position: sticky;
        bottom: -30px;
        left: 0;
        background-image: linear-gradient(to top, #1c1e1f 45%, #1c1e1f 23%, transparent 100%);
    }
    .header {
        width: 560px;
        height: 70px;
        margin: -40px auto 0 auto;
        border-bottom: 1px solid #474747;
        line-height: 85px;
        vertical-align: middle;
    }
    .header > h3 {
        text-align: start;
        font-size: 24px;
        font-weight: 600;
        color: #00AF75;
        cursor: pointer;
    }
    .first_letter {
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 600;
    }
    .years_city {
        width: 560px;
        font-size: 18px;
        font-weight: 500;
        font-style: italic;
        color: #00AF75;
        margin: 10px auto 0 auto;
    }
    .line {
        margin: 0 12px 0 12px;
        font-weight: bold;
        color: #545656;
    }
    .bout_me_text {
        width: 560px;
        margin: 20px auto 0 auto;
        font-size: 16px;
        line-height: 1.73;
        color: #888888;
    }
    .salute {
        color: #eeeeee;
    }
    .green {
        color: #00AF75;
    }
    @media (max-width: 960px) {
        .content {
            width: 390px;
        }
        .bout_me_text,
        .years_city,
        .header {
            width: 350px;
        }
    }
    @media (max-width: 768px) {
        .content {
            width: 433px;
            height: 100%;
            margin-top: 0;
            overflow-y: visible;
        }
        .gradient-top {
            display: none;
        }
        .gradient-bottom {
            display: none;
        }
        .header {
            margin: 0px auto 0 auto;
        }
    }
    @media (max-width: 510px) {
        .content {
            width: 100%;
            height: 100%;
            margin-top: 0;
            overflow-y: visible;
        }
        .bout_me_text,
        .years_city,
        .header {
            width: calc(100% - 30px);
        }
        .bout_me_text {
            font-size: 14px;
        }
        .mobile-bout_me_text {
            display: block;
        }
        .mobile-bout_me_text_none {
            display: none;
        }
        .link {
            color: #00AF75;
        }
    }
</style>