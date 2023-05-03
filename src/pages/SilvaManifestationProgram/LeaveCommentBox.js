import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import toast, { Toaster } from "react-hot-toast";
import { baseUrl } from "../../utils/axioscall";
import { requestData } from "../../utils/baseUrl";

function LeaveCommentBox({handleSubmit}) {
 // console.log(data);
//  const [options,setOptions] = useState({})
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

  return (
    <div className="mt-5">
      <div className="post-comments-form">
        <form id="contacts-form" className="conatct-post-form" onSubmit={(e)=>handleSubmit(e,commentData)}>
          <div className="post-comments-title">
            <h2 className={"white-color"}>Post Comments</h2>
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
