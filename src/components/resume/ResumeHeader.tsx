
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const ResumeHeader = () => {
  return (
    <header className="text-center pb-8 border-b border-gray-600">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="w-32 h-32 mb-4 border-4 border-gray-600 hover:border-white transition-colors">
          <AvatarImage 
            src="https://avatars.githubusercontent.com/u/53163466?s=400&u=b6e90f3237ab70e1170ebbbf498b49de9abed363&v=4" 
            alt="Al Amin Sarker"
            className="object-cover"
          />
          <AvatarFallback className="text-2xl font-bold bg-gray-800 text-white">AS</AvatarFallback>
        </Avatar>
        <h1 className="text-5xl font-bold text-white mb-2">Al Amin Sarker</h1>
        <h2 className="text-2xl font-medium text-gray-300 mb-6">Senior Web Developer</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail size={16} />
          <span>dev.alaminsarker@gmail.com</span>
        </div>
        
        <div className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone size={16} />
          <span>+880 1737 933 939</span>
        </div>
        
        <div className="flex items-center gap-2 hover:text-white transition-colors">
          <Linkedin size={16} />
          <span>linkedin.com/in/al-amin-csebd</span>
        </div>
        
        <div className="flex items-center gap-2 hover:text-white transition-colors">
          <Github size={16} />
          <span>github.com/alamin-php</span>
        </div>
      </div>
    </header>
  );
};
