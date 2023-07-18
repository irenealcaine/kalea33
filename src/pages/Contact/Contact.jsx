import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contacto</h1>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.1233040541968!2d-0.7064132066685981!3d39.69945531609719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd608dd767593b93%3A0x6762e43fb7924b13!2sKalea%2033!5e0!3m2!1ses!2ses!4v1689660593806!5m2!1ses!2ses"
          width="100%"
          style={{ aspectRatio: "4/3" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
