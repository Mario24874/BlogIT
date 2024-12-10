import AboutImage from '../assets/About.png';
import Mosaic1Image from '../assets/Mosaic1.png';
import Mosaic2Image from '../assets/Mosaic2.png';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">About Us</h1>
      <img src={AboutImage} alt="About" className="mx-auto mb-8 w-68 rounded" /> 
      <p className="text-gray-800">
        BlogIT was born as a digital beacon committed to the dissemination and democratization of technological knowledge. With a clear and ambitious mission, this virtual space stands as an integral platform aimed at disseminating, informing, giving opinions and analyzing the vast and dynamic universe of contemporary technology. Its fundamental purpose transcends the mere transmission of information, seeking to generate an ecosystem of discussion, reflection and continuous learning about the innovations, trends, research and developments that shape the current technological landscape.
      </p>
      <img src={Mosaic1Image} alt="Mosaic1" className="mx-auto mt-8 mb-8 w-68 rounded" /> 
      <p className="text-gray-800">
        Beyond being a simple repository of news, BlogIT is positioned as a reference committed to responsible disclosure, promoting not only technical knowledge but also ethical reflection on the use and implementation of emerging technologies. With a holistic approach, the blog aims to provide content that includes specialized reviews, in-depth analysis, practical tips, strategic advice and a critical view that encourages good technological practices, thus contributing to form a digital community that is more informed, critical and aware of the impacts and potential of the contemporary technological revolution.
      </p>
      <img src={Mosaic2Image} alt="Mosaic2" className="mx-auto mt-8 mb-8 w-68 rounded" /> 
    </div>
  );
};

export default About;