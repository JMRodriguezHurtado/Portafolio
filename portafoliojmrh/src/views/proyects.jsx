import 'bootstrap/dist/css/bootstrap.min.css'; 

function Proyects () {

    return (
<div className="row mt-5">
          <div className="col-md-12">
            <h2 className= 'text-white'id="projects">My Projects</h2>
            <div className="list-group">
              <a href="https://project1.com" className="list-group-item list-group-item-action">
                Project 1
              </a>
              <a href="https://project2.com" className="list-group-item list-group-item-action">
                Project 2
              </a>
              {/* Add more project links as needed */}
            </div>
          </div>
        </div>
    )
}

export default Proyects;