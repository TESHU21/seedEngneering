// app/(your-page)/OurTeam.jsx
import TeamCard from "./TeamCard";
import MichaelImage from "../../../assets/Michael Hadera.webp"
import TewodrosImage from "../../../assets/Tewdros Eshetu.webp"
import HaileImage from "../../../assets/HailePhoto.webp"
import TitoImage from "../../../assets/TitoImage.webp"
import BiniamImage from "../../../assets/BiniamImage.webp"

const teamMembers = [
  {
    name: "Hilemicheal Niguse",
    role: "CEO & ElectroMechanical Engineer",
    email: "haile.n@seedengineeringplc.com",
    image: HaileImage,
    socials: {
      facebook: "https://facebook.com/jonathan",
      twitter: "https://twitter.com/jonathan",
      linkedin: "https://linkedin.com/in/jonathan",
      email: "info@example.com",
    },
  },
  {
    name: "Michael Hadera",
    role: "Co-founder & Chief Engineer",
    email: "michael.h@seedengineeringplc.com",
    image: MichaelImage,
    socials: {
      facebook: "https://facebook.com/benjamin",
      twitter: "https://twitter.com/benjamin",
      linkedin: "https://linkedin.com/in/benjamin",
      email: "info@example.com",
    },
  },
  {
    name: "Tewdros Eshetu",
    role: "Welding Specialist",
    // email: "info@example.com",
    image: TewodrosImage,
    socials: {
      facebook: "https://facebook.com/john",
      twitter: "https://twitter.com/john",
      linkedin: "https://linkedin.com/in/john",
      email: "info@example.com",
    },
  },
  {
    name: "Tito Shitahun Haregu",
    role: "HVAC Engineer",
    // email: "info@example.com",
    image: TitoImage,
    socials: {
      facebook: "https://facebook.com/john",
      twitter: "https://twitter.com/john",
      linkedin: "https://linkedin.com/in/john",
      email: "info@example.com",
    },
  },
  {
    name: "Biniyam Birhane Tafere",
    role: "Electrical Engineer",
    // email: "info@example.com",
    image: BiniamImage,
    socials: {
      facebook: "https://facebook.com/john",
      twitter: "https://twitter.com/john",
      linkedin: "https://linkedin.com/in/john",
      email: "info@example.com",
    },
  },

];

export default function OurTeam() {
  return (
    <section className=" flex flex-col justify-between py-16  text-center items-center md:px-24">
      <h2 className="text-3xl font-bold text-orange-600 mb-2">Our Team</h2>
      <div>

      </div>
      <div className="md:px-10 mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
