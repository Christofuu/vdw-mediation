<div class="navbar">
  <div class="title">
    <a href="/">
      <h1>VanDeWeghe</h1>
      <h4>Dispute Resolution Services</h4>
    </a>
  </div>
  <nav>
    <a href="/">Home</a>
    <a href="/about" class="active">About</a>
    <a href="/fees" class="active">Fees</a>
    <a href="/privacy-policy" class="active">Privacy Policy</a>
    <a href="/contact" class="active">Contact Us</a>
  </nav>
</div>

<slot />
<footer>
  <p>
    <strong>Disclaimer:</strong> The information provided on vdwmediation.com is
    not intended to be legal advice. For legal advice on your particular
    situation, please consult a licensed attorney. The use of this web site does
    not establish an attorney-client relationship or mediation relationship
    between the user and VanDeWeghe Mediation. For more information, please
    click & read the following pages:
    <a href="/privacy-policy">Privacy Policy</a>
  </p>
</footer>

<style>
  /* :global(html) {
        height: 100vh;
    } */

  :global(body) {
    /* this will apply to <body> */
    margin: 0;
    padding: 0;
  }

  :global(h1, h2, h3, h4, h5) {
    font-family: Adminata;
    font-weight: lighter;
  }

  .title h1 {
    color: white;
    font-family: Adminata;
    font-weight: lighter;
    margin-bottom: 0;
  }

  .title h4 {
    color: white;
    font-weight: lighter;
    margin-top: 0;
  }

  .title a {
    text-decoration: none;
  }

  .navbar {
    background-color: #090441;
    padding: 1rem 0;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
  }

  footer {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    height: fit-content;
    text-align: center;
    margin-left: 20rem;
    margin-right: 20rem;
    /* background-color: grey; Optional to visually differentiate footer */
  }

  footer a,
  strong {
    font-weight: bold;
    color: darkslategrey;
  }

  .navbar nav a {
    display: inline-block;
    font-size: 1.2rem;
    margin: 0 1rem;
    text-decoration: none;
    color: whitesmoke;
  }

  .navbar nav a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    .navbar {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 1500px) {
    footer {
      margin-left: 3rem !important;
      margin-right: 3rem !important;
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 480px) {
    .navbar nav a {
      font-size: 0.8rem;
      margin: 0 0.5rem;
    }
  }
</style>
