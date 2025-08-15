import { ContactCTA } from '../components/ContactCTA';
import { Hero } from '../components/Hero';
import { Tools } from '../components/Tools';
import { FeaturedProjects } from './FeaturedProjects';

export const IndexPage = () => {
    return (
        <>
            <Hero />
            <FeaturedProjects />
            <Tools />

            <ContactCTA />
        </>
    );
};
