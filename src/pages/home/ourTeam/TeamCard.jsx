// components/TeamCard.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function TeamCard({ name, role, email, image, socials }) {
  return (
    <Card className="w-full max-w-xs shadow-lg hover:scale-105 transition-transform">
      <CardContent className="flex flex-col items-center p-6">
        <img src={image} alt={name} className="w-36 h-36 rounded-full   object-center mb-4 " />
        <h3 className="text-lg font-bold text-center">{name}</h3>
        <p className="text-sm text-gray-500 text-center">{role}</p>
        <p className="text-sm text-gray-400 text-center">{email}</p>
        <div className="flex gap-4 mt-4 text-blue-500">
          {socials.facebook && (
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-blue-700 transition-colors" />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-blue-700 transition-colors" />
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-700 transition-colors" />
            </a>
          )}
          {socials.email && (
            <a href={`mailto:${socials.email}`}>
              <Mail className="w-5 h-5 hover:text-blue-700 transition-colors" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
