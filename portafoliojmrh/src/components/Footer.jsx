import linkedInIcon from "/assets/linkedInIcon.svg";
import Githubicon from "/assets/Githubicon.png";

const Footer = () => {
    return (
      <footer className="text-white p-4 text-center">
        <p>&copy; JMRH Dev 2023 inc. All rights reserved</p>
        <div>
          <a href="https://www.linkedin.com/in/juan-manuel-rodriguez-hurtado-87b531164/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <img src={linkedInIcon} alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/JMRodriguezHurtado" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <img src={Githubicon} alt="Github" className="icon" />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;