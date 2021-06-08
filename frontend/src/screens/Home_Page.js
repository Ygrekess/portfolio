import React, { useEffect, useState } from "react";
import "../css/Home_Page.css";
import data from "../data";
import Map from "./components/Map";
import { RiMailSendLine } from "react-icons/ri";
import { FiMail, FiPhone } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { useForm } from "react-hook-form";
import { AiOutlineHome, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImSpinner } from "react-icons/im";
import { Link } from "react-router-dom";
import axios from "axios";
import Notifications, { notify } from "react-notify-toast";

export default function Header_Part() {
  const [load, setLoad] = useState(true);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorForm, setErrorForm] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, watch, errors } = useForm();

  const onClickFlip = (e) => {
    const div = e;
    if (div.classList.contains("open")) {
      div.classList.remove("open");
    } else {
      div.classList.add("open");
    }
  };

  let handleOnChange = (email) => {
    // don't remember from where i copied this code, but this works.
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      setErrorEmail("");
    } else {
      setErrorEmail("Merci de saisir une adresse email valide.");
    }
  };

  const onSubmit = async (dataForm) => {
    if (dataForm.name && dataForm.email && dataForm.phone && !errorEmail) {
      try {
        setLoading(true);
        const data = await axios.post("/api/sendemail", {
          name: dataForm.name,
          company: dataForm.company,
          email: dataForm.email,
          phone: dataForm.phone,
          message: dataForm.message,
        });
        if (data) {
          setLoading(false);
          notify.show("Votre message a été envoyé !", "success", 5000);
          reset({});
        }
      } catch (error) {
        setLoading(false);
        notify.show(
          "Impossible d'envoyer votre message. Veuillez réessayer.",
          "danger",
          5000
        );
      }
    } else {
      setErrorForm("Merci de compléter les champs non-optionnels.");
    }
  };

  return (
    <>
      <Notifications options={{ zIndex: 200, top: "0" }} />

      <div className="wrapper">
        <div className="parallax__group header-container" id="home">
          <div className="parallax__layer header-design">
            <div className="my-name">
              <h2>
                <span>Youssef</span>
                <br />
                Seghrouchni
              </h2>
              <div className="separator-header"></div>
              <p>Développeur Web Front-end</p>
            </div>
            <div className="image-container">
              <img src="/images-site/header-banniere.png" />
            </div>
          </div>

          <div className="parallax__layer header-text">
            <ul>
              <li>
                <a href="#home">
                  <AiOutlineHome size={30} />
                </a>
              </li>
              <li>
                <a href="#info-part">Qui suis-je ?</a>
              </li>
              <li>
                <a href="#projects-part">Mes réalisations</a>
              </li>
              <li>
                <a href="#contact-part" className="btn">
                  Me contacter
                </a>
              </li>
            </ul>

            <div className="social-container">
              <a
                href="https://github.com/Ygrekess"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/youssef-seghrouchni"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="parallax__group info-part" id="info-part">
          <img
            src="/images-site/tete-portfolio.png"
            alt="youssef Seghrouchni"
          />
          <div className="text-container">
            <h2>Qui suis-je ?</h2>
            <p>
              Youssef, 27 ans. <br />
              Vit à Nantes. <br />
              Pratique le sport.
              <br />
              Mate des séries.
              <br />
              Fais de la MAO. <br />
              Aime le poker. <br />
              Joue aux échecs. <br />
              Ne fume plus. <br />
              Porte son masque.
              <br />
              Et accessoirement, <strong>développeur Front-end</strong>.
            </p>
          </div>
        </div>
        <div className="parallax__group projects-part" id="projects-part">
          <div className="text-container">
            <h2>Mes projets ?</h2>
            <p>La liste est courte mais elle ne demande qu'à s'allonger.</p>
          </div>
          <div className="projects-container">
            {data.map((projet, i) => (
              <div className="project-container" key={i}>
                <div className="project" onClick={(e) => onClickFlip(e.target)}>
                  <div className="front">
                    <img src={projet.photo} alt="projet_photo" />
                  </div>
                  <div className="back">
                    <p>Détails</p>
                    <p>{projet.detail}</p>
                    <Link to={`/projet/${projet.slug}`}>En savoir plus</Link>
                  </div>
                </div>
              </div>
            ))}
            <div />
          </div>
        </div>
        <div className="parallax__group contact-part" id="contact-part">
          <div className="map-container">
            <Map />
          </div>
          <div className="text-container">
            <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>
              <div className="info-contact">
                <div className="info-container">
                  <img
                    src="/images-site/tete-portfolio.png"
                    alt="youssef Seghrouchni"
                  />
                  <ul>
                    <li>
                      <FaMapMarkerAlt size={30} /> Nantes, France.
                    </li>
                    <li>
                      <FiPhone size={30} /> 06 20 70 65 51
                    </li>
                    <li>
                      <FiMail size={30} /> youssef.segh@hotmail.fr
                    </li>
                  </ul>
                  <div className="social-container">
                    <a
                      href="https://github.com/Ygrekess"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub size={30} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/youssef-seghrouchni"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin size={30} />
                    </a>
                  </div>
                </div>
              </div>
              <hr className="separator"></hr>
              <div className="form-container">
                <h2>Interessé(e) ?</h2>
                <p>N'hésitez pas à me faire signe.</p>
                <div className="input-class">
                  <BsPersonFill size={30} />
                  <input
                    placeholder="Votre nom/prénom"
                    className={errors.name ? "danger" : ""}
                    defaultValue=""
                    onFocus={(e) => {
                      e.target.classList.add("onfocus");
                    }}
                    onBlur={(e) => {
                      e.target.classList.remove("onfocus");
                    }}
                    name="name"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="input-class">
                  <MdWork size={30} />
                  <input
                    placeholder="Votre entreprise (optionnel)"
                    defaultValue=""
                    onFocus={(e) => {
                      e.target.classList.add("onfocus");
                    }}
                    onBlur={(e) => {
                      e.target.classList.remove("onfocus");
                    }}
                    name="company"
                    ref={register()}
                  />
                </div>
                <div className="input-class">
                  <FiMail size={30} />
                  <input
                    placeholder="Votre email"
                    className={errors.email || errorEmail ? "danger" : ""}
                    onFocus={(e) => {
                      e.target.classList.add("onfocus");
                      console.log(e.target.classList);
                    }}
                    onBlur={(e) => {
                      e.target.classList.remove("onfocus");
                      if (e.target.value) {
                        handleOnChange(e.target.value);
                      }
                    }}
                    defaultValue=""
                    onChange={() => setErrorEmail("")}
                    name="email"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="input-class">
                  <FiPhone size={30} />
                  <input
                    placeholder="Votre téléphone"
                    className={errors.phone ? "danger" : ""}
                    defaultValue=""
                    onFocus={(e) => {
                      e.target.classList.add("onfocus");
                    }}
                    onBlur={(e) => {
                      e.target.classList.remove("onfocus");
                    }}
                    name="phone"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="input-class">
                  <textarea
                    placeholder="Votre message (optionnel)"
                    defaultValue=""
                    onFocus={(e) => {
                      e.target.classList.add("onfocus");
                    }}
                    onBlur={(e) => {
                      e.target.classList.remove("onfocus");
                    }}
                    rows={7}
                    name="message"
                    ref={register()}
                  />
                </div>
                <div className="error-container">
                  {errors.name && (
                    <span className="danger">Merci de saisir votre nom.</span>
                  )}
                  {(errors.email || errorEmail) && (
                    <span className="danger">
                      {errors.email
                        ? "Merci de saisir votre email."
                        : errorEmail}
                    </span>
                  )}
                  {errors.phone && (
                    <span className="danger">
                      Merci de saisir votre téléphone.
                    </span>
                  )}
                </div>
                <button type="submit">
                  {loading ? (
                    <ImSpinner className="loading-spinner" size={20} />
                  ) : (
                    <RiMailSendLine size={20} />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
