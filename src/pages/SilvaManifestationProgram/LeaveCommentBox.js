import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import toast, { Toaster } from "react-hot-toast";
import { baseUrl } from "../../utils/axioscall";

function LeaveCommentBox({ data }) {
 // console.log(data);
  const [commentData, setCommentData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
  });

  const [validEmail, setValidEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value,
    });
  };

  useEffect(() => {
    const EmailRegex =
      /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const result = EmailRegex.test(commentData.email);
    //console.log(result);
    setValidEmail(result);
  }, [commentData.email]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    //console.log(commentData);
    const myHeaders = new Headers();
    myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
    myHeaders.append("Device", "Android");
    myHeaders.append("Language", "english");

    const formData = new FormData();
    formData.append("course_id", data && data.course_id);
    formData.append("comment_id", Date.now());
    formData.append("comment", commentData.comment);
    formData.append("name", commentData.name);
    formData.append("email", commentData.email);
    formData.append("website", commentData.website);

    const options = {
      method: "POST",
      headers: myHeaders,
      body: formData,
    };
    try {
    const res = await fetch(`${baseUrl}replyCourseComment`, options);
    console.log(res);
    toast.success(
        "Hey there! We have received your comment.Thanks for your valuable comment 🙂",
        {
          position: "top-center",
        }
      );
    } catch (error) {
        console.log(error);
        toast.error(
            "Something went wrong ! Please try after some time.",
            {
              position: "top-center",
            }
          );
    }

   
  };

  return (
    <div className="mt-5">
      <div className="post-comments-form">
        <form id="contacts-form" className="conatct-post-form">
          <div className="post-comments-title">
            <h2 className="white-color">Post Comments</h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-icon contacts-message">
                <textarea
                  name="comment"
                  id="comments"
                  cols="30"
                  rows="10"
                  placeholder="Your Comments...."
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="contact-icon contacts-name">
                <input
                  type="text"
                  placeholder="Your Name...."
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-xl-12">
              <div className="contact-icon contacts-email">
                <input
                  type="email"
                  placeholder="Your Email...."
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-xl-12">
              <div className="contact-icon contacts-website">
                <input
                  type="text"
                  placeholder="Your Website...."
                  name="website"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-xl-12">
              <button
                className="primary_btn theme-btn"
                type="submit"
                onClick={handleSubmitComment}
                disabled={
                  !validEmail || !commentData.comment || !commentData.name
                }
              >
                Post comment
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <Toaster /> */}
    </div>
  );
}

export default LeaveCommentBox;
