webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Joe'
    };

    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateForms();
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.formData.cities != undefined) {
        var cities = this.props.globalState.formData.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'homeTypes',
    value: function homeTypes() {
      if (this.props.globalState.formData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.formData.homeTypes;

        return homeTypes.map(function (item) {
          var itemCapitalized = item.replace(/\b[a-zA-Z]/g, function (match) {
            return match.toUpperCase();
          });
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            itemCapitalized
          );
        });
      }
    }
  }, {
    key: 'bedrooms',
    value: function bedrooms() {
      if (this.props.globalState.formData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.formData.bedrooms;

        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item,
            '+ BD'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'h4',
          null,
          'Filter'
        ),
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.cities()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'homeType' },
            'Style'
          ),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'rooms' },
            'Bedrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'rooms', className: 'filters rooms', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '0' },
              '0+'
            ),
            this.bedrooms()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min_price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max_price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_sqft', className: 'min_sqft', onChange: this.props.change, value: this.props.globalState.min_sqft }),
            _react2.default.createElement('input', { type: 'text', name: 'max_sqft', className: 'max_sqft', onChange: this.props.change, value: this.props.globalState.max_sqft })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Facilities'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { type: 'checkbox', value: 'elevator', name: 'elevator', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { type: 'checkbox', value: 'pool', name: 'pool', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Basement'
              ),
              _react2.default.createElement('input', { type: 'checkbox', value: 'basement', name: 'basement', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { type: 'checkbox', value: 'gym', name: 'gym', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(77);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement('i', { className: 'fa fa-home' }),
          ' FindMyHome'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log In'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    _this.displayListing = _this.displayListing.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingData = this.props.listingData;


      if (listingData == undefined || listingData.length == 0) {
        return "Sorry, no matching results found.";
      }

      return listingData.map(function (listing, index) {

        if (_this2.props.globalState.view == 'box') {

          // NORMAL BOX VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.img + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement('div', { className: 'user-img' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'username' },
                      'Jordan Hewitt'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '6/23/1989'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'sqft' },
                      _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.sqft,
                        'ft\xB2'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.rooms,
                        ' bedrooms'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-btn', onClick: _this2.props.changeView.bind(null, listing) },
                    'View Listing'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  new Intl.NumberFormat().format(listing.price)
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'area' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ' ',
                  listing.state
                )
              )
            )
          );
        } else if (_this2.props.globalState.view == 'long') {

          // WIDE VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.img + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement('div', { className: 'user-img' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'username' },
                      'Jordan Hewitt'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '6/23/1989'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'sqft' },
                      _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.sqft,
                        'ft\xB2'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.rooms,
                        ' bedrooms'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-btn', onClick: _this2.props.changeView.bind(null, listing) },
                    'View Listing'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  new Intl.NumberFormat().format(listing.price)
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'area' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ' ',
                  listing.state
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'displayListing',
    value: function displayListing(listing) {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Search...', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'resultnum' },
            this.props.listingData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'listingView' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            listing.address,
            ', ',
            listing.city,
            ', ',
            listing.state
          ),
          _react2.default.createElement(
            'div',
            { className: 'price' },
            '$',
            new Intl.NumberFormat().format(listing.price)
          ),
          _react2.default.createElement(
            'div',
            { className: 'image' },
            _react2.default.createElement('img', { src: listing.img })
          ),
          _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                listing.homeType
              ),
              _react2.default.createElement(
                'li',
                null,
                listing.rooms,
                ' bedrooms'
              ),
              _react2.default.createElement(
                'li',
                null,
                listing.sqft,
                'ft\xB2'
              ),
              _react2.default.createElement(
                'li',
                null,
                listing.extras.join(', ')
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'return-btn', onClick: this.props.changeView.bind(null, 'box') },
              'Return'
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.globalState.view != 'box' && this.props.globalState.view != 'long') {

        // DISPLAY LISTING
        return this.displayListing(this.props.globalState.view);
      } else {

        // DISPLAY ALL
        return _react2.default.createElement(
          'section',
          { id: 'listings' },
          _react2.default.createElement(
            'section',
            { className: 'search-area' },
            _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Search...', onChange: this.props.change })
          ),
          _react2.default.createElement(
            'section',
            { className: 'sortby-area' },
            _react2.default.createElement(
              'div',
              { className: 'resultnum' },
              this.props.listingData.length,
              ' results found'
            ),
            _react2.default.createElement(
              'div',
              { className: 'sort-options' },
              _react2.default.createElement(
                'select',
                { name: 'sortby', className: 'sortby', onChange: this.props.change },
                _react2.default.createElement(
                  'option',
                  { value: 'price-asc' },
                  'Lowest Price'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'price-dsc' },
                  'Highest Price'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'view' },
                _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "long") }),
                _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "box") })
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'results' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              this.loopListings()
            )
          ),
          _react2.default.createElement(
            'section',
            { id: 'pagination' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'ul',
                { className: 'numbers' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Prev'
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'active' },
                  '1'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  '2'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  '3'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  '4'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  '5'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Next'
                )
              )
            )
          )
        );
      }
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingData = [{
  address: '950 N Kings Rd',
  city: 'West Hollywood',
  state: 'CA',
  homeType: 'mediterranean',
  rooms: 3,
  price: 320000,
  sqft: 2500,
  extras: ['elevator', 'gym'],
  img: 'https://freshome.com/wp-content/uploads/2018/09/contemporary-exterior.jpg'
}, {
  address: '12123 Texas Ave',
  city: 'Westwood',
  state: 'CA',
  homeType: 'apartment',
  rooms: 2,
  price: 125000,
  sqft: 1500,
  extras: ['pool', 'gym'],
  img: 'https://i.pinimg.com/564x/32/c1/4f/32c14ff606e5430916f8b77115baf648.jpg'
}, {
  address: '1724 N Highland Ave',
  city: 'Hollywood',
  state: 'CA',
  homeType: 'apartment',
  rooms: 4,
  price: 285000,
  sqft: 2000,
  extras: ['elevator', 'gym', 'pool'],
  img: 'https://images1.apartments.com/i2/Y1jf20gcYdk6TnpRexvKMZFlskhlzDef8A9mHp1XF1I/111/three-rivers-fort-wayne-in-primary-photo.jpg'
}, {
  address: '920 Maple St',
  city: 'Inglewood',
  state: 'CA',
  homeType: 'ranch',
  rooms: 1,
  price: 112000,
  sqft: 1200,
  extras: ['basement'],
  img: 'https://d2cc5bro5bu049.cloudfront.net/65901/26741337/large.jpg'
}, {
  address: '833 Tyburn Rd',
  city: 'Palos Verdes Estates',
  state: 'CA',
  homeType: 'mediterranean',
  rooms: 3,
  price: 450000,
  sqft: 3000,
  extras: ['pool', 'gym', 'basement'],
  img: 'https://cdn.homedit.com/wp-content/uploads/2018/08/Mediterranean-Style-Decor-Exterior.jpg'
}, {
  address: '49 Bank St',
  city: 'Troy',
  state: 'NY',
  homeType: 'tudor',
  rooms: 4,
  price: 186000,
  sqft: 2200,
  extras: [],
  img: 'http://www.angiemuldowney.com/wp-content/uploads/2011/08/photo-25.jpg'
}, {
  address: '97 State St',
  city: 'Brentwood',
  state: 'CA',
  homeType: 'ranch',
  rooms: 6,
  price: 1600000,
  sqft: 5300,
  extras: ['elevator', 'gym', 'pool', 'basement'],
  img: 'https://www.thehouseplanshop.com/userfiles/photos/large/1700323984721e2f646f3c.jpg'
}, {
  address: '1717 W 57th St',
  city: 'New York',
  state: 'NY',
  homeType: 'apartment',
  rooms: 3,
  price: 870000,
  sqft: 3000,
  extras: ['elevator', 'basement'],
  img: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56255181/GettyImages_619686566.1503067714.jpg'
}, {
  address: '2614 Blue Jay Drive',
  city: 'Beverly Hills',
  state: 'CA',
  homeType: 'mediterranean',
  rooms: 8,
  price: 4600000,
  sqft: 7700,
  extras: ['pool', 'gym'],
  img: 'https://imagez.tmz.com/image/0d/4by3/2019/07/16/0d830d0366f24735bb79a8e0fc94f649_md.jpg'
}, {
  address: '7070 Ocean Ave',
  city: 'Santa Monica',
  state: 'CA',
  homeType: 'ranch',
  rooms: 6,
  price: 5200000,
  sqft: 4400,
  extras: ['pool'],
  img: 'https://media.workandmoney.com/c0/b4/c0b48fe79c4a48879936fdb3b4289fb9.jpeg'
}, {
  address: '6544 Sunset Blvd',
  city: 'Silverlake',
  state: 'CA',
  homeType: 'tudor',
  rooms: 3,
  price: 1500000,
  sqft: 3900,
  extras: ['basement', 'pool'],
  img: 'https://st.hzcdn.com/simgs/91d13a2f022d0fe5_8-4905/traditional-exterior.jp'
}, {
  address: '186 Vista Grande Pl',
  city: 'Studio City',
  state: 'CA',
  homeType: 'apartment',
  rooms: 2,
  price: 1100000,
  sqft: 1400,
  extras: ['elevator'],
  img: 'https://cdngeneral.rentcafe.com/dmslivecafe/2/126066/1_FlashGallery.jpg'
}];

