import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingData from './data/listingData.js'

class App extends Component {

  constructor () {
    super()
    this.state = {
      listingData,
      city: 'All',
      homeType: 'All',
      rooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_sqft: 0,
      max_sqft: 50000,
      elevator: false,
      pool: false,
      basement: false,
      gym: false,
      filteredData: listingData,
      formData: '',
      sortby: 'price-asc',
      view: 'box',
      search: ''
    }

    //bind methods
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount() {
    var listingdata = this.state.listingData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingData
    })
  }

  //handle form data changes
  change(event) {
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(name)
      this.changeView('box')
      this.filteredData()
    })
  }

  //view change button
  changeView(viewName) {

    this.setState({
      view: viewName
    })
  }

  //use form info to filter view
  filteredData() {
    var newData = this.state.listingData.filter((item) => {
      return (item.price >= this.state.min_price) && (item.price <= this.state.max_price) && (item.sqft >= this.state.min_sqft) && (item.sqft <= this.state.max_sqft)
    })

    if (this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if (this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }

    if (this.state.rooms != "0") {
      newData = newData.filter((item) => {
        return item.rooms >= this.state.rooms
      })
    }

    if (this.state.elevator) {
      newData = newData.filter((item) => {
        return item.extras.includes('elevator')
      })
    }

    if (this.state.pool) {
      newData = newData.filter((item) => {
        return item.extras.includes('pool')
      })
    }

    if (this.state.basement) {
      newData = newData.filter((item) => {
        return item.extras.includes('basement')
      })
    }

    if (this.state.gym) {
      newData = newData.filter((item) => {
        return item.extras.includes('gym')
      })
    }

    if (this.state.sortby == 'price-dsc') {
      newData.sort((a,b) => {
        return b.price - a.price
      })
    } else if (this.state.sortby == 'price-asc') {
      newData.sort((a,b) => {
        return a.price - b.price
      })
    }

    if (this.state.search != '') {
      newData = newData.filter((item) => {
        var searchText = this.state.search.toLowerCase()
        var location = item.address.toLowerCase() + item.city.toLowerCase()
        var result = location.match(searchText)

        if (result != null) {
          return true
        }
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  //get form data from listing data
  populateForms() {
    //city
    var cities = this.state.listingData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]
    cities.sort()

    //homeType
    var homeTypes = this.state.listingData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes.sort()

    //bedrooms
    var bedrooms = this.state.listingData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms.sort()

    this.setState({
      formData: {
        cities,
        homeTypes,
        bedrooms
      }
    }, () => {
      console.log(this.state.formData)
    })
  }

  render () {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} populateForms={this.populateForms}/>
          <Listings listingData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView}/>
        </section>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
