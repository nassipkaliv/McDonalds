import React from "react";
import { Text, Image, TouchableHighlight, View } from 'react-native';
import { COLORS, SIZE, SIZES } from "../../constants";
import { categories } from "../../categories.js";

const Categories = () => {
  return (
    <View Style={{ paddingTop: 60}}>
      <Text 
        style={{ fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white }}>
        Hey,
      </Text>
      <Text style={{ fontSize: SIZES.h1, color: COLORS.white }}>
        What's up?
      </Text>

      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          flexWrap: 'wrap',
          jusifyContent: 'space-between',
        }}
      >
        {categories.map((cat, idx) => (
          <View 
            key={`categories ${idx}`}
            style={{
              width: '30%',
              marginBottom: 20,
            }}
          >
            <TouchableHighlight 
              underlayColor={COLORS.secondary}
              style={{
                height: 100,
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                paddingLeft: 5,
                paddingRight: 5,
                backgroundColor: COLORS.gray,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Image 
                  source={{ uri: cat.image }}
                  style={{width: 40, height: 40 }}
                />
                <Text 
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 10,
                    textAlign: 'center',
                  }}
                >
                  {cat.name}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  )
}


export default Categories;