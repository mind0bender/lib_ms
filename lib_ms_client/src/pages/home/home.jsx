import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import ServiceCard from "../../components/serviceCard/servicecard";
import { BookOpen, IdCard, Library, LogIn } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className={`grow`}>
        <div
          className={`flex flex-col text-center items-center justify-center gap-4 px-8 py-20 bg-gradient-to-r from-purple-300 to-secondary-300`}>
          <div className={`text-3xl sm:text-4xl font-bold`}>
            Welcome to Chandigarh University Library
          </div>
          <div className={`text-lg`}>
            Your gateway to knowledge and resources
          </div>
          <input
            placeholder={`Search Catalog`}
            type="text"
            className={`bg-white border border-slate-400 py-2 px-6 rounded-full outline-none sm:w-1/2 max-w-lg`}
          />
        </div>
        <div>
          <div className={`text-3xl font-bold text-center py-8`}>
            Our Services
          </div>
          <div
            className={`flex justify-center items-center flex-wrap px-8 md:px-16 pb-8 gap-8`}>
            <ServiceCard
              icon={<LogIn />}
              title={`Check-in/out`}
              description={`Streamlined process for entering and exiting the library`}
            />
            <ServiceCard
              icon={<BookOpen />}
              title={`Browse Books`}
              description={`Explore our vast collection of physical and digital books`}
            />
            <ServiceCard
              icon={<Library />}
              title={`Issue & Return`}
              description={`Easily borrow and return books with our efficient system`}
            />
            <ServiceCard
              icon={<IdCard />}
              title={`Membership Management`}
              description={`Explore our vast collection of physical and digital books`}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
