import "./contact.styles.css";

const Contact = () => {
  const onHandleToggle = () => {
    const contactCont = document.querySelector(".contact-container");
    const overlay = document.querySelector(".overlay");
 
    overlay.classList.add("hidden");
    contactCont.classList.add("hidden");
  };

  return (
    <div className="contact-container hidden">
      <button onClick={onHandleToggle} className="btn--close-modal">
        &rarr;
      </button>

      <h2 className="contact-heading">
        Hey, we are still in the works, <br />
        but you can send us a message
      </h2>

      <form className="contact-form">
        <div className="group">
          <label className="contact-form-input-label">First name</label>
          <input
            className="contact-form-input"
            type="text"
            placeholder="Enter your first name"
          />{" "}
        </div>

        <div className="group">
          <label className="contact-form-input-label">Last name</label>
          <input
            className="contact-form-input"
            type="text"
            placeholder="Enter your last name"
          />{" "}
        </div>

        <div className="group">
          <label className="contact-form-input-label">Email address</label>
          <input
            className="contact-form-input"
            type="email"
            placeholder="Enter your email address"
          />
        </div>

        <div className="group">
          <label className="contact-form-input-label">
            Tell Us What You Need Help With:
          </label>
          <textarea
            className="contact-form-input"
            type="textarea"
            placeholder="Enter A Topic, Like 'Channel Problem...'"
          />
        </div>

        <button className="btn" type="submit">
          SEND NOW
        </button>
      </form>
    </div>
  );
};

export default Contact;
