import Image from "next/image";
import HoverCard from "../../components/cards/hoverCard";
import ProfileCard from "../../components/cards/profileCard";
import TitleCard from "../../components/cards/titleCard";
function Rohit() {
  return (
    <>
      <div className="container">
        <div className="cover">
          <TitleCard
            one={
              "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/florian-van-duyn-XbjtGOvzZv0-unsplash.jpg"
            }
            two={
              "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/Rohit4by3.PNG"
            }
            title={"Rohit Bakshi"}
            subtitle={"About me"}
          />
        </div>
      </div>
      <div>
        <ProfileCard
          name={"Rohit Bakshi"}
          image={
            "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/misty.jpg"
          }
          location={"LONDON"}
          title={"Product architect and customer experience specialist"}
          linkedin={"https://www.linkedin.com/in/rohit-bakshi-54854a134/"}
          experiences={[
            "Product Strategy",
            "Product Mngt.",
            "Business Analysis",
            "CX/UX Design",
            "Agile Development",
            "IT Modernisation",
          ]}
        />
      </div>
      <p>
        Rohit has 10 years of experience designing and embedding new business,
        operational, and organizational models. With an extensive Product
        Development background, Rohit specializes in helping clients grow and
        become more sustainable by optimizing their focus on customer
        interactions, and developing a culture of product excellence.
      </p>
      <p>
        expertise in the areas of strategy, performance improvement, solution
        design and development, process analysis, and digital in a number of
        different verticals and environments.
      </p>
      <p>
        He brings over 20 years of experience pioneering go-to-market,
        voice-of-customer, customer experience, demand generation, and digital
        marketing programs that have resulted in sustained, top- and bottom-line
        growth.
      </p>
      <p>
        Paul Falor is driven by a passion to enable efficiency and innovation
        through technology. Paul has spent more than two decades leading
        information technology and information security initiatives for
        companies in the financial services and consulting industries.{" "}
      </p>
      <style jsx>{`
        .container {
          width: 100%;
          height: 66vh;
          display: grid;
          place-items: center;
        }
      `}</style>
    </>
  );
}

export default Rohit;
