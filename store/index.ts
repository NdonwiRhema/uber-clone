import { DriverStore, LocationStore, MarkerData } from '@/types/type'
import {create } from 'zustand'

export const useLocationStore = create<LocationStore>((set)=>({
   userAddress:null,
   userLatitude:null,
   userLongitude:null,
   destinationLatitude:null,
   destinationLongitude:null,
   destinationAddress:null,
   setUserLocation:({ latitude, longitude, address, }:{latitude:number,longitude:number,address:string}) =>{
        set(()=>({
            userLatitude:latitude,
            userLongitude:longitude,
            userAddress:address
        }))
       
   },
   setDestinationLocation:({latitude,longitude,address}:{latitude:number,longitude:number,address:string})=>{
    set(()=>({
        destinationLatitude:latitude,
        destinationAddress:address,
        destinationLongitude:longitude
    }))
   }
}))

export const useDriverStore = create<DriverStore>((set)=>({
    drivers:[] as MarkerData[],
    setDrivers:(drivers:MarkerData[])=>set(()=>({drivers:drivers})),
    setSelectedDriver:(driverId : number)=>set(()=>({selectedDriver:driverId})),
    selectedDriver:null,
    clearSelectedDriver:()=>set(()=>({selectedDriver:null}))
}))