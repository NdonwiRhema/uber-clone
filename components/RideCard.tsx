import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ride } from '@/types/type'
import { Colors } from '@/constants/Colors'
import { icons } from '@/constants'
import { formatDate, formatTime } from '@/lib/utils'

const RideCard = ({ride:{destination_address,destination_latitude,destination_longitude,driver,payment_status,origin_address,created_at,ride_time}}:{ride:Ride}) => {

    return (
   <View style={{backgroundColor:'white',paddingVertical:2,marginVertical:'3%',borderBottomColor:Colors.alphaGray,borderBottomWidth:0.25,elevation:7}}>
     <View style={styles.container}>
        <View style={styles.image}>
            <Image source={{
                width:100,
                height:100,
                uri:`https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`
               }}
            style={{borderRadius:12}}/>
            <View style={{alignItems:'flex-start'}}>
                <View style={styles.origin}>
                    <Image source={icons.to} style={{ width:15,height:15}}/>
                    <Text style={styles.locationText}>{origin_address}</Text>
                </View> 
                <View style={styles.origin}>
                    <Image source={icons.point} style={{ width:15,height:15}}/>
                    <Text style={styles.locationText} numberOfLines={1}>{destination_address}</Text>
                </View>
            </View>
        </View>
        <View style={styles.mapDetail}>
           
        </View>
     
    </View>
    <View style={styles.rideDetail}>
                <View style={styles.dateTime}>
                        <View>
                            <Text style={{color:Colors.darkGrey,fontSize:12}}>Date & Time </Text>
                        </View>
                        <View>
                            <Text style={{color:Colors.darkGrey,fontSize:12}}> {formatDate(created_at)} {formatTime(ride_time)}</Text>
                        </View>
                </View>
                <View style={styles.dateTime}>
                        <View>
                            <Text style={{color:Colors.darkGrey,fontSize:12}}>Driver </Text>
                        </View>
                        <View>
                             <Text style={{color:Colors.darkGrey,fontSize:12}}> {driver.first_name} {driver.last_name}</Text>
                        </View>
                </View>
                <View style={styles.dateTime}>
                        <View>
                            <Text style={{color:Colors.darkGrey,fontSize:12}}>Car Seats </Text>
                        </View>
                        <View>
                            <Text style={{color:Colors.darkGrey,fontSize:12}}> {driver.car_seats}</Text>
                        </View>
                </View>
                <View style={styles.dateTime}>
                        <View>
                            <Text style={{color:Colors.darkGrey,fontSize:12}}>Payment Status </Text>
                        </View>
                        <View>
                        <Text style={{color:payment_status === 'paid'?'green':Colors.darkGrey,fontSize:12, fontWeight:payment_status === 'paid'?'600':'400'}}> {payment_status}</Text>
                        </View>
                </View>
            
    </View>
  
   </View>
  )
}

export default RideCard

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:12,
        padding:5,
        marginVertical:8
    },
    image:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'70%',
        height:"auto",
        alignItems:'center'
    },
    origin:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:8
    },
    locationText:{
        fontSize:12,
        fontWeight:'500'
    },
    mapDetail:{
        width:'30%',
        
    },
    dateTime:{
        width:'100%',
        height:30,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
       
    },
    rideDetail:{
        backgroundColor:Colors.alphaGray,
        padding:10,
        height:'auto',
        marginVertical:'2%'
    }
})