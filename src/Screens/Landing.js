import React from "react";
import styled from "styled-components";
import CallMadeIcon from '@material-ui/icons/CallMade';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import EventIcon from '@material-ui/icons/Event';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
// import Fade from 'react-reveal/Fade';

const Landing = () => {
  return (
    <Container>
      <Navbar>
        <img className="logo" src="https://gdsc-ju.vercel.app/_next/image?url=%2Fgdsc.png&w=828&q=75" alt="" />
        <div className="right-links">
          <a href="https://unstop.com/p/bit-n-build-international-hackathon-google-developer-student-clubs-crce-863579" target="_blank">Register on Unstop</a>
          {/* <a href="/">Event Timeline</a>
          <a href="/">Problem Statements</a> */}
          {/* <a href="/">Leaderboard</a> */}
        </div>
      </Navbar>
      <div className="page1">
        <div className="bg">
          {/* <img src="https://www.icegif.com/wp-content/uploads/2022/04/icegif-444.gif" alt="" /> */}
          <img src="https://j.gifs.com/mlVWba.gif" alt="" />
        </div>
        <div className="middle-main">
            <h3>
              GDSC Jadavpur University, presents
            </h3>
            <h1>Bit-N-Build <br /> State Level Hackathon</h1>
            <p>28th Jan - 2nd Feb, Online Hackathon</p>
            <a href="https://unstop.com/p/bit-n-build-international-hackathon-google-developer-student-clubs-crce-863579" target="_blank" className="reg-btn">
              <div className="text">Register on Unstop</div>
              <CallMadeIcon />
            </a>
        </div>
        {/* <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/icon/unstop-icon-800x800.png" alt="" /> */}
      </div>
      <div className="page1-mg">
          <h3>
            GDSC Jadavpur University, presents
          </h3>
          <h1>Bit-N-Build <br /> State Level Hackathon</h1>
          <p>28th Jan - 2nd Feb, Online Hackathon</p>
          <a href="https://unstop.com/p/bit-n-build-international-hackathon-google-developer-student-clubs-crce-863579" target="_blank" className="reg-btn">
            {/* <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/icon/unstop-icon-800x800.png" alt="" /> */}
            <div className="text">Register on Unstop</div>
            <CallMadeIcon />
          </a>
      </div>

      <div className="page2">
        <div className="block-centered about">
          <h2>About this Event</h2>
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/65a4f1c39ae0d_bit-n-build-international-hackathon.png?d=1280x371" alt="" />
          {/* <p>Bit N Build is an international Hackathon conducted by Fr. Conceicao Rodrigues College of Engineering, Mumbai in collaboration with 25 national and international colleges. It promotes exposure and collaboration opportunities for students across various universities worldwide. It is an event that has gained immense popularity and success in its foremost edition. Last year, this was the best hackathon conducted by Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai, and it had 900+ Participants and 200+ teams. This year, Bit N Build is set to make waves internationally, showcasing its innovation on the global stage, while also solidifying its influence at the national level. In the first phase of the hackathon, participating colleges will host the hackathon in their respective states. The hackathon’s final round will feature the top teams from this phase, earning them an invitation to compete in Mumbai at Fr. Conceicao Rodrigues College of Engineering.</p> */}
          <p>Bit N Build, an international Hackathon by Fr. Conceicao Rodrigues College of Engineering, Mumbai, collaborates with 25 colleges globally. Last year's edition had 900+ participants and 200+ teams, making it the best hackathon at the college. This year, it aims for global recognition, starting with regional rounds at participating colleges and culminating in a final competition in Mumbai.</p>
          <div className="imp-about">
            <EventIcon /> <div className="text">Registration Deadline : 2nd Jan 2024, 10:59 AM IST</div>
          </div>
          <div className="imp-about">
            <EventIcon /> <div className="text">Grand Finale : 24-25 Feb 24</div>
          </div>
          <div className="imp-about">
            <CheckCircleOutlineIcon /> <div className="text">Registration Fee : Rs.400 per team</div>
          </div>
          <div className="imp-about">
            <GroupAddIcon /> <div className="text">Team Size : 2 to 4 members (Inter-College teams allowed. Individuals must be from the same state.)</div>
          </div>
        </div>
        <div className="event-timeline">
          <h2>Event Timeline</h2>
          <div className="vertical-line"></div>
          <div className="event">
            <div className="content left">
              <h3>Registrations Open!!</h3>
              <p>Secure your spot now by completing the registration process before January 31st</p>
              <ArrowRightIcon />
            </div>
            <div className="circle">
              25th Jan - 31st Jan
            </div>
          </div>
          <div className="event">
            <div className="circle">
              Till 2nd Feb 8pm
            </div>
            <div className="content right">
              <h3>1st Round of State Level Hackathon Ideation Submissions</h3>
              <p>Kindly submit your comprehensive ideation in PowerPoint format and share a GitHub repository showcasing the basic features, accompanied by a brief video highlighting the key functionalities.</p>
              <ArrowLeftIcon />
            </div>
          </div>
          <div className="event">
            <div className="content left">
              <h3>2nd Round of State Level Hackathon Ideation Submissions</h3>
              <p>Engage in a virtual interview with our esteemed panel of judges, where they will inquire about your project and its implemented features, assigning scores based on your presentation and responses</p>
              <ArrowRightIcon />
            </div>
            <div className="circle">
              4th Feb, 2024
            </div>
          </div>
          <div className="event">
            <div className="circle">
              25 Feb, 2024
            </div>
            <div className="content right">
              <h3>Finals in Mumbai !!</h3>
              <p>Participate in an exclusive 2-day onsite hackathon in Mumbai with sponsored accommodation, meals, and travel, and stand a chance to win enticing cash prizes</p>
              <ArrowLeftIcon />
            </div>
          </div>
        </div>
        <div className="event-timeline-mg">
          <h2>Event Timeline</h2>
          <div className="vertical-line"></div>
          <div className="event">
            <div className="content right">
              <h3>Registrations Open!!</h3>
              <div className="date">
                25th Jan - 31st Jan
              </div>
              <p>Secure your spot now by completing the registration process before January 31st</p>
              <ArrowLeftIcon />
            </div>
          </div>
          <div className="event">
            <div className="content right">
              <h3>1st Round of State Level Hackathon Ideation Submissions</h3>
              <div className="date">
                Till 2nd Feb 8pm
              </div>
              <p>Kindly submit your comprehensive ideation in PowerPoint format and share a GitHub repository showcasing the basic features, accompanied by a brief video highlighting the key functionalities.</p>
              <ArrowLeftIcon />
            </div>
          </div>
          <div className="event">
            <div className="content right">
              <h3>2nd Round of State Level Hackathon Ideation Submissions</h3>
              <div className="date">
                4th Feb, 2024
              </div>
              <p>Engage in a virtual interview with our esteemed panel of judges, where they will inquire about your project and its implemented features, assigning scores based on your presentation and responses</p>
              <ArrowLeftIcon />
            </div>
          </div>
          <div className="event">
            <div className="content right">
              <h3>Finals in Mumbai !!</h3>
              <div className="date">
                25 Feb, 2024
              </div>
              <p>Participate in an exclusive 2-day onsite hackathon in Mumbai with sponsored accommodation, meals, and travel, and stand a chance to win enticing cash prizes</p>
              <ArrowLeftIcon />
            </div>
          </div>
        </div>
        <div className="block-centered problem-statements">
          <h2>Problem Statements</h2>
          <div className="problem-statements-container">
            <div className="problem-statement">
              <h3>Environmental Sustainability</h3>
              <div className="desc">Promote environmental stewardship by leveraging technology and innovation to address urgent ecological challenges. Participants are encouraged to devise solutions fostering a sustainable future.
                Example: Develop a smart device application that empowers users to monitor and reduce their environmental impact by suggesting eco-conscious lifestyle choices, encouraging a greener and more sustainable way of living.</div>
            </div>
            <div className="problem-statement">
              <h3>AI in everyday life and Inclusive technology</h3>
              <div className="desc">Champion inclusivity through technology by crafting solutions tailored for individuals with disabilities, and simultaneously, explore the potential of artificial intelligence (AI) in everyday life. Participants are tasked with designing accessible applications and services, powered by  AI-driven applications for diverse purposes.
                Example: Create a multifaceted mobile app that not only offers real-time sign language translation for deaf individuals during video calls, enhancing inclusivity, but also integrates AI capabilities as a personal assistant. This AI assistant aids users in managing schedules, making personalized recommendations, and providing valuable information based on individual preferences, thus seamlessly integrating inclusive technology with the power of AI in daily life.</div>
            </div>
            <div className="problem-statement">
              <h3>Student-Led Innovation</h3>
              <div className="desc">Design projects that will benefit the student community.
                Example: Develop a platform for students to easily find and share educational resources, study materials, and collaborative study groups.</div>
            </div>
            <div className="problem-statement">
              <h3>Open Ended</h3>
              <div className="desc">Explore uncharted territories! In this category, participants are invited to unleash their creativity and tackle any problem statement they are passionate about. Let your imagination run wild and make a meaningful impact with your innovative solutions!</div>
            </div>
          </div>
        </div>
        <div className="block-centered comming-soon">
          <h2>Submission & Leaderboard Coming Soon!  </h2>
        </div>
      </div>
      <Footer>
        <img style={{ height: '300px', position: 'absolute', left: '-40px' }} src="https://i.gifer.com/embedded/download/5Jxn.gif" alt="" />
        <img style={{ height: '300px', position: 'absolute', left: '100px' }} src="https://i.gifer.com/embedded/download/5Jxn.gif" alt="" />
        <img style={{ height: '300px', position: 'absolute', left: '300px' }} src="https://i.gifer.com/embedded/download/5Jxn.gif" alt="" />
        <img style={{ height: '300px', position: 'absolute', left: '500px' }} src="https://i.gifer.com/embedded/download/5Jxn.gif" alt="" />
        <img style={{ height: '300px', position: 'absolute', left: '700px' }} src="https://i.gifer.com/embedded/download/5Jxn.gif" alt="" />
        <img style={{ height: '300px', position: 'absolute', left: '900px' }} src="https://i.gifer.com/embedded/download/5Jxn.gif" alt="" />
        <img style={{ height: '300px', position: 'absolute', left: '1100px' }} src="https://i.gifer.com/embedded/download/5Jxn.gif" alt="" />
        <img style={{ height: '300px', position: 'absolute', left: '1300px' }} src="https://i.gifer.com/embedded/download/5Jxn.gif" alt="" />
        <img style={{ height: '300px', position: 'absolute', left: '1500px' }} src="https://i.gifer.com/embedded/download/5Jxn.gif" alt="" />
        <img style={{ height: '300px', position: 'absolute', left: '1700px' }} src="https://i.gifer.com/embedded/download/5Jxn.gif" alt="" />
      </Footer>
    </Container>
  )
}

