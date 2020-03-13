import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings = this.loopListings.bind(this)
    this.displayListing = this.displayListing.bind(this)
  }

  loopListings () {
    var {listingData} = this.props

    if (listingData == undefined || listingData.length == 0) {
      return "Sorry, no matching results found."
    }

    return listingData.map((listing, index) => {

      if (this.props.globalState.view == 'box') {

        // NORMAL BOX VIEW
        return (
          <div className="col-md-3" key={index}>
            <div className="listing" >
              <div className="listing-img" style={{background: `url("${listing.img}") no-repeat center center`}}>
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="user-img"></div>
                  <div className="user-details">
                    <span className="username">Jordan Hewitt</span>
                    <span className="post-date">6/23/1989</span>
                  </div>
                  <div className="listing-details">
                    <div className="sqft">
                      <i className="fa fa-square-o" aria-hidden="true"></i>
                      <span>{listing.sqft}ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>{listing.rooms} bedrooms</span>
                    </div>
                  </div>

                  <div className="view-btn" onClick={this.props.changeView.bind(null, listing)}>
                    View Listing
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${new Intl.NumberFormat().format(listing.price)}</span>
                <span className="area"><i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city} {listing.state}</span>
              </div>
            </div>
          </div>
        )

      } else if (this.props.globalState.view == 'long') {

        // WIDE VIEW
        return (
          <div className="col-md-12 col-lg-6" key={index}>
            <div className="listing" >
              <div className="listing-img" style={{background: `url("${listing.img}") no-repeat center center`}}>
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="user-img"></div>
                  <div className="user-details">
                    <span className="username">Jordan Hewitt</span>
                    <span className="post-date">6/23/1989</span>
                  </div>
                  <div className="listing-details">
                    <div className="sqft">
                      <i className="fa fa-square-o" aria-hidden="true"></i>
                      <span>{listing.sqft}ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>{listing.rooms} bedrooms</span>
                    </div>
                  </div>

                  <div className="view-btn" onClick={this.props.changeView.bind(null, listing)}>
                    View Listing
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${new Intl.NumberFormat().format(listing.price)}</span>
                <span className="area"><i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city} {listing.state}</span>
              </div>
            </div>
          </div>
        )
      }
    })
  }

  displayListing(listing) {
  return (
    <section id="listings">

      <section className="search-area">
        <input type="text" name="search" placeholder="Search..." onChange={this.props.change}/>
      </section>

      <section className="sortby-area">
        <div className="resultnum">{this.props.listingData.length} results found</div>

        <div className="sort-options">
          <select name="sortby" className="sortby" onChange={this.props.change}>
            <option value="price-asc">Lowest Price</option>
            <option value="price-dsc">Highest Price</option>
          </select>

          <div className="view">
            <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeView.bind(null, "long")}></i>
            <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
          </div>
        </div>
      </section>

      <div className="listingView">
        <div className="title">{listing.address}, {listing.city}, {listing.state}</div>

        <div className="price">${new Intl.NumberFormat().format(listing.price)}</div>

        <div className="image">
          <img src={listing.img} />
        </div>

        <div className="details">
          <ul>
            <li>{listing.homeType}</li>
            <li>{listing.rooms} bedrooms</li>
            <li>{listing.sqft}ft&sup2;</li>
            <li>{listing.extras.join(', ')}</li>
          </ul>
        </div>

        <div className="row">
          <div className="return-btn" onClick={this.props.changeView.bind(null, 'box')}>
            Return
          </div>
        </div>
      </div>
    </section>
  )
}

  render () {
    if (this.props.globalState.view != 'box' && this.props.globalState.view != 'long') {

      // DISPLAY LISTING
      return this.displayListing(this.props.globalState.view)


    } else {

      // DISPLAY ALL
      return (
        <section id="listings">

          <section className="search-area">
            <input type="text" name="search" placeholder="Search..." onChange={this.props.change}/>
          </section>

          <section className="sortby-area">
            <div className="resultnum">{this.props.listingData.length} results found</div>

            <div className="sort-options">
              <select name="sortby" className="sortby" onChange={this.props.change}>
                <option value="price-asc">Lowest Price</option>
                <option value="price-dsc">Highest Price</option>
              </select>

              <div className="view">
                <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeView.bind(null, "long")}></i>
                <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
              </div>
            </div>
          </section>

          <section className="results">

          <div className="row">
            {this.loopListings()}
          </div>

          </section>

          <section id="pagination">
            <div className="row">
              <ul className="numbers">
                <li>Prev</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Next</li>
              </ul>
            </div>
          </section>

        </section>
      )
    }
  }
}
