import logo from '../../assets/trustUpLogo.png';
import { View, Image, StyleSheet } from 'react-native';

export default function Loader() {
  return (
    <>
      <section className="absolute left-[50%] top-[50%] z-50 flex h-40  w-40 origin-center -translate-x-[50%]  -translate-y-[50%] rotate-180 justify-center">
        <div className=" absolute h-20 w-20  animate-spin self-center rounded-full  border-4 border-gray-200 border-t-yellow-500 ease-in [animation-timing-function:ease-in]"></div>
        <div className="absolute z-30 h-12 w-12 animate-spin-reverse self-center  rounded-full border-4 border-gray-200 border-t-green-500 ease-in  [animation-timing-function:ease-in]"></div>
        <div className="absolute h-4 w-4 translate-y-[40px] animate-pulse-scale self-center">
          <View style={styles.container}>
            <Image
              src={logo}
              source={require('assets/trustUpLogo.png')}
              className="rotate-180 rounded-full"
              style={styles.image}
            />
          </View>
        </div>
      </section>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateY(-10px)',
  },
  image: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
});
