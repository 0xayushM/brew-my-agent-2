import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imagePath: string;
}

const TeamMember = ({ name, role, bio, imagePath }: TeamMemberProps) => {
  return (
    <div className="bg-bgLight rounded-lg overflow-hidden border border-white/10 transition-all hover:border-primaryAccent/50">
      <div className="relative h-64 w-full">
        <Image 
          src={imagePath} 
          alt={name} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl mb-1">{name}</h3>
        <p className="text-primaryAccent mb-4">{role}</p>
        <p className="text-textMedium">{bio}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Rishav",
      role: "Founder & Lead Engineer",
      bio: "With over 8 years of experience in software development and AI integration, Rishav leads our technical strategy and implementation. His expertise spans full-stack development, AI agent architecture, and cloud infrastructure.",
      imagePath: "/images/team/rishav.jpg"
    },
    {
      name: "Aisha",
      role: "AI Solutions Architect",
      bio: "Aisha specializes in designing intelligent systems that solve real business problems. With a background in machine learning and natural language processing, she ensures our AI agents are both powerful and practical.",
      imagePath: "/images/team/aisha.jpg"
    },
    {
      name: "Marcus",
      role: "UX/UI Designer",
      bio: "Marcus crafts intuitive interfaces that make complex AI capabilities accessible to everyone. His human-centered design approach ensures our solutions are not just smart but also a joy to use.",
      imagePath: "/images/team/marcus.jpg"
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="font-heading text-4xl text-center mb-4">Meet Our Brew Masters</h2>
        <p className="text-textMedium text-center max-w-2xl mx-auto mb-12">
          Our team combines deep technical expertise with business acumen to deliver AI solutions that drive real results
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imagePath={member.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
