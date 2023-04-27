import React, { useState } from 'react'
import BlogSingleCard from './BlogSingleCard'
import { Pagination } from 'react-pagination-bar';
import { Form } from 'react-bootstrap';

function BlogSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const pagePostsLimit = 12;
    const blogs = [
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        },
        {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        }, {
            img: "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/04/0449e5c2-metabolic-age-featured-221210-mindvalley-daveasprey-30-%C2%A9andrewburns-344x344.jpg",
            title: "Transform Your Health by Understanding Your Metabolic Age",
            cat: "Performance",
            author: "Tatiana Amzan",
            min: "10",
            date: "April 25,2023"
        }
    ]
    return (
        <div className='my-5 container'>
            <h2 className='text-center'>Latest articles</h2>
            <div className='d-flex justify-content-start mt-4 mb-4' style={{width:"300px"}}>
                <Form.Select aria-label="Default select example">
                    <option>Select Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className="row justify-content-start">

                {blogs
                    .slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
                    .map((blog, i) => (
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-5" key={i}>
                            <BlogSingleCard data={blog} />
                        </div>
                    ))}

                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={pagePostsLimit}
                    onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
                    totalItems={blogs.length}
                    pageNeighbours={2}
                    withProgressBar
                />
                {/* {blogs.map((blog, i) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-5" key={i}>
                        <BlogSingleCard data={blog} />
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default BlogSection