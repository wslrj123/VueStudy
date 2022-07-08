import {
	createApp
} from 'vue'
import {
	createStore
} from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
	state() {
		return {
			count: 0,
			isCollapse: true,
			editableTabsValue: '/Home',
			notMShow:true,
			extMenuShow:true,
			// editableTabsValue: '',
			rPath: '',
			activeMenuCap: '',
			editableTabs: [{'title':'首页','name':'/Home','closable':false}]
			// editableTabs: []
		}
	},
	mutations: {
		increment(state) {
			state.count++
		},
		addTab(state) {
			state.editableTabs.push({
				title: state.activeMenuCap,
				name: state.rPath,
				closable:true
			})
			state.editableTabsValue = state.rPath	
		},
		
	}
})

export default store
