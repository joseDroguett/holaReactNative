'use strict'

import React, { 
  Component 
} from 'react';

import {
  TabBarIOS,
  StyleSheet
} from 'react-native';

const iconDashboard = 'data:image/png;base64,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';
const iconHeroes = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg=='

const Dashboard = require('./dashboardView.js')
const Heroes = require('./heroesView.js')

class Tabs extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	selectedTab: 'dashboard'
	  };
	}
	render(){
		return(
			<TabBarIOS style={styles.tabBar}>
				<TabBarIOS.Item
					title="Dasboard"
					icon={{uri: iconDashboard, scale: 4}}
					selected={this.state.selectedTab == 'dashboard'}
					onPress = {()=>{
						this.setState({
							selectedTab: 'dashboard'
						})
					}}
				>
					<Dashboard navigator={this.props.navigator}/>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					title="Heroes"
					icon={{uri: iconHeroes, scale: 3}}
					selected={this.state.selectedTab == 'heroes'}
					onPress = {()=>{
						this.setState({
							selectedTab: 'heroes'
						})
					}}
				>
					<Heroes/>
				</TabBarIOS.Item>
			</TabBarIOS>
		)
	}
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF'
  },
})

module.exports = Tabs;