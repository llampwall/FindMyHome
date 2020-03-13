import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }

    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }

  componentWillMount() {
    this.props.populateForms()
  }

  cities() {
    if (this.props.globalState.formData.cities != undefined) {
      var { cities } = this.props.globalState.formData
      return cities.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  homeTypes() {
    if (this.props.globalState.formData.homeTypes != undefined) {
      var { homeTypes } = this.props.globalState.formData
      return homeTypes.map((item) => {
        var itemCapitalized = item.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())
        return (
          <option key={item} value={item}>{itemCapitalized}</option>
        )
      })
    }
  }

  bedrooms() {
    if (this.props.globalState.formData.bedrooms != undefined) {
      var { bedrooms } = this.props.globalState.formData
      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>{item}+ BD</option>
        )
      })
    }
  }

  render () {
    return (
      <section id="filter">
        <h4>Filter</h4>
        <div className="inside">
          <label htmlFor="city">City</label>
          <select name="city" className="filters city" onChange={this.props.change}>
            <option value="All">All</option>
            {this.cities()}
          </select>

          <label htmlFor="homeType">Style</label>
          <select name="homeType" className="filters homeType" onChange={this.props.change}>
            <option value="All">All</option>
            {this.homeTypes()}
          </select>

          <label htmlFor="rooms">Bedrooms</label>
          <select name="rooms" className="filters rooms" onChange={this.props.change}>
            <option value="0">0+</option>
            {this.bedrooms()}
          </select>

          <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min_price" className="min_price" placeholder="min" onChange={this.props.change} value={this.props.globalState.min_price}/>
            <input type="text" name="max_price" className="max_price" placeholder="max" onChange={this.props.change} value={this.props.globalState.max_price}/>
          </div>

          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min_sqft" className="min_sqft" placeholder='min' onChange={this.props.change} value={this.props.globalState.min_sqft}/>
            <input type="text" name="max_sqft" className="max_sqft" placeholder='max' onChange={this.props.change} value={this.props.globalState.max_sqft}/>
          </div>

          <div className="filters extras">
            <span className="title">Facilities</span>
            <label htmlFor="extras">
              <span>Elevators</span>
              <input type="checkbox" value="elevator" name="elevator" onChange={this.props.change}/>
            </label>
            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input type="checkbox" value="pool" name="pool" onChange={this.props.change}/>
            </label>
            <label htmlFor="extras">
              <span>Basement</span>
              <input type="checkbox" value="basement" name="basement" onChange={this.props.change}/>
            </label>
            <label htmlFor="extras">
              <span>Gym</span>
              <input type="checkbox" value="gym" name="gym" onChange={this.props.change}/>
            </label>
          </div>
        </div>

      </section>
    )
  }
}
