import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import StoriesCard from './StoriesCard'
import { Pagination } from "react-pagination-bar"

function Stories() {
    const [currentPage, setCurrentPage] = useState(1);
    const pagePostsLimit = 5;
    const posts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
        { id: 4, title: 'Post 4' },
        { id: 5, title: 'Post 5' },
        { id: 6, title: 'Post 6' },
        { id: 7, title: 'Post 7' },
        { id: 8, title: 'Post 8' },
        { id: 9, title: 'Post 9' },
        { id: 10, title: 'Post 10' },
        { id: 11, title: 'Post 11' },
        { id: 12, title: 'Post 12' },
    ];
    return (
        <>
            <div>
                <div className='row justify-content-between align-items-center mt-4'>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                        <p className='white-color' style={{ fontSize: "1.1rem" }}>
                            Stories are from people whose lives changed because of this program. <span style={{ color: "#9b37f2" }}>Share your story</span>
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4">

                        <div className='row justify-content-end align-items-center'>
                            <div className="col-sm-12 col-md-4">
                                <span className='white-color'>Read stories</span>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <Form.Select aria-label="Default select example">
                                    <option>All Countries</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </div>

                    </div>

                    {posts
                        .slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
                        .map((post) => (
                            <div className='col-12'>
                                <StoriesCard
                                    src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                                    text={"Since I discovered The 6 phase Meditation I start my day with this practice, that is now a fundamental part of my daily routine. Not only me but also my family noticed the before-after difference in me. This meditation helped me to manage my emotions better, be more compassionate, connect..."}
                                    title={"“Not only me but also my family noticed the before-after difference in me”"}
                                    name={"Maria Elena Pàmies Lafuente"}
                                    job={"Life Coach"}
                                    address={"Tarragona, Spain"}
                                />
                            </div>
                        ))}
                    
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={pagePostsLimit}
                        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
                        totalItems={posts.length}
                        pageNeighbours={2}
                    />

                </div>
            </div>
            {/* <PaginatedItems itemsPerPage={10} /> */}

        </>
    )
}

export default Stories