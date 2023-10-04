import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout =  () => {
    class App extends React.Component {
        state = {
          fontLoaded: false,
        };
      
        componentDidMount() {
          this.loadAssetsAsync();
        }
      
        async loadAssetsAsync() {
          await Font.loadAsync({
            //Load a font `Montserrat` from a static resource
            DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
            DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
            DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
          });
          this.setState({ fontLoaded: true });
        }
      
        render() {
          if (!this.state.fontLoaded) {
            return null; // render some progress indicator
          }
          return <AnyComponent />;
        }
      }
    // const [fontsLoaded] = useFonts({
    //     'DMSans-Bold' : require('../assets/fonts/DMSans-Bold.ttf'),
    //     'DMSans-Medium': require('../assets/fonts/DMSans-Medium.ttf'),
    //     'DMSans-Regular': require('../assets/fonts/DMSans-Regular.ttf'),
    // });
    // Font.loadAsync({
    //     'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf'),
    //     'DMSans-Medium': require('../assets/fonts/DMSans-Medium.ttf'),
    //     'DMSans-Regular': require('../assets/fonts/DMSans-Regular.ttf')
    // })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;


    return <Stack />;
}


export default Layout;