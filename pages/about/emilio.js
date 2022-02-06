import Image from "next/image";
import HoverCard from "../../components/cards/hoverCard";
import ProfileCard from "../../components/cards/profileCard";
import TitleCard from "../../components/cards/titleCard";
//https://freefrontend.com/css-profile-cards/
function Emilio() {
  return (
    <>
      <div className="container">
        <div className="cover">
          <TitleCard
            one={
              "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/roland-denes-zeZMi6Y4fZY-unsplash.jpg"
            }
            two={
              "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/Emilio4by3.jpg"
            }
            title={"Emilio D'Souza"}
            subtitle={"About me"}
          />
        </div>
      </div>
      <div>
        <ProfileCard
          name={"Emilio D'Souza"}
          image={
            "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/Emilio2020.jpg"
          }
          location={"LONDON"}
          title={"Digital Craftsman and Enterprise Architect"}
          linkedin={"https://www.linkedin.com/in/emilio-d-souza-52242064/"}
          experiences={[
            "Digital Transformation",
            "Business Analysis",
            "Service Design",
            "Agile Development",
            "Enterprise Architecture",
            "Solution Architecture",
          ]}
        />
      </div>
      <p>
        focussed on turning our client business challenges into technical
        applications
        https://www.capgemini.com/gb-en/careers/jobs/digital-architect/
      </p>
      <p>
        Solution Architects shape and define solution architectures for our
        clients. These architectures are used to transform business requirements
        into technical solutions, with supporting project plans, detailed
        designs and informed technical risk analysis. We work with a client from
        the earliest stages of a project, from presales, through to delivery and
        ‘go live’. We provide technical leadership and support to the Programme
        Director or Engagement Manager. You are the trusted advisor to our
        clients.
      </p>
      <p>
        leading-edge cloud-native and hybrid architectures. Take end-to-end
        ownership of shaping solutions & defining the right architectural
        approach. Support project cost estimation and budgeting, planning and
        delivery as a Technical Leader. Collaborate closely with our engineering
        teams to ensure our solutions are built to reflect your vision and make
        the best use of current development practices. Be a trusted technology
        adviser to our clients as well as to Capgemini colleagues.
      </p>
      <p>
        Experience of working in collaborative teams Working with distributed,
        offshore delivery teams. Development and DevOps background/experience
        preferrable but not essential. Experience of building scalable,
        resilient, and secure applications Experience of Agile / Scrum
        methodology. Exposure to and some experience of working with structured
        architecture approaches (e.g. TOGAF). Knowledge of exploiting Cloud
        platform(s) for delivery of cloud-native solutions.
      </p>
      <p>
        Knowledge of microservice-based architectures using domain driven
        design, CQRS and Event Sourcing patterns. Knowledge of API-centric
        architectures and integration strategies Containerisation technologies:
        Docker or Kubernetes.
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

export default Emilio;
