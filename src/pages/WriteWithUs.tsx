import WriteWithUsImage from '../assets/WriteWithUs.png';

const WriteWithUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Escriba con nosotros</h1>
      <img src={WriteWithUsImage} alt="Write with us" className="mx-auto mb-8 w-1/2 rounded" /> {/* Redondear las esquinas */}
      <p className="text-gray-800">
      Comparta sus ideas, consejos y conocimientos con nuestra comunidad!. Envíenos su artículo a <a href="mailto:blogtechnologypost@gmail.com" className="text-blue-600 hover:text-blue-800">blogtechnologypost@gmail.com</a>.
      </p>
    </div>
  );
};

export default WriteWithUs;