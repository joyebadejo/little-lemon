import SpecialsSection from "./blocks/SpecialsSection"
import CustomersSay from "./blocks/CustomersSay"
import HeroSection from "./blocks/HeroSection"
import About from "./blocks/About"

export default function Homepage (){

    return (
        <>
            <HeroSection />
            <SpecialsSection />
            <CustomersSay />
            <About />
        </>
    )
}