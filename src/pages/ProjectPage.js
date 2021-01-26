import React from 'react';
import { useParams } from 'react-router-dom';

import './ProjectPage.css';

const projects = [
     {
          number: "WOTA-0001",
          name: "Test ticket 1",
          author: "Chaps",
          status: "Open",
          description: "This is just a test ticket with no real valuable data in it"
     },
     {
          number: "WOTA-0002",
          name: "Test ticket 2",
          author: "Chaps",
          status: "Closed",
          description: "This is just a test ticket with no real valuable data in it"
     },
     {
          number: "WOTA-0003",
          name: "Test ticket 3",
          author: "Chaps",
          status: "Closed",
          description: "This is just a test ticket with no real valuable data in it"
     },
     {
          number: "WOTA-0004",
          name: "Test ticket 4",
          author: "Chaps",
          status: "Closed",
          description: "This is just a test ticket with no real valuable data in it"
     }
];

const ProjectPage = props => {
     const projectID = useParams().projectID;

     const foundProject = projects.find(project => project.number === projectID );

     return (
          <div className="project">
               <h2>{foundProject.number}</h2>
          </div>
     )
}

export default ProjectPage;