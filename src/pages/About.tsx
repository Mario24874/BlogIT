import AboutImage from '../assets/About.png';
import Mosaic1Image from '../assets/Mosaic1.png';
import Mosaic2Image from '../assets/Mosaic2.png';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Nosotros</h1>
      <img src={AboutImage} alt="About" className="mx-auto mb-8 w-68 rounded" /> 
      <p className="text-gray-800">
      BlogIT nace como un faro digital comprometido con la difusión y democratización del conocimiento tecnológico. Con una misión clara y ambiciosa, este espacio virtual se erige como una plataforma integral destinada a difundir, informar, opinar y analizar el vasto y dinámico universo de la tecnología contemporánea. Su propósito fundamental trasciende la mera transmisión de información, buscando generar un ecosistema de discusión, reflexión y aprendizaje continuo sobre las innovaciones, tendencias, investigaciones y desarrollos que conforman el panorama tecnológico actual.
      </p>
      <img src={Mosaic1Image} alt="Mosaic1" className="mx-auto mt-8 mb-8 w-68 rounded" /> 
      <p className="text-gray-800">
      Más allá de ser un simple repositorio de noticias, BlogIT se posiciona como una referencia comprometida con la divulgación responsable, promoviendo no sólo el conocimiento técnico sino también la reflexión ética sobre el uso y la implantación de las tecnologías emergentes. Con un enfoque holístico, el blog pretende ofrecer contenidos que incluyan reseñas especializadas, análisis en profundidad, consejos prácticos, asesoramiento estratégico y una visión crítica que fomente las buenas prácticas tecnológicas, contribuyendo así a formar una comunidad digital más informada, crítica y consciente de los impactos y el potencial de la revolución tecnológica contemporánea.
      </p>
      <img src={Mosaic2Image} alt="Mosaic2" className="mx-auto mt-8 mb-8 w-68 rounded" /> 
    </div>
  );
};

export default About;