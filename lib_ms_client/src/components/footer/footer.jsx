import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className={`bg-indigo-700 text-white px-8 py-10 flex justify-between sm:flex-row flex-col gap-3`}>
      <div>
        <h3 className={`font-bold text-lg`}>Contact Us</h3>
        <ul>
          <li>
            Email:&nbsp;
            <Link to={`mailto:library@cuchd.in`}>library@cuchd.in</Link>
          </li>
          <li>
            Phone:&nbsp;
            <Link to={`tel:+91-1234567890`}>+91-1234567890</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={`font-bold text-lg`}>Quick Links</h3>
        <ul>
          <li>
            <Link to={`/faqs`}>FAQs</Link>
          </li>
          <li>
            <Link to={`/rules`}>Library Rules</Link>
          </li>
          <li>
            <Link to={`/e-resources`}>E-Resources</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={`font-bold text-lg`}>Follow Us</h3>
        <ul>
          <li>
            <Link to={`https://www.facebook.com/chandigarhuniversitygharuan/`}>
              Facebook
            </Link>
          </li>
          <li>
            <Link to={`https://x.com/Chandigarh_uni/?mx=2`}>Twitter</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
