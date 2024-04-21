import * as React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="List of National Parks in AZ">
      <div>
      <Link to= "/parkaz">National Parks in AZ</Link> {" "}<br/><br/>
      <Link to= "/form">Contact Form</Link>
      </div>
      </Layout>
  )
}

export default IndexPage