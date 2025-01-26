import TabIcon from "@/components/TabIcon"
import { icons } from "@/constants"
import { Tabs } from "expo-router"


const Layout = () =>{
    
    return(
        <Tabs
            initialRouteName="home"
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:'white',
                tabBarInactiveTintColor:'white',
                tabBarShowLabel:false,
                tabBarStyle:{
                    backgroundColor:'#333333',
                    borderRadius:50,
                    marginBottom:20,
                    marginHorizontal:20,
                    height:68,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                 
                }
            }}
        >
                <Tabs.Screen name="home" options={{title:'Home',tabBarIcon:({focused})=>(<TabIcon focused={focused} source={icons.home}/>)}}/>
                <Tabs.Screen name="rides" options={{title:'Rides',tabBarIcon:({focused})=>(<TabIcon focused={focused} source={icons.list}/>)}}/>
                <Tabs.Screen name="chat" options={{title:'Chat',tabBarIcon:({focused})=>(<TabIcon focused={focused} source={icons.chat}/>)}}/>
                <Tabs.Screen name="profile" options={{title:'Profile',tabBarIcon:({focused})=>(<TabIcon focused={focused} source={icons.profile}/>)}}/>

        </Tabs>
    )
}

export default Layout