import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={`flex flex-col grow`}>
        <h1>About</h1>
        <p>Learn more about us!</p>
      </main>
      <Footer />
    </>
  );
}
