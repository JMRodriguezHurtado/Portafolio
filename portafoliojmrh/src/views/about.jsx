import 'bootstrap/dist/css/bootstrap.min.css'; 
import JMRH from '../assets/JMRH.jpg';

function About() {
  return (
    <div className="row mt-5">
      <div className="col-md-12">
        <h2 className='text-white' id="about">About Me</h2>
        <p className='text-white'>
          Juan Manuel Rodriguez Hurtado is a highly accomplished professional with a solid foundation in physics, having graduated from U.N.A.M in 2016. With a distinguished career spanning over six years, he has dedicated himself to education, imparting knowledge in physics, mathematics, and English.

          In a testament to his commitment and excellence, Juan Manuel has garnered a reputation as an outstanding teacher and worker. His proficiency extends beyond the realm of traditional academics, as he has successfully transitioned into the dynamic field of programming.

          As a versatile and dedicated individual, Juan Manuel has honed his skills in various programming languages and tools, including Java, JavaScript, C, C++, PostgreSQL, and MongoDB, among others. This diverse technical expertise positions him as a formidable candidate in the competitive landscape of full-stack development.

          Known for his linguistic prowess, Juan Manuel is fluent in Spanish, English, and Japanese, enabling him to collaborate seamlessly in multicultural and global environments. His ability to adapt, coupled with his proven track record of excellence, underscores his readiness to contribute meaningfully to the programming industry.

          With an unwavering commitment to continuous learning and a strong foundation in both education and programming, Juan Manuel Rodriguez Hurtado is poised to make significant strides as a full-stack developer, bringing a unique blend of skills, dedication, and innovation to the forefront of the programming domain.
        </p>
        <img src={JMRH} alt='JMRH' className='img-fluid w-50 mx-auto'/>
      </div>
    </div>
  );
}

export default About;