import React from 'react'
import { Text, Image, TouchableHighlight, View } from 'react-native'

import { COLORS, SIZES } from '../../constants'
import { popular } from '../../popular'

const Popular = () => {
	return (
		<View style={{ paddingTop: 20 }}>
			<Text
				style={{ fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white }}
			>
				Popular
			</Text>
			<View
				style={{
					marginTop: 30,
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
				}}
			>
				 {popular.map((product, idx) => (
					<View
						key={`popular ${idx}`}
						style={{
							width: '30%',
							marginBottom: 20,
						}}
					>
						<TouchableHighlight
							underlayColor={COLORS.secondary}
							style={{
								height: 120,
								justifyContent: 'center',
								borderRadius: SIZES.radius,
								paddingLeft: 5,
								paddingRight: 5,
								backgroundColor: COLORS.gray,
							}}
						>
							<View style={{ alignItems: 'center' }}>
								<Image
									source={{ uri: product.image }}
									style={{ width: 40, height: 40 }}
								/>
								<Text
									style={{
										fontSize: SIZES.h4,
										color: COLORS.white,
										marginTop: 10,
										textAlign: 'center',
									}}
								>
									{product.name}
								</Text>
								<Text
									style={{
										fontSize: SIZES.h4,
										color: COLORS.primary,
										marginTop: 10,
										textAlign: 'center',
									}}
								>
									{product.price}
								</Text>
							</View>
						</TouchableHighlight>
					</View>
				))}
			</View>
		</View>
	)
}

export default Popular