exports.default = listingData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(77);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingData = __webpack_require__(233);

var _listingData2 = _interopRequireDefault(_listingData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingData: _listingData2.default,
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
      filteredData: _listingData2.default,
      formData: '',
      sortby: 'price-asc',
      view: 'box',
      search: ''

      //bind methods
    };_this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var listingdata = this.state.listingData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingData: _listingData2.default
      });
    }

    //handle form data changes

  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(name);
        _this2.changeView('box');
        _this2.filteredData();
      });
    }

    //view change button

  }, {
    key: 'changeView',
    value: function changeView(viewName) {

      this.setState({
        view: viewName
      });
    }

    //use form info to filter view

  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.sqft >= _this3.state.min_sqft && item.sqft <= _this3.state.max_sqft;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      if (this.state.rooms != "0") {
        newData = newData.filter(function (item) {
          return item.rooms >= _this3.state.rooms;
        });
      }

      if (this.state.elevator) {
        newData = newData.filter(function (item) {
          return item.extras.includes('elevator');
        });
      }

      if (this.state.pool) {
        newData = newData.filter(function (item) {
          return item.extras.includes('pool');
        });
      }

      if (this.state.basement) {
        newData = newData.filter(function (item) {
          return item.extras.includes('basement');
        });
      }

      if (this.state.gym) {
        newData = newData.filter(function (item) {
          return item.extras.includes('gym');
        });
      }

      if (this.state.sortby == 'price-dsc') {
        newData.sort(function (a, b) {
          return b.price - a.price;
        });
      } else if (this.state.sortby == 'price-asc') {
        newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var searchText = _this3.state.search.toLowerCase();
          var location = item.address.toLowerCase() + item.city.toLowerCase();
          var result = location.match(searchText);

          if (result != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }

    //get form data from listing data

  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      //city
      var cities = this.state.listingData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));
      cities.sort();

      //homeType
      var homeTypes = this.state.listingData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes.sort();

      //bedrooms
      var bedrooms = this.state.listingData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms.sort();

      this.setState({
        formData: {
          cities: cities,
          homeTypes: homeTypes,
          bedrooms: bedrooms
        }
      }, function () {
        console.log(_this4.state.formData);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateForms: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);