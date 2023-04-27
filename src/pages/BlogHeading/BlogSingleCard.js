import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import CategoryBtn from './CategoryBtn'

function BlogSingleCard({data}) {
  return (
    <Card style={{width:"100%",border:"none" }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body style={{textAlign:"start"}}>
        <Card.Title className='mb-3 text-dark'>
            {data.title}
        </Card.Title>
        <CategoryBtn text={data.cat} />
        <Card.Text className='mt-3 '>
          by <span>{data.author}</span> - {data.min}  mins read - {data.date}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BlogSingleCard