import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import ServicesDetailsArea from "../Services/ServicesDetails/ServicesDetailsArea/ServicesDetailsArea";
import CustomFooter from "../Home/Home/HomeFooter/Footer";
import ResesrchHeroDiv from "./ResesrchHeroDiv";
import { useMediaQuery } from "react-responsive";
import { BsFillPlayFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Table } from "react-bootstrap";

function Research() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 999 });
  const isMobile = useMediaQuery({ minWidth: 200, maxWidth: 480 });

  return (
    <div>
      <HomeHeader />
      <CommonPageHeader title="Research" subtitle="Details" />
      <ResesrchHeroDiv />

      {/* campas div started */}

      <div
        style={{
          width: isMobile || isTablet ? "100%" : "70%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h2>A PROGRAM BACKED BY SCIENCE & RESEARCH</h2>
        <p>
          We have spent nearly 50 years researching, experimenting &
          collaborating with leading scientists, researchers and personal growth
          leaders. The first scientist to investigate the research of The Silva
          Method was Dr. J. Wilfrid Hahn of the Mind Science Foundation in
          California, who went on to endorse our work. Since then, various
          research institutions, universities and scientists have studied and
          verified our research, including:
        </p>
        <img src="https://silvamethod.com/assets/images/campuses.webp" />
        <p>
          Over the years we have continued to fine-tune the process of tapping
          into the human mind's inner potential-and often profoundly changing
          our students' lives in the process. We do this through an optimized
          curriculum that includes the Centering Exercise, guided meditations,
          visualization techniques, intuition-enhancing tools and Theta level
          exercises, which guide our students into an even deeper level of mind
          than Alpha.
        </p>
        <NavLink to="/events/online">
          <button
            style={{
              height: "70px",
              width: "250px",
              border: "none",
              backgroundColor: "black",
              color: "white",
              borderRadius: "35px",
            }}
          >
            Start Learning Now
          </button>
        </NavLink>
      </div>

      {/* campas div ended */}

      {/* team div started */}

      <div style={{ backgroundColor: "#9b37f2" }}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: isMobile || isTablet ? "column" : "row",
            width: isMobile || isTablet ? "100%" : "70%",
            margin: "auto",
            padding: "15px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={{ color: "white" }}>
              " Based on the newest findings from Harvard's recent genetic study
              on the effects of relaxation, breathing awareness, and positive
              guided imagery, I feel confident that many of the methods, as
              taught by Silva International, can stimulate gene expression in
              the brain that are involved in reducing physical and psychological
              stress and boosting immune functioning. "
            </h3>
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <img
              src="https://silvamethod.com/assets/images/team.webp"
              alt=""
              width="90%"
            />
            <div
              style={{
                backgroundColor: "white",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <h3>Mark Robert Waldman</h3>
              <p>
                NEUROSCIENTIST & BESTSELLING AUTHOR OF HOW GOD CHANGES YOUR
                BRAIN
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* team div ended */}

      {/* Seminar div started */}

      <div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: isMobile || isTablet ? "column" : "row",
            width: isMobile || isTablet ? "100%" : "70%",
            margin: "auto",
            padding: "25px",
          }}
        >
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <h3 style={{ textTransform: "uppercase" }}>
              Are you living life at the "Alpha Level"?
            </h3>
            <p>
              Mind science research has suggested that the key to most of the
              things we want in life, whether it's abundance, career success,
              health, happiness or enlightenment, lies in a particular state of
              mind caused by specific frequencies of the brain.
            </p>
            <p>
              Scientists call these frequencies alpha and theta brainwaves
              frequencies.
            </p>
            <p>
              We attained these states of mind unconsciously during sleep. The
              question is... how do you achieve this state of mind during waking
              consciousness? And more importantly, how do you use it to overcome
              your limitations and challenges, triumph over your unwanted habits
              and negative thought patterns, and enrich certain aspects of your
              life?
            </p>
          </div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink to="/courses/seminar">
              <button
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#6610f2",
                  border: "none",
                }}
              >
                <BsFillPlayFill size={50} color="white" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Seminar div ended */}

      {/* About jose silva div started */}

      <div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: isMobile || isTablet ? "column" : "row",
            width: isMobile || isTablet ? "100%" : "70%",
            margin: "auto",
            padding: "15px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={{ textTransform: "uppercase" }}>
              IN 1966, A RADIO REPAIRMAN FROM TEXAS FOUND THE ANSWER.
            </h3>
            <p>
              Jose Silva began his journey as a humble radio repairman in
              Laredo, Texas, and later as an electronics instructor with the
              United States Army Signal Corps.
            </p>
            <p>
              Despite his career in electronics, Silva had a keen interest in
              hypnosis and the workings of the human mind. He spent his days
              working at his job and his nights studying the work of thought
              leaders like Freud, Jung and Adler.
            </p>
            <p>
              The turning point that rocketed Silva towards his breakthroughs
              was a simple question. How do you make the mind more efficient?
            </p>
            <p>
              Through his professional knowledge, Silva already knew that
              reducing the resistance in an electrical wire allowed more
              electricity to flow through it (known as Ohm's law). Using this
              theory as an anchor, he then wondere..
            </p>
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <img
              src="https://silvamethod.com/assets/images/josesilvabg.webp"
              alt=""
              width="90%"
            />
            <div
              style={{
                backgroundColor: "#e4f1fd",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <h3>JOSE SILVA</h3>
              <p>FOUNDER OF SILVA METHOD</p>
            </div>
          </div>
        </div>
      </div>

      {/* About jose silva div ended */}

      
      <div
        style={{
          width: isMobile || isTablet ? "100%" : "70%",
          margin: "auto",
          padding: isMobile || isTablet ? "25px 10px" : "25px 0px",
          textAlign: "center",
        }}
      >
        <h3>
          "What would happen if you could reduce the resistance in the human
          brain?"
        </h3>
        <div style={{ textAlign: "center", padding: "20px" }}>
          Would doing this cause it to be more efficient at absorbing
          information, and perhaps even grant it access to reservoirs of
          previously hidden creativity and intuition? Driven by this theory,
          Silva began a thorough process of research and experimentation,
          starting with his own children. By training them to function at brain
          frequency levels known as Alpha and Theta-levels of deep relaxation
          that most people experience while meditating or in light sleep-he was
          able to significantly improve their grades at school, and even found
          evidence of enhanced intuitive functioning within them.
        </div>
        <Table>
          <thead>
            <tr style={{ backgroundColor: "#8019da", color: "white" }}>
              <th>State</th>
              <th>Brain Wave Frequency (cycles per second)</th>
              <th>Associated with...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Beta</td>
              <td>14-21 and higher</td>
              <td>
                {" "}
                Waking state, the five senses. Perception of time and space.
              </td>
            </tr>
            <tr>
              <td>Alpha</td>
              <td>7-14</td>
              <td>
                Light sleep, meditation, intuition. No time and space
                limitation.
              </td>
            </tr>
            <tr>
              <td>Theta</td>
              <td>4-7</td>
              <td>Deeper sleep, meditation.</td>
            </tr>
            <tr>
              <td>Delta</td>
              <td>0-4</td>
              <td>Deep sleep. You are unconscious at Delta.</td>
            </tr>
          </tbody>
        </Table>
        <div style={{ padding: "20px 0px", textAlign: "left" }}>
          <p>
            In the following years, Silva began sharing his methods with other
            people in his community. What he found was that by teaching people
            to consciously guide themselves to the Alpha and Theta level of mind
            through Centering Techniques, he could show many of them how to,
            while fully conscious, reprogram their minds like a computer.
          </p>
          <p>
            Why is this important? Well imagine being able to rewire yourself,
            without spending thousands of dollars on a professional
            hypnotherapist. What if you could more easily overcome bad habits
            like smoking or snacking? What if you could raise your IQ, cultivate
            a positive wealth mindset, and awaken your mind's natural healing
            capacity, all by rewiring your subconscious.
          </p>
          <p>
            The result that follow were highly encouraging. A multitude of silva
            practitioners began reporting a variety of benefits, from stress
            relief to enhanced creativity and intuition to even potentially
            accelerated physical and emotional healing.
          </p>
          <p>
            In short, people who used The Silva Method were often able to
            achieve greater control over their emotional state, their habits,
            their careers and finances, and their health.
          </p>
        </div>
        <NavLink to="/events/live">
          <button
            style={{
              height: "70px",
              width: "250px",
              border: "none",
              backgroundColor: "black",
              color: "white",
              borderRadius: "35px",
            }}
          >
            Start Learning Now
          </button>
        </NavLink>
      </div>

      <CustomFooter />
    </div>
  );
}

export default Research;
