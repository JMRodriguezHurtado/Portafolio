import 'bootstrap/dist/css/bootstrap.min.css'; 
import react2 from '../../public/assets/react2.svg';
import javascript from '../../public/assets/javascript.svg';
import mongodb from '../../public/assets/mongodb.svg';
import nodejs from '../../public/assets/nodejs.svg';
import oracle from '../../public/assets/oracle.svg';
import postgresql from '../../public/assets/postgresql.svg';
import typescript from '../../public/assets/typescript.svg';
import vue from '../../public/assets/vue.svg';


function Skills() {
    const skills = [
      { name: 'React', icon: react2 },
      { name: 'JavaScript', icon: javascript },
      { name: 'MongoDB', icon: mongodb },
      { name: 'Node.js', icon: nodejs },
      { name: 'Oracle', icon: oracle },
      { name: 'PostgreSQL', icon: postgresql },
      { name: 'TypeScript', icon: typescript },
      { name: 'Vue', icon: vue },
    ];
  
    return (
      <div className="container mt-5">
        <h2 className="text-white text-center mb-4">Skills</h2>
        <div className="row row-cols-2 row-cols-md-4">
          {skills.map((skill, index) => (
            <div key={index} className="col mb-4">
              <div className="card h-100">
                <img src={skill.icon} className="card-img-top" alt={skill.name} />
                <div className="card-body">
                  <h5 className="card-title">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Skills;