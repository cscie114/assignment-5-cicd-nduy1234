import * as React from "react"
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout'
 
const Parkaz = ({ data }) => {
const parks = data.allPark.nodes;
return (
        <Layout pageTitle="National Parks in AZ">
            <ul>
            {parks.map((park) => {
            return (
            <li key= {park.parkCode}> 
            <Link to={"/parks/"+park.parkCode}>{park.fullName}
            
            </Link> 
            </li>) 
            })} 
            </ul>
        </Layout>
    )
}

export const query = graphql`
        query MyQuery {
            allPark {
              nodes {
                fullName
                parkCode
                description
                images {
                  title
                  url
                }
              }
            }
        }   
`

export default Parkaz
