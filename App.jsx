import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
    return (
        <View>
            {/*header*/}
            <View style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 60,
                alignItems: 'center',
                backgroundColor: 'red',
                marginHorizontal: 16,
                marginTop: 16,
                padding: 16,
                borderRadius: 40,
            }}>
                <Image reziseMode='contain' style={{ height: 40, width: 150 }}
                    source={require('./src/assets/images/logoayam.png')} />
                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: 'white' }}>
                </View>

            </View>





            <View style={{
                flexDirection: 'row'
            }}>

                <View style={{
                    borderWidth: 1,
                    padding: 12,
                    flex: 1,
                }}>
                    <View
                        style={{
                            height: 200,
                            backgroundColor: 'green',
                        }}
                    />
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Nasi Lemak</Text>
                    <Text>Rp.15.000</Text>
                </View>

                <View style={{
                    borderWidth: 1,
                    padding: 12,
                    flex: 1,
                }}>
                    <View
                        style={{
                            height: 200,
                            backgroundColor: 'green',
                        }}
                    />
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Nasi Goreng</Text>
                    <Text>Rp.15.000</Text>
                </View>
            </View>




        </View>

    )
}

export default App