export default Landing

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #22272e;

  .page1{
    min-height: 100vh;
    width: 100vw;
    position: relative;
    top: 60px;

    .bg{
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 1;
      overflow: hidden;

      img{
        height: 100vh;
        min-height: 600px;
        width: 100vw;
        filter: brightness(0.35);
      }
    }

    .middle-main{
      min-height: 100vh;
      position: absolute;
      left: 0;
      width: 100vw;
      z-index: 2;
      padding-top: 60px;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 50px 100px;

      h1{
        font-size: 80px;
        text-align: center;
        line-height: 100px;
        margin: 30px 0;
        font-family: 'Rubik Scribble', sans-serif;
        font-weight: 900;
      }

      h3{
        font-size: 30px;
        font-weight: 400;
        text-align: center;
      }

      p{
        font-size: 20px;
      }

      .reg-btn{
        padding: 20px 50px;
        background-color: #ffffff;
        margin-top: 50px;
        border-radius: 100px;
        text-decoration: none;
        display: flex;
        align-items: center;
        
        .text{
          color: cornflowerblue;
          font-size: 16px;
          font-weight: 500;
          margin: 0 10px;
        }

        img{
          height: 30px;
        }

        svg{
          fill: cornflowerblue;
          font-size: 20px;
        }
      }
    }

    @media (max-width: 1150px) {
      display: none;
    }
  }

  .page1-mg{
    min-height: 100vh;
    padding: 40px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    h1{
      font-size: 3.5rem;
      font-weight: 900;
      text-align: center;
      margin: 30px 0;
      font-family: 'Rubik Scribble', sans-serif;
      z-index: 1;
    }

    h3{
      font-size: 1rem;
      font-weight: 200;
      text-align: center;
      z-index: 1;
    }

    p{
      font-size: 1.5rem;
      font-weight: 200;
      text-align: center;
      z-index: 1;
    }

    .reg-btn{
        padding: 15px 25px;
        background-color: #ffffff;
        margin-top: 50px;
        border-radius: 100px;
        text-decoration: none;
        display: flex;
        align-items: center;
        z-index: 1;
        
        .text{
          color: cornflowerblue;
          font-size: 15px;
          font-weight: 500;
          margin: 0 10px;
        }

        img{
          height: 30px;
        }

        svg{
          fill: cornflowerblue;
          font-size: 20px;
        }
      }


    @media (min-width: 1150px) {
      display: none;
    }
  }

  .page1-mg::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('https://media1.giphy.com/media/7OH9z8lL8cnmkOxb6A/200.gif') no-repeat center center;
    background-size: cover;
    filter: brightness(0.35);
    z-index: 0; /* Place it behind the content */
  }

  .page2{
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 200px 50px 100px 50px;

    .block-centered{
      width: 1000px;

      h2{
        text-align: center;
        color: white;
        font-size: 35px;
        font-weight: 500;
        margin-bottom: 30px;
      }

      @media (max-width: 1150px) {
        width: calc(100vw - 40px);
      }
    }
    
    .about{  
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 20px;

      p{
        margin: 0 auto;
        text-align: center;
        font-size: 1rem;
        line-height: 1.75rem;
        font-weight: 200;
        color: #e1e1e1;
        width: 500px;
        margin-bottom: 40px;

        @media (max-width: 1150px) {
          width: 100%;
          padding: 20px 0;
        }
      }

      .imp-about{
        display: flex;
        width: 500px;

        align-items: center;
        margin: 10px 0;

        svg{
          font-size: 1.75rem;
        }

        .text{
          margin-left: 20px;
          font-size: 1rem;
          line-height: 1.75rem;
          font-weight: 500;
          color: #e1e1e1;
        }

        @media (max-width: 1150px) {
          width: 100%;
          margin-bottom: 10px;

          .text{
            font-weight: 200;
          }
        }
      }
      
      img{
        width: 600px;
        border-radius: 10px;
        margin-bottom: 40px;

        @media (max-width: 1150px) {
          width: 100%;
          margin-bottom: 10px;
        }
      }

    }

    .event-timeline{
      margin-top: 100px;
      width: 100vw;

      h2{
        text-align: center;
        color: white;
        font-size: 35px;
        font-weight: 500;
        margin-bottom: 30px;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .event{
        display: flex;
        align-items: center;
        margin: 50px 0;
        position: relative;

        .circle{
          height: 200px;
          width: 200px;
          background-color: #323841;
          margin: 10px 0;
          border-radius: 50%;
          z-index: 1;

          font-size: 1.25rem;
          padding: 20px;
          text-align: center;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content{
          /* height: 160px; */
          width: 400px;
          background-color: #e5e5e5;
          border-radius: 10px;
          position: absolute;
          padding: 20px;

          h3{
            color: #333;
            font-size: 1.15rem;
            font-weight: 500;
          }

          p{
            color: #333;
            font-size: 0.9rem;
            font-weight: 300;
          }

          svg{
            font-size: 100px;
          }
        }

        .left{
         right: 250px; 
         svg{
            position: absolute;
            right: -58px;
            top: 15px;
          }
        }

        .right{
          left: 250px; 
          svg{
            position: absolute;
            left: -58px;
            top: 15px;
          }
        }

        &:hover{
          transition-duration: 250ms;
          
          .circle{
            /* background-color: orange; */
            border: 5px solid white;
            transition-duration: 250ms;
            /* color: #333; */
            cursor: pointer;
          }
        }
      }

      .vertical-line{
        height: 1000px;
        width: 1px;
        border-left: 1px dashed white;
        position: absolute;
        z-index: 0;
      }

      @media (max-width: 1150px) {
        display: none;
      }
    }

    .event-timeline-mg{
      margin-top: 100px;
      width: calc(100vw - 40px);
      position: relative;

      h2{
        text-align: center;
        color: white;
        font-size: 35px;
        font-weight: 500;
        margin-bottom: 30px;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .event{
        display: flex;
        align-items: center;
        margin: 20px 0;
        position: relative;

        .circle{
          height: 120px;
          width: 120px;
          background-color: #323841;
          margin: 10px 0;
          border-radius: 50%;
          z-index: 1;

          font-size: 0.9rem;
          padding: 20px;
          text-align: center;

          display: flex;
          align-items: center;
          justify-content: center;
          border: 5px solid transparent;

          display: none;
        }

        .content{
          /* height: 160px; */
          width: calc(100vw - 40px);
          flex: 1;
          background-color: #e5e5e5;
          border-radius: 10px;
          padding: 20px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          h3{
            color: #333;
            font-size: 1.15rem;
            font-weight: 500;
            text-align: left;
          }

          p{
            color: #333;
            font-size: 0.9rem;
            font-weight: 300;
            text-align: left;
          }

          .date{
            color: #333;
            font-size: 0.75rem;
            font-weight: 300;
            text-align: left;
            padding: 5px 10px;
            background-color: #daceb7;
            border-radius: 100px;
            margin-left: -5px;
            margin-bottom: 10px;
          }

          svg{
            font-size: 100px;
          }
        }

        .right{
          position: relative;
          /* margin-left: 50px; */
          /* left: 250px;  */
          svg{
            display: none;
            position: absolute;
            left: -58px;
            top: 15px;
          }
        }

        &:hover{
          transition-duration: 250ms;
          
          .circle{
            /* background-color: orange; */
            border: 5px solid white;
            transition-duration: 250ms;
            /* color: #333; */
            cursor: pointer;
          }
        }
      }

      .vertical-line{
        position: absolute;
        height: 1000px;
        width: 1px;
        border-left: 1px dashed white;
        z-index: 0;
        left: 10px;
        top: 180px;

        @media (min-width: 350px) {
          height: 850px;
        }

        @media (min-width: 400px) {
          height: 700px;
        }

        @media (min-width: 500px) {
          height: 650px;
        }

        @media (min-width: 620px) {
          height: 600px;
        }

        @media (min-width: 750px) {
          height: 550px;
        }
      }

      @media (min-width: 1150px) {
        display: none;
      }
    }

    .problem-statements{
      margin-top: 100px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .problem-statements-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .problem-statement{
          width: 100%;
          background-color: #323841;
          margin: 20px 0;
          padding: 30px;

          h3{
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 10px;
          }

          .desc{
            font-size: 0.9rem;
            line-height: 1.5rem;
            font-weight: 200;
          }
        }
      }
    }

    .comming-soon{
      margin-top: 100px;
    }

  @media (max-width: 1150px) {
    padding: 50px;
  }
  }
`

const Navbar = styled.div`
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.05) 1px 1px 10px 0px;
  backdrop-filter: blur(8px);

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 40px;

  .logo{
    height: 100%;
  }

  .right-links{
    display: flex;
    align-items: center;
    height: 100%;

    a{
      font-size: 0.85rem;
      text-decoration: none;
      margin-left: 30px;
      text-transform: uppercase;
      letter-spacing: 0.15rem;
      font-weight: 300;
      color: #333;
      /* padding: 5px 10px; */
      /* border: 1px solid black; */
    }

    @media (max-width: 1150px) {
        display: none;
    }
  }

  @media (max-width: 1150px) {
        justify-content: center;
  }
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 300px;
  margin-top: -150px;
  overflow: hidden;
  
  img{
    height: 300px;
  }
`