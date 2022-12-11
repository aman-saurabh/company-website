import '../styles/globals.css'
import { styles } from '../constants/style';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Business from '../components/Business';
import Billing from '../components/Billing';
import CardDeal from '../components/CardDeal';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

//For details about how to use "app" folder inplace fo pages folder check following link :
// https://beta.nextjs.org/docs/upgrade-guide
// https://beta.nextjs.org/docs/data-fetching/fundamentals

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body>
                <div className='bg-primary w-full overflow-hidden'>
                    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                        {/* <div className='sm:px-16 px-6 flex justify-center items-center'> */}
                        <div className={`${styles.boxWidth}`}>
                            <Navbar />
                        </div>
                    </div>

                    <div className={`bg-primary ${styles.flexStart}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Hero />
                        </div>
                    </div>

                    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Stats />
                            <Business />
                            <Billing />
                            <CardDeal />
                            <Testimonials />
                            <Clients />
                            <CTA />
                            <Footer />
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}