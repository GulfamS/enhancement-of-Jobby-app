import {BsSearch} from 'react-icons/bs'
import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }

  const enterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div className="searchinput-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={enterSearchInput}
        />
        <button
          type="button"
          className="search-btn-container"
          data-testid="searchButton"
          onClick={getJobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const onSelectEmployType = event => {
    const {changeEmployeeList} = props
    changeEmployeeList(event.target.value)
  }

  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props
    return (
      <div className="employ-container">
        <h1 className="employ-heading">Type of Employment</h1>
        <ul className="employ-list-container">
          {employmentTypesList.map(eachEmployType => (
            <li className="employ-items" key={eachEmployType.employmentTypeId}>
              <input
                type="checkbox"
                id={eachEmployType.employmentTypeId}
                className="search-input"
                onChange={onSelectEmployType}
                value={eachEmployType.employmentTypeId}
              />
              <label
                className="label"
                htmlFor={eachEmployType.employmentTypeId}
              >
                {eachEmployType.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div className="salary-container">
        <h1 className="salary-heading">Salary Range</h1>
        <ul className="salary-list-container">
          {salaryRangesList.map(eachSalary => {
            const {changeSalary} = props
            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li
                className="salary-items"
                key={eachSalary.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  type="radio"
                  className="input"
                  name="salary"
                  id={eachSalary.salaryRangeId}
                />
                <label className="label" htmlFor={eachSalary.salaryRangeId}>
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filter-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="line" />
      {renderTypeOfEmployment()}
      <hr className="line" />
      {renderSalaryRange()}
    </div>
  )
}
export default FiltersGroup
