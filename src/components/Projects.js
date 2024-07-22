import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/projectImg1.png';
import projImg2 from '../assets/img/projectImg2.png';
import projImg3 from '../assets/img/projectImg3.png';
import projImg4 from '../assets/img/projectImg4.png';
import projImg5 from '../assets/img/projectImg5.png';
import projImg6 from '../assets/img/projectImg6.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Sage and Sky Mockup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Sage and Sky Mockup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Sage and Sky Mockup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Business Startup',
      description: 'Feature Design & Collaboration',
      imgUrl: projImg4,
    },
    {
      title: 'Business Startup',
      description: 'Feature Design & Collaboration',
      imgUrl: projImg5,
    },
    {
      title: 'Business Startup',
      description: 'Feature Design & Collaboration',
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Recent Projects</h2>
                  <p>
                    Below are recent projects I have been involved in. You'll
                    see projects I have had involvement in for work and
                    internships as well as projects I have taken on in my free
                    time. My passion for learning and developing my skills
                    outside of work is one of my strongest assets.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Images</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Sage and Sky Mockup
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Annie | AI</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          The Sage and Sky mockup is a site I designed,
                          developed, and deployed as an example of what I can
                          bring to the table. While lacking features, with time
                          it can be developed into a fully functional site.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          My involvement in Annie saw me designing and
                          developing features for an existing site by
                          collaborating with a small team of developers. Some
                          features I developed include: graphs, feature cards,
                          etc.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
