import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'
import React, { useEffect, useState } from 'react'
import { calculateRegion, generateMarkersFromData } from '@/lib/map'
import { useDriverStore, useLocationStore } from '@/store'
import { MarkerData } from '@/types/type'
import { icons } from '@/constants'

const Drivers  = [
    {
        "driver_id": 1,
        "first_name": "James",
        "last_name": "Wilson",
        "profile_image_url": "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
        "car_image_url": "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
        "car_seats": 4,
        "rating": 4.80
    },
    {
        "driver_id": 2,
        "first_name": "David",
        "last_name": "Brown",
        "profile_image_url": "https://ucarecdn.com/6ea6d83d-ef1a-483f-9106-837a3a5b3f67/-/preview/1000x666/",
        "car_image_url": "https://ucarecdn.com/a3872f80-c094-409c-82f8-c9ff38429327/-/preview/930x932/",
        "car_seats": 5,
        "rating": 4.60
    },
    {
        "driver_id": 3,
        "first_name": "Michael",
        "last_name": "Johnson",
        "profile_image_url": "https://ucarecdn.com/0330d85c-232e-4c30-bd04-e5e4d0e3d688/-/preview/826x822/",
        "car_image_url": "https://ucarecdn.com/289764fb-55b6-4427-b1d1-f655987b4a14/-/preview/930x932/",
        "car_seats": 4,
        "rating": 4.70
    },
    {
        "driver_id": 4,
        "first_name": "Robert",
        "last_name": "Green",
        "profile_image_url": "https://ucarecdn.com/fdfc54df-9d24-40f7-b7d3-6f391561c0db/-/preview/626x417/",
        "car_image_url": "https://ucarecdn.com/b6fb3b55-7676-4ff3-8484-fb115e268d32/-/preview/930x932/",
        "car_seats": 4,
        "rating": 4.90
    }
] 
const Map = () => {
    const {userLatitude,userLongitude,destinationLatitude,destinationLongitude} = useLocationStore()
   const{selectedDriver,setDrivers}=  useDriverStore()
   const[markers,setMarkers] = useState<MarkerData[]>([])
    const region = calculateRegion({userLongitude:userLongitude,userLatitude:userLatitude,destinationLatitude:destinationLatitude,destinationLongitude:destinationLongitude})

 useEffect(()=>{
    if(Array.isArray(Drivers)){
        if(!userLongitude || !userLatitude){
            return
        }
        const newMarkers = generateMarkersFromData({data:Drivers,userLatitude:userLatitude,userLongitude:userLongitude})
       
        setMarkers(newMarkers)
    }

 },[])   

  return (
    <View style={{flex:1,width:Dimensions.get('screen').width*0.95}}>
        <MapView            
            provider={PROVIDER_GOOGLE}
            tintColor='black'
            mapType="mutedStandard"
            showsPointsOfInterest={false}
            initialRegion={region}
            showsUserLocation={true}
            userInterfaceStyle='light'
            style={{position:'absolute',top:0,left:0,right:0,bottom:0}}
        >
           {
             markers.map((marker,index)=>(
                <Marker
                    key={index}
                    coordinate={{
                        latitude:marker.latitude,
                        longitude:marker.longitude,
                    }}
                 >
                    <View style={{position:'absolute'}}>
                        <Image source={require('../assets/icons/selected-marker.png')} style={{width:35,height:35}}/>
                    </View>
                </Marker>
             ))
           }
        </MapView>
        
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})