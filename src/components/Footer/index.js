import { Container } from ".."
import { FaTwitter, FaGithub, FaFacebook, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { AiFillMail } from "react-icons/ai"
import { Link } from "react-router-dom"

import socials from "../../data/socials.json"
import usersInfo from "../../data/usersInfo.json"

function Footer() {
  const {
    twitter, github, email, facebook, linkedin, youtube
  } = socials.socials;
  return (
    <div id="footer" className="relative w-screen h-[35vh] py-5 px-3 bg-dark-300 ">
      <Container>
        <div className="relative flex flex-row items-center justify-center flex-wrap gap-4">
          <div className="left flex flex-row">
            <h1 className=" text-[15px] ">
              <span className="font-extrabold">{usersInfo.github_username}</span>
            </h1>
            <small className="ml-[20px] text-white-200 ">
              &copy; {new Date().getFullYear()} All Right Reserved.
            </small>
          </div>
          <div className="right">
            <div className="socials flex flex-row items-center justify-center">
              {twitter !== "" && <SocialLink url={twitter} children={<FaTwitter />} />}

              {github !== "" && <SocialLink url={github} children={<FaGithub />} />}

              {email !== "" && <SocialLink url={email} children={<AiFillMail />} />}

              {facebook !== "" && <SocialLink url={facebook} children={<FaFacebook />} />}

              { linkedin !== "" &&  <SocialLink url={linkedin} children={<FaLinkedinIn />} />}

              { youtube !== "" &&  <SocialLink url={youtube} children={<FaYoutube />} />}
            </div>
          </div>

          {/* Leave this just to give some credits about the maker */}
        </div>
      </Container>
      <Refer />
    </div>
  )
}

export default Footer

function SocialLink({ url, children }) {

  return (
    <Link to={url} target="_blank" className=" no-underline text-white-100 decoration-none hover:text-white-100 mr-4 ">
      {children}
    </Link>
  )
}

function Refer() {
  return (
    <div className="w-screen flex flex-row items-center justify-center absolute bottom-[100px] mx-auto md:bottom-[10px]">
      <span className="py-2 text-[12px] text-white-200 ">
        Created by <Link target="_blank" href="https://github.com/eugenesang/portfolio" className="text-green-200 underline hover:text-green-200">Eugene Sang</Link>
      </span>
    </div>
  )
}