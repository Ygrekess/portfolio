import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../css/Project_Page.css";
import data from "../data";
import { AiOutlineHome, AiFillGithub } from "react-icons/ai";

export default function Project_Page(props) {
  const [projet, setProjet] = useState({});
  const [videoActive, setVideoActive] = useState({});

  const [frontSlider, setFrontSlider] = useState(0);
  const playVideo = () => {
    const videos = document.getElementsByClassName("video");
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      video.addEventListener("mouseenter", () => {
        video.play();
      });
      video.addEventListener("mouseout", () => {
        video.pause();
      });
    }
  };
  /*  const sliderButtonsHandler = (slider, direction, typeVideo, typeScreen) => {
    const videos = document.getElementsByClassName(`${typeVideo}`);
    const screen = document.getElementsByClassName(`${typeScreen}`)[0];
    let video;

    for (let i = 0; i < videos.length; i++) {
      videos[i].classList.remove("active");
    }
    if (direction === "back") {
      if (slider > 0) {
        video = videos[Number(slider) - 1];
        setFrontSlider(Number(slider) - 1);
      } else {
        video = videos[videos.length - 1];
        setFrontSlider(videos.length - 1);
      }
    } else {
      if (slider < videos.length - 1) {
        video = videos[Number(slider) + 1];
        setFrontSlider(Number(slider) + 1);
      } else {
        video = videos[0];
        setFrontSlider(0);
      }
    }
    video.classList.add("active");
    screen.src = video.src;

    screen.play();
    video.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }; */
  const selectVideo = (e, videoObj, typeVideo, typeScreen) => {
    setVideoActive(videoObj);
    const video = e.target;
    const videos = document.getElementsByClassName(`${typeVideo}`);
    const screen = document.getElementsByClassName(`${typeScreen}`)[0];
    setFrontSlider(video.id.split("-")[1]);

    for (let i = 0; i < videos.length; i++) {
      videos[i].classList.remove("active");
    }
    video.classList.add("active");
    video.pause();
    screen.src = video.src;
    screen.play();
  };

  useEffect(() => {
    console.log(videoActive);
    if (Object.keys(projet).length === 0) {
      setProjet(
        data.filter((projet) => projet.slug === props.match.params.slug)[0]
      );
    }
    playVideo();
  }, [projet, videoActive]);

  return (
    <div className="project-page">
      <div className="parallax__layer header-text">
        <ul>
          <li>
            <a href="/#home">
              <AiOutlineHome size={30} />
            </a>
          </li>
          <li>
            <a href="/#info-part">Qui suis-je ?</a>
          </li>
          <li>
            <a href="/#projects-part">Mes réalisations</a>
          </li>
          <li>
            <a href="/#contact-part" className="btn">
              Me contacter
            </a>
          </li>
        </ul>

        <div className="social-container">
          <a
            href={Object.keys(projet).length !== 0 ? projet.github : ""}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={30} />
          </a>
        </div>
      </div>
      {Object.keys(projet).length === 0 ? (
        <div></div>
      ) : (
        <div className="project-page-content">
          <div className="header-project">
            <div className="project-photo">
              <img src={projet.photo} alt="projet_photo" />
            </div>
            <div className="project-details">
              <p>{projet.detail}</p>
              <p>{projet.resume}</p>
              <div className="language-part">
                {projet.languages.map((language, i) => (
                  <div key={i} className="language-photo">
                    <img src={language} alt="language_photo" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="content-part">
            <div className="content-body-part">
              <div className="display-screen">
                <video
                  className="screen-front"
                  controls
                  src=""
                  preload="true"
                />
              </div>
              {!videoActive.description ? (
                <img src="/images-site/text-icon.jpg" alt="empty_text" />
              ) : (
                <div className="details">
                  <p>{videoActive.title}</p>
                  <p>{videoActive.description}</p>
                </div>
              )}
            </div>
            <div className="carrousel-part">
              <div className="carrousel">
                <div className="container-videos">
                  {projet.videos.map((video, i) => (
                    <video
                      key={i}
                      className="video video-front"
                      id="video-0"
                      onClick={(e) =>
                        selectVideo(e, video, "video-front", "screen-front")
                      }
                      loop
                      src={video.path}
                      preload="true"
                    />
                  ))}
                </div>
              </div>
              {/* <div
                className="project-page-slide left"
                onClick={() =>
                  sliderButtonsHandler(
                    frontSlider,
                    "back",
                    "video-front",
                    "screen-front"
                  )
                }
              >
                <IoIosArrowBack size={40} />
              </div>
              <div
                className="project-page-slide right"
                onClick={() =>
                  sliderButtonsHandler(
                    frontSlider,
                    "forward",
                    "video-front",
                    "screen-front"
                  )
                }
              >
                <IoIosArrowForward size={40} />
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
