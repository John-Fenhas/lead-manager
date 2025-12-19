import Footer from "./footer";
import Header from "./header";
import HeroSection from "./hero-section";



export default function HomePage({ onSignIn, onSignUp }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header onSignIn={onSignIn} onSignUp={onSignUp} />
      <HeroSection onSignIn={onSignIn} onSignUp={onSignUp} />
      <Footer />
    </div>
  );
}
