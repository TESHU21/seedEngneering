// app/(your-page)/OurTeam.jsx
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Jonathan Scott",
    role: "CEO & Architect",
    email: "info@example.com",
    image: "/images/jonathan.jpg",
    socials: {
      facebook: "https://facebook.com/jonathan",
      twitter: "https://twitter.com/jonathan",
      linkedin: "https://linkedin.com/in/jonathan",
      email: "info@example.com",
    },
  },
  {
    name: "Benjamin Austin",
    role: "Chief Engineer",
    email: "info@example.com",
    image: "/images/benjamin.jpg",
    socials: {
      facebook: "https://facebook.com/benjamin",
      twitter: "https://twitter.com/benjamin",
      linkedin: "https://linkedin.com/in/benjamin",
      email: "info@example.com",
    },
  },
  {
    name: "John Oliver",
    role: "Project Manager",
    email: "info@example.com",
    image: "/images/john.jpg",
    socials: {
      facebook: "https://facebook.com/john",
      twitter: "https://twitter.com/john",
      linkedin: "https://linkedin.com/in/john",
      email: "info@example.com",
    },
  },
  {
    name: "Philip Alvarez",
    role: "Finances",
    email: "info@example.com",
    image: "/images/philip.jpg",
    socials: {
      facebook: "https://facebook.com/philip",
      twitter: "https://twitter.com/philip",
      linkedin: "https://linkedin.com/in/philip",
      email: "info@example.com",
    },
  },
];

export default function OurTeam() {
  return (
    <section className="py-16  text-center md:px-24">
      <h2 className="text-3xl font-bold text-orange-600 mb-2">Our Team</h2>
      <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
