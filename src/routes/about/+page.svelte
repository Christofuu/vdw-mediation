

<h1>About</h1>
<div class="content">
  
  <!-- bill bio section-->
    <div class="about_me">
      <div class="profile">
        <h2>Bill VanDeWeghe</h2>
        <img src="/bill-pfp.jpeg" alt="Bill VanDeWeghe" />
      </div>
      <div class="experience">
        <h4>Experience</h4>
        <ul>
          <li>CEO of Copia Scientific, lab equipment and services company</li>
          <li>Co-Founder, former CEO, of software startup company</li>
          <li>Managing Director at investment banking firm</li>
          <li>Public and Private Company Board Member</li>
          <li>Shareholder in litigation firm, 15 years</li>
          <li>Licensed since 1990, AV rated since 1994</li>
          <li>Certified Mediator, Align Mediation</li>
          <li>Army Officer</li>
          <li>William and Mary Law School, JD</li>
          <li>Princeton University, AB</li>
          <li><a href="https://linkedin.com/in/billvandeweghe">LinkedIn (https://linkedin.com/in/billvandeweghe)</a></li>
        </ul>
      </div>
  </div>
  <!-- /*bill footer section */ -->
  <div class="contact">
    <p>
      VanDeWeghe Mediation provides mediation services to help parties resolve
      disputes in a cost-effective and efficient manner. Contact us today to
      schedule a consultation.
    </p>
    <a href="/contact">Contact Us</a>
  </div>
</div>

<style>
  h1 {
    text-align: center;
    text-decoration: underline;
  }

  h1,
  h2 {
    font-weight: 200;
    text-align: center;
  }

  .about_me {
    display: flex;
    flex-direction: row !important;
    margin-bottom: 2rem;
    align-items: start !important;
    justify-content: start  !important;
  }

  .experience {
    margin: 0;
    margin-top: .5rem !important;
    display: flex;
    align-items: start !important;
    justify-content: first baseline;
  }

  .contact {
    display: flex;
    flex-flow: row !important;
    justify-content: center;
    align-items: center;
    width: 30rem !important;
    background-color: #090441;
    color: whitesmoke;
    padding: 1rem;
    border-radius: 1rem;
  }

  .contact a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 3rem;
    margin: 1rem;
    border-radius: 1rem;
    background-color: white;
    text-align: center;
    text-decoration: none;
    color: #090441;
  }

  .content {
    display: flex;
    flex-flow: column;
    align-items: center;
    /* align-items: baseline; */
  }

  
  .content div {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 0rem;
    margin-bottom: 2rem;
    width: 70rem;
  }
  
  .content img {
    width: 18rem;
    height: 20rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  .content div h2 {
    text-align: center;
  }

  

  ul {
    padding-left: 0;
  }

  @media only screen and (max-width: 768px) {
    .about_me {
      flex-direction: column !important;
    }

    .about_me div {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .experience {
      flex-direction: column !important;
      align-items: center !important;
      margin: 0;
    }

    .experience ul li {
      margin-bottom: .25rem;
    }

    .contact {
      flex-direction: column !important;
      width: 20rem !important;
    }

    .contact a {
      width: 20rem;
    }

    .content div {
      margin: 0 1rem;
      width: 20rem;
    }

    .content img {
      margin: 0;
      width: 15rem;
      height: 18rem;
    }
    
  }

  @media only screen and (max-width: 480px) {
    .about_me {
      flex-direction: column !important;
      align-items: center !important;
    }

    .about_me div {
      margin-left: 0 !important;
      margin-right: 0 !important;
      width: 12rem !important;
    }

    .experience {
      flex-direction: column !important;
      align-items: center !important;
      margin: 0;
      
    }

    .profile {
      align-self: center !important;
    }

    .experience ul {
      width: 15rem !important;
      font-size: .8rem !important;
    }

    .experience ul li {
      margin-bottom: .25rem;
    }

    .contact {
      flex-direction: column !important;
      width: 15rem !important;
    }

    .contact a {
      width: 12rem;
    }

    .content div {
      margin: 0 1rem;
      width: 15rem;
    }

    .content img {
      margin: 0;
      width: 15rem;
      height: 18rem;
    }
  }
</style>
