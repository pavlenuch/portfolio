<template>
    <div class="content">
        <div class="gradient-top"></div>
        <div class="header">
            <h3>R<span class="first_letter">esume</span></h3>
        </div>
        <div class="experience">
            <div class="experience_left">
                <div class="mini-header">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="mini-header_icon"/>
                    <h4>EXPERIENCE</h4>
                </div>

                <div class="experience-cart">
                    <div class="data">05.2020 - Present</div>
                    <div class="name">QA Automation Engineer & <br>Frontend (ReactJS) developer</div>
                    <div class="company">The Corporation "Galaxy"</div>
                    <p class="descriptions">
                        Development of web applications.
                        <br>Technology Stack: JS, React (Fucntional and Class Components, Hooks, Context, React Router etc.), SCSS, Redux, TS.
                        <br>- Testing web projects with "TestCafe Studio" and "Cypress".
                        <br>- Testing the API with "Postman".
                        <br>- Load testing with "Jmeter".
                    </p>
                    <div class="line"></div>
                </div>

                <div class="experience-cart">
                    <div class="data">12.2019 - 03.2020</div>
                    <div class="name">Technical writer</div>
                    <div class="company">XB Software</div>
                    <p class="descriptions">
                        Developing templates on JavaScript library Webix. 
                        Writing articles based on templates and publishing them on IT platforms: 
                        Medium, opensourse, dev.to, Habr. Link to my articles on Hubr:<br>
                        <a href="https://habr.com/ru/users/pavlenych/posts/" target="_blank" class="link">Go to the Habr</a> 
                    </p>
                    <div class="line"></div>
                </div>

                <div class="experience-cart">
                    <div class="data">02.2017 - 12.2019</div>
                    <div class="name">Sr. specialist<br> (office management)</div>
                    <div class="company">Brewery Alivaria, Carlsberg Group</div>
                    <p class="descriptions">
                        Implementation of electronic document management. 
                        <br>Debiting, moving inventory, paying invoices in the CRM "Monolit". 
                        <br>Organizing an archive of electronic documents.
                    </p>
                    <div class="line"></div>
                </div>

                <div class="experience-cart">
                    <div class="data">2014 - 2017</div>
                    <div class="name">Document management specialist</div>
                    <div class="company">NARB, Reisswolf, Eurotorg</div>
                    <p class="descriptions">
                        Ensuring the safety of documents. Providing electronic copies of documents. Document management.
                    </p>
                    <div class="line"></div>
                </div>
                
            </div>
            <div class="experience_right">
                <div class="mini-header">
                    <font-awesome-icon :icon="['fas', 'graduation-cap']" class="mini-header_icon"/>
                    <h4>EDUCATION</h4>
                </div>

                <div class="experience-cart">
                    <div class="data">2009 - 2014</div>
                    <div class="name">Historian-archivist. Teacher</div>
                    <div class="company">Belarusian state University</div>
                    <p class="descriptions">Historical Faculty. Specialization: Archived Informatics.</p>
                    <div class="line"></div>
                </div>
                                <div class="experience-cart">
                    <div class="data">2021</div>
                    <div class="name">Cypress на реальном проекте для начинающих QA Automation</div>
                    <div class="company">Udemy</div>
                    <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-27adf197-bb8c-42f3-9923-afe0c4d0971a.jpg" target="_blank" class="link">Link to the certificate</a> 
                    <div class="line"></div>
                </div>
                                <div class="experience-cart">
                    <div class="data">2021</div>
                    <div class="name">Программирование на Python</div>
                    <div class="company">Stepik</div>
                    <a href="https://stepik.org/cert/948389" target="_blank" class="link">Link to the certificate</a> 
                    <div class="line"></div>
                </div>
                <div class="experience-cart">
                    <div class="data">2020</div>
                    <div class="name">React + Redux - Professional Development</div>
                    <div class="company">Udemy</div>
                    <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-3721506c-8274-431c-90e3-b77bc1d7193c.jpg" target="_blank" class="link">Link to the certificate</a> 
                    <div class="line"></div>
                </div>
                <div class="experience-cart">
                    <div class="data">2020</div>
                    <div class="name">CS50: Introduction to Computer Science</div>
                    <div class="company">Harvard University</div>
                    <a href="https://certificates.cs50.io/b2f2e865-5648-4cc0-8ed1-714838a98ae6.png?size=A4" target="_blank" class="link">Link to the certificate</a> 
                    <div class="line"></div>
                </div>
                <div class="experience-cart">
                    <div class="data">2019</div>
                    <div class="name">Fron-End Developer</div>
                    <div class="company">IT-courses Adukar</div>
                    <a href="https://drive.google.com/file/d/16AjAUT7oN8tFYqVKaDhz3zHGAxNW6GLe/view?usp=sharing" target="_blank" class="link">Link to the certificate</a> 
                    <div class="line"></div>
                </div>
            </div>
        </div>
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
    .gradient-top {
        width: 100%;
        height: 40px;
        position: sticky;
        top: 0;
        left: 0;
        background-image: linear-gradient(to bottom, #1c1e1f 45%, #1c1e1f 23%, transparent 100%);
    }
    .gradient-bottom {
        width: 500px;
        width: 100%;
        height: 40px;
        position: sticky;
        bottom: -1px;
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
        font-size: 25px;
        font-weight: 600;
        color: #00AF75;
    }
    .first_letter {
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 600;
    }
    .experience {
        width: 560px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .mini-header {
        width: 80%;
        height: 50px;
        display: flex;
        justify-content: left;
        align-items: center;
        border-bottom: 1px solid #474747;
    }
    .mini-header_icon {
        font-size: 22px;
        color: #00AF75;
        margin-right: 15px;
    }
    .mini-header > h4 {
        font-size: 17px;
        color: #FFFFFF;
    }
    .experience_left {
        width: 50%;
        border-right: 1px solid  #474747;
    }
    .experience_right {
        width: 50%;
        font-size: 17px;
        color: #FFFFFF;
        box-sizing: border-box;
        padding-left: 10px;
    }
    .experience-cart {
        width: 265px;
    }
    .data {
        margin: 15px 0 10px 0;
        font-size: 13px;
        height: 20px;
        line-height: 20px;
        vertical-align: middle;
        font-weight: 400;
        border: 1px solid #00AF75;
        display: inline-block;
        padding: 0 5px;
        color: #00AF75;
        border-radius: 4px;
    }
    .name {
        font-size: 17px;
        color: #FFFFFF;
        font-weight: 500;
        text-transform: none;
    }
    .company {
        color: #646566;
        font-size: 14px;
        margin-top: 5px;
    }
    .descriptions {
        font-size: 15px;
        line-height: 1.8em;
        margin-top: 10px;
        color: #888888;
    }
    .link {
        color: #646566;
        font-size: 15px;
    }
    .line {
        width: 235px;
        margin: 15px 0 5px 0;
        border-bottom: 1px solid #474747;
    }
    @media (max-width: 960px) {
        .content {
            width: 390px;
        }
        .header {
            width: 350px;
        }
        .experience {
            width: 350px;
            justify-content: center;
            flex-direction: column;
        }
        .experience-cart,
        .experience_right,
        .experience_left {
            width: 100%;
            border-right: none;
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
        .experience_right,
        .experience_left ,
        .experience {
            width: 100%;
        }
        .experience-cart{
            width: calc(100% - 30px);
            margin: 0 auto;
        }
        .line,
        .header {
            width: calc(100% - 30px);
        }
        .mini-header {
            width: calc(100% - 30px);
            margin: 0 auto;
        }
    }
</style>