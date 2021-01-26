import React from 'react';
import { Link } from 'react-router-dom'

import './dashboard.css';
import Card from '../shared/UIElements/Card';

const Dashboard = props => {

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
     return (
          <div className="dashboard">
               <div className="dashboard_projects">
                    { projects.map(project => (
                         <Link to={`/project/${project.number}`}>
                              <Card 
                                   number={project.number} 
                                   name={project.name} 
                                   author={project.author} 
                                   description={project.description} 
                                   status={project.status} />
                         </Link>
                         )
                    )}
               </div>
          </div>         
          );
}

export default Dashboard;