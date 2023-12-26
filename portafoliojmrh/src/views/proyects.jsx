import 'bootstrap/dist/css/bootstrap.min.css'; 

function Projects() {
  return (
    <div className="row mt-5">
      <div className="col-md-6 offset-md-3">
        <h2 className='text-white text-center' id="projects">My Projects</h2>
        <div className="list-group mr-100 bg-transparent">
          <a href="https://etnia.vercel.app/user" className="text-white text-center list-group-item list-group-item-action mr-4 bg-transparent">
            Etnia-Moda
          </a>
          <a href="https://elitronic.vercel.app/" className="text-white text-center list-group-item list-group-item-action mr-4 bg-transparent">
            Elitronic
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;