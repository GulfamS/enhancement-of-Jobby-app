import {Link} from 'react-router-dom'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = jobData
  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-item">
        <div className="logo-title-location-container">
          <div className="logo-title-container">
            <img
              src={companyLogoUrl}
              className="company-logo"
              alt="company logo"
            />
            <div className="title-rating-container">
              <h1 className="title">{title}</h1>
              <div className="rating-container">
                <BsStarFill className="rating-icon" />
                <p className="rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-package-container">
            <div className="location-employ-container">
              <div className="location-container">
                <MdLocationOn className="location-icon" />
                <p className="location">{location}</p>
              </div>
              <div className="employe-type-container">
                <BsFillBriefcaseFill className="briefcase-icon" />
                <p className="employ-type">{employmentType}</p>
              </div>
            </div>
            <p className="package">{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="line" />
        <h1 className="description-heading">Description</h1>
        <p className="job-description">{jobDescription}</p>
      </li>
    </Link>
  )
}
export default JobCard
