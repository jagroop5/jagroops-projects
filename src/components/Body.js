
import { useState ,useEffect,useContext} from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./UserContext";

const resList=[
    {
          "info": {
            "id": "44021",
            "name": "Nazeer Foods",
            "cloudinaryImageId": "6aa38b251b1ee1662961a6dc19e41e95",
            "locality": "Netaji Subhash Marg",
            "areaName": "Daryaganj",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "North Indian",
              "Biryani",
              "Mughlai",
              "Snacks"
            ],
            "avgRating": 3.8,
            "parentId": "2351",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=14907615~p=1~adgrpid=14907615#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=44021~eid=42fb6c20-7ba9-466e-ad35-868ac028b4ba~srvts=1720690748800~collid=45826",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-11 22:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              "header": "30% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "30% off up to ₹75 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ]
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=44021",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        ,
        
          "info": {
            "id": "804724",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_804724.JPG",
            "locality": "Kaccha Bagh",
            "areaName": "Chandni Chowk",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Rolls & Wraps",
              "Fast Food"
            ],
            "avgRating": 4.1,
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "20+",
            "sla": {
              "deliveryTime": 48,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-11 22:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              "header": "20% OFF",
              "shortDescriptionList": [
                {
                  "discountType": "FinalPrice",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Get items under 179",
                  "discountType": "FinalPrice",
                  "operationType": "RESTAURANT"
                }
              ]
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=804724",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        ,
        
          "info": {
            "id": "253765",
            "name": "McDonald's",
            "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
            "locality": "Kumar Theatre",
            "areaName": "Chandni Chowk",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "American"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 40,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-11 22:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              "header": "30% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use MISSEDYOU",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "30% off up to ₹75 | Use code MISSEDYOU",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ]
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                      }
                    }
                  ]
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "3.8",
                "ratingCount": "1K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=253765",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        ,
        
          "info": {
            "id": "642951",
            "name": "Social",
            "cloudinaryImageId": "vcrqkiimqbszigatwroq",
            "locality": "Civil Lines",
            "areaName": "Alipur Road",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Fast Food",
              "Biryani",
              "Pizzas",
              "Salads",
              "Kebabs",
              "Juices",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "2146",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "promoted": true,
            "adTrackingId": "cid=15065533~p=3~adgrpid=15065533#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=642951~eid=be7a39d3-95e7-4573-9fb1-435f3a2d70cc~srvts=1720690748801~collid=45826",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 3.6,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "3.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-11 23:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ]
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.2",
                "ratingCount": "100+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=642951",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        ,}
  ];
const Body=()=>{
  const[ListOfReastraurants,setListOfRestraurants]=useState([]);
  const[searchText,setsearchText]=useState("");//empty string
  const [filteredRestaurant,setfilteredRestaurant]=useState([]);
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
  console.log("body.rendered",ListOfReastraurants  )
  useEffect(()=>{
fetchData();
  },[]);
  const fetchData=async()=>{
    const data=await fetch
    (
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      
      );
  
    const json=await data.json();
    console.log(json);
    setListOfRestraurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
const OnlineStatus=useOnlineStatus();
if(OnlineStatus==false)

  return(
<h1>you are offline Pls check your internet connection</h1>);
const{setUserName,loggedInUser}=useContext(UserContext);
       
    return ListOfReastraurants.length==0 ?(<Shimmer/> ): (
        <div className="body">
           <div className="filter flex ">
<div className="search m-4  p-2 flex  " >
  <input type="text"
  data-testid="searchInput"
   className="border border-solid border-black" value={searchText}
    onChange={(e)=>{//update search text
      setsearchText(e.target.value);
    }}
  /><div className="search m-4 p-4 flex items-center">
  <button   className="px-4 py-2 bg-green-200 m-4 rounded-lg "
   onClick={()=>{
console.log(searchText); 
const filteredRestaurant= ListOfReastraurants.filter((res)=>res.info.name.toLowerCase().includes( searchText.toLowerCase()));
setfilteredRestaurant(filteredRestaurant);
  }}>search</button>
  </div>
</div>
        <div className="search m-4 p-4 flex items-center">   <button className="px-4 py-2 h-1 bg-gray-100 rounded-lg border border-solid border-black" onClick={()=>{
const filteredList=ListOfReastraurants.filter((res)=>res.info.avgRating>4);
setListOfRestraurants(filteredList);
            }}>top rated restaurants</button>
            </div> 
            <div className="search m-4 p-4 flex items-center">
            <label>UserName</label>
              <input className=" p-2 border border-black "
              value={loggedInUser}
               onChange={(e)=>{
                 setUserName(e.target.value )
              }}></input>
            </div>
           </div>
            <div className=" flex flex-wrap">
            {
              filteredRestaurant.map((restaurant)=>(
                   <Link 
                   key={restaurant.info.id}
                   to={"/restaurants/id"+restaurant.info.id}> 

{
  restaurant.info.isOpen?(<RestaurantCardPromoted resData={restaurant}/> ):(<RestaurantCard  resData={restaurant.info}/>)
}
                   </Link> 
                ))
            }
       </div>
        </div>
    );
    };
export default Body;