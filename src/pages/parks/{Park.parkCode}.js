import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import Park from '../../components/park'

const ParkPage = ({ data, pageContext }) => {
const {allPark} = data;
const park = allPark.nodes[0];
    return (
        <Layout pageTitle={park.fullName}>
        <div>
        <Park park={park}></Park>    
        </div>
        </Layout>
    )
  }

export const query = graphql`
query ($parkCode: String) {
    allPark(filter: {parkCode: {eq: $parkCode}}) {
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
  }`


export default ParkPage