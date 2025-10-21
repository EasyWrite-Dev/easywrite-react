import Image from "next/image";
import Hero from "./Hero";
import Feature from "./Feature";

export default function Home() {
  return (
    <div className="container mx-auto justify-center lg:w-[1200px] md:w-8/12 w-11/12 mb-10">
      <Hero />
      <div className="w-full text-center space-y-8 mt-40">
        <p className="text-[#0A2918] font-bold text-[48px]">
          What is EasyWrite?
        </p>
        <div className="flex justify-center">
          <p className="w-[60%] text-[#7A7A7A]">
            In a world saturated with AI-generated articles, genuine expertise
            stands out. Our platform is not another content writer. It's a
            strategic copilot designed to amplify your technical knowledge. We
            help you identify high-potential topics, structure your articles for
            modern search, and analyze your performance, ensuring the content
            you write demonstrates true authority and gets discovered.
          </p>
        </div>
      </div>
      <Feature />
    </div>
  );
}
