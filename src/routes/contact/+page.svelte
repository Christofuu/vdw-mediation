<script>
  import {PUBLIC_EMAIL_KEY} from '$env/static/public';
</script>
<div class="container">
  <h1>Contact</h1>
  <div class="contact">
    <div class="contact-left">
      <div class="contact-info">
        <div>
          <p>
            Do not hesitate to reach out
            using our contact information here, or send a message using this form
            below.
          </p>
        </div>
        <div class="phone-and-email">
          <a href="mailto: bill@vdwmediation.com">bill@vdwmediation.com</a>
          <a href="tel:6195400627">619-540-0627</a>
          <a href="mailto: tracy@vdwmediation.com">traci@vdwmediation.com</a>
        </div>
      </div>
      <div class="contact-box">
        <form
          action="https://api.web3forms.com/submit"
          method="post"
          id="form"
        >
          <div class="client-info">
            <div>
              <label for="name"><p><strong>Name:</strong></p></label>
              <input
                type="hidden"
                name="access_key"
                value={PUBLIC_EMAIL_KEY}
                />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
              />
            </div>
            <div>
              <label for="email"><p><strong>Email:</strong></p></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email.."
              />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            </div>
          </div>
          <div class="subject">
            <label for="message"><p><strong>Subject:</strong></p></label>
            <textarea
              id="message"
              name="message"
              placeholder="Subject..."
            ></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    /* margin: 0 25rem; */
    margin-bottom: 5rem;
  }

  .contact {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    width: 55rem;
  }

  .contact-box {
    background-color: lightgrey;
    padding: 1rem;
  }

  .client-info {
    display: flex;
    flex-flow: row;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: space-between;
  }

  .client-info div {
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin-right: 1rem;
  }

  .phone-and-email {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .subject {
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .subject textarea {
    width: 45rem;
    height: 15rem;
  }

  .contact-left {
    width: 50rem;
  }

  .contact-info {
    margin-left: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
  }

  .contact-info div {
    margin-right: 1rem;
  }

  .contact-info a {
    color: black;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    /* Basic styling */
    width: 15rem; /* Full width */
    padding: 0.75rem; /* Add padding */
    border: 1px solid #ccc; /* Gray border */
    border-radius: 0.25rem; /* Rounded corners */
    margin-bottom: 0.75rem; /* Space between fields */

    /* Font and placeholder styling */
    font-family: sans-serif;
    font-size: 16px;
    color: #333;

    /* Modern touches */
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); /* Subtle inner shadow */
    transition: border-color 0.3s ease-in-out; /* Smooth border color change on focus */
  }

  input[type="submit"] {
    /* Basic styling */
    background-color: #007bff; /* Blue background */
    color: white; /* White text */
    padding: 10px 20px; /* Adjust padding as needed */
    border: none; /* Remove default border */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Indicate interactivity */

    /* Font styling */
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold; /* Bold text */

    /* Modern touches */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle outer shadow */
  }

  /* Additional styling on hover */
  input[type="submit"]:hover {
    background-color: #0062cc; /* Darker blue on hover */
  }

  @media only screen and (max-width: 768px) {
    .contact, .contact-left {
      width: 30rem;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      width: 10rem;
    }

    .subject textarea {
      width: 25rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .contact, .contact-left {
      width: 20rem;
    }

    .contact-info {
      flex-flow: column;
      margin-bottom: 1rem;
      text-align: center;
    }

    .client-info {
      flex-flow: column;
      margin-bottom: 1rem;
      align-items: baseline;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      width: 15rem;
    }

    .subject textarea {
      width: 15rem;
    }
  }
</style>
