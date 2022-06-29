import classes from "./Projects.module.css";

function Projects() {
  return (
    <>
      <div className={classes.flexcontainer}>
        <a href='https://github.com/jacabdz/jose-homepage'>
          <h2>Homepage project</h2>
          <p>Source for this homepage project.</p>
        </a>
        <a href='https://github.com/jacabdz/E-Commerce-webapp-template'>
          <h2>ECommerce Template</h2>
          <p>Template for an E-Commerce website.</p>
        </a>
        <a href='https://github.com/jacabdz/userAccountAPI'>
          <h2>User Account API</h2>
          <p>API example, logs transactions and keeps track of account information</p>
        </a>
      </div>
    </>
  );
}
export default Projects;
