import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" titleSpan="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, titleText, text } = service;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{titleText}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
