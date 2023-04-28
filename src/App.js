import BgAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Timeline from './components/TimeLine/TimeLine';
import { Layout } from './layout/Layout';
import { Section } from './styles/GlobalComponents';
import {Routes, Route} from 'react-router-dom'


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Timeline />
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/projects" element = {<Projects/>} />
      <Route path="/blog" element = {<Blog/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
    </Routes>
    </Layout>
  );
};

export default Home;
