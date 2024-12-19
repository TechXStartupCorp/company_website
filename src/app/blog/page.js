import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const page = () => {
  return (
    <div className="section">
       <Container>
       <h3 className="xtraBold">Insights from the TechX Team</h3>
       <p className="mt-3">Insights, ideas, and stories to inspire and inform.</p>
       <h5 className="xtraBold mt-5">Recent posts</h5>
       <Row>
        <Col><div className="d-flex flex-columm">
            <small>Tatyana Karlen - Jul 15</small>
            <h6>Common reasons for startup applications get rejected</h6>
            <p>Brief synopsis here, with a link pointing to article below</p>
            <span className="bg-warning">Read more</span>
        </div>
        
        </Col>
        <Col></Col>
       </Row>
       
       </Container>
    
    </div>
  )
}

export default page
