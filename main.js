function Hotel(name, price, rating, location, room, availability, features) {
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.room = room;
    this.availability = availability;
    this.features = features;
    this.details = function() {
        alert(this.name + ' hotel in ' + this.location + ' is having ' + this.availability + ' ' + this.room + ' rooms available only at $' + this.price + ' per room including ' + this.features);
    };
    this.Freeavailable = function() {
        alert(this.location + ' is having ' + this.availability + ' ' + this.room + ' rooms available');
    };
}
let tokyo = new Hotel('Heaven\'s Place Tokyo', 200, 5, 'Tokyo', 'double bed', 1, ['wifi', 'parking']);
let dubai = new Hotel('Heaven\'s Place Dubai', 175, 4.7, 'Dubai', 'Single bed', 12, ['wifi', 'parking', 'Gym', 'Bar']);

function VipHotel(name, price, rating, location, room, availability, features, newprice) {
    Hotel.call(this, name, price, rating, location, room, availability, features);
    this.newprice = price * 0.8;
};
VipHotel.prototype = Object.create(Hotel.prototype);
let toronto = new VipHotel('Heaven\'s Place TC', 250, 4.9, 'Toronto', 'Single bed', 10, ['wifi', 'parking', 'Gym', 'Bar']);
class SuperHost extends Hotel {
    constructor(name, price, rating, location, room, availability, features, hostname, hostrating) {
        super(name, price, rating, location, room, availability, features);
        this.hostrating = rating;
        this.hostname = hostname;
    }
}
let host1 = new SuperHost('Heaven\'s Place Dubai', 175, 4.7, 'Dubai', 'Single bed', 12, ['wifi', 'parking', 'Gym', 'Bar'], 'Harman Gill')
    








    //   let property = {
    //   name: 'Heaven\'s Place',
    //   price: 159,
    //   rating: 4.5,
    //   location: ['Toronto', 'Barrie', 'Brampton', 'Orillia'],
    //   room: ['Single', 'Double', 'Lounge'],
    //   availability: [0,1,2,3,4,5],
    //   features: ['Parking','Wifi','Mini Bar','Gym'],
    //   description: function() {
    //     alert(property.name + ' hotel in ' + property.location[1] + ' is having ' + property.availability[2] + ' ' + property.room[2] + ' rooms available only at $' + property.price + ' per room including ' + property.features[0] + ', ' + property.features[1] + ', ' + property.features[3]);
    //   },
    //   available: function(){
    //     alert(property.location[1] + ' is having ' + property.availability[2] + ' ' + property.room[0] + ' rooms available and ' + property.location[0] + ' is having ' + property.availability[3] + ' ' + property.room[1] + ' rooms available.');
    //   }
    // };
    // let memberName = 'newlocation';
    // let memberProperty = ['Innisfil', 'Newmarket'];
    // property[memberName] = memberProperty;
    // let addFeature = 'newfeature';
    // let featureProperty = ['Free breakfast', 'Free swimming pool entry'];
    // property[addFeature] = featureProperty;
    // function addnewPlace(name) {
    //   const obj = {};
    //   obj.name = name;
    //   obj.addlocation = function() {
    //     alert('New hotel is now open in ' + name + '.'
    //       );
    //   };
    //   return obj;
    // }
    // let berlin = addnewPlace('Berlin');
    // function Place(name) {
    //   this.name = name;
    //   this.newPlace = function() {
    //     alert('New hotel is now open in ' + name + '.'
    //       );
    //   };
    // }
    // let botown = new Place('Botown');
    // console.log(property.description());
    // console.log(property.available());